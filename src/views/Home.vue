<template xmlns:>
    <div id="home">
        <Carousel></Carousel>
        <hr>
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
                            button-text="Créer un événément"></UseCaseCard>
                </b-col>
                <b-col align="center">
                    <UseCaseCard
                            title="Entreprises locales"
                            description="Petit texte de description des entreprises : possibilité du site"
                            img="img/theatre-masks.png"
                            button-text="Parrainer un événément"></UseCaseCard>
                </b-col>
                <b-col align="center">
                    <UseCaseCard
                            title="Particuliers"
                            description="Petit texte de description des particuliers culturels : possibilité du site"
                            img="img/theatre-masks.png"
                            button-text="Participer à un événement"></UseCaseCard>
                </b-col>

            </b-row>
        </b-container>
        <hr>

        <div class="facebook_auth_button" @click="checkLoginState">
            <img src="/img/facebook-logo.png"/>
            <p>Connectez vous avec facebook</p>
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
