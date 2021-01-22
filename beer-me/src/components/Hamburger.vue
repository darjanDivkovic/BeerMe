<template>
    <div class="hamburger-container" 
         v-bind:class="{ open: isOpen }"
         v-on:click="toggle()">
        <span></span>
        <span></span>
        <span></span>
    </div>    
</template>

<script>
export default {
    name: 'Hamburger',
    data() {
    return {
      isOpen: true
    }},
    methods: {
      toggle: function(){
        console.log('I ran!')
        this.isOpen = !this.isOpen;
      }
    },
}
</script>

<style scoped>

.hamburger-container {
  width: 25px;
  height: 35px;
  margin-left: auto;
  margin-right: 50px;
  margin-top: 35px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;  
}

.hamburger-container span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #CE8B2F;
  border-radius: 12px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;  
}



.hamburger-container span:nth-child(1) {
  top: 0px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.hamburger-container span:nth-child(2) {
  top: 7px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.hamburger-container span:nth-child(3) {
  top: 14px;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

.hamburger-container.open span:nth-child(1) {
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

.hamburger-container.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.hamburger-container.open span:nth-child(3) {
  top: 17px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
</style>