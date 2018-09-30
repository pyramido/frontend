<template>
  <div class="p-featured">
    <div class="container">
      <h1>{{ event.title }}</h1>
      <hr>
      <b-row>
        <b-col>
          <h2>L'événement</h2>
          {{ event.description }}
        </b-col>
        <b-col align="center">
          <img :src="img" class="event-img">
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col cols="6">
          <h2 align="center">Offres spéciales</h2>
          <div :key="reward.id"
               v-for="reward in event.rewards">
            <hr>
            <h3>
              {{ reward.title }}
            </h3>
            <h4>Proposition</h4>
            <p>{{ reward.description }}</p>
            <h4> Les gains </h4>
            <p>{{ reward.bonus }}</p>

            <b-button size="lg" variant="primary">Je participe</b-button>
          </div>
        </b-col>
        <b-col cols="6">
          <h2 align="center">Nos besoins</h2>
          <div :key="need.id"
               v-for="need in event.needs">
            <hr>
            <h3>
              {{ need.title }}
            </h3>
            <p>{{ need.description }}</p>
            <b-button size="lg" variant="secondary">Participer</b-button>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { helpers, GETTERS, ACTIONS } from '@/store/modules/api/types';

export default {
  computed: {
    ...helpers.mapGetters({
      event: GETTERS.currentEvent,
    }),
    img() {
      const { event } = this;
      return event && event.media && event.media.first;
    }
  },
  methods: helpers.mapActions([
    ACTIONS.fetchEvent,
  ]),
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchEvent());
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchEvent(to.params.id);
  },
};
</script>
<style>

</style>
