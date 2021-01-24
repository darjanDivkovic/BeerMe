<template>
    <div class="hamburger-container" 
         :class="{ open: isOpen }"
         @click="toggle()">
        <span></span>
        <span></span>
        <span></span>
    </div>    
</template>

<script>
export default {
    name: 'Hamburger',
    props: {
      toggle: Function,
      isOpen: Boolean,
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
  transform: rotate(0deg);
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
  transform: rotate(0deg);
  transition: .25s ease-in-out;  
}



.hamburger-container span:nth-child(1) {
  top: 0px;
  transform-origin: left center;
}

.hamburger-container span:nth-child(2) {
  top: 7px;
  transform-origin: left center;
}

.hamburger-container span:nth-child(3) {
  top: 14px;
  transform-origin: left center;
}

.hamburger-container.open span:nth-child(1) {
  top: -3px;
  transform: rotate(135deg);
}

.hamburger-container.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.hamburger-container.open span:nth-child(3) {
  top: 14px;
  transform: rotate(-135deg);
}
</style>