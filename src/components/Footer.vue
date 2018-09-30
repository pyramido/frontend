<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="container">

        <div class="row">
          <div class="col-md-4">

            <div class="logo">
              <img src="/img/logo.png" />
            </div>
          </div>

          <div class="col-md-8">
            <h2>
              La façon la plus simple d'obtenir des récompenses pour participer à des événements
              avec ses amis.
            </h2>

            <div class="p-btn">
              <a href="" class="btn btn-primary btn-lg">
                Découvrir des événements
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div class="footer-nav">

          <div>
            © culture & cie, 2018, tous droits réservés.
          </div>

          <ul class="p-ul-nav">
            <li><a :to="{ name: 'about' }">Accueil</a></li>
            <li><a :to="{ name: 'about' }">Coopérative</a></li>
            <li><a :to="{ name: 'about' }">Blogue</a></li>
            <li><a :to="{ name: 'about' }">Emploi</a></li>
            <li><a :to="{ name: 'about' }">Contact</a></li>
          </ul>

        </div>

      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',

};
</script>
