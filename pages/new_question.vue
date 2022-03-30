<template>
  <div>
    <h2 class="text-center white--text">新しく質問する</h2>
    <br>
    <Form></Form>
  </div>

</template>

<script>
export default {
  name: "new_question",
  middleware: 'authenticated'

}
</script>

<style scoped>

</style>
