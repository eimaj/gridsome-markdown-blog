<template>
  <Layout>
    <article class="BlogPost">
      <header class="BlogPost__header">
        <h1 class="BlogPost__title">{{ $page.blogPost.title }}</h1>
      </header>

      <time :datetime="$page.blogPost.date" class="BlogPost__published">
        {{ $page.blogPost.date }}
      </time>

      <section class="BlogPost__content" v-html="$page.blogPost.content" />
    </article>
  </Layout>
</template>

<script>
export default {
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
      date (format: "D MMMM, YYYY")
      content
      image
    }
  }
</page-query>

<style lang="css" scoped>
.BlogPost__header {
}
.BlogPost__title {
}
.BlogPost__published {
}
.BlogPost__content {
}
</style>
