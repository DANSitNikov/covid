import { chooseCategoryForCountry } from './choseCategory';
import { data } from '../data/data';
import gif from './35.gif';
import { createSlide } from '../table/createSlide';
import { graphic } from '../graphic/graphic';
import { increaseList } from './increaseList';

export function makeList(INFO, parent) {
  parent.innerHTML = '';
  let STATISTIC = INFO.sort((a, b) => a.cases < b.cases ? 1 : -1);
  let ITEM = 'cases';
  let searchCountry = '';
  if (localStorage.getItem('DANSitNikov-search')) {
    searchCountry = JSON.parse(localStorage.getItem('DANSitNikov-search')).toLowerCase();
  }
  if (localStorage.getItem('DANSitNikov-parameter')) {
    const PARAMETER = JSON.parse(localStorage.getItem('DANSitNikov-parameter'));
    STATISTIC = INFO.sort((a, b) => a[PARAMETER] < b[PARAMETER] ? 1 : -1);
    ITEM = PARAMETER;
  }

  if (searchCountry === '') {
    for (let i = 0; i < INFO.length; i += 1) {
      const COUNTRY = document.createElement('div');
      COUNTRY.classList.add('list-country');
      COUNTRY.classList.add('country_item');
      COUNTRY.innerHTML = `
      <img style="margin-left: 8px" width="30px" height="20px" src="${STATISTIC[i].flag}" alt="${STATISTIC[i].country}">
      <h4 style="text-align: center">${STATISTIC[i].country}</h4>
      <h4 style="text-align: center">${STATISTIC[i].population}</h4>
      <h4 style="text-align: center" class="case">${STATISTIC[i][ITEM]}</h4>
    `;

      COUNTRY.addEventListener('click', () => {
        createSlide(document.querySelector('.table'), i);
        graphic(document.querySelector('.graphic-container'), STATISTIC[i].country);
      });

      parent.appendChild(COUNTRY);
    }
    return parent;
  }
  for (let i = 0; i < INFO.length; i += 1) {
    if (STATISTIC[i].country.toLowerCase().includes(searchCountry)) {
      const COUNTRY = document.createElement('div');
      COUNTRY.classList.add('list-country');
      COUNTRY.classList.add('country_item');
      COUNTRY.innerHTML = `
          <img style="margin-left: 8px" width="30px" height="20px" src="${STATISTIC[i].flag}" alt="${STATISTIC[i].country}">
          <h4 style="text-align: center">${STATISTIC[i].country}</h4>
          <h4 style="text-align: center">${STATISTIC[i].population}</h4>
          <h4 style="text-align: center" class="case">${STATISTIC[i][ITEM]}</h4>
        `;

      COUNTRY.addEventListener('click', () => {
        createSlide(document.querySelector('.table'), i);
        graphic(document.querySelector('.graphic-container'), STATISTIC[i].country);
      });

      parent.appendChild(COUNTRY);
    }
  }
  return parent;
}

export async function setCountries(parent) {
  parent.innerHTML = `
    <img style="position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%)" src="${gif}">
  `;
  let info = [];
  await data().then(res => info.push(res));
  info = info.flat();
  parent.innerHTML = '';
  let searchCountry = '';

  const BLOCK_OF_COUNTRIES = document.createElement('div');
  BLOCK_OF_COUNTRIES.classList.add('list_block-countries');

  const SEARCH = document.createElement('input');
  SEARCH.setAttribute('placeholder', 'search for a country');
  SEARCH.classList.add('list_search');

  SEARCH.addEventListener('input', (e) => {
    searchCountry = e.target.value;
    localStorage.setItem('DANSitNikov-search', JSON.stringify(searchCountry));
    parent.appendChild(makeList(info[0], BLOCK_OF_COUNTRIES));
  });

  parent.appendChild(SEARCH);

  for (let i = 0; i < 1; i += 1) {
    const COUNTRY = document.createElement('div');
    COUNTRY.classList.add('list-country');

    const STATISTIC = document.createElement('div');
    STATISTIC.classList.add('list_global-statistic');
    const CATEGORY = document.createElement('div');
    CATEGORY.classList.add('list_global-category');
    const ITEM = document.createElement('div');
    ITEM.classList.add('list_global-item');
    const CATEGORY_NAME = document.createElement('h4');
    CATEGORY_NAME.id = 'country-name';
    CATEGORY_NAME.textContent = 'Total confirmed';
    const CARET_DOWN = document.createElement('div');
    CARET_DOWN.classList.add('list_caret-down');
    CARET_DOWN.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
      <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
    </svg>
  `;

    ITEM.append(CATEGORY_NAME);
    CATEGORY.append(ITEM, CARET_DOWN);
    STATISTIC.append(CATEGORY);
    parent.append(STATISTIC);

    chooseCategoryForCountry(STATISTIC, info[0], BLOCK_OF_COUNTRIES);

    CARET_DOWN.addEventListener('click', (e) => {
      document.querySelector('.list_country-cases').classList.toggle('display-list');
    });

    COUNTRY.innerHTML = `
      <div class="fnp">Flag</div>
      <div class="fnp">Name</div>       
      <div class="fnp">Population</div>
    `;
    COUNTRY.append(STATISTIC);
    parent.appendChild(COUNTRY);
  }

  parent.appendChild(makeList(info[0], BLOCK_OF_COUNTRIES));
  increaseList(parent);

  return parent;
}
