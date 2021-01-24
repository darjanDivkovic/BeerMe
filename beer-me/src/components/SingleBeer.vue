<template>
    <div class="single-beer-container">
        <div class='beer-card-front'>
        <h1><span>{{tagline}}</span><br/>{{name}}</h1>
        <img :src='imageUrl'/>
        <hr/>
        <div class='back-text-holder'>
            <p>{{name}}</p>
        </div>
        <router-link class="link" :to="{name: 'product', params: { id: id }}">EXPLORE</router-link>
    </div>
    </div>
</template>

<script>
export default {
    name: 'SingleBeer',
    props: {
        id: Number,
        name: String,
        imageUrl: String,
        tagline: String,
    },
}
</script>

<style scoped>
.single-beer-container {
     height: 260px;
     margin: 40px 40px;
     text-align: right;
     font-size: 10px;
     text-transform: uppercase;
     font-weight: light;
     background-color: #262528;
     box-shadow: 0px 4px 20px 0px rgba(10,9,10,0.5);
     color: #958e92;
     position: relative;
     transition: 0.4s all;
     animation: appear 0.35s forwards;
}

@keyframes appear {
    0% {
        margin-top: 30px;
        opacity: 0;
    }    
    100% {
        margin-top: 15px;
        opacity: 1;
    }
}

.single-beer-container  hr {
    position: absolute;
    width: 40px;
    height: 15px;
    top: 125px;
    left: 50%;
    transform: translateX(-50%) rotate(90deg);
    box-shadow: 0px 0px 50px 0px rgba(216, 200, 166, 0.4)
}



.single-beer-container h1 {
    position: absolute;
    bottom: 0;
    right: 7px;
    font-size: 15px;
    padding-left: 6px;
    padding-right: 7px;
    z-index: 2;
    color: #CE8B2F;
}

.single-beer-container p {
    z-index: 0;
    font-size: 45px;
    color: rgba(163, 163, 163, 0.8);
    line-height: 0.8;
    opacity: 0.1;
    margin: 0;
}

.single-beer-container img {
    height: 120px;
    filter:brightness(0.6) contrast(0.9);
    position: absolute;
    top: 40px;
    border: none;
    z-index: 1;
    padding: 30px;
    padding-bottom: 0px;
    left: 50%;
    transition: 0.4s all;
    transform: translateX(-50%);
}

.beer-card-front h1 span {
    font-size: 8px;
    color: #8E8C8D;
    z-index: 1;
}

.back-text-holder {
    position: absolute;
    width: 99%;
    height: 180px;
    overflow: hidden;
    transition: 0.4s all;
}



.back-text-holder p {
    width: 100%;
    font-size: 45px;
    transition: 0.4s all;
}

.single-beer-container {
    overflow: hidden
}

.single-beer-container:hover {
    cursor: pointer;
    box-shadow: 0px 0px 40px 0 rgba(232, 195, 114, 0.8);
    z-index: 2;
    overflow: hidden;
    transform: scale(1.1);
}


.single-beer-container:hover img {
    height: 150px;
    margin-top: -20px;
    filter:brightness(1.2) contrast(1);
    z-index: 4;
}

.single-beer-container:hover .link {
    visibility: visible;
    opacity: 0.4;
}

.link {
    z-index: 4;
    position: absolute;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    font-weight: bold;
    padding: ;
    overflow: hidden;
    color: #fff;
    background-color: rgba(232, 195, 114, 0.4);
    text-decoration: none;
    padding: 130px 0;
    width: 200%;
    letter-spacing: 6px;
    text-align: center;
    font-size: 20px;
    transition: 0.4s all;
    opacity: 0;
}
</style>