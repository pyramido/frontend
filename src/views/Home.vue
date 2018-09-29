<template>
  <div id="home">
      <Carousel/>
      <b-container fluid>
        <b-row>
          <b-col align="center"><UseCaseCard title="Acteurs culturels"
            description="Petit texte de description des acteurs culturels : possibilité du site"
            img="img/theatre-masks.png"
            buttonText="Créer un événément"/></b-col>
          <b-col align="center"><UseCaseCard title="Entreprises locales"
            description="Petit texte de description des entreprises : possibilité du site"
            img="img/theatre-masks.png"
            buttonText="Parrainer un événément"/></b-col>
          <b-col align="center"><UseCaseCard title="Particuliers"
            description="Petit texte de description des particuliers culturels : possibilité du site"
            img="img/theatre-masks.png"
            buttonText="Participer à un événement"/></b-col>

        </b-row>
      </b-container>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'; 
import UseCaseCard from '@/components/UseCaseCard.vue'; 


export default {
  name: 'home',
  components: {
    Carousel,
    UseCaseCard,
  },

};
</script>
