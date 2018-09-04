<template>
    <component :is="routedComponent"></component>
</template>


<script>
import HomePage from './components/Home';
import ArticlesPage from './components/Articles';

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
    }
}
</script>
