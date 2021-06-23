import QuakesController from './QuakesController.js';

import buildNavigation from './routing.js';

const navElement = document.getElementById('mainNav');
buildNavigation(navElement);

const quakesController = new QuakesController('#quakeList');
quakesController.init();