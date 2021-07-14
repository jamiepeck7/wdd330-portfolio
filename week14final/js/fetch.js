import {searchQuery} from './main.js';
import { generateHTML } from './generate.js';

const container = document.querySelector('.container');
const appId = '3ad7609f';
const appKey = '55e21f6ee25ff04517b5513181073e48';


export async function fetchAPI () {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${appKey}&from=0&to=24`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
   // console.log(data);
}
