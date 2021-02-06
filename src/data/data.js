export async function data() {
  const GET_COUNTRIES = await Promise.all([
    fetch('https://restcountries.eu/rest/v2/all?fields=name;population;flag').then(res => res.json()),
    fetch('https://disease.sh/v3/covid-19/countries').then((res) => res.json()),
    fetch('../data/countries.json').then(res => res.json()),
    fetch('../data/capitals.json').then(res => res.json()),
    fetch('https://disease.sh/v3/covid-19/historical').then((res) => res.json()),
  ]);

  const filterArr = [];
  const filterCountry = [];
  for (let i = 0; i < GET_COUNTRIES[4].length; i += 1) {
    if (!filterCountry.includes(GET_COUNTRIES[4][i].country)) {
      filterArr.push(GET_COUNTRIES[4][i]);
      filterCountry.push(GET_COUNTRIES[4][i].country);
    }
  }

  const filterBarGraphic = filterArr.sort((a, b) => a.country > b.country ? 1 : -1);

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    for (let j = 0; j < GET_COUNTRIES[0].length; j += 1) {
      if (GET_COUNTRIES[1][i].countryInfo.iso2) {
        if (GET_COUNTRIES[1][i].countryInfo.iso3.toLowerCase() === GET_COUNTRIES[0][j].flag.slice(-7,-4).toLowerCase()) {
          GET_COUNTRIES[1][i].flag = GET_COUNTRIES[0][j].flag;
        }
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    for (let j = 0; j < GET_COUNTRIES[2].features.length; j += 1) {
      if (GET_COUNTRIES[1][i].countryInfo.iso2) {
        if (GET_COUNTRIES[1][i].countryInfo.iso2.toLowerCase() === GET_COUNTRIES[2].features[j].properties.ISO_A2.toLowerCase()) {
            GET_COUNTRIES[1][i].features = GET_COUNTRIES[2].features[j];
        }
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    for (let j = 0; j < GET_COUNTRIES[3].length; j += 1) {
      if (GET_COUNTRIES[1][i].countryInfo.iso2 && GET_COUNTRIES[3][j].CountryCode) {
        if (GET_COUNTRIES[1][i].countryInfo.iso2.toLowerCase() === GET_COUNTRIES[3][j].CountryCode.toLowerCase()) {
          GET_COUNTRIES[1][i].features.capital = GET_COUNTRIES[3][j].CapitalName;
          GET_COUNTRIES[1][i].features.CapitalLatitude = GET_COUNTRIES[3][j].CapitalLatitude;
          GET_COUNTRIES[1][i].features.CapitalLongitude = GET_COUNTRIES[3][j].CapitalLongitude;
        }
      }
    }
    for (let j = 0; j < filterBarGraphic.length; j += 1) {
      if (GET_COUNTRIES[1][i].country === filterBarGraphic[j].country) {
        GET_COUNTRIES[1][i].barGraph = filterBarGraphic[j];
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    if (GET_COUNTRIES[1][i].population === 0) {
      GET_COUNTRIES[1][i].TotalConfirmedOneHundred = 0;
      GET_COUNTRIES[1][i].TotalDeathsOneHundred = 0;
      GET_COUNTRIES[1][i].TotalRecoveredOneHundred = 0;
      GET_COUNTRIES[1][i].NewRecoveredOneHundred = 0;
      GET_COUNTRIES[1][i].NewDeathsedOneHundred = 0;
      GET_COUNTRIES[1][i].NewConfirmedOneHundred = 0;
    } else {
      GET_COUNTRIES[1][i].TotalConfirmedOneHundred = Math.round(100000 * GET_COUNTRIES[1][i].cases / GET_COUNTRIES[1][i].population);
      GET_COUNTRIES[1][i].TotalDeathsOneHundred = Math.round(100000 * GET_COUNTRIES[1][i].deaths / GET_COUNTRIES[1][i].population);
      GET_COUNTRIES[1][i].TotalRecoveredOneHundred = Math.round(100000 * GET_COUNTRIES[1][i].recovered / GET_COUNTRIES[1][i].population);
      GET_COUNTRIES[1][i].NewRecoveredOneHundred = Math.round(100000 * GET_COUNTRIES[1][i].todayRecovered / GET_COUNTRIES[1][i].population);
      GET_COUNTRIES[1][i].NewDeathsedOneHundred = Math.round(100000 * GET_COUNTRIES[1][i].todayDeaths / GET_COUNTRIES[1][i].population);
      GET_COUNTRIES[1][i].NewConfirmedOneHundred = Math.round(100000 * GET_COUNTRIES[1][i].todayCases / GET_COUNTRIES[1][i].population);
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    if (GET_COUNTRIES[1][i].features) {
      if (GET_COUNTRIES[1][i].cases > 5000000) {
        GET_COUNTRIES[1][i].features.casesColor = '#600000 ';
        GET_COUNTRIES[1][i].features.casesRadius = 80;
      } else if (GET_COUNTRIES[1][i].cases > 1000000) {
        GET_COUNTRIES[1][i].features.casesColor = '#800000 ';
        GET_COUNTRIES[1][i].features.casesRadius = 70;
      } else if (GET_COUNTRIES[1][i].cases > 750000) {
        GET_COUNTRIES[1][i].features.casesColor = '#A00000 ';
        GET_COUNTRIES[1][i].features.casesRadius = 60;
      } else if (GET_COUNTRIES[1][i].cases > 500000) {
        GET_COUNTRIES[1][i].features.casesColor = '#B80000 ';
        GET_COUNTRIES[1][i].features.casesRadius = 50;
      } else if (GET_COUNTRIES[1][i].cases > 250000) {
        GET_COUNTRIES[1][i].features.casesColor = '#C80000 ';
        GET_COUNTRIES[1][i].features.casesRadius = 40;
      } else if (GET_COUNTRIES[1][i].cases > 100000) {
        GET_COUNTRIES[1][i].features.casesColor = '#E80000 ';
        GET_COUNTRIES[1][i].features.casesRadius = 30;
      } else {
        GET_COUNTRIES[1][i].features.casesColor = '#FF0000 ';
        GET_COUNTRIES[1][i].features.casesRadius = 20;
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    if (GET_COUNTRIES[1][i].features) {
      if (GET_COUNTRIES[1][i].TotalConfirmedOneHundred > 5000) {
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredColor = '#600000 ';
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredRadius = 80;
      } else if (GET_COUNTRIES[1][i].TotalConfirmedOneHundred > 2500) {
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredColor = '#800000 ';
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredRadius = 70;
      } else if (GET_COUNTRIES[1][i].TotalConfirmedOneHundred > 1000) {
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredColor = '#A00000 ';
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredRadius = 60;
      } else if (GET_COUNTRIES[1][i].TotalConfirmedOneHundred > 500) {
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredColor = '#B80000 ';
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredRadius = 50;
      } else if (GET_COUNTRIES[1][i].TotalConfirmedOneHundred > 250) {
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredColor = '#C80000 ';
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredRadius = 40;
      } else if (GET_COUNTRIES[1][i].TotalConfirmedOneHundred > 100) {
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredColor = '#E80000 ';
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredRadius = 30;
      } else {
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredColor = '#FF0000 ';
        GET_COUNTRIES[1][i].features.TotalConfirmedOneHundredRadius = 20;
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    if (GET_COUNTRIES[1][i].features) {
      if (GET_COUNTRIES[1][i].todayCases > 20000) {
        GET_COUNTRIES[1][i].features.todayCasesColor = '#600000 ';
        GET_COUNTRIES[1][i].features.todayCasesRadius = 80;
      } else if (GET_COUNTRIES[1][i].todayCases > 10000) {
        GET_COUNTRIES[1][i].features.todayCasesColor = '#800000 ';
        GET_COUNTRIES[1][i].features.todayCasesRadius = 70;
      } else if (GET_COUNTRIES[1][i].todayCases > 5000) {
        GET_COUNTRIES[1][i].features.todayCasesColor = '#A00000 ';
        GET_COUNTRIES[1][i].features.todayCasesRadius = 60;
      } else if (GET_COUNTRIES[1][i].todayCases > 2500) {
        GET_COUNTRIES[1][i].features.todayCasesColor = '#B80000 ';
        GET_COUNTRIES[1][i].features.todayCasesRadius = 50;
      } else if (GET_COUNTRIES[1][i].todayCases > 1000) {
        GET_COUNTRIES[1][i].features.todayCasesColor = '#C80000 ';
        GET_COUNTRIES[1][i].features.todayCasesRadius = 40;
      } else if (GET_COUNTRIES[1][i].todayCases > 500) {
        GET_COUNTRIES[1][i].features.todayCasesColor = '#E80000 ';
        GET_COUNTRIES[1][i].features.todayCasesRadius = 30;
      } else {
        GET_COUNTRIES[1][i].features.todayCasesColor = '#FF0000 ';
        GET_COUNTRIES[1][i].features.todayCasesRadius = 20;
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    if (GET_COUNTRIES[1][i].features) {
      if (GET_COUNTRIES[1][i].NewConfirmedOneHundred > 90) {
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredColor = '#600000 ';
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredRadius = 80;
      } else if (GET_COUNTRIES[1][i].NewConfirmedOneHundred > 75) {
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredColor = '#800000 ';
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredRadius = 70;
      } else if (GET_COUNTRIES[1][i].NewConfirmedOneHundred > 60) {
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredColor = '#A00000 ';
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredRadius = 60;
      } else if (GET_COUNTRIES[1][i].NewConfirmedOneHundred > 45) {
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredColor = '#B80000 ';
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredRadius = 50;
      } else if (GET_COUNTRIES[1][i].NewConfirmedOneHundred > 30) {
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredColor = '#C80000 ';
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredRadius = 40;
      } else if (GET_COUNTRIES[1][i].NewConfirmedOneHundred > 15) {
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredColor = '#E80000 ';
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredRadius = 30;
      } else {
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredColor = '#FF0000 ';
        GET_COUNTRIES[1][i].features.NewConfirmedOneHundredRadius = 20;
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    if (GET_COUNTRIES[1][i].features) {
      if (GET_COUNTRIES[1][i].recovered > 1000000) {
        GET_COUNTRIES[1][i].features.recoveredColor = '#00FF00 ';
        GET_COUNTRIES[1][i].features.recoveredRadius = 80;
      } else if (GET_COUNTRIES[1][i].recovered > 500000) {
        GET_COUNTRIES[1][i].features.recoveredColor = '#00CC33 ';
        GET_COUNTRIES[1][i].features.recoveredRadius = 70;
      } else if (GET_COUNTRIES[1][i].recovered > 250000) {
        GET_COUNTRIES[1][i].features.recoveredColor = '#00CC00 ';
        GET_COUNTRIES[1][i].features.recoveredRadius = 60;
      } else if (GET_COUNTRIES[1][i].recovered > 100000) {
        GET_COUNTRIES[1][i].features.recoveredColor = '#009933 ';
        GET_COUNTRIES[1][i].features.recoveredRadius = 50;
      } else if (GET_COUNTRIES[1][i].recovered > 50000) {
        GET_COUNTRIES[1][i].features.recoveredColor = '#009900 ';
        GET_COUNTRIES[1][i].features.recoveredRadius = 40;
      } else if (GET_COUNTRIES[1][i].recovered > 10000) {
        GET_COUNTRIES[1][i].features.recoveredColor = '#006633 ';
        GET_COUNTRIES[1][i].features.recoveredRadius = 30;
      } else {
        GET_COUNTRIES[1][i].features.recoveredColor = '#006600 ';
        GET_COUNTRIES[1][i].features.recoveredRadius = 20;
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    if (GET_COUNTRIES[1][i].features) {
      if (GET_COUNTRIES[1][i].todayRecovered > 25000) {
        GET_COUNTRIES[1][i].features.todayRecoveredColor = '#00FF00 ';
        GET_COUNTRIES[1][i].features.todayRecoveredRadius = 80;
      } else if (GET_COUNTRIES[1][i].todayRecovered > 15000) {
        GET_COUNTRIES[1][i].features.todayRecoveredColor = '#00CC33 ';
        GET_COUNTRIES[1][i].features.todayRecoveredRadius = 70;
      } else if (GET_COUNTRIES[1][i].todayRecovered > 10000) {
        GET_COUNTRIES[1][i].features.todayRecoveredColor = '#00CC00 ';
        GET_COUNTRIES[1][i].features.todayRecoveredRadius = 60;
      } else if (GET_COUNTRIES[1][i].todayRecovered > 5000) {
        GET_COUNTRIES[1][i].features.todayRecoveredColor = '#009933 ';
        GET_COUNTRIES[1][i].features.todayRecoveredRadius = 50;
      } else if (GET_COUNTRIES[1][i].todayRecovered > 2500) {
        GET_COUNTRIES[1][i].features.todayRecoveredColor = '#009900 ';
        GET_COUNTRIES[1][i].features.todayRecoveredColor = 40;
      } else if (GET_COUNTRIES[1][i].todayRecovered > 1000) {
        GET_COUNTRIES[1][i].features.todayRecoveredColor = '#006633 ';
        GET_COUNTRIES[1][i].features.todayRecoveredRadius = 30;
      } else {
        GET_COUNTRIES[1][i].features.todayRecoveredColor = '#006600 ';
        GET_COUNTRIES[1][i].features.todayRecoveredRadius = 20;
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    if (GET_COUNTRIES[1][i].features) {
      if (GET_COUNTRIES[1][i].TotalRecoveredOneHundred > 5000) {
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredColor = '#00FF00 ';
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredRadius = 80;
      } else if (GET_COUNTRIES[1][i].TotalRecoveredOneHundred > 2500) {
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredColor = '#00CC33 ';
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredRadius = 70;
      } else if (GET_COUNTRIES[1][i].TotalRecoveredOneHundred > 1000) {
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredColor = '#00CC00 ';
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredRadius = 60;
      } else if (GET_COUNTRIES[1][i].TotalRecoveredOneHundred > 500) {
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredColor = '#009933 ';
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredRadius = 50;
      } else if (GET_COUNTRIES[1][i].TotalRecoveredOneHundred > 250) {
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredColor = '#009900 ';
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredRadius = 40;
      } else if (GET_COUNTRIES[1][i].TotalRecoveredOneHundred > 100) {
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredColor = '#006633 ';
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredRadius = 30;
      } else {
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredColor = '#006600 ';
        GET_COUNTRIES[1][i].features.TotalRecoveredOneHundredRadius = 20;
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    if (GET_COUNTRIES[1][i].features) {
      if (GET_COUNTRIES[1][i].NewRecoveredOneHundred > 90) {
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredColor = '#00FF00 ';
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredRadius = 80;
      } else if (GET_COUNTRIES[1][i].NewRecoveredOneHundred > 75) {
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredColor = '#00CC33 ';
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredRadius = 70;
      } else if (GET_COUNTRIES[1][i].NewRecoveredOneHundred > 60) {
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredColor = '#00CC00 ';
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredRadius = 60;
      } else if (GET_COUNTRIES[1][i].NewRecoveredOneHundred > 45) {
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredColor = '#009933 ';
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredRadius = 50;
      } else if (GET_COUNTRIES[1][i].NewRecoveredOneHundred > 30) {
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredColor = '#009900 ';
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredRadius = 40;
      } else if (GET_COUNTRIES[1][i].NewRecoveredOneHundred > 15) {
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredColor = '#006633 ';
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredRadius = 30;
      } else {
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredColor = '#006600 ';
        GET_COUNTRIES[1][i].features.NewRecoveredOneHundredRadius = 20;
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    if (GET_COUNTRIES[1][i].features) {
      if (GET_COUNTRIES[1][i].deaths > 100000) {
        GET_COUNTRIES[1][i].features.deathsColor = '#000000 ';
        GET_COUNTRIES[1][i].features.deathsRadius = 80;
      } else if (GET_COUNTRIES[1][i].deaths > 50000) {
        GET_COUNTRIES[1][i].features.deathsColor = '#383838 ';
        GET_COUNTRIES[1][i].features.deathsRadius = 70;
      } else if (GET_COUNTRIES[1][i].deaths > 25000) {
        GET_COUNTRIES[1][i].features.deathsColor = '#585858 ';
        GET_COUNTRIES[1][i].features.deathsRadius = 60;
      } else if (GET_COUNTRIES[1][i].deaths > 10000) {
        GET_COUNTRIES[1][i].features.deathsColor = '#696969 ';
        GET_COUNTRIES[1][i].features.deathsRadius = 50;
      } else if (GET_COUNTRIES[1][i].deaths > 5000) {
        GET_COUNTRIES[1][i].features.deathsColor = '#888888 ';
        GET_COUNTRIES[1][i].features.deathsRadius = 40;
      } else if (GET_COUNTRIES[1][i].deaths > 1000) {
        GET_COUNTRIES[1][i].features.deathsColor = '#A0A0A0 ';
        GET_COUNTRIES[1][i].features.deathsRadius = 30;
      } else {
        GET_COUNTRIES[1][i].features.deathsColor = '#BEBEBE ';
        GET_COUNTRIES[1][i].features.deathsRadius = 20;
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    if (GET_COUNTRIES[1][i].features) {
      if (GET_COUNTRIES[1][i].todayDeaths > 1000) {
        GET_COUNTRIES[1][i].features.todayDeathsColor = '#000000 ';
        GET_COUNTRIES[1][i].features.todayDeathsRadius = 80;
      } else if (GET_COUNTRIES[1][i].todayDeaths > 500) {
        GET_COUNTRIES[1][i].features.todayDeathsColor = '#383838 ';
        GET_COUNTRIES[1][i].features.todayDeathsRadius = 70;
      } else if (GET_COUNTRIES[1][i].todayDeaths > 250) {
        GET_COUNTRIES[1][i].features.todayDeathsColor = '#585858 ';
        GET_COUNTRIES[1][i].features.todayDeathsRadius = 60;
      } else if (GET_COUNTRIES[1][i].todayDeaths > 100) {
        GET_COUNTRIES[1][i].features.todayDeathsColor = '#696969 ';
        GET_COUNTRIES[1][i].features.todayDeathsRadius = 50;
      } else if (GET_COUNTRIES[1][i].todayDeaths > 50) {
        GET_COUNTRIES[1][i].features.todayDeathsColor = '#888888 ';
        GET_COUNTRIES[1][i].features.todayDeathsRadius = 40;
      } else if (GET_COUNTRIES[1][i].todayDeaths > 25) {
        GET_COUNTRIES[1][i].features.todayDeathsColor = '#A0A0A0 ';
        GET_COUNTRIES[1][i].features.todayDeathsRadius = 30;
      } else {
        GET_COUNTRIES[1][i].features.todayDeathsColor = '#BEBEBE ';
        GET_COUNTRIES[1][i].features.todayDeathsRadius = 20;
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    if (GET_COUNTRIES[1][i].features) {
      if (GET_COUNTRIES[1][i].TotalDeathsOneHundred > 90) {
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredColor = '#000000 ';
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredRadius = 80;
      } else if (GET_COUNTRIES[1][i].TotalDeathsOneHundred > 75) {
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredColor = '#383838 ';
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredRadius = 70;
      } else if (GET_COUNTRIES[1][i].TotalDeathsOneHundred > 60) {
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredColor = '#585858 ';
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredRadius = 60;
      } else if (GET_COUNTRIES[1][i].TotalDeathsOneHundred > 45) {
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredColor = '#696969 ';
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredRadius = 50;
      } else if (GET_COUNTRIES[1][i].TotalDeathsOneHundred > 30) {
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredColor = '#888888 ';
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredRadius = 40;
      } else if (GET_COUNTRIES[1][i].TotalDeathsOneHundred > 15) {
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredColor = '#A0A0A0 ';
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredRadius = 30;
      } else {
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredColor = '#BEBEBE ';
        GET_COUNTRIES[1][i].features.TotalDeathsOneHundredRadius = 20;
      }
    }
  }

  for (let i = 0; i < GET_COUNTRIES[1].length; i += 1) {
    if (GET_COUNTRIES[1][i].features) {
      if (GET_COUNTRIES[1][i].NewDeathsedOneHundred > 10) {
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredColor = '#000000 ';
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredRadius = 80;
      } else if (GET_COUNTRIES[1][i].NewDeathsedOneHundred > 5) {
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredColor = '#383838 ';
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredRadius = 70;
      } else if (GET_COUNTRIES[1][i].NewDeathsedOneHundred > 4) {
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredColor = '#585858 ';
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredRadius = 60;
      } else if (GET_COUNTRIES[1][i].NewDeathsedOneHundred > 3) {
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredColor = '#696969 ';
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredRadius = 50;
      } else if (GET_COUNTRIES[1][i].NewDeathsedOneHundred > 2) {
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredColor = '#888888 ';
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredRadius = 40;
      } else if (GET_COUNTRIES[1][i].NewDeathsedOneHundred > 1) {
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredColor = '#A0A0A0 ';
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredRadius = 30;
      } else {
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredColor = '#BEBEBE ';
        GET_COUNTRIES[1][i].features.NewDeathsedOneHundredRadius = 20;
      }
    }
  }

  const COUNTRIES = GET_COUNTRIES[1].sort((a, b) => a.country > b.country ? 1 : 1);

  const geoJsonFeatures = [];

  for (let i = 0; i < COUNTRIES.length; i += 1) {
    geoJsonFeatures.push(COUNTRIES[i].features);
  }

  return [COUNTRIES, geoJsonFeatures];
}
