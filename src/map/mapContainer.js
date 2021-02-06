import { choseTheMap } from './choseTheMap';
import { createUserMap } from './map';
import { createLegendForMap } from './legend';
import { legendInfo } from './legendInfo';
import { increaseMap } from './increaseSize';

export function mapContainer() {
  const MAP_BLOCK = document.createElement('div');
  MAP_BLOCK.classList.add('map_block');
  const PARENT_FOR_MAP = document.createElement('div');
  PARENT_FOR_MAP.classList.add('map');

  createUserMap('cases', 'white', 'map_0', PARENT_FOR_MAP);

  MAP_BLOCK.append(PARENT_FOR_MAP, createLegendForMap(), increaseMap(), legendInfo());
  choseTheMap(MAP_BLOCK);


  return MAP_BLOCK;
}