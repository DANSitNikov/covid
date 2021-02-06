import { tableInfo } from './tableInfo';
import './table.scss';
import { increaseTable } from './increaseBtn';

export function createTable(parent) {
  const TABLE_CONTAINER = document.createElement('div');
  TABLE_CONTAINER.classList.add('table-container');

  TABLE_CONTAINER.appendChild(tableInfo());
  TABLE_CONTAINER.appendChild(increaseTable());
  parent.appendChild(TABLE_CONTAINER);
}
