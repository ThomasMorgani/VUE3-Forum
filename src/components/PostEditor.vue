<template>
  <form @submit.prevent="postSubmit">
    <div class="form-group">
      <textarea v-model="text" name="post" id="post" cols="38" rows="10" class="form-input"></textarea>
    </div>
    <div class="form-actions"><button class="btn-blue">Submit post</button></div>
  </form>
</template>

<script>
  export default {
    data: () => ({
      text: null,
    }),
    methods: {
      postSubmit() {
        const randId = 'tmp' + Math.random()
        const post = {
          id: randId,
          text: this.text,
          publishedAt: Math.floor(Date.now() / 1000),
          userId: 'rpbB8C6ifrYmNDufMERWfQUoa202',
        }
        this.$emit('postSubmit', { post })
        this.text = null
      },
    },
  }
</script>

<style lang="scss" scoped></style>
