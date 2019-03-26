<template functional>
  <nav>
    <g-link
      class="Back"
      :to="{ name: 'home' }"
      alt="Return to home page"
      title="Return to home page"
    >
      Home
    </g-link>
  </nav>
</template>

<style lang="scss" scoped>
.Back {
  transition: all 300ms;
  border-bottom: 1px dashed var(--medium);
  font-size: 0.8em;
  padding: 6px 0;
  margin-bottom: 30px;
}
</style>
