<template>
  <header class="Biline">
    <Avatar />

    <component :is="isIndex ? 'h1' : 'h3'" class="Biline__text">
      Personal blog of Jamie Allen.
      <br />
      May contain code, ideas and thoughts.
    </component>
  </header>
</template>

<script>
import Avatar from "~/components/Avatar.vue";

export default {
  components: {
    Avatar
  },

  computed: {
    isIndex() {
      return this.$route.name === "home";
    }
  }
};
</script>

<style lang="scss">
.Biline {
  display: flex;
  flex: 60px 0;
  padding: 10px 0;

  @media (max-width: 580px) {
    flex-direction: column;
  }
}

.Biline__text {
  padding: 15px;
  font-size: 18px;
  line-height: 25px;
}
</style>

