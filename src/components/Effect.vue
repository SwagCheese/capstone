<template>
    <div class="outer">
        <AnimateOnVisible name="fadeLeft" :duration="1">
            <div class="interview">
                <div>
                    <h1>How have my hobbies and extracurriculars affected me?</h1>
                    <ul v-for="(note, index) in effects" :key="index">
                        <li>{{note}}</li>
                    </ul>
                </div>
                <b-img src="./img/camping/lost_lake_mountain_vertical.jpg" class="image-contained"></b-img>
            </div>
        </AnimateOnVisible>
    </div>
</template>

<script>
export default {
    name: "Effect",
    props: ["effects"],
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

.outer {
  height: 105vh;
  background: linear-gradient(to bottom right, #d8d8d8, #f8f8f8);
}

.interview {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2vh 10px;
  height: 105vh;
  background: none;

  .image-contained {
    max-width: 30vw;
    max-height: 80vh;
    margin: 10px 4vw;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border: none;
  }

  h1 {
    font-size: 4rem;
    font-style: italic;
    font-weight: bold;
    padding-bottom: 10px;
  }
  
  li {
    font-size: 2.5rem;
    color: map-get($colors, secondary);
    padding-right: 2vw;
    width: 75%;
  }
}
</style>
