export function nextSlide() {
  const BTN_NEXT = document.createElement('div');
  BTN_NEXT.style.zIndex = '1200';
  BTN_NEXT.style.position = 'absolute';
  BTN_NEXT.style.top = '10px';
  BTN_NEXT.style.left = ' 20px';
  BTN_NEXT.innerHTML = `
        <svg class="next" fill="white" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
  BTN_NEXT.style.cursor = 'pointer';

  const SLIDERS = document.querySelectorAll('.canvas-container');
  let num = 1;

  BTN_NEXT.addEventListener('click', (e) => {
    e.preventDefault();
    for (let i = 0; i < SLIDERS.length; i += 1) {
      if (i === num) {
        SLIDERS[i].style.zIndex = '95';
      } else {
        SLIDERS[i].style.zIndex = '5';
      }
    }
    num += 1;
    if (num === 12) {
      num = 0;
    }
  });

  document.querySelector('.graphic-container').appendChild(BTN_NEXT);
}
