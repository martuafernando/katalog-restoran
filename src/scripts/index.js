import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/default.css';

// Font Awesome
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

// Script
import script from './script';

document.addEventListener('DOMContentLoaded', script);
