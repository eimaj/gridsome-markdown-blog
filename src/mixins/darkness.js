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
  },

  mounted() {
    return this.setDarkness();
  },
};
