import { data } from '../data/data';
import './map.scss';
import preloader from './35.gif';

export async function createUserMap(typeOfMap = 'cases', color = 'black', id = 'map_0', parent, classItem) {
  parent.innerHTML = `
    <img style="background: black" alt="preloader" src="${preloader}" class="preloader">
  `;
  let info = [];
  await data().then(res => info.push(res));
  parent.innerHTML = '';
  info = info.flat();

  const GEO_JSON = info[1].filter((el) => el !== undefined);
  const COUNTRIES_FILTER = info[0].filter((el) => el.features !== undefined);

  const MY_MAP = document.createElement('div');
  MY_MAP.classList.add('my-map');
  MY_MAP.id = id;
  MY_MAP.style.height = '300px';
  MY_MAP.style.width = '400px';
  MY_MAP.style.backgroundColor = color;

  parent.appendChild(MY_MAP);
    
  const MAP = L.map(id, {
    zoom: 8,
    maxZoom: 5,
    center: [20, 100],
    worldCopyJump: true
  }).setView([0, 0], 2);

  for (let i = 0; i < GEO_JSON.length; i += 1) {
    if (info[1][i] !== undefined) {
      let rad = info[1][i][`${typeOfMap}Radius`] / 5;
      if (isNaN(rad)) {
        rad = 0
      }
      const CIRCLE = L.circleMarker([
        Number(info[1][i].CapitalLatitude), Number(info[1][i].CapitalLongitude)
      ], {
        color: info[1][i][`${typeOfMap}Color`],
        fillColor: info[1][i][`${typeOfMap}Color`],
        fillOpacity: 1,
        radius: rad
      }).addTo(MAP);
    }
  }

  L.tileLayer('https://api.maptiler.com/maps/toner/{z}/{x}/{y}@2x.png?key=nkc6UMkoQfAgClkObzbm', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    maxZoom: 5,
    minZoom: 1,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
  }).addTo(MAP);

  let i = 0;

  function onEachFeature(feature, layer) {
    const NAME = feature.properties.ADMIN;
    const NUMBER = COUNTRIES_FILTER[i][typeOfMap];
    i += 1;
    layer.setStyle({
      color: 'white',
      opacity: 0,
      weight: 0,
      className: NAME
    });
    const POPUP = L.popup()
      .setLatLng([Number(feature.CapitalLatitude), Number(feature.CapitalLongitude)])
      .setContent(`${NAME}, ${typeOfMap}: ${NUMBER}`);
    layer.on('mouseover', function () {
      POPUP.openOn(MAP);
      layer.setStyle({
        color: 'black',
        weight: 0,
        opacity: 1
      });
    });
    layer.on('mouseout', function () {
      MAP.closePopup(POPUP);
      layer.setStyle({
        color: 'white',
        opacity: 0,
        weight: 0
      });
    });
  }

  L.geoJSON(GEO_JSON, {
    onEachFeature
  }).addTo(MAP);
}
