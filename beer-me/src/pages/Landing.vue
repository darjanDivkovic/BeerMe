<template>
    <div id='landing-container'>
        <div id='landing-left'>
        <h1>Beer me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra magna..</p>

        <div id='explore-btn'>
        <router-link to='/products' id='back-text'>Explore Beer!</router-link>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </div>
        </div>
        <div id='landing-right'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src='@/assets/pint.png' id='pint'/>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Landing',
    methods: {
        ...mapActions(['fetchBeers']),
    },
    beforeMount() {
    this.fetchBeers()
    },
}
</script>

<style scoped>
@import '../styles/button.css';
@import '../styles/LandingPage.css';
</style>

