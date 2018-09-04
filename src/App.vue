<template>
    <div>
      <div class="button-row">
        <button
          @click="go('/')"
        >
          Vai pra casa
        </button>
        <button
          @click="go('/articles')"
        >
          Vai pros artigos
        </button>
      </div>
      <app-router></app-router>
    </div>
</template>

<script>
import AppRouter from './Router';
import { push } from './history';
import { listen } from './history';

export default {
  components: {
    AppRouter
  },
  methods: {
    go(route) {
      push(route);
    }
  }
}
</script>


