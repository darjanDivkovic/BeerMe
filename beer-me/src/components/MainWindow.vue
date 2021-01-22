<template>
    <div id='main-window-container'>
        <NavBar />
        <router-view></router-view>
    </div>
</template>

<script>
import NavBar from './NavBar'
export default {
    name: 'MainWindow',
    components: {
        NavBar,
    }
}
</script>

<style scoped>
#main-window-container {
    height: 85vh;
    width: 90%;
    background-color: #312F34;
    box-shadow: 0px 42px 40px 0px rgba(0,0,0,0.49);
    margin: 60px auto;
}
</style>