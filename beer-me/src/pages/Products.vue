<template>
    <div id='products-container'>
        <div v-for='beer in beers' :key="beer.id">
            <SingleBeer 
                        :id='beer.id'
                        :name='beer.name' 
                        :imageUrl='beer.imageUrl'
                        :tagline='beer.tagline'
                        />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SingleBeer from '@/components/SingleBeer'

export default {
    name: 'Products',
    computed: {
        ...mapGetters(['getBeers']),
        beers() {
            return this.getBeers;
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
    width: 80%;
    height: 64vh;
    overflow: hidden;
    overflow-y: scroll;
    padding-top: 20px;
    margin: 0px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border-top: 1px solid rgba(10,9,10,0.3);
    border-bottom: 1px solid rgba(10,9,10,0.3);
}

#products-container::-webkit-scrollbar {
  width: 6px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #CE8B2F; 
  border: 1px solid rgba(10,9,10,0.5);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #F0A700; 
}
</style>

