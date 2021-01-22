<template>
    <div class="single-beer-container">
        <h1><span>{{tagline}}</span><br/>{{name}}</h1>
        <img :src='imageUrl'/>
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
     margin: 15px 15px;
     border-top-left-radius: 23px;
     text-align: right;
     font-size: 10px;
     text-transform: uppercase;
     font-weight: light;
     box-shadow: 0px 4px 20px 0px rgba(10,9,10,1);
     color: #8E8C8D;
     position: relative;
     transition: 0.25s all;
}
.single-beer-container h1 {
    position: absolute;
    bottom: 0;
    right: 7px;
    font-size: 12px;
    padding-left: 7px;
    z-index: 1;
    color: #CE8B2F;
}

.single-beer-container img {
    height: 120px;
    position: absolute;
    top: 40px;
    border: none;
    z-index: 0;
    padding: 30px;
    padding-bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: inset 0px 10px 20px 0px rgba(0, 0, 0, 0.6);
}

.single-beer-container h1 span {
    font-size: 8px;
    color: #8E8C8D;
    z-index: 1;
}



.single-beer-container:hover {
     box-shadow: 0px 4px 20px 0px rgba(232, 195, 114, 0.8);
     cursor: pointer;
}
</style>