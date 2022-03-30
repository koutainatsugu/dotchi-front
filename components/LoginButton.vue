<template>
  <v-btn  :href="twitterLoginURL" color="#55acee" class="white--text" >
    <v-icon size="22">mdi-twitter</v-icon>
    Twitterで登録/ログイン
  </v-btn>
</template>

<script>
export default {
  name: "LoginButton",
  data: () => ({
    twitter: {
      url: 'http://192.168.0.152:3000/v1/auth/twitter',
      redirectUrl: 'http://localhost:8080/oauth/twitter/callback'
    },
  }),

  computed: {
    twitterLoginURL() {
      return `${this.twitter.url}?auth_origin_url=${encodeURI(this.twitter.redirectUrl)}`

    }
  },
}
</script>

<style scoped>

</style>
