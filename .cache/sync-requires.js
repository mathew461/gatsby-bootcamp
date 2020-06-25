const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/matty/Documents/gatsby-bootcamp/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/matty/Documents/gatsby-bootcamp/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/matty/Documents/gatsby-bootcamp/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/matty/Documents/gatsby-bootcamp/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/matty/Documents/gatsby-bootcamp/src/pages/index.js")))
}

