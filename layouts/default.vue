<template>
  <v-app dark>
<!--    <v-navigation-drawer-->
<!--      v-model="drawer"-->
<!--      :mini-variant="miniVariant"-->
<!--      :clipped="clipped"-->
<!--      fixed-->
<!--      app-->
<!--    >-->
<!--      <v-list>-->
<!--        <v-list-item-->
<!--          v-for="(item, i) in items"-->
<!--          :key="i"-->
<!--          :to="item.to"-->
<!--          router-->
<!--          exact-->
<!--        >-->
<!--          <v-list-item-action>-->
<!--            <v-icon>{{ item.icon }}</v-icon>-->
<!--          </v-list-item-action>-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title v-text="item.title" />-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="#ecaf48"
    >
<!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->
<!--      <v-btn-->
<!--        icon-->
<!--        @click.stop="miniVariant = !miniVariant"-->
<!--      >-->
<!--        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>-->
<!--      </v-btn>-->
<!--      <v-btn-->
<!--        icon-->
<!--        @click.stop="clipped = !clipped"-->
<!--      >-->
<!--        <v-icon>mdi-application</v-icon>-->
<!--      </v-btn>-->
<!--      <v-btn-->
<!--        icon-->
<!--        @click.stop="fixed = !fixed"-->
<!--      >-->
<!--        <v-icon>mdi-minus</v-icon>-->
<!--      </v-btn>-->
      <v-toolbar-title v-text="title"/>
      <v-spacer />
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }"v-if="isLogin">
          <v-btn
            icon
            large
            v-bind="attrs"
            v-on="on"
          >
            <v-avatar  size="35px">
              <img :src="user.image" :alt="user.name"/>
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-subheader>
            ログイン中のユーザー
          </v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>
                {{user.name}}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider />

          <v-subheader>
            メニュー
          </v-subheader>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="item.click"
            :to="item.to"
          >
            <v-list-item-icon class="mr-2">
              <v-icon size="22" v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <Message></Message>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      color="#ecaf48"
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded

        >
          {{ link }}
        </v-btn>

      </v-row>

      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Message from "@/components/Message";
export default {
  components: {Message},
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      links: [
        '利用規約',
        'プライバシーポリシー',
        'よくある質問',
      ],
      items: [
        {
          icon: 'mdi-home',
          title: 'ホーム',
          to: '/home',
          click: null
        },
        {
          icon: 'mdi-square-edit-outline',
          title: '質問を作る',
          to: '/new_question',
          click: null
        },
        {
          icon: 'mdi-account-cog',
          title: '設定',
          to: '/setting',
          click: null
        },
        {
          icon: 'mdi-logout-variant',
          title: 'ログアウト',
          to: '#',
          click: this.handleLogout
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'DOTCHI β版'
    }
  },
  methods: {
    async handleLogout() {
      await this.$axios.$delete('/auth/sign_out')
      this.$cookies.removeAll()
      this.$store.commit('user', null)
      //payload {} is good
      this.$store.commit('auth', null)
      this.$router.push('/login')
    },
  },
  computed: {
    user() {
      return this.$store.state.user || {}
    },
    isLogin () {
      return this.$store.getters['check']
    },
  },



}
</script>

<style scoped>
.v-application {
  background-color: #ecaf48;
}
.v-app-bar {
  color: white;
}
div{
  font-family: 'M PLUS Rounded 1c', sans-serif;
}
.rounded-button{
  border-radius: 30px;
}

</style>
