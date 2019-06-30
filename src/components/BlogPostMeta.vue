<template functional>
  <p class="BlogPostMeta">
    <time :datetime="props.post.date" class="BlogPostMeta__time">
      {{ props.post.date }}
    </time>

    <span v-if="props.post.tags" class="BlogPostMeta__tags">
      |
      {{ props.post.tags }}
    </span>

    <span v-if="props.post.tags" class="BlogPostMeta__length">
      |
      {{ props.post.length }}
    </span>
  </p>
</template>


<style lang="scss" scoped>
.BlogPostMeta {
  display: block;
  margin-bottom: 10px;
  padding: 4px 0;
  font-size: 0.8em;
}
</style>