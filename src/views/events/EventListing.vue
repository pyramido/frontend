<template>
  <div class="p-featured">
    <div class="container">
      <h2>Les événements culturels</h2>
        <div class="form-inline">
        <b-button size="sm"
                  class="my-2 mr-sm-2"
                  type="submit">Rechercher</b-button>
        <b-form-input size="sm"
                      type="text"
                      class="mr-sm-2"
                      placeholder="Rechercher un mot clé" />

        <b-form-select v-model="selected"
                      size="sm"
                      class="mr-sm-2"
                      :options="categories" />
        <b-form-input class="form-search mr-sm-2"
                      size="sm"
                      type="date" />
      </div>
      <b-row>
        <b-col cols="12"
              md="4"
              lg="3"
              v-for="item in eventList"
              :key="item.id">
          <event-item v-bind="item" />
        </b-col>
      </b-row>
      <b-alert :show="!eventList.length" variant="info">
        Aucun événement.
      </b-alert>
      <b-row>
        <b-col cols="12" align="center">
          <b-button-group class="mx-1">
            <b-btn>Précédent</b-btn>
            <b-btn>Suivant</b-btn>
          </b-button-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import { helpers, GETTERS, ACTIONS } from "@/store/modules/api/types";
import EventItem from "@/components/events/EventItem";

export default {
  components: {
    EventItem
  },
  computed: helpers.mapGetters([GETTERS.eventList]),
  methods: helpers.mapActions([ACTIONS.fetchEventList]),
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
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.form-search {
  display: inline;
}
</style>
