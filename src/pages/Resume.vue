<template functional>
  <Layout>
    <section class="Resume">
      <header class="Resume__title">
        <h1>Jamie Allen</h1>
        <h2>Senior Full-Stack Developer</h2>
      </header>

      <hr />

      <article class="Resume__content">
        <h2 class="Resume__h2">Qualifications</h2>

        <ul class="Resume__ul">
          <li>JavaScript (ES6+), Typescript, Flow</li>
          <li>Vue, React, Node, Webpack,</li>
          <li>Ruby and Rails,</li>
          <li>Jest, Cypress, Minitest, Nightwatch,</li>
          <li>HTML5, CSS3 (Sass/SCSS),</li>
          <li>SQL (Postgres, MySQL, sqlite), GraphQL,</li>
          <li>Netlify, Digital Ocean, AWS, Firebase, FaunaDB, Heroku,</li>
          <li>Git(hub|lab) + CI/CD</li>
        </ul>

        <h2 class="Resume__h2">Experience</h2>

        <h3 class="Resume__h3">
          <strong>Weever Apps</strong>
          Senior Developer
          <br />
          <small>October 2018 - Present</small>
        </h3>

        <p>
          Working with the development teams and management to develop a
          migration solution for taking a legacy AngularJS app to Vue.
        </p>

        <h3 class="Resume__h3">
          <strong>Fluid Media Technologies</strong>
          Senior Software Developer
          <br />
          <small>September 2017 - October 2018</small>
        </h3>

        <p>
          Team lead and senior developer on all aspects of the Fluid Media
          System. As a lead my focus was on collaboration and process. While
          working in loose sprints, we initiated a migration from Backbone to
          Vue, improved the API and launched several new products.
        </p>

        <h3 class="Resume__h3">
          <strong>Parallel Digital Studio/ factor[e] design initiative</strong>
          Senior UX Developer
          <br />
          <small>May 2009 - August 2017</small>
        </h3>
        <p>
          Worked closely with clients, designers and developers to build the
          best possible solution. Every project was custom and designed to meet
          the goals of the client.
        </p>

        <h3 class="Resume__h3">
          <strong>Social Media Group</strong>
          Social Media Analyst
          <br />
          <small>May 2008 - May 2009</small>
        </h3>

        <p>
          In house web project development, programming and design.
        </p>

        <h2 class="Resume__h2">Interests</h2>

        <p>
          Coordinator of
          <a
            href="https://www.meetup.com/HamOnt-JavaScript"
            target="_"
            alt="HamOntJS Meetup Group"
            title="HamOntJS Meetup Group"
            >HamOntJS</a
          >, a JavaScript focussed Meetup group with a goal of bringing together
          the local JavaScript community for networking and mentoring
          opportunities.
        </p>

        <p>
         I was an organizer for the HamOnt Conference series in Hamilton and
          topic leader for HamOnt UX. I've mentored for Ladies Learning Code in
          Hamilton and I have volunteered for local political issues like public
          transit and various elections.
        </p>

        <p>
          Currently most of my spare time is been spent with my family. I also
          enjoy painting, playing music, gardening and sailing when I can find
          the time.
        </p>

        <h2 class="Resume__h2">Education</h2>

        <h3 class="Resume__h3">
          Design Management Diploma
          <br />
          <small>George Brown College, 2008</small>
        </h3>

        <h3 class="Resume__h3">
          Bachelor of Arts with Honours - Fine Art
          <br />
          <small>University of Guelph, 2005</small>
        </h3>
      </article>
    </section>
  </Layout>
</template>

<style lang="scss" scoped>
.Resume {
  border-bottom: 1px dashed var(--medium);
  padding: 30px 0;
}

.Resume__content {
  padding-top: 20px;
}

.Resume__h2 {
  margin-bottom: 20px;
  border-left: 6px solid var(--light);
  padding-left: 20px;
  box-sizing: border-box;
}

.Resume__h3 strong {
  display: block;
  margin-bottom: 10px;
}

.Resume__ul {
  margin-bottom: 40px;
  border-left: 0;
  padding: 0;
}
</style>
