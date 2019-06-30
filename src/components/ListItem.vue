<template>
  <article class="ListItem">
    <router-link
      class="ListItem__link"
      :alt="a11yTitle"
      :title="a11yTitle"
      :to="post.path"
    >
      <header class="ListItem__header">
        <h2 class="ListItem__title" v-html="post.title" />
      </header>
    </router-link>

    <BlogPostMeta :post="post" />

    <section class="ListItem__section">
      <p v-html="post.description" />
    </section>
  </article>
</template>

<script>
import BlogPostMeta from "~/components/BlogPostMeta.vue";

export default {
  components: {
    BlogPostMeta
  },

  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    a11yTitle() {
      return `Article: ${this.post.title}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.ListItem {
  padding: 20px 10px 0;
  border-top: 1px dashed var(--medium);
  margin-bottom: 10px;
}

.ListItem__title {
  font-size: 28px;
  &:hover {
    background-color: var(--light);
  }
}
</style>