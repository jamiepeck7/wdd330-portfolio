import hikes from './hikes.js';

//on load grab the array and insert it in page

const myHikes = new hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});
myHikes.hikeList;
