<template>
    <div class="w-full min-h-screen bg-black">
        <NavBar/>
        <FoodByCategory/>
    </div>
  </template>
  
  <script>
import NavBar from "../components/shared-components/NavBar.vue"
import FoodByCategory from "../components/shared-components/menus/FoodByCategory.vue"
  export default {
    data() {
      return {
        name: 'Home'
      }
    },
    components: {
        NavBar,
        FoodByCategory
    }
  }
  </script>
  
  <style>
  
  </style>
  