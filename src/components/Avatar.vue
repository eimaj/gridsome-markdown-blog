<template functional>
  <div class="Avatar">
    <img
      class="Avatar__image"
      role="presentation"
      src="../assets/images/avatar.jpg"
    />
  </div>
</template>

<style lang="scss" scoped>
.Avatar {
  flex-shrink: 0;
  padding: 10px;
  width: 60px;
  height: 60px;

  @media (max-width: 580px) {
    margin: 0 auto;
    width: 80px;
    height: 80px;
  }
}

.Avatar__image {
  transition: all 300ms;
  display: block;
  box-sizing: border-box;
  margin: 0;
  border: 2px solid var(--medium);
  border-radius: 50%;
  padding: 2px;
  width: 100%;
  height: 100%;
}
</style>
