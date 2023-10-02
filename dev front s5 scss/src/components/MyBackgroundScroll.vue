<script>
export default{
    data(){
        return{
            percent:0
        }
    },
    methods: {
        handleScroll() {            
            let scrollTop = window.scrollY
            let scrollBottom = scrollTop + window.innerHeight
            let offsetTop = this.$refs.container.offsetTop
            let elementHeight = this.$refs.container.offsetHeight


            let percent = ((scrollBottom - offsetTop) / elementHeight *100);
            this.percent = Math.floor(percent)
            // console.log(`scrollTop: ${scrollTop}`, `scrollBottom: ${scrollBottom}`)
            console.log(offsetTop)
            // console.log(percent)
            
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll)
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll)
    }
}
</script>


<template>
    <div ref="container" class="backgroundScroll">
        <p class="backgroundScroll__content">Section Scroll : {{ percent }}</p>
    </div>
</template>




<style lang="scss" scoped>
.backgroundScroll {
    background: black;
    color: $white;
    height: 2000px;

    &__content {
        left: 0;
        top: 0;
        position: sticky;
        width: 100%;
    }

}
</style>