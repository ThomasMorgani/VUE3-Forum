<template>
  <div class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
    </div>
  </div>

  <div class="col-full push-top">
    <p v-if="!threads || threads.length < 1">No active threads found for {{ forum.name }}</p>
    <ThreadList v-else :threads="threads"></ThreadList>
  </div>
</template>

<script>
  import ThreadList from '@/components/ThreadList'
  import sourceData from '@/data/data'
  export default {
    name: 'Forum',
    components: {
      ThreadList,
    },
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    computed: {
      forum() {
        return sourceData.forums.find(f => f.id === this.id)
      },
      threads() {
        return sourceData.threads.filter(t => t.forumId === this.id)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
