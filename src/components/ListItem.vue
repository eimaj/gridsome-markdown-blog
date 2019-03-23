<template>
  <article class="ListItem">
    <router-link class="ListItem__link" :to="post.path">
      <header class="ListItem__title" v-html="post.title" />
    </router-link>

    <time
      class="ListItem__published"
      v-html="post.date"
      :datetime="post.date"
    />

    <section class="ListItem__section" v-html="post.description" />
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="css" scoped>
.ListItem {
}
.ListItem__link {
}
.ListItem__title {
}
.ListItem__published {
}
.ListItem__section {
}
</style>