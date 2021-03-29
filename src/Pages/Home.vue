<template>
  <div class="container">
    <h1>Welcome to the Forum</h1>
    <ThreadList :threads="threads"></ThreadList>
  </div>
</template>

<script>
  import sourceData from '@/data/data.json'
  console.log(sourceData)
  import ThreadList from '@/components/ThreadList'
  export default {
    name: 'HelloWorld',
    components: {
      ThreadList,
    },
    props: {
      msg: String,
    },
    data: () => ({
      posts: sourceData.posts,
      threads: sourceData.threads,
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
