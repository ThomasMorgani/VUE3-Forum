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
    <div :title="timestampHuman(post.publishedAt)" class="post-date text-faded">
      {{ timeagoHuman(post.publishedAt) }}
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data/data.json'
  import dayjs from 'dayjs'
  import localizedDate from 'dayjs/plugin/localizedFormat'
  import relativeTime from 'dayjs/plugin/relativeTime'
  dayjs.extend(localizedDate)
  dayjs.extend(relativeTime)
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
      timeagoHuman(timestamp) {
        return dayjs.unix(timestamp).fromNow()
      },
      timestampHuman(timestamp) {
        return dayjs.unix(timestamp).format('llll')
      },
      userById(userId) {
        return this.users.find(u => u.id === userId)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
