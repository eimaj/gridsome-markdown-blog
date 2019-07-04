<template>
  <div class="Layout">
    <div class="Layout__container">
      <Biline v-if="isIndex" />

      <DarknessToggle
        :current-darkness="isDark"
        @darkness-toggled="setDarkness"
      />

      <main class="Layout__main">
        <slot />
      </main>

      <Footer />
    </div>
  </div>
</template>

<script>
import darknessMixin from "~/mixins/darkness";

import DarknessToggle from "~/components/DarknessToggle.vue";
import Biline from "~/components/Biline.vue";
import Icons from "~/components/Icons.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Biline,
    DarknessToggle,
    Icons,
    Footer
  },

  mixins: [darknessMixin],

  computed: {
    isIndex() {
      return this.$route.name === "home";
    }
  },

  metaInfo: {
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-137348311-1",
        async: true
      },
      {
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-137348311-1');`
      }
    ]
  }
};
</script>

<style lang="scss">
@import "../assets/styles/global.scss";
</style>

<style lang="scss" scoped>
.Layout {
  min-height: 100%;
}

.Layout__container {
  transition: all 300ms;
  position: relative;
  margin: 0 auto;
  padding: 30px;
  max-width: 680px;
  min-width: 340px;
  box-sizing: border-box;
  color: var(--dark);
}
</style>
