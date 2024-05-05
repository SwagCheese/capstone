<script>
export default {
    name: "DescribedImage",
    props: {
        images: {
            type: Array(String),
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <AnimateOnVisible name="fadeLeft" :duration="1">
        <div class="container-div">
                 <div>
                     <b-img v-for="(image, index) in images" v-bind:key="index" :src="image" fluid thumbnail class="image-contained"></b-img>
                 </div>
                <hr>
                <p>{{description}}</p>
        </div>
    </AnimateOnVisible>
</template>

<style scoped lang="scss">
.container-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

hr {
    width: 100%;
    border: 1px solid black;
}

.image-contained {
    max-width: 50vw;
    max-height: 40vh;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border: none;
}

p {
    font-size: 2.2rem;
    text-align: justify;
    padding: 5px 20vw;
}

</style>
