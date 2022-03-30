<template>
  <div>
    <br>
    <v-card
      class="mx-auto"
      color="white"
      max-width="400"
      :class="`rounded-xl`"
    >
      <v-card-text class="card-body-font font-weight-bold text-center">
        <br>
        <vote v-bind="options" @addvote="addVote"/>
      </v-card-text>
      <v-card-actions>
        <v-list-item>
          <v-row
            align="center"
            justify="end"
          >
            <v-btn text>共有</v-btn>
            <v-btn  class="rounded-card" :to="`/home/`" nuxt>戻る</v-btn>
          </v-row>
        </v-list-item>

      </v-card-actions>

    </v-card>
  </div>


</template>

<script>
import error from "@/layouts/error";

export default {
  name: "home_id",
  middleware: 'authenticated',
  data() {
    return {
      options: {
        question: "",
        answers: [],
        finalResults: false
      },
    }
  },
  async asyncData({ app, params }){
    const question = await app.$repositories.questions.show(params.id)
    const answers = [];
    question.question.question["answers"].forEach(function (answer){
              answers.push({value: answer["id"], text: answer["body"], votes: answer["votes_count"]});
            });
    return {
      options: {
        question: question.question.question.body,
        answers: answers,
        finalResults: question.question.question.show_result
      }
    }
  },
  created() {
    // this.$repositories.questions.show(this.$route.params.id)
    //   .then(response => {
    //     this.options.finalResults = response.question.question["show_result"];
    //     this.options.question = response.question.question["body"];
    //
    //     const answers = [];
    //     response.question.question["answers"].forEach(function (answer){
    //       answers.push({value: answer["id"], text: answer["body"], votes: answer["votes_count"]});
    //     });
    //     this.options.answers = answers;
    //
    //   });
  },
  methods: {
    addVote(obj) {
      console.log(obj.value + 'に投票したよ！')
      this.$repositories.votes.create({
        id: obj.value
      }).then(response => {
        this.$store.commit(`setContent`,{
          content: '投票に成功しました！',
          timeout: 4000,
          alertType: 'success'
        })

      }).catch((error)=>{
        this.$store.commit(`setContent`,{
          content: '投票に失敗しました',
          timeout: 4000,
          alertType: "error"
        })
      });
    },
  },
}
</script>

<style scoped>

</style>
