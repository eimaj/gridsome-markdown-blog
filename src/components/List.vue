<template>
  <section class="List">
    <ListItem v-for="{ node } in posts" :key="node._id" :post="node" />
  </section>
</template>

<script>
import ListItem from "~/components/ListItem.vue";

export default {
  components: {
    ListItem
  },

  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
.List {
}
</style>
