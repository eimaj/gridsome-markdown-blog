<template>
  <Layout>
    <List :posts="$page.allBlogPost.edges" />
    <Pager :info="$page.allBlogPost.pageInfo" linkClass="Pager__link" />
  </Layout>
</template>

<script>
import { Pager } from "gridsome";
import List from "~/components/List.vue";

export default {
  components: {
    List,
    Pager
  }
};
</script>

<page-query>
query Home($page: Int) {
  allBlogPost(perPage: 10, page: $page, sortBy: "date", order: DESC) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        _id
        title
        date (format: "MMMM D, YYYY")
        description
        path
        tags
      }
    }
  }
}
</page-query>
