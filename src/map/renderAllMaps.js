import { createUserMap } from './map';

export function renderAllMaps() {
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

  const MAPS = document.createElement('div');
  MAPS.classList.add('maps-container');
  MAPS.style.display = 'flex';

  for (let i = 0; i < ARRAY_OF_MAPS.length; i += 1) {
    const MAP = document.createElement('button');
    MAP.textContent = `${ARRAY_OF_MAPS[i]}`;
    const TYPE_PARAMETER = ARRAY_OF_CASES[i];
    createUserMap(TYPE_PARAMETER, 'white', `map_${i}`, MAPS);
  }

  return MAPS;
}
