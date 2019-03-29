<template functional>
  <Layout>
    <section class="FourOhFour">
      <header class="FourOhFour__title">
        <h1>404: Not found</h1>
      </header>

      <article class="FourOhFour__content">
        <p>
          This is probably not where you want to be...
        </p>

        <p>
          <g-link
            class="FourOhFour__home"
            :to="{ name: 'home' }"
            alt="Return to home page"
            title="Return to home page"
          >
            Click here to return home
          </g-link>
        </p>
      </article>
    </section>
  </Layout>
</template>

<style lang="scss" scoped>
.FourOhFour {
  border-bottom: 1px dashed var(--medium);
  padding: 30px 0;
}

.FourOhFour__content {
  padding-top: 20px;
}
</style>
