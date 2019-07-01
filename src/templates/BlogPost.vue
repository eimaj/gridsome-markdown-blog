<template>
  <Layout>
    <Navigation />

    <article class="BlogPost">
      <header class="BlogPost__header">
        <h1 class="BlogPost__title">
          {{ $page.blogPost.title }}
        </h1>
      </header>

      <BlogPostMeta :post="$page.blogPost" />

      <section
        class="BlogPost__content"
        v-html="$page.blogPost.content"
        v-highlight
      />
    </article>
  </Layout>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import BlogPostMeta from "~/components/BlogPostMeta.vue";
import SubscribeForm from "~/components/SubscribeForm.vue";

export default {
  components: {
    Navigation,
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
      length
    }
  }
</page-query>

<style lang="scss" scoped>
.BlogPost {
  border-bottom: 1px dashed var(--medium);
  padding: 30px 0;
}

.BlogPost__title {
  margin-bottom: 10px;
}

.BlogPost__content {
  padding: 20px 0;
}
</style>
