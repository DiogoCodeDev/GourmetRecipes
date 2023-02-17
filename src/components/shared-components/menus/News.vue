<template>
    <div class="my-12">
        <div class="flex items-center mb-8 w-full h-8">
            <img class="ml-44 mr-4 h-3 -rotate-90" :src="require('@/assets/imgs/arrow-icon.webp')" alt="" />
            <p class="font-semibold text-lg"> Ultimas Notícias </p>
        </div>
        <div class="flex flex-wrap items-center justify-center w-full h-auto">
            <div v-for="(options, i) in news" :key="i" class="mt-4 mb-4 mx-4 md:mx-6 bg-green-200">
                <div class="w-80 h-32" :style="{ backgroundImage: `url(${options.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
                </div>
                <div class="w-80 h-60 bg-neutral-100">
                    <h2 class="text-center pt-4 font-semibold">{{options.title}}</h2>
                    <h2 class="pt-4 font-semibold text-sm text-justify px-5">{{options.subtitle}}</h2>
                    <div class="flex justify-between w-full fixed mt-6">
                        <h2 class="font-semibold ml-4 text-center text-sm">Por: {{options.created}}</h2>
                        <h2 class="font-semibold text-sm text-justify mr-4">{{options.date}}</h2>
                    </div>
                </div>
                <button @click="navigateToLastNews" class="w-full h-12 bg-black hover:bg-yellow-300 duration-300 text-white hover:text-black">
                    <p class="font-semibold"> Ler matéria </p>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'News',
            options: []
        }
    },
    computed: {
        news() {
            return this.$store.state.restaurantsNews
        }
    },
    mounted(){
        this.prepareNewsArray();
    },
    methods: {
        prepareNewsArray(){
            this.options = this.$store.state.restaurantsNews;
            for (var i = 0; i < this.options.length; i++) {
                this.options[i].img = require(`@/assets/imgs/news/${this.options[i].img}.webp`);
            }
        },
        navigateToLastNews() {
            this.$router.push('/LastNews');
        }
    }
}
</script>

<style scoped>

</style>
