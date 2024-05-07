<template>
    <div class="outer">
        <AnimateOnVisible name="fadeLeft" :duration="1">
            <div class="interview">
                <b-img src="./img/mentor.jpg" class="image-contained"></b-img>
                <div>
                    <h1>My Interview with Marvin</h1>
                    <div v-for="(question, index) in interview" :key="index">
                            <h3>Q: {{question.question}}</h3>
                            <p>A:  {{question.answer}}</p>
                    </div>
                </div>
            </div>
        </AnimateOnVisible>
    </div>
</template>

<script>
export default {
  name: "Interview",
  props: ["interview"],
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
    padding: 2vh 0;
    height: 105vh;
    background: none;

    .image-contained {
        max-width: 100vw;
        max-height: 80vh;
        margin: 10px 5vw;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
        border: none;
    }

    h1 {
        font-size: 4rem;
        font-style: italic;
        font-weight: bold;
    }
  
    h3 {
        font-size: 2.5rem;
        color: map-get($colors, primary);
        padding-top: 1em;
    }
    
    p {
        font-size: 2rem;
        color: map-get($colors, secondary);
        padding-left: 2vw;
        width: 75%;
    }
}
</style>
