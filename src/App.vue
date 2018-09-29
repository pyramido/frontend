<template>
    <div id="app">
        <Navbar/>

        <router-view/>
        <Footer/>
    </div>

</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default {
    name: 'App',
    components: {
        Footer,
        Navbar,
    },
};
</script>
<style lang="scss" scoped>
@import 'style/app.scss'

</style>
