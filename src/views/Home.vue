<template>
    <div class="w-full min-h-screen bg-neutral-50">
        <NavBar/>
        <FoodByCategory/>
        <SoughtAfterRecipes/>
        <News/>
        <Footer/>
    </div>
  </template>
  
  <script>
import NavBar from "../components/shared-components/NavBar.vue"
import FoodByCategory from "../components/shared-components/menus/FoodByCategory.vue"
import SoughtAfterRecipes from "@/components/shared-components/menus/SoughtAfterRecipes.vue";
import News from "@/components/shared-components/menus/News.vue";
import Footer from "../components/shared-components/Footer.vue"
  export default {
    data() {
      return {
        name: 'Home'
      }
    },
    components: {
    NavBar,
    FoodByCategory,
    SoughtAfterRecipes,
    News,
    Footer
}
  }
  </script>
  
  <style>
  
  </style>
  