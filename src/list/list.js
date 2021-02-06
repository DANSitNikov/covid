import './list.scss';
import { generateCountries } from './generateCountries';

export function list() {
  const LIST_BLOCK = document.createElement('div');
  LIST_BLOCK.classList.add('list_block');
  LIST_BLOCK.appendChild(generateCountries());

  return LIST_BLOCK;
}

localStorage.removeItem('DANSitNikov-parameter');
localStorage.removeItem('DANSitNikov-search');
