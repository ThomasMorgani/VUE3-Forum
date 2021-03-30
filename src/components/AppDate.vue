<template>
  <span :title="timestampHuman()">
    {{ timeagoHuman() }}
  </span>
</template>

<script>
  import dayjs from 'dayjs'
  import localizedDate from 'dayjs/plugin/localizedFormat'
  import relativeTime from 'dayjs/plugin/relativeTime'
  dayjs.extend(localizedDate)
  dayjs.extend(relativeTime)
  export default {
    name: 'Date',
    props: {
      timestamp: {
        type: Number,
        required: true,
      },
    },
    methods: {
      timeagoHuman() {
        return dayjs.unix(this.timestamp).fromNow()
      },
      timestampHuman() {
        return dayjs.unix(this.timestamp).format('llll')
      },
    },
  }
</script>

<style lang="scss" scoped></style>
