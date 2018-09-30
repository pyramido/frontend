<template>
  <div id="app">
    <Navbar />
    <div class="page-container">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    Footer,
    Navbar,
  },
};
</script>
