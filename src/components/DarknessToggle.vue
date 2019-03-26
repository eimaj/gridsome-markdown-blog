<template>
  <button class="DarknessToggle" @click="toggleDarkness">
    {{ currentDarkness ? "🔆" : "🔅" }}
  </button>
</template>

<script>
import darknessMixin from "~/mixins/darkness";

export default {
  props: {
    currentDarkness: {
      type: Boolean,
      default: false
    }
  },
  mixins: [darknessMixin]
};
</script>

<style lang="scss" scoped>
.DarknessToggle {
  position: absolute;
  top: 20px;
  right: 20px;
  border: 0;
  background-color: transparent;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
