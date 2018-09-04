<template>
    <component :is="routedComponent"></component>
</template>


<script>
import { listen } from './history';

export default {
    data(){
        return { current: window.location.pathname };
    },
    computed: {
        routedComponent() {
            return this.$routes[this.current];
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
