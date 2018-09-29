<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col align="center">
          <h1>{{ event.title }}</h1>
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col>
          <h2>L'événement</h2>
          {{ event.description }}
        </b-col>
        <b-col align="center">
          <img :src="img" style="max-width:100%">
        </b-col>
      </b-row>
      <hr>
      <b-row>
        <b-col cols="6">
          <h2 align="center">Offres spéciales</h2>
          <b-col cols="12"
                 :key="item.id"
                 v-for="item in event.rewards">
            <hr>
            <h3>
              {{ item.title }}
            </h3>
            <h4>Proposition</h4>
            {{ item.description }}
            <h4> Les gains </h4>
            {{ item.bonus }}
            <br>
            <br>
            <b-button size="lg" variant="primary">Participer</b-button>
          </b-col>
        </b-col>
        <b-col cols="6">
          <h2 align="center">Nos besoins</h2>
          <hr>
          <b-col cols="12">
            <h3>
              Besoins de ceci
            </h3>
            Nous recherchons ceci pour nous aider à cela
            <br> <br>
            <b-button size="lg" variant="primary">Aider</b-button>
          </b-col>
        </b-col>
      </b-row>
    </b-container>
    <br>
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
