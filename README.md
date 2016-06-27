React Boilerplate
=================
- react-router
- react
- react-bootstrap
- redux
- gulp

Development
=================
- `npm install` to bring in all deps
- `PORT=8080 gulp` will build, watch and server the app any port
- `NODE_ENV=production gulp build` will build out min files
- `npm run bootstrap-actions 'file name'` will create a new file in `app/js/actions/`

Notes
=================
- Will not run in browser without adding reducers
- Use HTML 5 tags in components and containers, with the exception of alerts and modals. For these, use their [react-bootstrap components](https://react-bootstrap.github.io/components.html).
- Hot reloading is possible with [this chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei). Install it, and make sure it is clicked ON to enable hotreloading.
