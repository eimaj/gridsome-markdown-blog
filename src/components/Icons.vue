<template>
  <div class="Icons">
    Find me online:
    <a
      class="Icons__link"
      href="https://github.com/eimaj"
      target="_"
      alt="External link to my Github account"
      title="External link to my Github account"
    >
      <GithubIcon class="Icons__icon" />
    </a>

    <a
      class="Icons__link"
      href="https://linkedin.com/in/eimaj"
      target="_"
      alt="External link to my LinkedIn account"
      title="External link to my LinkedIn account"
    >
      <LinkedinIcon class="Icons__icon" />
    </a>

    <a
      class="Icons__link"
      href="https://twitter.com/eimaj"
      target="_"
      alt="External link to my Twitter account"
      title="External link to my Twitter account"
    >
      <TwitterIcon class="Icons__icon" />
    </a>
  </div>
</template>

<script>
import GithubIcon from "~/assets/svg/github.svg";
import LinkedinIcon from "~/assets/svg/linkedin.svg";
import TwitterIcon from "~/assets/svg/twitter.svg";

export default {
  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon
  }
};
</script>

<style lang="scss" scoped>
.Icons {
  display: flex;
  padding: 30px 0;
  border-top: 1px dashed var(--medium);
  font-size: 16px;
}

.Icons__link {
  height: 24px;
  width: 24px;
  border: 0;
  margin-left: 20px;

  &:hover {
    background-color: transparent;
  }
}

.Icons__icon {
  transition: 300ms;
  width: 100%;
  fill: var(--dark);

  &:hover {
    fill: var(--medium);
  }
}
</style>
