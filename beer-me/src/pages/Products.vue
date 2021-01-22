<template>
    <div id='products-container'>
        <div v-for='beer in beers' v-bind:key="beer.id">
            <SingleBeer :name='beer.name' 
                        :imageUrl='beer.imageUrl'
                        :tagline='beer.tagline'/>
        </div>
    </div>
</template>

<script>
import SingleBeer from '../components/SingleBeer'
export default {
    name: 'Products',
    computed: {
        beers() {
            return this.$store.state.beers;
        }
    },
    components: {
        SingleBeer,
    }
}
</script>

<style scoped>
#products-container {
    color: #fff;
    width: 79%;
    height: 64vh;
    overflow: hidden;
    overflow-y: scroll;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

#products-container::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #CE8B2F; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #F0A700; 
}
</style>

