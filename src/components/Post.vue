<template>
  <div class="post">
    <div class="user-info">
      <a href="#" class="user-name">{{ userById(post.userId).name }}</a>
      <a href="#" class="user-name"><img :src="userById(post.userId).avatar" alt="" class="avatar-large"/></a>
      <p class="desktop-only text-small">10 posts</p>
    </div>
    <div class="post-content">
      <p>{{ post.text }}</p>
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data/data.json'

  export default {
    name: 'Post',
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
    data: () => ({
      users: sourceData.users,
    }),
    methods: {
      userById(userId) {
        return this.users.find(u => u.id === userId)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
