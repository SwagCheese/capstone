<template>
    <section :style="{ height: fullPage ? '100%' : 'auto'}" id="skills">
        <AnimateOnVisible name="fadeDown" :duration="1">
            <Title :title="skills.title" :description="skills.description" />
        </AnimateOnVisible>

        <div class="section-content">
            <div class="container-fluid">
                <div class="row d-flex flex-wrap align-items-center">
                    <div class="col-md-2 m-auto pb-4" v-for="(item, index) in skills.listed" :key="index">
                        <AnimateOnVisible name="bounce">
                            <img id="imgLogo" class="img-responsive mx-auto d-block" :role="item.popup == null ? '' : 'button'" @click="item.popup == null ? '' : $bvModal.show('modal-' + item.popup)" :src="item.image" :alt="item.title"/>
                            <div id="divAlt" class="altCaption text-center">{{item.title}}</div>
                        </AnimateOnVisible>
                    </div>
                </div>
            </div>
        </div>
        
        <b-modal v-for="(post, index) in posts" :key="index" :id="'modal-' + post.title" :title="post.title" :hide-footer="true">
            <img :src="post.image" :alt="post.title" class="img-fluid">
            <p>{{post.description}}</p>
        </b-modal>
    </section>
</template>

<script>
    import Title from './Title.vue'

    export default {
        name: 'Skills',
        components: {
            Title,
        },
        props: ['skills', 'posts', 'fullPage']
    }
</script>

<style scoped lang="scss">
    @import '@/styles/constants.scss';

    #skills {
        background-color: lighten(map-get($colors, dark), 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    @media(min-width: #{map-get($breakpoints, medium)}) {
        .section-content {
            width: 80%;
            margin: 0 auto;
        }
    }

    img {
        max-width: 120px;
    }

    .altCaption{
        color: map-get($colors, secondary);
        margin-top: 1rem;
    }
</style>
