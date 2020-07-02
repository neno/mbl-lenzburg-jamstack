<template>
  <article>
    <nuxt-link :to="`/${slug}`" class="c-teaser o-box o-box--huge link--blank">
      <h2 class="u-mb-0 color-white">
        {{ title }}
      </h2>
      <p v-if="lead" class="u-mb-0 color-white">
        {{ lead }}
      </p>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    lead: {
      type: String,
      required: false,
    },
    slug: {
      type: String,
      required: true,
    },
  },
}
</script>
