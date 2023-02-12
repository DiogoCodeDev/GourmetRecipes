<template>
    <div>
        <footer class="flex w-full bg-neutral-200">
            <div class="flex w-3/5 py-12">
                <section class="flex w-1/4 h-auto">
                </section>
                <section class="flex w-1/4 h-auto">
                    <ul class="w-full ml-8 flex flex-col">
                        <h2 class="mb-4 text-black font-semibold">Mapa do Site</h2>
                        <li v-for="(options, i) in optionFooter" :key="i" class="text-black mb-2 hover:font-semibold cursor-pointer delay-100 ease-in duration-100 font-normal">{{options.text}}</li>
                    </ul>
                </section>
                <section class="flex w-1/4 h-auto">
                    <ul class="w-full ml-8 flex flex-col">
                        <h2 class="mb-4 text-black font-semibold">Categorias</h2>
                        <li v-for="(options, i) in categoriesRecipes" :key="i" class="text-black mb-2 hover:font-semibold cursor-pointer delay-100 ease-in duration-100 font-normal">{{options.title}}</li>
                    </ul>
                </section>
                <section class="flex w-1/4 h-auto">
                    <ul class="w-full ml-8 lex flex-col">
                        <h2 class="mb-4 text-black font-semibold">Criador</h2>
                        <p class="mb-4"> {{ copyright.createdby }}</p>
                        <div v-for="(options, i) in copyright.socialmidias" :key="i">
                            <li class="text-black mb-2 hover:font-semibold cursor-pointer delay-100 ease-in duration-100 font-normal">{{options.text}}</li>
                        </div>
                    </ul>
                </section>
            </div>
            <div class="flex w-2/5 py-12">
                <section class="flex w-4/5 justify-center">
                    <div class="flex items-center h-20">
                        <img class="h-20" :src="require('@/assets/imgs/logo.webp')" alt="Logo Restaurant Generic"/>
                    </div>
                </section>
            </div>
        </footer>
    </div>
  </template>
  
  <script>
  export default {
    components: {
    },
    data() {
      return {
        name: 'NavBar',
        optionFooter: [],
        categoriesRecipes: [],
        copyright: {}
      }
    },
    mounted(){
      this.getFooteOptions();
    },
    methods: {
      getFooteOptions(){
        this.optionFooter = this.$store.state.siteMap;
        this.categoriesRecipes = this.$store.state.optionsNav;
        this.copyright = this.$store.state.copyright;
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  