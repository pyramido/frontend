<template>
  <div class="useCaseCard">
  <b-card v-bind:title="title"
          v-bind:img-src="img"
          img-alt="Acteur"
          img-top
          tag="article"
          style="max-width: 25rem;"
          class="mb-2">
    <p class="card-text">
      {{ description }}
    </p>
    <b-button href="#" variant="primary">{{buttonText}}</b-button>
  </b-card>
</div>

</template>
<script>
export default {
  name: 'UseCaseCard',
  props: {
    title: String,
    img: String,
    description : String,
    buttonText: String,
  },
  
};
</script>

<style lang="scss" scoped>

.card-img-top{
    width:40% !important;
}
</style>
