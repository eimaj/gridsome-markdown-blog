import Vue from 'vue';

// Only import the highlight package to reduce size.
import HighlightJs from 'highlight.js/lib/highlight';

// Register only the languages you will want to highlight.
import javascript from 'highlight.js/lib/languages/javascript';
HighlightJs.registerLanguage('javascript', javascript);

// Import only they styles you want to use.
import 'highlight.js/styles/atom-one-dark.css';

const Highlight = {
  install() {
    // Register a directive called `highlight`.
    Vue.directive('highlight', {
      inserted(el) {
        // Find all the `pre code` blocks in the `v-highlight` element.
        const blocks = el.querySelectorAll('pre code');
        // Loop over them and highlight each of them.
        blocks.forEach(block => {
          HighlightJs.highlightBlock(block);
        });
      },
    });
  },
};

export default Highlight;
