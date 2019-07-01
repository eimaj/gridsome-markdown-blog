module.exports = {
  siteName: `Jamie Allen`,
  titleTemplate: `%s || eimaj.dev`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/:slug',
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'BlogPost',
        feedOptions: {
          title: "Jamie Allen's RSS feed",
          feed_url: 'https://eimaj.dev/rss.xml',
          site_url: 'https://eimaj.dev',
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://eimaj.dev/' + node.slug,
          author: 'Jamie Allen',
        }),
        output: {
          dir: './static',
          name: 'rss.xml',
        },
      },
    },
  ],

  chainWebpack: config => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
};
