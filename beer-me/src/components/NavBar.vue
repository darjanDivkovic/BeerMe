<template>
    <div id="navbar-container">
        <img src='../assets/logo.png' id='logo'/>
        <Hamburger />
    </div>
</template>

<script>
import Hamburger from './Hamburger'
export default {
    name: 'NavBar',
    components: {
        Hamburger,
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
</style>