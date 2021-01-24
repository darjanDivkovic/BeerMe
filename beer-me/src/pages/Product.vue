<template>
    <div id='product-container'>
        <div id='product-upperSection'>
            <p class="heading">{{beer.name}}</p>
            <p class='tagline'>{{beer.tagline}}</p>
            <p class='description'>{{beer.description}}</p>
            <div class="product-food-container">
                <img src='@/assets/plate.png' class='food-icon' alt='*'/>
                <div v-for='pairing in beer.foodPairings' :key='pairing' class='fp-container'>
                    <p class="food-pairing">{{pairing}}</p>
                </div>
            </div>
             <img :src='beer.imageUrl' class='large-image' alt='*'/>
             <router-link to='/products' class='arrow'>
             ⬅
             </router-link>
            </div>
            <div id='product-lowerSection'>
            <p>"{{beer.brewersTips}}"</p>
        </div>
       <img src='@/assets/beerman-final.png' class="beerman">
    </div>
</template>

<script>
export default {
    name: 'Product',   
    computed: {
        beer () {
            return this.$store.getters.getSingleBeer(this.$route.params.id)
        },
    }
}
</script>

<style scoped>
@import '../styles/Product.css';

</style>

