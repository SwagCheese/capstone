<script>
export default {
    name: "CollapseCard",
    props: {
        posts: {
            type: Object,
            required: true
        }
    },
}

</script>

<template>
    <div class="container-div">
        <AnimateOnVisible name="fadeLeft" :duration="1">
            <b-button v-for="(post, index) in posts" v-bind:key="index" v-b-toggle="'collapse-' + index" variant="primary">{{ post.title }}</b-button>
            <b-collapse v-for="(post, index) in posts" v-bind:key="index" :id="'collapse-' + index">
                <b-card
                    :title="post.title"
                    :img-src="post.image"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-2"
                >
                    <b-card-text>
                        {{ post.description }}
                    </b-card-text>
                    <b-button v-if="post.link" href="#" variant="primary">{{post.linkTitle}}</b-button>
                </b-card>
            </b-collapse>
        </AnimateOnVisible>
    </div>
</template>

<style scoped>

</style>
