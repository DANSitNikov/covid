import { renderArrayOfLegend } from './dataLegend';

export function changeLegendContent(number, LEGEND) {
  LEGEND.innerHTML = '';

  for (let i = 0; i < 7; i += 1) {
    const LEGEND_ITEM = document.createElement('div');
    LEGEND_ITEM.classList.add('legend-item');
    LEGEND_ITEM.style.display = 'flex';
    const CIRCLE = document.createElement('span');
    CIRCLE.style.width = `${Math.round(renderArrayOfLegend()[number][i].radius / 2)}px`;
    CIRCLE.style.height = `${Math.round(renderArrayOfLegend()[number][i].radius / 2)}px`;
    CIRCLE.style.borderRadius = '50%';
    CIRCLE.style.backgroundColor = renderArrayOfLegend()[number][i].color;
    const TEXT = document.createElement('p');
    TEXT.textContent = renderArrayOfLegend()[number][i].text;

    LEGEND_ITEM.append(CIRCLE, TEXT);
    LEGEND.appendChild(LEGEND_ITEM);
  }
}

export function legendInfo(number = 0) {
  const LEGEND = document.createElement('div');
  LEGEND.classList.add('legend');
  LEGEND.style.display = 'none';

  changeLegendContent(number, LEGEND);

  return LEGEND;
}
