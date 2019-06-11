const path = require("path")
const _ = require("lodash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      query {
        gcms {
          posts {
            id
            title
          }
          places {
            id
            name
          }
          events {
            id
            name
          }
          categories {
            id
            category
            tags {
              id
              tag
            }
          }
        }
      }
    `)
      .then(result => {
        const { posts, places, events, categories } = result.data.gcms

        posts.map(post => {
          createPage({
            path: `/posts/${_.kebabCase(post.title)}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              id: post.id,
            },
          })
        })

        places.map(place => {
          createPage({
            path: `/place/${_.kebabCase(place.name)}`,
            component: path.resolve(`./src/templates/place.js`),
            context: {
              id: place.id,
            },
          })
        })

        events.map(event => {
          createPage({
            path: `/event/${_.kebabCase(event.name)}`,
            component: path.resolve(`./src/templates/event.js`),
            context: {
              id: event.id,
            },
          })
        })

        categories.map(category => {
          createPage({
            path: `/${_.kebabCase(category.category)}`,
            component: path.resolve(`./src/templates/category.js`),
            context: {
              id: category.id,
            },
          })

          // nested create /:category/:tag page
          const { tags } = category
          tags.map(tag => {
            createPage({
              path: `/${_.kebabCase(category.category)}/${_.kebabCase(
                tag.tag
              )}`,
              component: path.resolve(`./src/templates/tag.js`),
              context: {
                id: tag.id,
              },
            })
          })
          //
        })

        resolve()
      })
      .catch(error => console.log(error))
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    createPage(page)
  }
}
