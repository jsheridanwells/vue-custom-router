import Vue from 'vue'
import App from './App.vue'
import Router from './plugins';
import Home from './components/Home';
import Articles from './components/Articles';

const routes = {
  '/': Home,
  '/articles': Articles
}

Vue.use(Router, {
  routes
});

new Vue({
  el: '#app',
  render: h => h(App)
})
