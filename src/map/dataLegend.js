export function renderArrayOfLegend() {
  const ARRAY_OF_LEGENDS = [
    [
      {
        color: '#600000 ',
        radius: 80,
        text: '> 5 000 000'
      },
      {
        color: '#800000 ',
        radius: 70,
        text: '> 1 000 000'
      },
      {
        color: '#A00000 ',
        radius: 60,
        text: '> 750 000'
      },
      {
        color: '#B80000 ',
        radius: 50,
        text: '> 500 000'
      },
      {
        color: '#C80000 ',
        radius: 40,
        text: '> 250 000'
      },
      {
        color: '#E80000 ',
        radius: 30,
        text: '> 100 000'
      },
      {
        color: '#FF0000 ',
        radius: 20,
        text: '>= 0'
      }
    ],
    [
      {
        color: '#000000 ',
        radius: 80,
        text: '> 100 000'
      },
      {
        color: '#383838 ',
        radius: 70,
        text: '> 50 000'
      },
      {
        color: '#585858 ',
        radius: 60,
        text: '> 25 000'
      },
      {
        color: '#696969 ',
        radius: 50,
        text: '> 10 000'
      },
      {
        color: '#888888 ',
        radius: 40,
        text: '> 5 000'
      },
      {
        color: '#A0A0A0 ',
        radius: 30,
        text: '> 1 000'
      },
      {
        color: '#BEBEBE ',
        radius: 20,
        text: '>= 0'
      }
    ],
    [
      {
        color: '#00FF00 ',
        radius: 80,
        text: '> 1 000 000'
      },
      {
        color: '#00CC33 ',
        radius: 70,
        text: '> 500 000'
      },
      {
        color: '#00CC00 ',
        radius: 60,
        text: '> 250 000'
      },
      {
        color: '#009933 ',
        radius: 50,
        text: '> 100 000'
      },
      {
        color: '#009900 ',
        radius: 40,
        text: '> 50 000'
      },
      {
        color: '#006633 ',
        radius: 30,
        text: '> 10 000'
      },
      {
        color: '#006600 ',
        radius: 20,
        text: '>= 0'
      }
    ],
    [
      {
        color: '#600000 ',
        radius: 80,
        text: '> 5 000'
      },
      {
        color: '#800000 ',
        radius: 70,
        text: '> 2 500'
      },
      {
        color: '#A00000 ',
        radius: 60,
        text: '> 1 000'
      },
      {
        color: '#B80000 ',
        radius: 50,
        text: '> 500'
      },
      {
        color: '#C80000 ',
        radius: 40,
        text: '> 250'
      },
      {
        color: '#E80000 ',
        radius: 30,
        text: '> 100'
      },
      {
        color: '#FF0000 ',
        radius: 20,
        text: '>= 0'
      }
    ],
    [
      {
        color: '#000000 ',
        radius: 80,
        text: '> 1000'
      },
      {
        color: '#383838 ',
        radius: 70,
        text: '> 500'
      },
      {
        color: '#585858 ',
        radius: 60,
        text: '> 250'
      },
      {
        color: '#696969 ',
        radius: 50,
        text: '> 100'
      },
      {
        color: '#888888 ',
        radius: 40,
        text: '> 50'
      },
      {
        color: '#A0A0A0 ',
        radius: 30,
        text: '> 25'
      },
      {
        color: '#BEBEBE ',
        radius: 20,
        text: '>= 0'
      }
    ],
    [
      {
        color: '#00FF00 ',
        radius: 80,
        text: '> 25 000'
      },
      {
        color: '#00CC33 ',
        radius: 70,
        text: '> 15 000'
      },
      {
        color: '#00CC00 ',
        radius: 60,
        text: '> 10 000'
      },
      {
        color: '#009933 ',
        radius: 50,
        text: '> 5 000'
      },
      {
        color: '#009900 ',
        radius: 40,
        text: '> 2 500'
      },
      {
        color: '#006633 ',
        radius: 30,
        text: '> 1000'
      },
      {
        color: '#006600 ',
        radius: 20,
        text: '>= 0'
      }
    ],
    [
      {
        color: '#600000 ',
        radius: 80,
        text: '> 5 000'
      },
      {
        color: '#800000 ',
        radius: 70,
        text: '> 2 500'
      },
      {
        color: '#A00000 ',
        radius: 60,
        text: '> 1 000'
      },
      {
        color: '#B80000 ',
        radius: 50,
        text: '> 500'
      },
      {
        color: '#C80000 ',
        radius: 40,
        text: '> 250'
      },
      {
        color: '#E80000 ',
        radius: 30,
        text: '> 100'
      },
      {
        color: '#FF0000 ',
        radius: 20,
        text: '>= 0'
      }
    ],
    [
      {
        color: '#000000 ',
        radius: 80,
        text: '> 90'
      },
      {
        color: '#383838 ',
        radius: 70,
        text: '> 75'
      },
      {
        color: '#585858 ',
        radius: 60,
        text: '> 60'
      },
      {
        color: '#696969 ',
        radius: 50,
        text: '> 45'
      },
      {
        color: '#888888 ',
        radius: 40,
        text: '> 30'
      },
      {
        color: '#A0A0A0 ',
        radius: 30,
        text: '> 15'
      },
      {
        color: '#BEBEBE ',
        radius: 20,
        text: '>= 0'
      }
    ],
    [
      {
        color: '#00FF00 ',
        radius: 80,
        text: '> 5 000'
      },
      {
        color: '#00CC33 ',
        radius: 70,
        text: '> 2 500'
      },
      {
        color: '#00CC00 ',
        radius: 60,
        text: '> 1 000'
      },
      {
        color: '#009933 ',
        radius: 50,
        text: '> 500'
      },
      {
        color: '#009900 ',
        radius: 40,
        text: '> 250'
      },
      {
        color: '#006633 ',
        radius: 30,
        text: '> 100'
      },
      {
        color: '#006600 ',
        radius: 20,
        text: '>= 0'
      }
    ],
    [
      {
        color: '#600000 ',
        radius: 80,
        text: '> 90'
      },
      {
        color: '#800000 ',
        radius: 70,
        text: '> 75'
      },
      {
        color: '#A00000 ',
        radius: 60,
        text: '> 60'
      },
      {
        color: '#B80000 ',
        radius: 50,
        text: '> 45'
      },
      {
        color: '#C80000 ',
        radius: 40,
        text: '> 30'
      },
      {
        color: '#E80000 ',
        radius: 30,
        text: '> 15'
      },
      {
        color: '#FF0000 ',
        radius: 20,
        text: '>= 0'
      }
    ],
    [
      {
        color: '#000000 ',
        radius: 80,
        text: '> 10'
      },
      {
        color: '#383838 ',
        radius: 70,
        text: '> 5'
      },
      {
        color: '#585858 ',
        radius: 60,
        text: '> 4'
      },
      {
        color: '#696969 ',
        radius: 50,
        text: '> 3'
      },
      {
        color: '#888888 ',
        radius: 40,
        text: '> 2'
      },
      {
        color: '#A0A0A0 ',
        radius: 30,
        text: '> 1'
      },
      {
        color: '#BEBEBE ',
        radius: 20,
        text: '= 0'
      }
    ],
    [
      {
        color: '#00FF00 ',
        radius: 80,
        text: '> 90'
      },
      {
        color: '#00CC33 ',
        radius: 70,
        text: '> 75'
      },
      {
        color: '#00CC00 ',
        radius: 60,
        text: '> 60'
      },
      {
        color: '#009933 ',
        radius: 50,
        text: '> 45'
      },
      {
        color: '#009900 ',
        radius: 40,
        text: '> 30'
      },
      {
        color: '#006633 ',
        radius: 30,
        text: '> 15'
      },
      {
        color: '#006600 ',
        radius: 20,
        text: '>= 0'
      }
    ],
  ];

  return ARRAY_OF_LEGENDS;
}