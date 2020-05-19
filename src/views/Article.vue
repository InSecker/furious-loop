<template>
  <div>
    <Header></Header>
    <img class="headerImg" :src="`${content.headerImage}`" alt="">
    <div class="content">
      <h2>{{content.title}}</h2>
      <div class="section" v-for="section in content.body" :key="section.content">
        <p v-if="!section.isImage" v-html="`${section.content}`"></p>
        <img v-else :src="`${section.image}`" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import data from '../assets/data.json'
export default {
  components: {
    Header,
  },
  data() {
    return{
      content: null,
    }
  },
  computed: {
    articleContent() {
      console.log(this.content)
      return this.content
    },
  },
  created() {
    this.content = data[this.$route.params.id - 1]
  }
}
</script>

<style scoped>
.headerImg{
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
img{
  width: 100%;
}
.content {
  background: white;
  border-radius: 20px;
  width: 100%;
  margin-top: 6vh;
  padding-top: 1em;
}
h2 {
  text-align: left;
  font-size: 1.6em;
  margin: 0 10px;
  color: #2C3950;
}
.section {
  margin: 0 10px;
  margin-top: 1em;
  line-height: 125%;;
}
p{
  text-align: left;
  color: #646E80;
}

  @media only screen and (min-width: 600px)  {
    .content {
      width: 50%;
      margin: 0 auto;
      border-radius: 10px;
      margin-top: 50vh;
    }
    .section {
      margin: 10px 20px;
      margin-top: 1em;
      line-height: 125%;;
    }
    h2 {
      margin: 10px 20px;
    }
  }
</style>