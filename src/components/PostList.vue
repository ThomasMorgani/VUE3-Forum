<template>
  <div class="post-list">
    <Post v-for="post in posts" :key="post.id" :post="post"> </Post>
  </div>
</template>

<script>
  import Post from '@/components/Post'
  export default {
    name: 'PostList',
    props: {
      posts: {
        type: Array,
        required: true,
      },
    },
    components: {
      Post,
    },
    methods: {},
  }
</script>

<style lang="scss" scoped></style>
