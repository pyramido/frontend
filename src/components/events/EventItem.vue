<template>
  <router-link :to="{ name: 'event-page', params: { id } }"
               class="p-item">
    <div class="p-thumbnail" :style="`background-image: url(${medias.first.url})`">
      <img :src="medias.first.url">
      <div class="p-date">{{ date }}</div>
    </div>
    <h4>{{ title }}</h4>
    <p>
      {{ description | truncate(100, '...') }}
    </p>
  </router-link>
</template>
<script>
export default {
  props: {
    id: {
      type: Number,
      default: null,
    },
    title: {
      type: String,
      default: 'Event',
    },
    medias: {
      type: Object,
      default: () => ({}),
    },
    description: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: null,
    },
  },
};
</script>
