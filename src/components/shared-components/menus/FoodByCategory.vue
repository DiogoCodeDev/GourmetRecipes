  <template>
    <div>
      <div class="flex justify-between items-center w-full h-16 bg-yellow-200">
        <p class="ml-44 cursor-pointer font-semibold" @click="hiddeCategory()"> Receitas por categoria </p>
        <img class="h-3 cursor-pointer mr-28 duration-100" id="arrow" @click="hiddeCategory()" :src="require('@/assets/imgs/arrow-icon.webp')" alt=""/>
      </div>
      <transition name="slide-fade">
        <div v-if="showCategory === true" class="flex ease-in-out w-full justify-center items-center bg-neutral-50"
        :class="{ 'slide-fade-leave-active': showCategory == false }">
          <div v-for="(options, i) in category" :key="i" class="w-32 h-32 mx-4 text-center">
            <img class="mx-auto h-14 mt-6 cursor-pointer" :src="require(`@/assets/imgs/types-food/${options.icon}`)" :alt="options.alt"/>
            <p class="mt-2 text-black text-md cursor-pointer delay-100 hover:font-semibold">{{ options.title }}</p>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'FoodByCategory', 
        showCategory: true,
      }
    },
    computed: {
      category(){
        return this.$store.state.optionsNav
      }
    },
    methods: {
      hiddeCategory(){
        const arrowIcon = document.querySelector('#arrow');
        if(this.showCategory === true){
          this.showCategory = false
          arrowIcon.classList.add('rotate-180');
        }
        else{
          this.showCategory = true
          arrowIcon.classList.remove('rotate-180');
        }
      },
    }
  }
  </script>
  
  <style>

  .slide-fade-enter-active {
    transition: all .2s ease-in;
  }
  .slide-fade-leave-active {
    transition: all .2s ease-in;
  }

  .slide-fade-enter, .slide-fade-leave-to{
    opacity: 0;
    transform: translateY(-40px);
  }

  .slide-fade-leave, .slide-fade-enter-to{
    transform: translateY(3px);
  }

  </style>
  