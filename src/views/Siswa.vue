<template>
  <div class="con">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6">
          <img
            src="../assets/img/siswa.jpg"
            alt="Jadwal"
            class="img-fluid animated bounce"
            style="height:300px;object-fit:cover;"
          />
        </div>
        <div class="col-md-6 mt-5">
          <span class="h4 font-weight-bold">Daftar Siswa</span>
          <br />
          <img src="../assets/img/brand.png" alt="XI RPL 1" class="img-fluid" />
        </div>
      </div>
    </div>

    <div class="p-5 mt-5">
      <div class="mt-5 p-3"></div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#F8F9FA"
        fill-opacity="1"
        d="M0,288L48,245.3C96,203,192,117,288,112C384,107,480,181,576,181.3C672,181,768,107,864,90.7C960,75,1056,117,1152,112C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
    <div class="card p-2 bg-light border-0">
      <div class="card-body">
        <div data-aos="fade-up">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <th>No</th>
                <th>Nama</th>
              </thead>
              <tbody>
                <tr v-for="(z, y) in siswas" :key="z.id">
                  <td>{{ (y += 1) }}</td>
                  <td>{{ z }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#F8F9FA"
        fill-opacity="1"
        d="M0,288L48,245.3C96,203,192,117,288,112C384,107,480,181,576,181.3C672,181,768,107,864,90.7C960,75,1056,117,1152,112C1248,107,1344,53,1392,26.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      />
    </svg>
  </div>
</template>
<script>
let siswa = {
  data: [
    "Abdurrohman",
    "Ahmad Wahyudi",
    "Aldi Arifiana Putra",
    "Ali Abdurohman",
    "Agist Syaukul Zaziel",
    "Ananto Bayu",
    "Cahya Haerudin",
    "Dince Nur Fitriyyah",
    "Dede Kurniawan",
    "Dinar Febriyanti",
    "Fajar Budiman",
    "Fikri Khairul Shaleh",
    "Gusty Fachta Pratama",
    "Ima Mustika",
    "Lita Juliana",
    "Muhamad Ripa'i",
    "Muhammad Canang Prakarsa",
    "Muhammad Nanda Nugraha",
    "Muhammad Saefudin",
    "Muhammad Iman Pirmansah",
    "Muhammad Alvin Abiansyah",
    "Nalendra Arya Putra Pratama",
    "Naufal Fadhillah",
    "Nouvan Riski Ramadhan",
    "Nurhidayah",
    "Putri Wulandari",
    "Reishan Tridya Rafly",
    "Rima Amelia",
    "Riski Kurniawan",
    "Robi Anugrah Bhayangkara",
    "Siti Komariah",
    "Syelomita Agatha Manulang",
    "Tasya Latifatul Khoeriyah",
    "Touvan Oktoviana",
    "Tri Rahmatika",
    "Vanie Juniar Meidriani",
    "Yanuar Eka Susila"
  ]
};
export default {
  data() {
    return {
      siswas: siswa.data.sort()
    };
  }
};
</script>
