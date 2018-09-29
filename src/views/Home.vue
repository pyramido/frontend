<template xmlns:>
  <div id="home">
    <Carousel/>
    <hr >
    <div class="card" align="center">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    <hr>
    <b-container fluid>
      <b-row>
        <b-col align="center">
          <UseCaseCard
            title="Acteurs culturels"
            description="Petit texte de description des acteurs culturels : possibilité du site"
            img="img/theatre-masks.png"
            button-text="Créer un événément"/>
        </b-col>
        <b-col align="center">
          <UseCaseCard
            title="Entreprises locales"
            description="Petit texte de description des entreprises : possibilité du site"
            img="img/theatre-masks.png"
            button-text="Parrainer un événément"/>
        </b-col>
        <b-col align="center">
          <UseCaseCard
            title="Particuliers"
            description="Petit texte de description
             des particuliers culturels : possibilité du site"
            img="img/theatre-masks.png"
            button-text="Participer à un événement"/>
        </b-col>

      </b-row>
    </b-container>
    <hr >
    <div @click="checkLoginState">Facebook Login</div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel';
import UseCaseCard from '@/components/UseCaseCard';

export default {
  name: 'Home',
  components: {
    Carousel,
    UseCaseCard,
  },
  methods: {
    checkLoginState() {
      /* eslint-disable */
      window.FB.login(function (response) {
        // Todo: Call api.pyramido.ca/v1/auth/login with {token: response.authResponse.accessToken}
        console.log(response);
      }, { scope: 'public_profile,email' });
    },
  },
};
</script>
