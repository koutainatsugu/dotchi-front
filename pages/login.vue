<template>
  <v-app id="login" >
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <br>
              <div class="text-center">
                <LoginButton/>
              </div>
              <br>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LoginButton from "@/components/LoginButton";
export default {
  components: {LoginButton},
  layout: 'default',

};
</script>

<style scoped>

</style>
