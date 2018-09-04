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
      <router></router>
    </div>
</template>

<script>
export default {
  methods: {
    go(route) {
      this.$pushRoute(route);
    }
  }
}
</script>


