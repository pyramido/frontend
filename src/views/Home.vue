<template>
  <div id="home">
      <Carousel/>
      <b-container fluid>
        <b-row/>
      </b-container>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'; 

export default {
  name: 'home',
  components: {
    Carousel,
  },

};
</script>
