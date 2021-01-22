<template>
    <div class="single-beer-container">
        <div class="beer-card-inner">
        <div class='beer-card-front'>
        <h1><span>{{tagline}}</span><br/>{{name}}</h1>
        <img :src='imageUrl'/>
        <div class='back-text-holder'>
            <p>{{name}}</p>
        </div>
        </div>
        <div class='beer-card-back'>
        <router-link to='/products/single'>Explore</router-link>
        </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'SingleBeer',
    props: {
        name: String,
        imageUrl: String,
        tagline: String,
    }
}
</script>

<style scoped>
.single-beer-container {
     height: 280px;
     margin: 15px 10px;
     text-align: right;
     font-size: 10px;
     text-transform: uppercase;
     font-weight: light;
     box-shadow: 0px 4px 10px 0px rgba(10,9,10,1);
     color: #958e92;
     position: relative;
     perspective: 1000px;
     transition: transform 0.4s;
     transition-delay: 0.6s;
     transform-style: preserve-3d;
}

.back-text-holder {
    margin-top: 60px;
    max-height: 110px;
    overflow: hidden;
}

.beer-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    transition: 0.6s all;
    transform-style: preserve-3d;
    box-shadow: 0 4px 1px 0 rgba(0,0,0,0.2);
    text-align: right;
}

.single-beer-container:hover{
    transform: rotateY(180deg);
}

.beer-card-front {
    transition: 0.2s all;
}

.beer-card-front:hover {
    opacity: 0;
}

.beer-card-front h1 {
    position: absolute;
    bottom: 0;
    right: 7px;
    font-size: 15px;
    padding-left: 7px;
    z-index: 1;
    color: #CE8B2F;
}

.beer-card-front p {
    width: 100;
    z-index: 0;
    font-size: 45px;
    color: rgb(88, 88, 88);
    line-height: 0.8;
    opacity: 0.1;
    margin: 0;
}

.beer-card-front img {
    height: 120px;
    position: absolute;
    top: 40px;
    border: none;
    z-index: 1;
    padding: 30px;
    padding-bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
}

.beer-card-front h1 span {
    font-size: 8px;
    color: #8E8C8D;
    z-index: 1;
}

.beer-card-front, .beer-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #262528;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.beer-card-back {
  color: white;
  transform: rotateY(180deg);
}


.single-beer-container:hover {
     cursor: pointer;
}
</style>