<template>
  <div id="p-menu">
    <div class="container">
      <div class="p-logo">
        <img src="/img/logo.png" />
      </div>
      <div class="p-nav">
        <div class="top">
          <ul class="p-ul-nav">
            <li><router-link :to="{ name: 'about' }">Coopérative</router-link></li>
            <li><router-link :to="{ name: 'about' }">Blogue</router-link></li>
            <li><router-link :to="{ name: 'about' }">Emploi</router-link></li>
            <li><router-link :to="{ name: 'about' }">Contact</router-link></li>
          </ul>
        </div>

        <div class="primary">
          <ul class="p-ul-nav">
            <li><router-link :to="{ name: 'home' }">Accueil</router-link></li>
            <li><router-link :to="{ name: 'events' }">Événements</router-link></li>
            <li><router-link :to="{ name: 'account' }">Votre compte</router-link></li>
            <li class="new-event">
              <router-link :to="{ name: 'event-create' }">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="#FFFFFF" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                </svg>
                Créer un événement
              </router-link></li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>
