<template>
  <div class="container pt-0">
    <div class="row justify-content-center">
      <div
          v-for="image in images"
          :key="image.index"
           class="col-md-4">
        
        <img
          :src="image"
          @click="mostrar(image)"
          alt="Lightbox image 1"
          class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
        />
        <Modal v-show="showModal" @close="cerrar" :direccion="url" />
        
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "./modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      url: '',
      showModal: false,
      images: [
        "/galeria/creditos.png",
        "/galeria/historia.png",
        "/galeria/instrucciones.png",
        "/galeria/juego.png",
        "/galeria/juego2.png",
        "/galeria/menu_principal.png",
      ],
    };
  },
  methods: {
    mostrar(img) {
      this.url = img
      this.showModal = true;
    },
    cerrar() {
      this.url = ''
      this.showModal = false;
    },
  },
};
</script>

<style>
</style>