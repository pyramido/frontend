<template>
  <b-card :title="title"
          :img-src="img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      {{ description | truncate(100, '...') }}
    </p>
    <p>
      Le {{ date }}
    </p>
    <b-button
      :to="{ name: 'event-page', params: { id } }"
      variant="primary">
      En savoir plus
    </b-button>
  </b-card>
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
    img: {
      type: String,
      default: null,
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
