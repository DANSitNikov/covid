import 'Chart.js';
import gif from './35.gif';
import { data } from '../data/data';
import { nextSlide } from './nextSlide';
import { increaseGraphic } from './increaseBtn';

export async function graphic(parent, country = 'Global') {
  parent.innerHTML = `
    <img style="position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%)" src="${gif}">
  `;

  const ITEMS = [
    'cases', 'deaths', 'recovered',
    'cases', 'deaths', 'recovered',
    'recovered', 'deaths', 'cases',
    'recovered', 'deaths', 'cases'
  ];

  const NAME = [
    'Daily cases (100K)', 'Daily deaths (100K)', 'Daily recovered (100K)',
    'Cases (100K)', 'Deaths (100K)', 'Recovered (100K)',
    'Daily recovered', 'Daily deaths', 'Daily cases',
    'Recovered', 'Deaths', 'Cases'
  ];

  if (country !== 'Global') {
    let population = 0;

    await data().then((res) => {
      for (let i = 0; i < res[0].length; i += 1) {
        if (res[0][i].country === country) {
          population = res[0][i].population;
        }
      }
    });

    let info = [];

    await fetch(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=all`)
      .then((res) => res.json())
      .then((res) => info.push(res));

    parent.innerHTML = '';

    for (let i = 0; i < ITEMS.length; i += 1) {
      const COUNTRY_DATA = [];
      const DAILY_TIME = [];

      if (i >= 6) {
        for (let key in info[0].timeline[ITEMS[i]]) {
          COUNTRY_DATA.push(info[0].timeline[ITEMS[i]][key]);
          DAILY_TIME.push(key);
        }
      } else {
        for (let key in info[0].timeline[ITEMS[i]]) {
          COUNTRY_DATA.push(Math.round(info[0].timeline[ITEMS[i]][key] * 100000 / population));
          DAILY_TIME.push(key);
        }
      }

      const DAILY_STATISTIC = [];
      if (i < 3) {
        for (let j = 0; j < COUNTRY_DATA.length; j += 1) {
          if (j === 0) {
            DAILY_STATISTIC.push(0);
          } else {
            DAILY_STATISTIC.push(COUNTRY_DATA[j] - COUNTRY_DATA[j - 1]);
          }
        }
      } else if (i >= 3 && i < 6) {
        for (let j = 0; j < COUNTRY_DATA.length; j += 1) {
          DAILY_STATISTIC.push(COUNTRY_DATA[j]);
        }
      } else if (i >= 6 && i < 9) {
        for (let j = 0; j < COUNTRY_DATA.length; j += 1) {
          if (j === 0) {
            DAILY_STATISTIC.push(0);
          } else {
            DAILY_STATISTIC.push(COUNTRY_DATA[j] - COUNTRY_DATA[j - 1]);
          }
        }
      } else {
        for (let j = 0; j < COUNTRY_DATA.length; j += 1) {
          DAILY_STATISTIC.push(COUNTRY_DATA[j]);
        }
      }

      const canvasContainer = document.createElement('div');
      canvasContainer.classList.add('canvas-container');
      canvasContainer.style.height = '230px';
      canvasContainer.style.width = '460px';
      canvasContainer.style.position = 'absolute';
      canvasContainer.style.top = '0';
      canvasContainer.style.left = '12px';
      canvasContainer.style.backgroundColor = 'black';
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const chartConfig = {
        type: 'bar',
        data: {
          labels: DAILY_TIME,
          datasets: [{
            label: `${country} - ${NAME[i]}`,
            backgroundColor: 'white',
            borderColor: 'red',
            borderWidth: 2,
            hoverBackgroundColor: 'white',
            hoverBorderColor: 'red',
            data: DAILY_STATISTIC
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Covid dashboard'
          },
          scales: {
            yAxes: {
              ticks: {
                beginZero: true
              }
            }
          },
          legend: {
            labels: {
              fontColor: 'white'
            }
          }
        }
      };

      Chart.defaults.global.defaultFontSize = 10;
      Chart.defaults.global.defaultFontColor = 'white';

      const chart = new Chart(ctx, chartConfig);

      canvasContainer.appendChild(canvas);
      parent.appendChild(canvasContainer);
    }

    nextSlide();
  } else {
    let population = 0;

    const GLOBAL = await fetch('https://disease.sh/v3/covid-19/all').then((res) => res.json());

    population = GLOBAL.population;

    let info = [];

    await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=366')
      .then((res) => res.json())
      .then((res) => info.push(res));

    parent.innerHTML = '';

    for (let i = 0; i < ITEMS.length; i += 1) {
      const COUNTRY_DATA = [];
      const DAILY_TIME = [];

      if (i >= 6) {
        for (let key in info[0][ITEMS[i]]) {
          COUNTRY_DATA.push(info[0][ITEMS[i]][key]);
          DAILY_TIME.push(key);
        }
      } else {
        for (let key in info[0][ITEMS[i]]) {
          COUNTRY_DATA.push(Math.round(info[0][ITEMS[i]][key] * 100000 / population));
          DAILY_TIME.push(key);
        }
      }

      const DAILY_STATISTIC = [];
      if (i < 3) {
        for (let j = 0; j < COUNTRY_DATA.length; j += 1) {
          if (j === 0) {
            DAILY_STATISTIC.push(0);
          } else {
            DAILY_STATISTIC.push(COUNTRY_DATA[j] - COUNTRY_DATA[j - 1]);
          }
        }
      } else if (i >= 3 && i < 6) {
        for (let j = 0; j < COUNTRY_DATA.length; j += 1) {
          DAILY_STATISTIC.push(COUNTRY_DATA[j]);
        }
      } else if (i >= 6 && i < 9) {
        for (let j = 0; j < COUNTRY_DATA.length; j += 1) {
          if (j === 0) {
            DAILY_STATISTIC.push(0);
          } else {
            DAILY_STATISTIC.push(COUNTRY_DATA[j] - COUNTRY_DATA[j - 1]);
          }
        }
      } else {
        for (let j = 0; j < COUNTRY_DATA.length; j += 1) {
          DAILY_STATISTIC.push(COUNTRY_DATA[j]);
        }
      }

      const canvasContainer = document.createElement('div');
      canvasContainer.classList.add('canvas-container');
      canvasContainer.style.height = '230px';
      canvasContainer.style.width = '460px';
      canvasContainer.style.position = 'absolute';
      canvasContainer.style.top = '0';
      canvasContainer.style.left = '12px';
      canvasContainer.style.backgroundColor = 'black';
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const chartConfig = {
        type: 'bar',
        data: {
          labels: DAILY_TIME,
          datasets: [{
            label: `${country} - ${NAME[i]}`,
            backgroundColor: 'white',
            borderColor: 'red',
            borderWidth: 2,
            hoverBackgroundColor: 'white',
            hoverBorderColor: 'red',
            data: DAILY_STATISTIC
          }]
        },
        options: {
          title: {
            display: true,
            text: 'Covid dashboard'
          },
          scales: {
            yAxes: {
              ticks: {
                beginZero: true
              }
            }
          },
          legend: {
            labels: {
              fontColor: 'white'
            }
          }
        }
      }

      Chart.defaults.global.defaultFontSize = 10;
      Chart.defaults.global.defaultFontColor = 'white';

      const chart = new Chart(ctx, chartConfig);

      canvasContainer.appendChild(canvas);
      parent.appendChild(canvasContainer);
    }

    nextSlide();
  }
  parent.appendChild(increaseGraphic());
}
