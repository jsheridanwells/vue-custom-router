import Router from './Router';
import { push } from './history';

export default {
    install(Vue, options) {
        Vue.component('Router', Router);
        Vue.prototype.$routes = options.routes;
        Vue.prototype.$pushRoute = push;
    }
}