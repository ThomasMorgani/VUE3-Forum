<template>
  <div>
    <div v-if="!thread" class="col-full text-center">
      <h2>Thread not found</h2>
      <router-link :to="{ name: 'Home' }">VIEW ALL THREADS</router-link>
    </div>
    <div v-else class="col-large push-top">
      <h2>{{ thread.title }}</h2>
      <PostList :posts="threadPosts"></PostList>
      <PostEditor @postSubmit="postSave"></PostEditor>
    </div>
  </div>
</template>

<script>
  import PostEditor from '@/components/PostEditor'
  import PostList from '@/components/PostList'
  import sourceData from '@/data/data.json'
  export default {
    name: 'PageThreadShow',
    props: {
      id: String,
    },
    components: {
      PostEditor,
      PostList,
    },
    data: () => ({
      newPostText: '',
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
    methods: {
      postSave(e) {
        const post = { ...e, threadId: this.id }
        this.posts.push(post)
        this.thread.posts.push(post.id)
      },
    },

    created() {},
  }
</script>

<style lang="scss" scoped></style>
