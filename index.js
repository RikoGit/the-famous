import Vue from 'vue';
import App from './components/App/App.vue';
//import 'core-js/proposals/string-replace-all.js';
import 'core-js';
import 'regenerator-runtime/runtime.js';

new Vue({
    el: '#app',
    render: (h) => h(App),
});
