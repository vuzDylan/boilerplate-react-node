export default {
  build: {
    css: './dist/css',
    js: './dist/js',
    jsMain: './dist/js/main.js',
    img: './dist/img',
    dir: './dist',
  },

  source: {
    css: './app/css/**/*.css',
    jsMain: './app/js/app.jsx',
    scripts: './app/js/**/*.@(js|jsx)',
    img: './app/img/**/*.@(gif|png|jpg|jpeg|svg)',
    html: './app/index.html',
  },
};
