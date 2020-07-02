<template>
  <div class="o-wrapper u-lh-stripes">
    <header class="site-header">
      <Banner />
      <div class="o-wrapper--huge"></div>
    </header>
    <main>
      <Nuxt />
    </main>
    <div class="acrticle u-mt-normal u-mb-small">
      <a
        class="c-article__body"
        href="https://www.contentful.com/"
        rel="noopener"
        target="_blank"
        ><img
          src="https://images.ctfassets.net/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
          style="max-width: 100px; width: 100%;"
          alt="Powered by Contentful"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: 'de',
      },
      meta: [
        {
          name: 'description',
          content:
            'Die MBL bieten jedes Jahr ein einmaliges Klassikprogramm. Wo Menschen sich begegnen, entsteht Neues, Spannendes und Überraschendes.',
        },
        {
          name: 'author',
          content:
            'Reaktor AG, Kommunikationsagentur ASW, Laurenzenvorstadt 25, CH-5000 Aarau, 062 823 50 05, kontakt@reaktor.ch, www.reaktor.ch',
        },
        {
          name: 'web_author',
          content:
            'Reaktor AG, Kommunikationsagentur ASW, Laurenzenvorstadt 25, CH-5000 Aarau, 062 823 50 05, kontakt@reaktor.ch, www.reaktor.ch',
        },
        {
          name: 'google-site-verification',
          content: 'F6hAdjooGVjY9dzwS8qNOhbYVDw9j1wOsE20yUeeQd8',
        },
      ],
    }
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
