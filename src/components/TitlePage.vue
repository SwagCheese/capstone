 <template>
  <header :style="{ backgroundImage: 'url(' + background + ')' }" class="header parallax">
    <div class="title">
      <div class="wrapper-title">
        <AnimateOnVisible name="fadeDown" :duration="1">
          <h1 :style="{padding: separator ? '32px' : 0}">{{ title }}</h1>
        </AnimateOnVisible>
        <hr v-if="separator"/>
        <AnimateOnVisible name="fadeUp" :duration="1">
          <div class="subtitle" v-html="subtitle.startsWith('<') ? subtitle : '<p>' + subtitle + '</p>'"></div>
        </AnimateOnVisible>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TitlePage",
  props: {
      title: String,
      subtitle: String,
      background: String,
      separator: {
          type: Boolean,
          default: true
      }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles/constants.scss";

.header {
  padding: 20px;
  background-color: map-get($colors, dark);
}

.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 400;

  h1 {
    font-size: 2.3rem;
    padding: 2px 10px;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 10px #000;
    color: whitesmoke;
  }

  .subtitle {
    font-size: 1.5rem;
    text-align: center;
    color: whitesmoke;
    text-shadow: 0 0 3px #000;
  }

  hr {
    border: 1px solid whitesmoke;
  }
}

@media (min-width: #{map-get($breakpoints, small)}) {
  .title {
    .wrapper-title {
      width: 100%;
    }
    h1 {
      font-size: 2.8rem;
      padding: 4% 8%;
    }
    .subtitle {
      font-size: 2rem;
    }
  }
}
@media (min-width: #{map-get($breakpoints, medium)}) {
  .title {
    .wrapper-title {
      width: 1000px;
    }
    h1 {
      font-size: 4rem;
      padding: 4% 10%;
    }
    .subtitle {
      font-size: 2.5rem;
    }
  }
}
@media only screen and (max-device-width: 1024px) {
  .parallax {
    background-attachment: scroll;
  }
}
</style>
