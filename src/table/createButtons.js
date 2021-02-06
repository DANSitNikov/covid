export function buttonsContainer() {
  const BTNS_CONTAINER = document.createElement('div');
  BTNS_CONTAINER.classList.add('buttons-container');
  const PREV_INFO = document.createElement('div');
  PREV_INFO.style.cursor = 'pointer';
  PREV_INFO.classList.add('prev-btn');
  PREV_INFO.innerHTML = `
    <svg fill="white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
\t viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve">
<g>
\t<g>
\t\t<path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12
\t\t\tC361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084
\t\t\tc-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864
\t\t\tl16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/>
\t</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
  `;
  const NEXT_INFO = document.createElement('div');
  NEXT_INFO.style.cursor = 'pointer';
  NEXT_INFO.classList.add('next-btn');
  NEXT_INFO.innerHTML = `
    <svg fill="white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
\t width="451.846px" height="451.847px" viewBox="0 0 451.846 451.847" style="enable-background:new 0 0 451.846 451.847;"
\t xml:space="preserve">
<g>
\t<path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
\t\tL278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
\t\tc6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
  `;

  const SLIDER_ITEMS = document.querySelectorAll('.slider-item');
  let position = 0;

  PREV_INFO.addEventListener('click', (e) => {
    e.preventDefault();
    position += 250;
    if (position > 0) {
      position = -2750;
    }
    SLIDER_ITEMS.forEach((el) => {
      el.style.transitionDuration = '0s';
      el.style.transform = `translate(${position}px)`;
    });
  });

  NEXT_INFO.addEventListener('click', (e) => {
    e.preventDefault();
    position -= 250;
    if (position < -2750) {
      position = 0;
    }
    SLIDER_ITEMS.forEach((el) => {
      el.style.transitionDuration = '0s';
      el.style.transform = `translate(${position}px)`;
    });
  });

  BTNS_CONTAINER.append(PREV_INFO, NEXT_INFO);

  return BTNS_CONTAINER;
}
