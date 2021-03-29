<template>
  <div>
    <div v-if="!thread" class="col-full text-center">
      <h2>Thread not found</h2>
      <router-link :to="{ name: 'Home' }">VIEW ALL THREADS</router-link>
    </div>
    <div v-else class="col-large push-top">
      <h2>{{ thread.title }}</h2>
      <PostList :posts="threadPosts"></PostList>
    </div>
  </div>
</template>

<script>
  import PostList from '@/components/PostList'
  import sourceData from '@/data/data.json'
  export default {
    name: 'PageThreadShow',
    props: {
      id: String,
    },
    components: {
      PostList,
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
      threadPosts() {
        return this.posts.filter(p => p.threadId === this.id)
      },
    },
    created() {},
  }
</script>

<style lang="scss" scoped></style>
