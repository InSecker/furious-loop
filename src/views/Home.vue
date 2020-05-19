<template>
  <div>
    <Header class="homeContainer"/>
    <div class="content">
      <h1>Les courses les plus folles du monde !</h1>
      <h2>On a répertorié pour vous les articles les plus fous sur les courses les plus folles. Parce que nous aussi on est furieux de folies !</h2>
      <div class="button"><Button path="/listing" title="Decouvrir la liste des articles"></Button></div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import Button from '../components/Button'
export default {
  components: {
    Header,
    Button,
  }
}
</script>

<style scoped>
.button {
  margin: 1em auto;
  width: 80vw;
}

.homeContainer{
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 15.5%, rgba(0, 0, 0, 0) 48.22%), url('../assets/background.jpg');
  background-size: 100% auto;
  background-repeat: no-repeat;
  height: 60vh;
  width: 100%;
  z-index: -1;
}
.content {
  background: white;
  border-radius: 20px;
  width: 100%;
  height: 45vh;
  margin-top: -5vh;
}

h1 {
  font-size: 1.8em;
  margin: 0 10px;
    padding-top: 1em;
  color: #2C3950;
}

h2 {
  font-size: O.8em;
  padding-top: 10px;
  margin: 0 10px;
  color: #646E80;
}

@media only screen and (min-width: 600px)  {
  .homeContainer{
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 15.5%, rgba(0, 0, 0, 0) 48.22%), url('../assets/backgroundFull.jpg');
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
    z-index: -1;
  }

  .button {
    margin: 1em auto;
    width: 20vw;
  }

  .content {
    background: rgba(255,255,255,0.6);
    position: absolute;
    height: auto;
    right: 1em;
    top: 70vh;
    width: 45%;
    margin-top: 0;
    border-radius: 10px;
    padding: 1em;
  }
}

</style>