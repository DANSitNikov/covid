export function increaseList(parent) {
  const INCREASE_LIST = document.createElement('button');
  INCREASE_LIST.classList.add('increase-list-btn');
  INCREASE_LIST.innerHTML = `
        <svg fill="white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
\t viewBox="0 0 492.009 492.009" style="enable-background:new 0 0 492.009 492.009;" xml:space="preserve">
<g>
\t<g>
\t\t<path d="M314.343,62.977L255.399,4.033c-2.672-2.672-6.236-4.04-9.92-4.032c-3.752-0.036-7.396,1.36-10.068,4.032l-57.728,57.728
\t\t\tc-5.408,5.408-5.408,14.2,0,19.604l7.444,7.444c5.22,5.22,14.332,5.22,19.556,0l22.1-22.148v81.388
\t\t\tc0,0.248,0.144,0.452,0.188,0.684c0.6,7.092,6.548,12.704,13.8,12.704h10.52c7.644,0,13.928-6.208,13.928-13.852v-9.088
\t\t\tc0-0.04,0-0.068,0-0.1V67.869l22.108,22.152c5.408,5.408,14.18,5.408,19.584,0l7.432-7.436
\t\t\tC319.751,77.173,319.751,68.377,314.343,62.977z"/>
\t</g>
</g>
<g>
\t<g>
\t\t<path d="M314.335,409.437l-7.44-7.456c-5.22-5.228-14.336-5.228-19.564,0l-22.108,22.152v-70.216c0-0.04,0-0.064,0-0.1v-9.088
\t\t\tc0-7.648-6.288-14.16-13.924-14.16h-10.528c-7.244,0-13.192,5.756-13.796,12.856c-0.044,0.236-0.188,0.596-0.188,0.84v81.084
\t\t\tl-22.1-22.148c-5.224-5.224-14.356-5.224-19.58,0l-7.44,7.444c-5.4,5.404-5.392,14.2,0.016,19.608l57.732,57.724
\t\t\tc2.604,2.612,6.08,4.032,9.668,4.032h0.52c3.716,0,7.184-1.416,9.792-4.032l58.94-58.94
\t\t\tC319.743,423.633,319.743,414.841,314.335,409.437z"/>
\t</g>
</g>
<g>
\t<g>
\t\t<path d="M147.251,226.781l-1.184,0h-7.948c-0.028,0-0.056,0-0.088,0h-69.88l22.152-22.032c2.612-2.608,4.048-6.032,4.048-9.74
\t\t\tc0-3.712-1.436-7.164-4.048-9.768l-7.444-7.428c-5.408-5.408-14.204-5.4-19.604,0.008l-58.944,58.94
\t\t\tc-2.672,2.668-4.1,6.248-4.028,9.92c-0.076,3.82,1.356,7.396,4.028,10.068l57.728,57.732c2.704,2.704,6.252,4.056,9.804,4.056
\t\t\ts7.1-1.352,9.804-4.056l7.44-7.44c2.612-2.608,4.052-6.092,4.052-9.8c0-3.712-1.436-7.232-4.052-9.836l-22.144-22.184h80.728
\t\t\tc0.244,0,0.644-0.06,0.876-0.104c7.096-0.6,12.892-6.468,12.892-13.716v-10.536C161.439,233.229,154.895,226.781,147.251,226.781z
\t\t\t"/>
\t</g>
</g>
<g>
\t<g>
\t\t<path d="M487.695,236.765l-58.944-58.936c-5.404-5.408-14.2-5.408-19.604,0l-7.436,7.444c-2.612,2.604-4.052,6.088-4.052,9.796
\t\t\tc0,3.712,1.436,7.072,4.052,9.68l22.148,22.032h-70.328c-0.036,0-0.064,0-0.096,0h-9.084c-7.644,0-13.78,6.444-13.78,14.084
\t\t\tv10.536c0,7.248,5.564,13.108,12.664,13.712c0.236,0.048,0.408,0.108,0.648,0.108h81.188l-22.156,22.18
\t\t\tc-2.608,2.604-4.048,6.116-4.048,9.816c0,3.716,1.436,7.208,4.048,9.816l7.448,7.444c2.7,2.704,6.248,4.06,9.8,4.06
\t\t\ts7.096-1.352,9.8-4.056l57.736-57.732c2.664-2.664,4.092-6.244,4.028-9.92C491.787,243.009,490.359,239.429,487.695,236.765z"/>
\t</g>
</g>
<g>
\t<g>
\t\t<path d="M246.011,207.541c-21.204,0-38.456,17.252-38.456,38.46c0,21.204,17.252,38.46,38.456,38.46
\t\t\tc21.204,0,38.46-17.256,38.46-38.46C284.471,224.793,267.215,207.541,246.011,207.541z"/>
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

  INCREASE_LIST.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#list_of_countries').classList.toggle('increase-list');
    document.querySelectorAll('.list-country').forEach((el) => {
      el.classList.toggle('increase-list-item');
    });
    document.querySelectorAll('.list_block-countries').forEach((el) => {
      el.classList.toggle('increase-list-item');
    });
    INCREASE_LIST.classList.toggle('increase-list-btn-active');
  });

  parent.appendChild(INCREASE_LIST);

  return INCREASE_LIST;
}
