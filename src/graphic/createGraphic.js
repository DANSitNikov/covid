import './graphic.scss';
import { graphic } from './graphic';

export function createGraphic(parent) {
  const graphicContainer = document.createElement('div');
  graphicContainer.classList.add('graphic-container');

  graphic(graphicContainer);
  parent.appendChild(graphicContainer);
}
