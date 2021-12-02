<template>
  <video-embed :titulo="Trailer" :url="dir" />
</template>

<script>
import videoEmbed from './video-embed.vue'

export default {
  components: { videoEmbed },
  data(){
      return{
          Trailer: "Video mini corto del juego",
          dir: "https://www.youtube.com/embed/H47TtABsyYw"
      }
  }

}
</script>

<style>

</style>