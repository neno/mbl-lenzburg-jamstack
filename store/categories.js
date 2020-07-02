import { createClient } from '~/plugins/contentful'

const client = createClient()

export const state = () => ({
  categories: {},
  activeCategory: {},
})

export const mutations = {
  setCategories(state, payload) {
    state.categories = payload
  },
  setActiveCategory(state, payload) {
    state.activeCategory = payload
  },
}

export const actions = {
  async getCategories({ commit }) {
    const response = await client.getEntries({
      content_type: 'eventcategory',
    })

    if (response.items.length > 0) {
      const categories = mapCategories(response.items)
      commit('setCategories', categories)
      commit('setActiveCategory', getActiveCategory(categories))
    }
  },
}

function mapCategories(items) {
  const categories = {}
  items.forEach((item) => {
    categories[`${item.fields.slug}`] = {
      id: item.sys.id,
      slug: item.fields.slug,
      year: item.fields.year,
      title: item.fields.title,
      titleMeta: item.fields.meta_title,
      descriptionMeta: item.fields.meta_description,
      lead: item.fields.lead,
      isActive: item.fields.is_active,
    }
  })
  return categories
}

function getActiveCategory(categories) {
  return Object.values(categories).find((cat) => cat.isActive)
}

// function mapCategories(item) {
//   let teasers = []

//   if (item.fields.teasers) {
//     teasers = item.fields.teasers.map((teaser) => ({
//       title: teaser.fields.title,
//       lead: teaser.fields.lead,
//       slug: teaser.fields.page_route,
//     }))
//   }

//   return teasers
// }
