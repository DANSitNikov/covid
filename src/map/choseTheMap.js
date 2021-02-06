import { createUserMap } from './map';
import { rerenderSomeStatistic, rerenderTextCountry } from '../list/choseCategory';
import { data } from '../data/data';
import { changeLegendContent, legendInfo } from './legendInfo';
import { makeList } from '../list/setCountries';

export function activeBtn(btn, buttons) {
  document.querySelectorAll('.choose_map-button').forEach((el) => {
    el.classList.remove('active-btn-map');
  });
  btn.classList.add('active-btn-map');
}

export async function choseTheMap(parent) {
  let info = [];
  await data().then(res => info.push(res));
  info = info.flat();

  const ARRAY_OF_MAPS = [
    'Total confirmed', 'Total deaths', 'Total recovered',
    'New confirmed', 'New deaths', 'New recovered',
    'Total confirmed (100K)', 'Total deaths (100K)', 'Total recovered (100K)',
    'New confirmed (100K)', 'New deaths (100K)', 'New recovered (100k)'
  ];

  const ARRAY_OF_CASES = [
    'cases', 'deaths', 'recovered',
    'todayCases', 'todayDeaths', 'todayRecovered',
    'TotalConfirmedOneHundred', 'TotalDeathsOneHundred', 'TotalRecoveredOneHundred',
    'NewConfirmedOneHundred', 'NewDeathsedOneHundred', 'NewRecoveredOneHundred'
  ];

  const buttons = document.createElement('div');
  buttons.classList.add('choose_map-container');

  for (let i = 0; i < ARRAY_OF_MAPS.length; i += 1) {
    const btn = document.createElement('button');
    btn.classList.add('choose_map-button');
    btn.textContent = `${ARRAY_OF_MAPS[i]}`;

    if (i === 0) {
      btn.classList.add('active-btn-map');
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      activeBtn(btn, buttons);
      createUserMap(ARRAY_OF_CASES[i], 'white', `map_${i}`, document.querySelector('.map'));
      rerenderTextCountry(ARRAY_OF_MAPS[i]);
      rerenderSomeStatistic(info[0], ARRAY_OF_CASES[i]);
      localStorage.setItem('DANSitNikov-parameter', JSON.stringify(ARRAY_OF_CASES[i]));
      makeList(info[0], document.querySelector('.list_block-countries'));
      legendInfo(i);
      changeLegendContent(i, document.querySelector('.legend'));
    });

    buttons.appendChild(btn);
  }

  parent.appendChild(buttons);

  return buttons;
}
