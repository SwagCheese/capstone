<template>
  <div class="paragraph">
    <h3>{{presentation.title}}</h3>
    <div class="begin">{{presentation.first}}</div>
    <p>{{presentation.second}}</p>
  </div>
</template>

<script>
export default {
    name: 'Description',
    props: ['presentation']
}
</script>

<style scoped lang="scss">
    @import '@/styles/constants.scss';

    .paragraph {
        color: map-get($colors, primary);
        font-size: 2.5rem;
        .begin {
            color: map-get($colors, secondary);
            font-size: 2rem;
        }
    }
</style>
