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
  top: 30px;
  right: 30px;
  border: 0;
  width: 30px;
  background-color: transparent;
  line-height: 30px;
  text-align: center;
  font-size: 1.4em;
  cursor: pointer;
}
</style>
