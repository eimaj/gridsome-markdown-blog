<template functional>
  <nav class="Navigation">
    <g-link
      class="Navigation__item"
      :to="{ name: 'home' }"
      alt="Return to home page"
      title="Return to home page"
    >
      Home
    </g-link>

    <g-link
      class="Navigation__item"
      to="/about"
      alt="Learn more about Jamie"
      title="Learn more about Jamie"
    >
      About me
    </g-link>

    <a
      class="Navigation__item"
      href="/rss.xml"
      alt="Link to RSS feed"
      title="Link to RSS feed"
      target="_"
    >
      RSS
    </a>
  </nav>
</template>

<style lang="scss" scoped>
.Navigation {
  margin-bottom: 10px;
}

.Navigation__item {
  transition: all 300ms;
  margin-right: 20px;
  padding: 6px 0;
  border-bottom: 1px dashed var(--medium);
  font-size: 0.9em;
  color: var(--dark);
}
</style>
