<template>
  <div>
    <br>
    <h2 class="font-weight-bold text-center white--text">みんなの質問</h2>
    <br>
    <div class="text-center"><v-btn color="black" class="white--text rounded-button" large to="/new_question" nuxt>みんなに質問する</v-btn></div>
    <br>
    <div v-for="question in questions" :key="question.id">
      <card :id="question.id" :body="question.body" :user_image="question.user.image" :user_name="question.user.name" ></card>
      <br>
    </div>
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      @input="changePage"
    ></v-pagination>
  </div>

</template>

<script>
export default {
  name: "home",
  middleware: 'authenticated',
  data() {
    return {
      questions: [],
      currentPage: 1,
      lists: [],
      totalPages: 5
    }
  },
  async asyncData({ app }){
    const question = await app.$repositories.questions.index({
            query: {
              page: 1
            }
          })
    return {
      questions : question.questions,
      totalPages : question.meta.total_pages
    }
  },
  // created() {
  //   this.$repositories.questions.index({
  //     query: {
  //       page: 1
  //     }
  //   })
  //     .then(response => {
  //       this.questions = response.questions;
  //       this.totalPages = response.meta['total_pages']
  //     });
  // },
  methods: {
    async handleLogout() {
      await this.$axios.$delete('/auth/sign_out')
      this.$cookies.removeAll()
      this.$store.commit('user', {})
      this.$store.commit('auth', null)
      this.$router.push('/login')
    },
    async changePage(val){
      console.log(val)
      this.$repositories.questions.index({
        query: {
          page: val
        }
      })
        .then(response => {
          console.log(response)
          this.questions = response.questions;
          this.totalPages = response.meta['total_pages']
          window.scrollTo({
            top: 0,
            // behavior: 'smooth'
          })
        });
    }
  }
}
</script>


<style scoped>
.rounded-button{
  border-radius: 30px;
}

</style>
