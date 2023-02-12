<template>
    <div>
        <div class="flex mt-4 items-center w-full h-16">
            <img class="ml-44 mr-4 h-3 -rotate-90" :src="require('@/assets/imgs/arrow-icon.webp')" alt="" />
            <p class="font-semibold text-lg"> Receitas mais procuradas </p>
        </div>
        <div class="flex items-center justify-center w-full h-auto">
            <div class="flex flex-wrap justify-center items-center w-5/6 h-auto">
                <div v-for="(options, i) in optionsRecipe" :key="i" class="w-56 mt-8 md:mx-6 bg-neutral-200 transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105">
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
                            <img class="w-5 cursor-pointer" @click="likeUserRecipe(i, optionsRecipe)" :src="require('@/assets/imgs/like-icon.webp')" :alt="options.alt" />
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
            optionsRecipe: []
        }
    },
    mounted(){
        this.prepareRecipesArray();
    },
    methods: {
        prepareRecipesArray(){
            this.optionsRecipe = this.$store.state.optionsRecipesMovie;
            for (var i = 0; i < this.optionsRecipe.length; i++) {
                this.optionsRecipe[i].bg = require(`@/assets/imgs/recipes/${this.optionsRecipe[i].bg}.webp`);
            }
            this.getTypeRecipe();
        },
        getTypeRecipe(){
            // relacionando 2 arrays pela key categoryType e atribuindo o texto que servirá como descrição
            const typeRecipes = this.$store.state.optionsNav; 
            this.optionsRecipe = this.optionsRecipe.map(itemB => {
            const itemA = typeRecipes.find(i => i.categoryType === itemB.categoryType);
            return {
                ...itemB,
                text: itemA ? itemA.title : ''
            };
            });
        },
        likeUserRecipe(index){
            const arrayRecipes = this.optionsRecipe;
            this.$store.dispatch('set_likeRecipe', {index, arrayRecipes});
            this.prepareRecipesArray();
        }
    }
}
</script>

<style scoped>

</style>
