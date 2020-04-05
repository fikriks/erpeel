<template>
  <div id="app">
    <nav v-if="tampilDiHome()" class="navbar navbar-expand-sm navbar-dark">
      <div class="container mt-3">
        <router-link to="/">
          <img :src="image" class="brand" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <font-awesome-icon icon="bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-auto">
              <router-link
                to="/"
                class="nav-link text-white text-uppercase font-weight-bold"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >Home</router-link
              >
            </li>
            <li class="nav-item mr-auto">
              <router-link
                to="/jadwal"
                class="nav-link text-white text-uppercase font-weight-bold"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >Jadwal Pelajaran</router-link
              >
            </li>
            <li class="nav-item mr-auto">
              <router-link
                to="/piket"
                class="nav-link text-white text-uppercase font-weight-bold"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >Jadwal Piket</router-link
              >
            </li>
            <li class="nav-item mr-auto">
              <router-link
                to="/siswa"
                class="nav-link text-white text-uppercase font-weight-bold"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >Daftar Siswa</router-link
              >
            </li>
            <li class="nav-item mr-auto">
              <router-link
                to="/struktur"
                class="nav-link text-white text-uppercase font-weight-bold"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >Struktur Organisasi</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <nav
      v-if="sembunyiDiHome()"
      class="navbar navbar-expand-lg navbar-light bg-light"
    >
      <div class="container mt-3">
        <router-link to="/">
          <img :src="image" class="brand-1" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <font-awesome-icon icon="bars" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-auto">
              <router-link
                to="/"
                class="nav-link text-uppercase font-weight-bold"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >Home</router-link
              >
            </li>
            <li class="nav-item mr-auto">
              <router-link
                to="/jadwal"
                class="nav-link text-uppercase font-weight-bold"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >Jadwal Pelajaran</router-link
              >
            </li>
            <li class="nav-item mr-auto">
              <router-link
                to="/piket"
                class="nav-link text-uppercase font-weight-bold"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >Jadwal Piket</router-link
              >
            </li>
            <li class="nav-item mr-auto">
              <router-link
                to="/siswa"
                class="nav-link text-uppercase font-weight-bold"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >Daftar Siswa</router-link
              >
            </li>
            <li class="nav-item mr-auto">
              <router-link
                to="/struktur"
                class="nav-link text-uppercase font-weight-bold"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                >Struktur Organisasi</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <svg
      v-if="sembunyiDiHome()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 200"
    >
      <path
        fill="#F8F9FA"
        fill-opacity="1"
        d="M0,64L48,74.7C96,85,192,107,288,96C384,85,480,43,576,42.7C672,43,768,85,864,128C960,171,1056,213,1152,197.3C1248,181,1344,107,1392,69.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
    </svg>
    <router-view />

    <footer>
      <div class="wave-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F8F9FA"
            fill-opacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,96C384,85,480,43,576,42.7C672,43,768,85,864,128C960,171,1056,213,1152,197.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <div class="bg-light">
          <div class="container">
            <div class="col-12 col-md-12">
              <img
                :src="image1"
                alt="Erpeel"
                class="img-fluid"
                style="height:100px;"
              />
              <br />
              <strong>XI RPL 1</strong>
              <br />
              <strong>SMK Negeri 4 Kuningan</strong>
              <br />
              <strong
                >Jl. Cikeusik No.73, Cikeusik, Cidahu, Kabupaten Kuningan, Jawa
                Barat</strong
              >
              <br />
              <br />
              <span class="p">
                &copy;2020 Powered By XI RPL 1 | Made With
                <font-awesome-icon icon="heart" />&nbsp;From Fikri Khairul
                Shaleh
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import image from "./assets/img/brand.png";
import image1 from "./assets/img/erpeel.png";

export default {
  data: function() {
    return {
      image: image,
      image1: image1
    };
  },
  methods: {
    tampilDiHome() {
      return this.$router.history.current["path"] === "/";
    },
    sembunyiDiHome() {
      return this.$router.history.current["path"] !== "/";
    }
  }
};
</script>
<style scope>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.brand {
  height: 25px;
  max-width: auto;
  object-fit: cover;
  filter: invert(100%);
}

.brand-1 {
  height: 25px;
  max-width: auto;
  object-fit: cover;
}

.navbar {
  background-color: #09f;
}

.wave-1 {
  position: relative;
}
</style>
