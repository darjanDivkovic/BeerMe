import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        beers: [],
    },
    getters: {
        getSingleBeer(state) {
            return id => state.beers.filter( beer => beer.id === id )[0]
            
            //console.log('id:',id)
            //console.log('state', state)
            //console.log('hey')
            //return { name: 'dace', id: 'macec'}
            //return store.state.beers.filter( beer => beer.id === id )[0] || {}
        }
    },
    mutations: {
        fetchBeers() {
            console.log('I raq!')
            axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
                 .then(res => this.state.beers = res.data.map(beer => {
                     console.log('beer', beer)
                     const id = beer.id                     
                     const name = beer.name
                     const description = beer.description
                     const brewersTips = beer.brewers_tips
                     const tagline = beer.tagline
                     const firstBrewed = beer.first_brewed
                     const imageUrl = beer.image_url
                     const volume = beer.volume
                     const foodPairings = beer.food_pairing
                     //console.log('beer:',id, name,tagline, firstBrewed, imageUrl, volume)
                     return {
                         id, 
                         name, 
                         description, 
                         tagline, 
                         firstBrewed, 
                         imageUrl, 
                         volume, 
                         foodPairings,
                         brewersTips,
                        }
                    }))
            /*
                const beerList = [
                {id: 1, name: 'Tuzlak'},
                {id: 2, name: 'Pan'},
                {id: 3, name: 'Ozujssss'},
                {id: 1, name: 'Tuzlak'},
                {id: 2, name: 'Pan'},
                {id: 3, name: 'Ozujssss'},
                {id: 1, name: 'Tuzlak'},
                {id: 2, name: 'Pan'},
                {id: 3, name: 'Ozujssss'},
            ];
            this.state.beers = beerList
            */
        }
    }
});