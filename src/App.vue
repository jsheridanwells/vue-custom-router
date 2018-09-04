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

export default {
  components: {
    AppRouter
  },
  methods: {
    go: function(route) {
      window.location = route;
    }
  }
}
</script>


