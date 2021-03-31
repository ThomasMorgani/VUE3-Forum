<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ category.name }}</h1>
        <p class="text-lead">{{ category.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <p v-if="!forums || forums.length < 1">No active forums found for {{ category.name }}</p>
    <ForumList :forums="forums" v-else></ForumList>
  </div>
</template>

<script>
  import ForumList from '@/components/ForumList'
  import sourceData from '@/data/data'
  export default {
    name: 'CategoryShow',
    components: {
      ForumList,
    },
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    computed: {
      category() {
        return sourceData.categories.find(c => c.id === this.id)
      },
      forums() {
        return sourceData.forums.filter(f => f.categoryId === this.id)
      },
    },
    created() {
      console.log(this.forums)
    },
  }
</script>

<style lang="scss" scoped></style>
