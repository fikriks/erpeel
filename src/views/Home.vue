<template>
  <div class="con">
    <div class="wave">
      <div class="container">
        <div class="row pt-5 justify-content-center">
          <div class="col-12 col-sm-4 col-6 col-lg-5 text-left">
            <strong class="text-uppercase">Selamat Datang,</strong>
            <h2 class="text-uppercase">Di Website XI RPL 1</h2>
            <small class="font-weight-bold"
              >Abdurohman | Ahmad Wahyudi | Ali Abdurrohman | Agist Syaukul
              Zaziel | Ananto Bayu | Aldi Arifiana Putra | Cahya Haerudin | Dede
              Kurniawan | Dince Nur Fitriyyah | Dinar Febriyanti | Fajar Budiman
              | Fikri Khairul Shaleh | Gusty Fachta Pratama | Ima Mustika | Lita
              Juniar | Muhammad Alfin Abiansyah | Muhammad Canang Prakarsa |
              Muhammad Nanda Nugraha | Muhammad Ripa'i | Muhammad Iman Pirmansah
              | Muhammad Saefudin | Nalendra Arya Putra Pratama | Naufal
              Fadhillah | Novan Riski Ramadhan | Nurhidayah | Putri Wulandari |
              Reishan Tridya Rafly | Rima Amelia | Riski Kurniawan | Robi
              Anugrah Bhayangkara | Siti Komariah | Syelomita Agatha Manulang |
              Tasya Latifatul Khoeriyah | Touvan Oktoviana | Tri Rahmatika |
              Vanie Juniar Meidriani | Yanuar Eka Susila</small
            >
          </div>
          <div class="col-12 col-md-6 mt-5">
            <div class="animated bounce" data-aos="zoom-in">
              <img
                src="../assets/img/logo.png"
                alt="Logo"
                class="img-fluid w-100"
              />
              <hr />
            </div>
          </div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="mt-5"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,64L30,90.7C60,117,120,171,180,165.3C240,160,300,96,360,96C420,96,480,160,540,165.3C600,171,660,117,720,122.7C780,128,840,192,900,213.3C960,235,1020,213,1080,181.3C1140,149,1200,107,1260,90.7C1320,75,1380,85,1410,90.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        />
      </svg>
    </div>
    <HomePage />
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/HomePage.vue";

export default {
  name: "Home",
  components: {
    HomePage
  }
};
</script>
