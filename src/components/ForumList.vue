<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link :to="id ? { name: 'CategoryShow', params: { id } } : '#'">{{ title }}</router-link>
      </h2>

      <div v-for="forum in forums" :key="forum.id" class="forum-listing">
        <div class="forum-details">
          <router-link :to="{ name: 'Forum', params: { id: forum.id } }" class="text-xlarge">{{ forum.name }}</router-link>
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">{{ `${forum?.threads?.length || '0'} thread${forum?.threads?.length === 1 ? '' : 's'}` }} </span>
          </p>
        </div>

        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ForumList',
    props: {
      id: {
        type: String,
      },
      forums: {
        type: Array,
        required: true,
      },
      title: {
        type: String,
        default: 'Forums',
      },
    },
  }
</script>

<style lang="scss" scoped></style>
