/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  const img = document.querySelector('img');
  const firstLink = document.querySelector('a');
  img.src = firstLink.textContent;

  const nextLink = document.querySelector('div.alert-warning a');
  nextLink.href = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript';

  const successDiv = document.querySelector('div.alert-success');
  successDiv.textContent = 'I am victorious!';

  const infoDiv = document.querySelector('div.alert-info');
  infoDiv.style.backgroundColor = '#A37632';

  const dangerDiv = document.querySelector('div[data-text]');
  dangerDiv.classList.add('text-primary');

  const hideDiv = document.querySelector('div[data-hide]');
  hideDiv.style.visibility = 'hidden';

  const unhideDiv = document.querySelector('div.hidden');
  unhideDiv.classList.remove('hidden');

  const conditionalBtn = document.querySelector('button');
  const changeDiv = document.querySelector('div.text-dark');
  if (conditionalBtn.classList.contains('btn-primary')) changeDiv.textContent = '✓ blue';
})();
