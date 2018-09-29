<template>
  <div id="p-menu">
    <div class="container">
      <div class="p-logo">
        <img src="/img/logo.png" />
      </div>
      <div class="p-nav">
        <ul>
          <li><a :to="{ name: 'about' }">Accueil</a></li>
          <li><a :to="{ name: 'about' }">Coopérative</a></li>
          <li><a :to="{ name: 'about' }">Blogue</a></li>
          <li><a :to="{ name: 'about' }">Emploi</a></li>
          <li><a :to="{ name: 'about' }">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
};
</script>
