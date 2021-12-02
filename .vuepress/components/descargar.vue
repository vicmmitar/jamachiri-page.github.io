<template>
  <div class="container">
    <!-- <div v-if="getSO() == 'Linux' && !todosOpciones" class="d-flex justify-content-center">
      <div class="card text-center" style="width: 18rem">
        <img
          src="/img/Linux_logo.jpg"
          class="card-img-top w-50 mx-auto"
          alt="Linux logo"
        />
        <div class="card-body">
          <h5 class="card-title">Descarga lista</h5>
          <p class="card-text">Plataforma: Linux 64 bits</p>
          <a :href="direcciones.Linux" class="btn btn-primary" target="_blank">
            Descargar
          </a>
          <button class="btn btn-link" @click="todosOpciones = !todosOpciones">
            ¿Buscas otra plataforma?
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="getSO() == 'Windows' && !todosOpciones" class="d-flex justify-content-center">
      <div class="card text-center" style="width: 18rem">
        <img
          src="/img/Linux_logo.jpg"
          class="card-img-top w-50 mx-auto"
          alt="Linux logo"
        />
        <div class="card-body">
          <h5 class="card-title">Descarga lista</h5>
          <p class="card-text">Plataforma: Windows 64 bits</p>
          <a :href="direcciones.Windows" class="btn btn-primary" target="_blank"
            >Descargar</a
          >
          <button class="btn btn-link" @click="todosOpciones = !todosOpciones">
            ¿Buscas otra plataforma?
          </button>
        </div>
      </div>
    </div>

    <div v-else-if="!todosOpciones" class="d-flex justify-content-center">
      <div class="card text-center" style="width: 18rem">
        <img
          src="/img/Linux_logo.jpg"
          class="card-img-top w-50 mx-auto"
          alt="Linux logo"
        />
        <div class="card-body">
          <h5 class="card-title">Descarga lista</h5>
          <p class="card-text">Plataforma: Otro HTML</p>
          <a :href="direcciones.Html" class="btn btn-primary" target="_blank"
            >Descargar
          </a>
          <button class="btn btn-link" @click="todosOpciones = !todosOpciones">
            ¿Buscas otra plataforma?
          </button>
          <p class="mt-4">ó</p>
          <a href="/jugar-ahora/">Jugar en linea</a>
          
        </div>
      </div>
    </div> -->

    <div v-if="todosOpciones" class="d-flex justify-content-center">
      <div class="card text-center" style="width: 18rem">
        <img
          src="/img/Linux_logo.jpg"
          class="card-img-top w-50 mx-auto"
          alt="Linux logo"
        />
        <div class="card-body">
          <h5 class="card-title">Todas las descargas</h5>
          <p class="card-text mt-2 mb-0">Plataforma: Windows</p>
          <a :href="direcciones.Windows" class="btn btn-primary" target="_blank"
            >Descargar Windows
          </a>

          <p class="card-text mt-2 mb-0">Plataforma: Linux</p>
          <a :href="direcciones.Linux" class="btn btn-primary" target="_blank"
            >Descargar Linux
          </a>

          <p class="card-text mt-2 mb-0">Plataforma: Mac</p>
          <a :href="direcciones.Mac" class="btn btn-primary" target="_blank"
            >Descargar Mac
          </a>

          <p class="card-text mt-2 mb-0">Plataforma: Html</p>
          <a :href="direcciones.Html" class="btn btn-primary" target="_blank"
            >Descargar Html
          </a>
          <!-- <button class="btn btn-link" @click="todosOpciones = !todosOpciones">
            Detectar sistema operativo
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todosOpciones: true,
      opcion: "",
      direcciones: {
        Windows:
          "https://drive.google.com/file/d/1ij0iWLZfMjJgykYlzf6wrMs7Q9KuC5Lz/view?usp=sharing",
        Linux:
          "https://drive.google.com/file/d/1fQs5PV6bCqujb_1G0bKzlcFnY9DyC5kb/view?usp=sharing",
        Mac: "https://drive.google.com/file/d/1cTdzqQQ1XZ_yjltcwZrVQkBHph7Yj6dD/view?usp=sharing",
        Html: "https://drive.google.com/file/d/1DcizHTf8uxvp3j7vX06mdoSWY9tjDtJV/view?usp=sharing",
      },
    };
  },
  computed: {},
  methods: {
    /* getSO: function () {
      let soDep = navigator.platform;

      if (soDep.includes("Linux") && soDep.includes("arm")) {
        return "Android";
      } else {
        if (soDep.includes("Linux")) {
          return "Linux";
        } else {
          if (soDep.includes("Win32")) {
            return "Windows";
          }
        }
      }
    }, */
  },
};
</script>

<style>
</style>