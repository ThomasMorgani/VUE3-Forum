<template>
  <div class="container">
    <h1>Welcome to the Forum</h1>
    <ForumList :forums="forums"></ForumList>
  </div>
</template>

<script>
  import sourceData from '@/data/data.json'
  console.log(sourceData)
  import ForumList from '@/components/ForumList'
  export default {
    name: 'Home',
    components: {
      ForumList,
    },
    props: {
      msg: String,
    },
    data: () => ({
      posts: sourceData.posts,
      forums: sourceData.forums,
      users: sourceData.users,
    }),
    methods: {
      postById(postId) {
        return this.posts.find(p => p.id === postId)
      },
      userById(userId) {
        return this.users.find(u => u.id === userId)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
