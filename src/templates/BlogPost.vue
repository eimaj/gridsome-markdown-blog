<template>
  <Layout>
    <Back />

    <article class="BlogPost">
      <header class="BlogPost__header">
        <h1 class="BlogPost__title">{{ $page.blogPost.title }}</h1>
      </header>

      <BlogPostMeta :date="$page.blogPost.date" :tags="$page.blogPost.tags" />

      <section
        class="BlogPost__content"
        v-html="$page.blogPost.content"
        v-highlight
      />

      <SubscribeForm />
    </article>
  </Layout>
</template>

<script>
import Back from "~/components/Back.vue";
import BlogPostMeta from "~/components/BlogPostMeta.vue";
import SubscribeForm from "~/components/SubscribeForm.vue";

export default {
  components: {
    Back,
    BlogPostMeta,
    SubscribeForm
  },

  metaInfo() {
    return {
      title: this.$page.blogPost.title
    };
  }
};
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "MMMM D, YYYY")
      content
      tags
    }
  }
</page-query>

<style lang="scss" scoped>
.BlogPost {
  border-bottom: 1px dashed var(--medium);
  padding: 30px 0;
}

.BlogPost__content {
  padding: 20px 0;
}
</style>
