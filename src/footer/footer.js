export function createFooter() {
  const FOOTER = document.createElement('div');
  FOOTER.style.position = 'fixed';
  FOOTER.style.width = '100%';
  FOOTER.style.bottom = '0';
  FOOTER.style.left = '0';
  FOOTER.style.display = 'flex';
  FOOTER.style.justifyContent = 'space-around';
  FOOTER.style.alignItems = 'center';
  FOOTER.style.padding = '0 50px';
  FOOTER.style.backgroundColor = 'rgba(255,255,255, 0.5)';
  FOOTER.style.color = 'black';
  FOOTER.style.zIndex = '6000';

  FOOTER.innerHTML = `
    <a href="https://rs.school/js/"><img width="50px" height="25px" src="https://rs.school/images/rs_school_js.svg"></a>
    <a href="https://github.com/" style="color: black">by Daniil Sitnikov</a>
    <p>2020</p>
  `;

  return FOOTER;
}
