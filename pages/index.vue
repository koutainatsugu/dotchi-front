<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card style="border-radius: 0.6rem; padding: 4rem 1rem;" elevation="0">
        <v-card-text style="white-space: pre-wrap" class="text-center">
          <h2 style="margin-left: 1rem">dotchiがめざすもの</h2>
          どっちがいいんだろう。
          みんなの意見が気軽に聞けたらいいな。
          みんなの考えが覗けたら楽しいな。

          質問をつくったり、投票をしたり。
          そんなサービスがdotchiです。
        </v-card-text>
        <v-card-actions>
          <v-spacer />
            <LoginButton></LoginButton>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import LoginButton from "@/components/LoginButton";

export default {
  components: {
    LoginButton,
    Logo,
    VuetifyLogo
  }
}
</script>
