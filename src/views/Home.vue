<template>
  <div id="home">
    <div class="p-slider">
      <div class="p-slide"></div>
    </div>
    <div class="p-cards">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="p-card">
              <div class="row">
                <div class="p-left col-md-3">
                  <div><img src="/img/icons-10.png"/></div>
                </div>
                <div class="p-right col-md-9">
                  <h4>Acteurs culturels</h4>
                  <p>
                    Petit texte de description des acteurs culturels : possibilité du site
                  </p>
                </div>
              </div>
            </div>
            <div class="p-card">
              <div class="row">
                <div class="p-left col-md-3">
                  <div><img src="/img/icons-11.png"/></div>
                </div>
                <div class="p-right col-md-9">
                  <h4>Entreprises locales</h4>
                  <p>
                    Petit texte de description des entreprises : possibilité du site
                  </p>
                </div>
              </div>
            </div>
            <div class="p-card">
              <div class="row">
                <div class="p-left col-md-3">
                  <div><img src="/img/icons-12.png"/></div>
                </div>
                <div class="p-right col-md-9">
                  <h4>Particuliers</h4>
                  <p>
                    Petit texte de description des particuliers culturels : possibilité du site
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 right">
            <h2>Culture & cie connecte les événements culturels et les entreprises</h2>
            <p>
              Sed erat aequius Triarium aliquid de dissensione nostra iudicare. Praeteritis, inquit, gaudeo.
              Quae fere omnia appellantur uno ingenii nomine, easque virtutes qui habent, ingeniosi vocantur.
            </p>

            <div class="mockup">
              <img src="/img/mockup.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-featured">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>Événements en vedette</h2>
            <div class="p-items-container">
              <event-item v-for="item in eventList.slice(0, 4)"
                          :key="item.id"
                          v-bind="item"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { helpers, GETTERS, ACTIONS } from '@/store/modules/api/types';
import EventItem from '@/components/events/EventItem';

export default {
  components: {
    EventItem,
  },
  computed: helpers.mapGetters([GETTERS.eventList]),
  methods: helpers.mapActions([ACTIONS.fetchEventList]),
  beforeRouteEnter(to, from, next) {
    next(vm => vm.fetchEventList()
      .then(() => {
        vm.loading = false;
      }));
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>
