<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <a href="#">Forums</a>
      </h2>

      <div v-for="forum in forums" :key="forum.id" class="forum-listing">
        <div class="forum-details">
          <router-link :to="{ name: 'Forum', params: { id: forum.id } }" class="text-xlarge">{{ forum.name }}</router-link>
          <p>{{ forum.Description }}</p>
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
    props: {
      forums: {
        type: Array,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped></style>
