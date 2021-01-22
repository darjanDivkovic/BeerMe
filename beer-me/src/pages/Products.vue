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
    width: 83%;
    height: 64vh;
    overflow: hidden;
    overflow-y: scroll;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    border-top: 4px solid rgba(10,9,10,0.5);
    border-bottom: 4px solid rgba(10,9,10,0.5);
}

#products-container::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: rgba(10,9,10,0.5);
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

