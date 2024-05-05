<template>
    <section id="about">
        <AnimateOnVisible name="fadeDown" :duration="1">
            <Title :title="content.title" :description="content.subtitle" />
        </AnimateOnVisible>

        <AnimateOnVisible name="fadeRight" :duration="1">
            <div class="section-content">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <Photo :user="user"/>
                    </div>
                    <div class="row justify-content-center" style="padding: 0 10vw">
                            <Presentation :presentation="content.presentation"/>
                    </div>
                </div>
            </div>
        </AnimateOnVisible>
    </section>
</template>

<script>
    import Title from './Title.vue'
    import Presentation from './Presentation.vue'
    import Photo from './Photo.vue'

    export default {
        name: 'Profile',
        props: ['user', 'content'],
        components: {
            Title,
            Presentation,
            Photo
        },
    }
</script>

<style scoped lang="scss">
    @import '../styles/constants.scss';

    #about {
        background-color: lighten(map-get($colors, dark), 100%);
        text-wrap: wrap;
        min-height: 100vh;
    }
</style>
