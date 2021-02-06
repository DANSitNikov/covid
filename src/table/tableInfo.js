import { createSlide } from './createSlide';

export function tableInfo() {
  const TABLE = document.createElement('div');
  TABLE.classList.add('table');

  createSlide(TABLE);

  return TABLE;
}
