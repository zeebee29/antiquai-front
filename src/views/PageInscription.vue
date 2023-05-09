<template>
  <div class="back-page">
    <h1>{{ pageTitle }}</h1>
    <div v-html="pageContent"></div>
  </div>
</template>



  <script>
export default {
  name: 'BackPage',
  data() {
    return {
      pageTitle: 'Page du serveur back-end',
      pageContent: ''
    }
  },
  mounted() {
    fetch(process.env.VUE_APP_EASYADMIN_URL +'/inscription')
      .then(response => response.text())
      .then(html => {
        this.pageContent = html
      })
  }
}
  </script>