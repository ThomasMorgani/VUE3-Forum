<template>
  <div class="container">
    <h1>Welcome to the Forum</h1>
    <ForumList v-for="category in categories" :key="category.id" :forums="forumsByCategory(category.id)" :id="category.id" :title="category.name"></ForumList>
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
      categories: sourceData.categories,
      posts: sourceData.posts,
      forums: sourceData.forums,
      users: sourceData.users,
    }),
    methods: {
      forumsByCategory(categoryId) {
        return this.forums.filter(f => f.categoryId === categoryId)
      },
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
