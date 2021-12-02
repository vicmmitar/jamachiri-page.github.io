<template>
  <video-embed :titulo="Trailer" :url="dir" />
</template>

<script>
import videoEmbed from './video-embed.vue'

export default {
  components: { videoEmbed },
  data(){
      return{
          Trailer: "Video AR Como lo hice",
          dir: "https://www.youtube.com/embed/dErTB2AtbZI"
      }
  }

}
</script>

<style>

</style>