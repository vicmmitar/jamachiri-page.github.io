<template>
  <video-embed :titulo="Trailer" :url="dir" />
</template>

<script>
import videoEmbed from './video-embed.vue'

export default {
  components: { videoEmbed },
  data(){
      return{
          Trailer: "Video trailer del juego",
          dir: "https://www.youtube.com/embed/abdgyI0cVgA"
      }
  }

}
</script>

<style>

</style>