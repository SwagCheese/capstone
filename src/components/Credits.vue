<script>
    import Title from './Title.vue'
    
    export default {
        name: "Credits",
        props: ['people'],
        components: {
            Title
        }
    }
</script>

<template>
    <div class="container-div">
        <AnimateOnVisible name="fadeLeft" :duration="1">
            <Title title="Credits" description="Thanks to all the people who have helped me throughout my life."/>
            <b-card-group deck>
                <!-- TODO fix size of cards (ideally can fit a 2x4 or a 2x3 grid of cards)-->
                <b-card v-for="(person, index) in people" v-bind:key="index" :title="person.name" img-src="https://picsum.photos/300/400/?image=25" :img-alt="person.name" img-top style="max-height: 30vh;">
                    <b-card-text style="font-size: 2.1rem">
                        {{ person.description }}
                    </b-card-text>
                </b-card>
            </b-card-group>
        </AnimateOnVisible>
    </div>
</template>

<style scoped>
    .container-div {
        
        padding: 20px;
        height: 100vh;
    }
</style>
