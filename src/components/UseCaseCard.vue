<template>
  <div class="useCaseCard">
    <b-card :title="title"
            :img-src="img"
            img-alt="Acteur"
            img-top
            tag="article"
            style="max-width: 25rem;"
            class="mb-2">
      <p class="card-text">
        {{ description }}
      </p>
      <b-button href="#" variant="primary">{{ buttonText }}</b-button>
    </b-card>
  </div>

</template>
<script>
export default {
  name: 'UseCaseCard',
  props: {
    title: { type: String, default: 'Titre' },
    img: { type: String, default: 'img' },
    description: { type: String, default: 'Description' },
    buttonText: { type: String, default: 'Text' },
  },

};
</script>

<style lang="scss" scoped>

.card-img-top{
    width:40% !important;
}
</style>
