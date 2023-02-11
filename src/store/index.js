import { createStore } from 'vuex'

export default createStore({
  state: {
    optionsNav: [
      {
        title: 'Lanches', 
        path: '',
        icon: "pizza.webp",
        alt: '',
        categoryType: 1
      },
      {
        title: 'Sobremesas', 
        path: '',
        icon: "pudim.webp",
        alt: '',
        categoryType: 2
      },
      {
        title: 'Jantar', 
        path: '',
        icon: "jantar.webp",
        alt: '',
        categoryType: 3
      },
      {
        title: 'Saudável', 
        path: '',
        icon: "salada.webp",
        alt: '',
        categoryType: 4
      },
      {
        title: 'Bebidas', 
        path: '',
        icon: "bebida.webp",
        alt: '',
        categoryType: 5
      },
      {
        title: 'Café da manhã', 
        path: '',
        icon: "cafe.webp",
        alt: '',
        categoryType: 6
      },
      {
        title: 'Típicas', 
        path: '',
        icon: "feijoada.webp",
        alt: '',
        categoryType: 7
      }
    ] 
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
