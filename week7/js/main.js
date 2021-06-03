import Hikes from './hikes.js';

//on load grab the array and insert it in page

const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();

  console.log(comments);
});

