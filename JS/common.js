// Search
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  // Search 패널 어느부분을 선택하면, searchInputEl에 JS로 focus를 가한다
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  // Search 의 Input 이열리면 placeholder로 '통합검색' text가 활성화 되게 한다
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  // Search 가 Blur 되면 (UnFocused) placeholder 를 지우고, SearchEl의 focused class를 지운다.
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  // searchInputEl.removeAttribute("placeholder");
});

// YEAR Copyright

const thisYear = document.querySelector('.this-year');
thisYear.textContent = `${new Date().getFullYear()}`;
