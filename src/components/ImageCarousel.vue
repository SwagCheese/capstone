<script>
    export default {
        name: "ImageCarousel",
        props: ['images'],
    }
</script>

<template>
    <AnimateOnVisible name="fade" :duration="1">
        <b-carousel
                id="carousel-1"
                :interval="0"
                controls
                indicators
                style="background: black"
        >
            <b-carousel-slide class="carousel-slide" v-for="(image, index) in images" :key="index" img-height="50vh" img-width="100vw" :img-src="image.url">
                <div v-if="image.description" style="background-color: dimgrey; border-radius: 10px; padding: 10px; margin-bottom: 5px">
                    <h1>{{image.description}}</h1>
                </div>
            </b-carousel-slide>
        </b-carousel>
    </AnimateOnVisible>
</template>

<style scoped>
.carousel-slide {
    h1 {
        font-size: 2rem;
    }
    object-fit: cover;
    height: 90vh;
}
</style>
