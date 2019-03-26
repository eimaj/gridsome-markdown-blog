<template functional>
  <p class="BlogPostMeta">
    <time :datetime="props.date" class="BlogPostMeta__time">
      {{ props.date }}
    </time>

    <span v-if="props.tags" class="BlogPostMeta__tags">
      |
      {{ props.tags }}
    </span>
  </p>
</template>


<style lang="scss" scoped>
.BlogPostMeta {
  display: block;
  margin-bottom: 20px;
  padding: 10px 0;
  font-size: 0.8em;
}
</style>