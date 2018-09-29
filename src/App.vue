<template>
    <div id="app">
        <Navbar/>

        <router-view/>
        <Footer/>
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
<style lang="scss" scoped>
@import 'style/app.scss'

</style>
