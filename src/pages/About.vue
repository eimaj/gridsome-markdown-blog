<template functional>
  <Layout>
    <section class="About">
      <header class="About__title">
        <h1>My name is Jamie Allen</h1>
      </header>

        <p>
      <article class="About__content">
          I am a
          <g-link
            to="/resume"
            alt="Learn more about Jamie"
            title="Learn more about Jamie"
          >Senior Software Developer</g-link>
          working my craft in Hamilton, Ontario (Canada).
        </p>
        <p>
          Here are a couple fun things I have built:
        </p>
        <ul>
          <li>
            <a
              href="https://spell-and-speak.eimaj.dev/"
              alt="External link to Speak and Spell project"
              title="External link to Speak and Spell project"
              target="_"
            >
              Speak &amp; Spell
            </a>
          </li>
          <li>
            <a
              href="https://mastermind.eimaj.dev/"
              alt="External link to Mastermind.js project"
              title="External link to Mastermind.js project"
              target="_"
            >
              Mastermind.js
            </a>
          </li>
        </ul>
        <p>
          Please reach out if you'd like to chat!
        </p>
      </article>
    </section>
  </Layout>
</template>

<style lang="scss" scoped>
.About {
  border-bottom: 1px dashed var(--medium);
  padding: 30px 0;
}

.About__content {
  padding-top: 20px;
}
</style>
