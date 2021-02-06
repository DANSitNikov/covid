import { setCountries } from './setCountries';

export function generateCountries() {
  const LIST_OF_COUNTRIES = document.createElement('div');
  LIST_OF_COUNTRIES.id = 'list_of_countries';

  setCountries(LIST_OF_COUNTRIES);

  return LIST_OF_COUNTRIES;
}
