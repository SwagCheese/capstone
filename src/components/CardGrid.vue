<script>
export default {
    name: "CardGrid",
    props: ['cards']
}
</script>

<template>
    <div style="margin: 2vh 0">
        <b-card-group class="justify-content-center">
            <div v-for="(card, index) in cards" :key="index" style="margin: 2vh 1vw" class="card-outer">
                <div class="card">
                    <b-card :img-src="card.image" :img-height="426" :img-alt="'Image of' + cards.title" class="front">
                        <h1>{{card.title}}</h1>
                    </b-card>
                    <b-card class="back">
                        <p>{{card.description}}</p>
                    </b-card>
                </div>
            </div>
        </b-card-group>
    </div>
</template>

<style scoped lang="scss">
@import "@/styles/constants.scss";

.card-outer {
  perspective: 1000px;
  &:hover {
    .card {
      transform: rotateY(180deg);
    }
  }
  
  .card {
    background-color: transparent;
    transition: transform 0.5s ease-in-out;
    transform-style: preserve-3d;
    
    .front, .back {
      position: absolute;
      -webkit-backface-visibility: hidden; /* Safari */
      backface-visibility: hidden;
    }
    
    .back {
      transform: rotateY(180deg);
      background-image: linear-gradient(to bottom right, #3e3e3e, #4e4e4e);
      color: white;
      
      p {
        font-size: 2.5rem;
        padding: 5%;
        text-align: justify;
      }
    }
    
    .front {
      // I have no idea why this is necessary, but it is
      transform: rotateY(0);
      
      h1 {
        font-size: 4.5rem;
        text-align: center;
        margin: 0;
        line-height: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}


@media (min-width: map-get($breakpoints, small)) {
    .card {
        width: 90vw;
        height: 90vw;
    }
}

@media (min-width: map-get($breakpoints, medium)) {
    .card {
        width: 45vw;
        height: 45vw;
    }
}

@media (min-width: map-get($breakpoints, large)) {
    .card {
        width: 30vw;
        height: 30vw;
    }
}
</style>
