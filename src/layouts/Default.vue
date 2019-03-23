<template>
  <div class="Layout">
    <Header />

    <main class="Layout__main">
      <slot />
    </main>

    <footer class="Layout__footer">
      This is the footer
    </footer>
  </div>
</template>

<script>
import config from "~/.temp/config.js";
import Header from "~/components/Header.vue";

export default {
  components: {
    Header
  },

  computed: {
    titleTag() {
      return this.$route.name === "home" ? "h1" : "h6";
    },
    config() {
      return config;
    }
  }
};
</script>


<style lang="css">
* {
  margin: 0;
  padding: 0;
}

a {
}

h1,
h2,
h3,
h4,
h5,
h6 {
}

body {
  font-size: 16px;
}

img {
  max-width: 100%;
  margin: 0 0 20px;
}
</style>

<style lang="css" scoped>
.Layout {
}
.Layout__main {
}
.Layout__footer {
}
</style>
