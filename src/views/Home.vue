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
                <div class="col-md-4">
                  <img src="/img/icons-07.png"/>
                </div>
                <div class="col-md-8">
                  <h4>Acteurs culturels</h4>
                  <p>
                    Petit texte de description des acteurs culturels : possibilité du site
                  </p>
                </div>
              </div>
            </div>
            <div class="p-card">
              <div class="row">
                <div class="col-md-4">
                  <img src="/img/icons-08.png"/>
                </div>
                <div class="col-md-8">
                  <h4>Entreprises locales</h4>
                  <p>
                    Petit texte de description des entreprises : possibilité du site
                  </p>
                </div>
              </div>
            </div>
            <div class="p-card">
              <div class="row">
                <div class="col-md-4">
                  <img src="/img/icons-09.png"/>
                </div>
                <div class="col-md-8">
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
          </div>
        </div>
      </div>
    </div>
    <div class="p-featured">
      <div class="container">
        <h2>Événements en vedette</h2>

        <div class="p-items-container">
          <div class="p-item">
            <div class="p-thumbnail">
              <img src="https://placeimg.com/320/260/any?1"/>
              <div class="p-date">8 sept. 2018</div>
            </div>
            <h4>Un super titre</h4>
            <p>
              Non quam nostram quidem, inquit Pomponius iocans; Hoc dixerit potius Ennius...
            </p>
          </div>
          <div class="p-item">
            <div class="p-thumbnail">
              <img src="https://placeimg.com/320/260/any?2"/>
              <div class="p-date">8 sept. 2018</div>
            </div>
            <h4>Un super titre</h4>
            <p>
              Non quam nostram quidem, inquit Pomponius iocans; Hoc dixerit potius Ennius...
            </p>
          </div>
          <div class="p-item">
            <div class="p-thumbnail">
              <img src="https://placeimg.com/320/260/any?3"/>
              <div class="p-date">8 sept. 2018</div>
            </div>
            <h4>Un super titre</h4>
            <p>
              Non quam nostram quidem, inquit Pomponius iocans; Hoc dixerit potius Ennius...
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .facebook_auth_button {
        background: #4a90d9;
        width: 300px;
        height: 70px;
        padding: 10px;
        color: white;
        margin: 10px;
        font-family: sans-serif;
        font-size: 17px;
        font-weight: 300;
        box-shadow: 3px 3px 3px #A1A1A1;
        transition: box-shadow 0.3s, background 0.3s;
    }

    .facebook_auth_button:hover {
        box-shadow: 3px 3px 3px #616161;
        background: #4770D3;
    }

    .facebook_auth_button img {
        height: 50px;
        vertical-align: top;
        display: inline-block;
    }

    .facebook_auth_button p {
        width: 200px;
        display: inline-block;
        vertical-align: top;
        text-align: center;
    }
</style>

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
                }, {scope: 'public_profile,email'});
            },
        },
    };
</script>
