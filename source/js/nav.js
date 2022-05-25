(() => {
  const pageHeaderElement = document.querySelector('.page-header');

  pageHeaderElement.querySelector('.nav-button').addEventListener('click', () => {
    pageHeaderElement.classList.toggle('page-header--opened');
  });

  pageHeaderElement.classList.add('page-header--js');
})();
