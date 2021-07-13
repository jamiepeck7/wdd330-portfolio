import {fetchAPI} from './fetch.js';

const searchForm = document.querySelector('form');
export let searchQuery = '';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
   // console.log(searchQuery);
   fetchAPI();
});

