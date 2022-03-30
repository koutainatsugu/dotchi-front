<template>
  <div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <br>
              <div class="text-center">
                <v-btn  @click="removeUser" color="#ee5555" class="white--text" >
                  退会する
                </v-btn>
              </div>
              <br>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  name: "setting",
  methods:{
    async removeUser(){
      const ans = confirm('本当に退会しますか?');
      if(ans){
        await this.$axios.$delete('/auth/')
        console.log("yes")
        this.$cookies.removeAll()
        this.$store.commit('user', null)
        //payload {} is good
        this.$store.commit('auth', null)
        this.$router.push('/login')
      }else {
        console.log("no")
      }
    },
  }

}
</script>

<style scoped>

</style>
