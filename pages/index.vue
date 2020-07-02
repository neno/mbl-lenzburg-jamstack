<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">mbl-lenzburg</h1>
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
  </div>
</template>

<script>
import Teaser from '~/components/Teaser'

export default {
  components: {
    Teaser,
  },
  computed: {
    teasers() {
      return this.$store.state.teasers.teasers['home']
    },
  },
  async fetch({ store, params }) {
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
