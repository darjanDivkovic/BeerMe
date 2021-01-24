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
        },
        getBeers(state){
            return state.beers
        }
    },
    mutations: {
        setBeers(state, data){
            state.beers = data
        }
    },
    actions: {
        async fetchBeers(context) {
            console.log('I raq!')
            await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
                 .then(res => {
                 const result = res.data.filter(beer => !beer.image_url.includes('keg'))
                 .map(beer => {
                     const { 
                         id, 
                         name, 
                         description, 
                         tagline,             
                         image_url: imageUrl,            
                         brewers_tips: brewersTips,
                         food_pairing
                        } = beer
                    const foodPairings = food_pairing.slice(0,3)
                    return {id, name, description, tagline, imageUrl, foodPairings, brewersTips}                    
                    })
                    context.commit('setBeers', result)
                })
        },
    }
});