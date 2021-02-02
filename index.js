import Vue from 'vue';
import App from './components/App/App.vue';
import 'core-js/proposals/string-replace-all';
//import 'core-js/stable';
import 'regenerator-runtime/runtime.js';

new Vue({
    el: '#app',
    render: (h) => h(App),
});
