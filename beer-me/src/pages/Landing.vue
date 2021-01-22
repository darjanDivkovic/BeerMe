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
        <img src='../assets/pint.png' id='pint'/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Landing',    
}
</script>

<style scoped>
@import '../styles/button.css';
#landing-container {
    color: #fff;
    width: 75%;
    margin: 60px auto;
    display: flex;
    flex-direction: row;
}
#landing-left h1 {
    font-size: 100px;
    margin: 0;
    margin-top: 40px;
    color: #CE8B2F;
}

#landing-left p {
    width: 65%;
    margin-bottom: 0px;
    padding-left: 10px;
    color: #8E8C8D;
    font-size: 14px;
}
</style>

