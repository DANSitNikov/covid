import { data } from '../data/data';
import { buttonsContainer } from './createButtons';

export async function createSlide(parent, item = 'global') {
  if (item === 'global') {
    const GLOBAL_STAT = await fetch('https://disease.sh/v3/covid-19/all').then((res) => res.json());

    const ARRAY_OF_CASES = [
      'cases', 'deaths', 'recovered',
      'todayCases', 'todayDeaths', 'todayRecovered',
      'TotalConfirmedOneHundred', 'TotalDeathsOneHundred', 'TotalRecoveredOneHundred',
      'NewConfirmedOneHundred', 'NewDeathsedOneHundred', 'NewRecoveredOneHundred'
    ];

    const ARRAY_OF_TITLES = [
      'Total confirmed', 'Total deaths', 'Total recovered',
      'New confirmed', 'New deaths', 'New recovered',
      'Total confirmed (100K)', 'Total deaths (100K)', 'Total recovered (100K)',
      'New confirmed (100K)', 'New deaths (100K)', 'New recovered (100k)'
    ];

    GLOBAL_STAT.TotalConfirmedOneHundred = Math.round(100000 * GLOBAL_STAT.cases / GLOBAL_STAT.population);
    GLOBAL_STAT.TotalDeathsOneHundred = Math.round(100000 * GLOBAL_STAT.deaths / GLOBAL_STAT.population);
    GLOBAL_STAT.TotalRecoveredOneHundred = Math.round(100000 * GLOBAL_STAT.recovered / GLOBAL_STAT.population);
    GLOBAL_STAT.NewConfirmedOneHundred = Math.round(100000 * GLOBAL_STAT.todayCases / GLOBAL_STAT.population);
    GLOBAL_STAT.NewDeathsedOneHundred = Math.round(100000 * GLOBAL_STAT.todayDeaths / GLOBAL_STAT.population);
    GLOBAL_STAT.NewRecoveredOneHundred = Math.round(100000 * GLOBAL_STAT.todayRecovered / GLOBAL_STAT.population);

    const SLIDER = document.createElement('div');
    SLIDER.classList.add('table-slider');

    const title = document.createElement('h3');
    title.textContent = 'Global statistic';

    for (let i = 0; i < 12; i += 1) {
      const INFO_BLOCK = document.createElement('div');
      INFO_BLOCK.classList.add('slider-item');
      const NUMBER = document.createElement('p');
      NUMBER.textContent = GLOBAL_STAT[ARRAY_OF_CASES[i]];
      const TITLE = document.createElement('h4');
      TITLE.textContent = ARRAY_OF_TITLES[i];
      INFO_BLOCK.append(TITLE, NUMBER);
      SLIDER.appendChild(INFO_BLOCK);
    }

    parent.appendChild(title);
    parent.appendChild(SLIDER);
  } else {
    const info = [];
    await data().then(res => info.push(res));
    parent.innerHTML = '';
    let infoCountry = info.flat()[0].sort((a, b) => a.cases < b.cases ? 1 : -1);
    if (localStorage.getItem('DANSitNikov-parameter')) {
      const PARAMETER = JSON.parse(localStorage.getItem('DANSitNikov-parameter'));
      infoCountry = info.flat()[0].sort((a, b) => a[PARAMETER] < b[PARAMETER] ? 1 : -1);
    }

    const ARRAY_OF_TITLES = [
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

    const SLIDER = document.createElement('div');
    SLIDER.classList.add('table-slider');

    const title = document.createElement('h3');
    title.textContent = infoCountry[item].country;

    for (let i = 0; i < 12; i += 1) {
      const INFO_BLOCK = document.createElement('div');
      INFO_BLOCK.classList.add('slider-item');
      const NUMBER = document.createElement('p');
      NUMBER.textContent = infoCountry[item][ARRAY_OF_CASES[i]];
      const TITLE = document.createElement('h4');
      TITLE.textContent = ARRAY_OF_TITLES[i];
      INFO_BLOCK.append(TITLE, NUMBER);
      SLIDER.appendChild(INFO_BLOCK);
    }

    parent.appendChild(title);
    parent.appendChild(SLIDER);
  }

  parent.appendChild(buttonsContainer());
}
