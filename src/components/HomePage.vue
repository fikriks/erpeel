<template>
  <div class="container mt-5">
    <div class="col-12 text-left mt-5">
      <strong>BERAGAM MACAM</strong>
      <br />
      <span class="font-weight-bold h3 text-uppercase">Jenis Spesies</span>
      <hr />
    </div>
    <div class="row">
      <div class="col-12 col-md-4" data-aos="fade-down">
        <figure>
          <img
            src="../assets/img/game.png"
            alt="Game"
            class="img-fluid w-100"
          />
          <figcaption>
            <strong class="text-uppercase font-weight-bold">Kang Game</strong>
          </figcaption>
        </figure>
      </div>

      <div class="col-12 col-md-4" data-aos="fade-down">
        <figure>
          <img
            src="../assets/img/molor.png"
            alt="Molor"
            class="img-fluid w-100"
          />
          <figcaption>
            <strong class="text-uppercase font-weight-bold">Kang Molor</strong>
          </figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-4" data-aos="fade-down">
        <figure>
          <img
            src="../assets/img/jajan.png"
            alt="Jajan"
            class="img-fluid w-100"
          />
          <figcaption>
            <strong class="text-uppercase font-weight-bold">Kang Jajan</strong>
          </figcaption>
        </figure>
      </div>

      <div class="col-12 col-md-4" data-aos="fade-up">
        <figure>
          <img
            src="../assets/img/ghibah.png"
            alt="Ghibah"
            class="img-fluid w-100"
          />
          <figcaption>
            <strong class="text-uppercase font-weight-bold">Kang Ghibah</strong>
          </figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-4" data-aos="fade-up">
        <figure>
          <img
            src="../assets/img/selfie.png"
            alt="Selfie"
            class="img-fluid w-100"
          />
          <figcaption>
            <strong class="text-uppercase font-weight-bold">Kang Selfie</strong>
          </figcaption>
        </figure>
      </div>
      <div class="col-12 col-md-4" data-aos="fade-up">
        <figure>
          <img
            src="../assets/img/nonton.png"
            alt="Nonton"
            class="img-fluid w-100"
          />
          <figcaption>
            <strong class="text-uppercase font-weight-bold">Kang Nonton</strong>
          </figcaption>
        </figure>
      </div>
    </div>
    <div class="col-12 mt-5 p-5">
      <div class="text-left">
        <strong>STATISTIK</strong>
        <br />
        <img
          src="../assets/img/brand.png"
          alt="Erpeel"
          class="img-fluid"
          style="height:30px;max-width:auto;object-fit:cover;"
        />
      </div>
      <hr />
      <div class="row">
        <div class="col-12 col-md-4" data-aos="zoom-in">
          <figure>
            <img src="../assets/img/group.png" />
            <figcaption>
              <span class="h4 font-weight-bold text-uppercase">Murid</span>
              <h4>37 Murid</h4>
            </figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-4" data-aos="zoom-in">
          <figure>
            <img src="../assets/img/laki.png" />
            <figcaption>
              <span class="h4 font-weight-bold text-uppercase">Laki Laki</span>
              <h4>25 Siswa</h4>
            </figcaption>
          </figure>
        </div>
        <div class="col-12 col-md-4" data-aos="zoom-in">
          <figure>
            <img src="../assets/img/cewe.png" />
            <figcaption>
              <span class="h4 font-weight-bold text-uppercase">Perempuan</span>
              <h4>12 Siswi</h4>
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="pt-5 mt-5 text-left">
        <strong>INILAH KAMI</strong>
        <br />
        <img
          src="../assets/img/brand.png"
          alt="Erpeel"
          class="img-fluid"
          style="height:30px;max-width:auto;object-fit:cover;"
        />
        <hr />
        <div id="carouselId" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselId" data-slide-to="0" class="active"></li>
            <li data-target="#carouselId" data-slide-to="1"></li>
            <li data-target="#carouselId" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img
                src="../assets/img/1.jpg"
                alt="First slide"
                class="img-fluid w-100"
                style="height:520px;object-fit:cover;"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/2.jpg"
                alt="Second slide"
                class="img-fluid w-100"
                style="height:520px;object-fit:cover;"
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/img/3.jpg"
                alt="Third slide"
                class="img-fluid w-100"
                style="height:520px;object-fit:cover;"
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselId"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselId"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>
