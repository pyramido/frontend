<template>
  <div>
    <div class="p-event-container">
      <div class="container">
        <div class="p-event-header" :style="`background-image: url(/img/placeholders/i${img_index}.jpg)`">
          <h1>{{ event.title }}</h1>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="p-event-details-container">
        <b-row>
          <b-col class="p-event-desc">
            <h2>Description</h2>
            <p v-html="event.description"/>
          </b-col>
          <b-col cols="4" class="p-event-rewards-needs">
            <div>
              <h2 align="center">Promotions</h2>
              <div class="p-event-reward">
                <h5>L'impliqué</h5>
                <ul>
                  <li>Devenez bénévole un soir</li>
                  <li>Recevez une entrée gratuite le soir suivant</li>
                </ul>
                <b-button variant="primary">J'en profite</b-button>
              </div>
              <div class="p-event-reward">
                <h5>Le social</h5>
                <ul>
                  <li>Invitez 5 amis</li>
                  <li>Recevez une entrée gratuite</li>
                </ul>
                <b-button variant="primary">J'en profite</b-button>
              </div>
            </div>
            <hr/>
            <div>
              <h2 align="center">Nos besoins</h2>
              <div class="p-event-reward">
                <h5>Impression</h5>
                <ul>
                  <li>Impression d'environ 200 billets</li>
                  <li>Bannière type « roll-up »</li>
                </ul>
                <b-button variant="primary">Je peux aider</b-button>
              </div>
              <div class="p-event-reward">
                <h5>Bénévoles</h5>
                <ul>
                  <li>Monter / démonter la salle</li>
                  <li>Acceuillir les participants</li>
                </ul>
                <b-button variant="primary">Je peux aider</b-button>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
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
  },
  methods: helpers.mapActions([
    ACTIONS.fetchEvent,
  ]),
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchEvent(to.params.id));
  },
  beforeRouteUpdate(to) {
    this.img_index = Math.floor(Math.random() * 4) + 2;
    this.fetchEvent(to.params.id);
  },
  data() {
    return {
      img_index: Math.floor(Math.random() * 4) + 2,
    };
  },
};
</script>
<style>
  .event-img {

  }
</style>
