<template>
  <div>
    <v-card
      class="mx-auto"
      color="white"
      max-width="400"
      :class="`rounded-xl`"
    >
      <v-card-title>
        <v-icon large left>
          mdi-message-text
        </v-icon>
        <span class="title font-weight-light">投票</span>
      </v-card-title>

      <v-card-text style="color: #2c3e50" class="card-body-font font-weight-bold text-center">
        {{ body }}
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img
              class="elevation-6"
              alt=""
              :src=user_image
            ></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user_name }}</v-list-item-title>
          </v-list-item-content>

          <v-row
            align="center"
            justify="end"
          >
            <v-btn text>共有</v-btn>
            <v-btn dark class="rounded-card" :to="`/home/${id}`" nuxt>回答する</v-btn>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    user_image: {
      type: String
    },
    user_name: {
      type: String
    }
  }
};
</script>


<style scoped>

.card-body-font{
  font-size: 20px;
}
.rounded-card{
  border-radius: 30px;
}

</style>
