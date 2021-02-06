import { makeList } from './setCountries';
import { createUserMap } from '../map/map';
import { activeBtn } from '../map/choseTheMap';
import { changeLegendContent } from '../map/legendInfo';

export function rerenderTextCountry(name) {
  document.querySelector('#country-name').textContent = name;
}

export function rerenderSomeStatistic(item, oneMore) {
  document.querySelectorAll('.case').forEach((el, i) => {
    el.textContent = item[i][oneMore];
  });
}

export function chooseCategoryForCountry(parent, item, otherParent) {
  const ITEMS = document.createElement('div');
  ITEMS.classList.add('list_country-cases');

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

  for (let i = 0; i < ARRAY_OF_TITLES.length; i += 1) {
    const STATISTIC = document.createElement('div');
    STATISTIC.classList.add('list_global-statistic', 'pointer-item');

    const CATEGORY = document.createElement('div');
    CATEGORY.classList.add('list_global-category');
    CATEGORY.classList.add('list_global-category-choose');

    const ITEM = document.createElement('div');
    ITEM.classList.add('list_global-item');

    const CATEGORY_NAME = document.createElement('h4');
    CATEGORY_NAME.textContent = `${ARRAY_OF_TITLES[i]}`;

    ITEM.append(CATEGORY_NAME,);
    CATEGORY.append(ITEM);
    STATISTIC.append(CATEGORY);
    ITEMS.appendChild(STATISTIC);

    STATISTIC.addEventListener('click', (e) => {
      rerenderTextCountry(ARRAY_OF_TITLES[i]);
      rerenderSomeStatistic(item, ARRAY_OF_CASES[i]);
      localStorage.setItem('DANSitNikov-parameter', JSON.stringify(ARRAY_OF_CASES[i]));
      document.querySelector('.list_country-cases').classList.toggle('display-list');
      makeList(item, otherParent);
      createUserMap(ARRAY_OF_CASES[i], 'white', `map_${i}`, document.querySelector('.map'));
      activeBtn(document.querySelectorAll('.choose_map-button')[i], document.querySelectorAll('.active-btn-map'));
      changeLegendContent(i, document.querySelector('.legend'));
    });
  }

  parent.appendChild(ITEMS);

  return parent;
}
