<template>
    <div>
        <nav class="flex w-full h-20 bg-neutral-100">
            <section class="flex justify-center w-2/5 h-20">
                <div class="flex items-center w-2/6 h-20">
                    <img class="h-14" :src="require('@/assets/imgs/logo.webp')" alt="Logo Restaurant Generic"/>
                </div>
            </section>
            <section class="flex items-center justify-end w-4/6 h-20">
                <ul class="flex items-center mr-16 justify-evenly w-4/5 h-8">
                  <li v-for="(options, i) in optionsNav" :key="i" class="text-black hover:text-yellow-500 cursor-pointer delay-100 ease-in duration-100 font-semibold">{{options.text}}</li>
                </ul>
            </section>
        </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'NavBar',
        optionsNav: []
      }
    },
    mounted(){
      this.getNavOptions();
    },
    methods: {
      getNavOptions(){
        this.optionsNav = this.$store.state.siteMap;
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  