<template>
  <header class="Header">
    <g-link class="Header__link" :to="{ name: 'home' }">
      <h1 class="Header__title" :class="{ 'Header__title--is-index': isIndex }">
        {{ config.siteName }}
      </h1>
    </g-link>
  </header>
</template>

<script>
import config from "~/.temp/config.js";

export default {
  computed: {
    isIndex() {
      return this.$route.name === "home";
    },
    config() {
      return config;
    }
  }
};
</script>

<style lang="css">
.Header {
}
.Header__link {
}
.Header__title {
}
</style>
