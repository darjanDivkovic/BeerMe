<template>
    <div id="navbar-container">
        <img src='../assets/logo.png' id='logo'/>
        <div class='links'
             v-bind:class="{ open: isOpen }">
           <router-link to='/'>Home</router-link> 
           <router-link to='/products'>Explore</router-link>
        </div>
        <Hamburger :toggle='toggle' :isOpen='isOpen'/>
    </div>
</template>

<script>
import Hamburger from './Hamburger'
export default {
    name: 'NavBar',
    components: {
        Hamburger,
    },
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggle: function(){
        console.log('I ran!')
        this.isOpen = !this.isOpen;
      }
    }
} 
</script>

<style scoped>
#navbar-container {
    width: 88%;
    margin: 0 auto;
    height: 120px;
    display: flex;
    align-items: center;
    position: relative;
}

#logo {
    height: 50px;
    margin-left: 50px;
}

.links {
    opacity: 0;
    position: absolute;
    top: 55px;
    right: 120px;
    transition: 0.2s all;
}

.links.open {
    opacity: 1;
}

.links a {
    color: #8E8C8D;
    text-decoration: none;
    font-weight: bold;
    font-size: 8px;
    letter-spacing: 2px;
    margin-right: 10px;
    text-transform: uppercase;
    padding: 5px 10px;
    transition: 0.2s all;
}

.links a:hover {
    color: #e7c272;
}
</style>