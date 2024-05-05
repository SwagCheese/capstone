<template>
  <section id="projects">
    <AnimateOnVisible name="fadeDown" :duration="1">
		<Title
		class="title"
		:title="title"
		:description="subtitle"
		/>
    </AnimateOnVisible>

    <div class="container-fluid center-block">
      <article class="content text-center">
    
		<AnimateOnVisible class="timeline mx-auto" v-for="(post, index) in projects" :key="index" name="fadeLeft" :duration="0.5">
            <a :href="post.link" target="_blank">
                <vue-timeline-update
                    :date="new Date(post.date)"
                    :title="post.title"
                    :description="post.description"
                    :thumbnail="post.image"
                    :color="post.color"
                    :category="post.category"
                    :icon="post.icon"
                />
            </a>
		</AnimateOnVisible>
      </article>
    </div>
  </section>
</template>

<script>
import Title from "./Title.vue";

export default {
  name: "Timeline",
  props: ['projects', 'title', 'subtitle'],
  components: {
    Title
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

$linear: map-get($colors, dark);

#projects {
  background-color: lighten(map-get($colors, primary), 5%);

}

.title {
  color: map-get($colors, light);
}

/deep/ .text-wrapper {
  &:after {
    border-bottom: 1px solid map-get($colors, dark);
  }
}

article .inner {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    z-index: 1;
}

.content {
    color: map-get($colors, light);
    margin-top: 30px;
    header {
        height: 100%;
        width: 70%;
    }
    h1{
        font-size: 3rem;
    }
}

.vertical-center {
    display: flex;
    align-items: center;
}

h1 {
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>
