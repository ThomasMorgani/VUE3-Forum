<template>
  <div class="col-large push-top">
    <h2>{{ thread.title }}</h2>
    <div class="post-list">
      <div v-for="postId in thread.posts" :key="postId" class="post">
        <div class="user-info">
          <a href="#" class="user-name">{{ userById(postById(postId).userId).name }}</a>
          <a href="#" class="user-name"><img :src="userById(postById(postId).userId).avatar" alt="" class="avatar-large"/></a>
          <p class="desktop-only text-small">10 posts</p>
        </div>
        <div class="post-content">
          <p>{{ postById(postId).text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data/data.json'
  export default {
    name: 'PageThreadShow',
    props: {
      id: String,
    },
    data: () => ({
      posts: sourceData.posts,
      threads: sourceData.threads,
      users: sourceData.users,
    }),
    computed: {
      thread() {
        return this.threads.find(t => t.id === this.id)
      },
    },
    methods: {
      postById(postId) {
        return this.posts.find(p => p.id === postId)
      },
      userById(userId) {
        return this.users.find(u => u.id === userId)
      },
    },
    created() {},
  }
</script>

<style lang="scss" scoped></style>
