<template>
  <div class="wrapper">  
    <Header></Header>
    <div class="content">
      <h1>Liste des articles</h1>
      <h3>{{articleListLength}}</h3>
      <div class="articleContainer">
        <div class="article" v-for="article in articleList" :key="article.id">
          <router-link :to="`/article/${article.id}`">
            <h4>{{article.title}}</h4>
            <p v-html="`${article.body[0].content.substring(0,70)}`"></p>
          </router-link>
        </div>
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
      list: null,
    }
  },
  computed: {
    articleList() {
      return this.list
    },
    articleListLength() {
      return this.list.length > 1 ? this.list.length + " articles" : this.list.length + " article"
    }
  },
  created() {
    this.list = data
  }
}
</script>

<style scoped>
  .content {
    margin-top: 1em;
    background: white;
    border-radius: 20px 20px 0px 0px;
    text-align: left;
    padding: 2em 1em;
  }
  h1 {
    font-size: 1.6em;
    color: #2C3950;
  }
  h3 {
    font-size: O.8em;
    padding-top: 10px;
    color: #646E80;
  }
  h4 {
    font-size: 1.2em;
    color: #2C3950;
  }
  p {
    font-size: 0.8em;
    margin-top: 5px;
    color: #646E80;
  }
  .wrapper {
    background:  #2C3950;
  }
  .articleContainer {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .article {
    padding-top: 1em;
    width: 300px;
  }
  a {
    color: #2C3950;
    text-decoration: none;
  }

  @media only screen and (min-width: 600px)  {
    .content {
      width: 50%;
      margin: 0 auto;
      border-radius: 10px;
    }
    .wrapper {
      height: 100vh;
    }
    .articleContainer {
      display: block;
    }
    .article {
      width: 80%;
    }
  }
</style>