/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here
  const firstListEle = document.querySelector('li');
  console.log(firstListEle);

  const myIdEle = document.querySelector('#myId');
  console.log(myIdEle);

  const yellowListEles = document.querySelectorAll('li.bg-warning');
  console.log(yellowListEles);

  const targetBtn = document.querySelector('button#targetBtn'); // HTML modified
  console.log(targetBtn);

  const socialLinks = document.querySelectorAll('a.social'); // HTML modified
  console.log(socialLinks);

  const nestedElements = document.querySelectorAll('div#myRow div.col');
  console.log(nestedElements);
})();
