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
        optionsNav: [
        {
            path: '',
            text: 'Home', 
            icon: ''
          },  
        {
            path: '',
            text: 'Receitas', //vai conter receitas por categorias, jantar, lanche, bebidas, saudaveis, sobremesas, café da manhã
            icon: ''
          },
          {
            path: '',
            text: 'Favoritos', //vai se encaixar na categoria de favoritos da galera, onde 1 por categoria será o escolhido
            icon: ''
          },
          {
            path: '',
            text: 'Típicas', // algumas comidas tipicas de paises, selecionados por continente ou paises
            icon: ''
          },
          {
            path: '',
            text: 'Quem somos?', // um resumo sobre quem é Allan Diogo com direcionamento para o portifólio
            icon: ''
          }
        ] 
      }
    }
  }
  </script>
  
  <style>
  
  </style>
  