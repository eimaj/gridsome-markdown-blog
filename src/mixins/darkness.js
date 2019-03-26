import Vue from 'vue';

export default {
  data() {
    return {
      isDark: false,
    };
  },

  methods: {
    getDarkness() {
      return Vue.localStorage.get('eimaj.dev--isDark') === 'true' ? true : false;
    },

    setDarkness() {
      this.isDark = this.getDarkness();
      return this.isDark;
    },

    toggleDarkness() {
      Vue.localStorage.set('eimaj.dev--isDark', !this.getDarkness());
      return this.$emit('darkness-toggled');
    },

    toggleHtmlClass() {
      const node = document.querySelector('html');
      return this.isDark ? node.classList.add('dark') : node.classList.remove('dark');
    },
  },

  watch: {
    isDark() {
      return this.toggleHtmlClass();
    },
  },

  mounted() {
    this.setDarkness();
    return this.toggleHtmlClass();
  },
};
