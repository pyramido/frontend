<template>
  <b-container fluid>
    <b-row>
      <b-col align="center">
        <h1>Les événements culturels à aider</h1>
      </b-col>
    </b-row>
    <hr>
    <b-row>
      <b-col cols="2">
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Rechercher un mot clé" />
      </b-col>
      <b-col cols=1>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Rechercher</b-button>
      </b-col>
      <b-col cols=2>
        <b-form-select v-model="selected"
                       :options="categories"
                       class="mb-3" />
      </b-col>
      <b-col cols="4">
        <label> Date </label>
        <b-form-input class="form-search" type="date" style="width:80%" />
      </b-col>
    </b-row>
    <hr>
    <b-row>
      <b-col cols="12"
             md="4"
             lg="3"
             v-for="item in eventList"
             :key="item.id">
        <event-item v-bind="item" />
      </b-col>
    </b-row>
    <hr>
    <b-row>
      <b-col cols="12" align="center">
        <b-button-group class="mx-1">
          <b-btn>Précédent</b-btn>
          <b-btn>Suivant</b-btn>
        </b-button-group>
      </b-col>

    </b-row>
    <hr>
  </b-container>
</template>
<script>
import { helpers, GETTERS, ACTIONS } from '@/store/modules/api/types';
import EventItem from '@/components/events/EventItem';

export default {
  components: {
    EventItem,
  },
  computed: helpers.mapGetters([
    GETTERS.eventList,
  ]),
  methods: helpers.mapActions([
    ACTIONS.fetchEventList,
  ]),
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchEventList());
  },
  data() {
    return {
      selected: null,
      categories: [
        { value: null, text: "Catégorie d'événement" },
        { value: "Spectacle", text: "Spectacle" },
        { value: "musique", text: "Musique" },
        { value: "chant", text: "Chant" },
        { value: "théâtre", text: "Théâtre" }
      ],
    };
  }
};
</script>
<style lang="scss" scoped>
.form-search {
  display: inline;
}
</style>
