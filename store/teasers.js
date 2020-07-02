import { createClient } from '~/plugins/contentful'

const client = createClient()

export const state = () => ({
  teasers: {},
})

export const mutations = {
  setTeasers(state, payload) {
    state.teasers = { ...state.teasers, [payload.slug]: payload.teasers }
  },
}

export const actions = {
  async getTeasersByPageSlug({ commit }, slug) {
    const response = await client.getEntries({
      content_type: 'pages',
      'fields.route': slug,
    })

    if (response.items && response.items[0]) {
      const teasers = mapTeasersToPage(response.items[0])
      commit('setTeasers', { slug, teasers })
    }
  },
}

function mapTeasersToPage(item) {
  let teasers = []

  if (item.fields.teasers) {
    teasers = item.fields.teasers.map((teaser) => ({
      title: teaser.fields.title,
      lead: teaser.fields.lead,
      slug: teaser.fields.page_route,
    }))
  }

  return teasers
}
