<template>
  <div class="message" v-show="message">
    <v-alert
      :type=type
      :elevation=4
    >{{ message }}</v-alert>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Message",
  computed: {
    ...mapState({
      message: state => state.content,
      type: state => state.alertType
    })
  }
}
</script>

<style scoped>

</style>
