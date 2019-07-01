<template>
  <div class="Footer">
    <Navigation />
    <Icons />

    <p class="Footer__info">
      Built using
      <a
        href="https://gridsome.org/"
        target="_"
        title="External link to Gridsome"
        alt="External link to Gridsome"
      >
        Gridsome</a
      >. Hosted on
      <a
        href="https://www.netlify.com/"
        target="_"
        title="External link to Netlify"
        alt="External link to Netlify"
      >
        Netlify</a
      >.
    </p>
  </div>
</template>

<script>
import Biline from "~/components/Biline.vue";
import Icons from "~/components/Icons.vue";
import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    Biline,
    Icons,
    Navigation
  },

  computed: {
    isIndex() {
      return this.$route.name === "home";
    }
  }
};
</script>

<style lang="scss" scoped>
.Footer {
  padding: 20px 0;
  // border-top: 1px dashed var(--medium);
}

.Footer__info {
  font-size: 0.7em;
}
</style>
