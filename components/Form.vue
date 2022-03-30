<template>
  <div>
      <v-row justify="center">
        <v-col
          cols="12"
          sm="10"
          md="8"
          lg="6"
        >
          <v-form ref="form">
            <v-card ref="form" :class="`rounded-xl`">
              <v-card-text>
                <v-text-field
                  v-model="body"
                  :rules="[() => !!body || '入力してください',
                () => !!body && body.length <= 50 || '質問は50文字以内です']"
                  counter="50"
                  label="質問"
                  required
                  clearable
                ></v-text-field>
                <div v-for="(answer, index) in answers">
                  <v-text-field
                    v-model="answers[index]"
                    :rules="[
                  () => !!answers[index] || '入力してください',
                  () => !!answers[index] && answers[index].length <= 25 || '回答は２５文字以内です'
                ]"
                    counter="25"
                    :label="`回答${index+1}`"
                    clearable
                  >
                    <template v-slot:append-outer>
                      <v-btn icon @click="removeInput(index)">
                        <v-icon>mdi-minus-circle</v-icon>
                      </v-btn>
                    </template>
                  </v-text-field>

                </div>
              </v-card-text>

              <v-card-actions >
                <v-list-item>
                  <v-row
                    align="center"
                    justify="end"
                  >
                    <div class="text-center" v-if="!answerNum" style="color: #dd2c00">回答を２つ以上作成してください</div>
                    <v-btn type="button" @click="addInput" v-if="!isAnswerMax" text>追加</v-btn>
                    <v-btn @click="submitQuestion" dark class="rounded-card">送信</v-btn>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-form>

        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: "QuestionForm",
  data() {
    return {
      answers: ["", ""],
      maxAnswerCount: 4,
      body: "",
      answerNum : true
    }
  },
  methods: {
    addInput() {
      this.answers.push('');
    },
    removeInput(index) {
      this.answers.splice(index, 1);
    },
    async submitQuestion(){
      this.validateAnswer()
      if (this.$refs.form.validate() && this.answers.length >= 2 ){
        await this.$repositories.questions.create(
          {
            body: this.body,
            answers: this.answers
          }).then(response => {
            console.log(response.status)
          this.$store.commit(`setContent`,{
            content: '質問の作成に成功しました',
            timeout: 4000,
            alertType: 'success'
          })
        }).catch((error)=>{
          this.$store.commit(`setContent`,{
            content: '質問の作成に失敗しました',
            timeout: 4000,
            alertType: 'error'
          })
        });
        this.$router.push("home")
      }

    },
    validateAnswer(){
      this.answerNum = this.answers.length >= 2;
    }

  },
  computed: {
    isAnswerMax() {
      return (this.answers.length >= this.maxAnswerCount);
    }
  }
}
</script>

<style scoped>

</style>
