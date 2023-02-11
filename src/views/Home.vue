<template>
    <div class="w-full min-h-screen bg-black">
        <NavBar/>
    </div>
  </template>
  
  <script>
import NavBar from "../components/shared-components/NavBar.vue"
  export default {
    data() {
      return {
        name: 'Home'
      }
    },
    components: {
        NavBar
    }
  }
  </script>
  
  <style>
  
  </style>
  