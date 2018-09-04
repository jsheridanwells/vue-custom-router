<template>
    <component :is="routedComponent"></component>
</template>


<script>
import HomePage from './components/Home';
import ArticlesPage from './components/Articles';
import { listen } from './history';

const routes = {
    '/': HomePage,
    '/articles': ArticlesPage
}

export default {
    data(){
        return { current: window.location.pathname };
    },
    computed: {
        routedComponent() {
            return routes[this.current];
        }
    },
    created() {
        listen((route, previousRoute) => {
            this.current = route;
        });

        window.addEventListener(
            'popstate',
            e => (this.current = window.location.pathname)
        );
    },
    render(createElement) {
        return createElement(this.routedComponent);
    }
}
</script>
