<template>
    <div>
        <div class="flex items-center w-full h-16 bg-neutral-200">
            <img class="ml-44 mr-4 h-3 -rotate-90" :src="require('@/assets/imgs/arrow-icon.webp')" alt="" />
            <p class="font-semibold"> Receitas mais procuradas </p>
        </div>
        <div class="flex items-center justify-center w-full h-auto bg-neutral-100">
            <div class="flex flex-wrap justify-center items-center w-5/6 h-auto">
                <div v-for="(options, i) in options" :key="i" class="w-56 mt-4 mb-5 md:mx-8 bg-neutral-200 transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105">
                    <div class="w-56 h-20" :style="{ backgroundImage: `url(${options.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
                    </div>
                    <div class="flex w-56 h-20">
                        <div class="w-4/6 h-20">
                            <h2 class="ml-4 pt-2 font-semibold">
                                {{ options.title }}
                            </h2>
                            <p class="text-xs ml-4 pt-1"><bold class="font-semibold">Por:</bold> {{ options.copy }}</p>
                            <p class="text-xs ml-4 pt-1"> {{ options.text }} </p>
                        </div>
                        <div class="flex flex-col items-center justify-center w-2/6 h-20">
                            <img class="w-5" :src="require('@/assets/imgs/like-icon.webp')" :alt="options.alt" />
                            <p>{{ options.likes }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'SoughAfterRecipes',
            options: []
        }
    },
    computed: {
        optionsRecipesMovie() {
            return this.$store.state.optionsRecipesMovie
        }
    },
    mounted(){
        this.prepareRecipesArray();
    },
    methods: {
        prepareRecipesArray(){
            this.options = this.$store.state.optionsRecipesMovie;
            for (var i = 0; i < this.options.length; i++) {
                this.options[i].bg = require(`@/assets/imgs/recipes/${this.options[i].bg}.webp`);
            }

            // relacionando 2 arrays pela key categoryType e atribuindo o texto que servirá como descrição
            const typeRecipes = this.$store.state.optionsNav; 
            this.options = this.options.map(itemB => {
            const itemA = typeRecipes.find(i => i.categoryType === itemB.categoryType);
            return {
                ...itemB,
                text: itemA ? itemA.title : ''
            };
            });
        }
    }
}
</script>

<style scoped>

</style>
