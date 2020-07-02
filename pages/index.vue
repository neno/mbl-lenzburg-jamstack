<template>
  <div class="index o-layout">
    <div class="o-layout-item">
      <div class="c-article">
        <nuxt-link to="/programm" class="link--blank">
          <header class="c-article__header u-mb-normal">
            <h1 class="color-theme-1 u-mb-tiny">{{ activeCategory.title }}</h1>
            <h2 class="color-theme-1">{{ activeCategory.lead }}</h2>
          </header>
          <picture>
            <source
              media="(min-width: 900px)"
              srcset="~assets/images/theme/theme_2020_home.jpg"
            />
            <source
              media="(max-width: 899px)"
              srcset="~assets/images/theme/theme_2020_home_mobile.jpg"
            />
            <img
              src="~assets/images/theme/theme_2020_home.jpg"
              alt="Musiker von Hausmusik"
            />
          </picture>
        </nuxt-link>
      </div>
    </div>
    <aside class="o-layout__item" v-if="teasers">
      <Teaser
        v-for="teaser in teasers"
        :key="teaser.slug"
        :title="teaser.title"
        :slug="teaser.slug"
        :lead="teaser.lead"
      />
    </aside>
  </div>
</template>

<script>
import Teaser from '~/components/Teaser'

export default {
  components: {
    Teaser,
  },
  computed: {
    activeCategory() {
      return this.$store.state.categories.activeCategory
    },
    teasers() {
      return this.$store.state.teasers.teasers['home']
    },
  },
  async fetch({ store, params }) {
    await store.dispatch('categories/getCategories')
    await store.dispatch('teasers/getTeasersByPageSlug', 'home')
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
