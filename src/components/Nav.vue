<template>
  <div id="nav">
    <div id="mobile-menu-overlay"></div>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          <picture>
            <source srcset="static/assets/images/logo.webp" type="image/webp">
            <source srcset="static/assets/images/logo.png" type="image/png">
            <img src="static/assets/images/logo.png" alt="Logo 12 RPL 1" style="width:50px;object-fit: cover;">
          </picture>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="mdi mdi-menu"> </i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div class="d-lg-none d-flex justify-content-between px-4 py-3 align-items-center">
            <img src="static/assets/images/logo-dark.svg" class="logo-mobile-menu" alt="Logo 12 RPL 1">
            <a href="javascript:;" class="close-menu"><i class="mdi mdi-close"></i></a>
          </div>
          <ul class="navbar-nav ml-auto align-items-center">
            <li class="nav-item active">
              <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#spesies">Spesies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#statistik">Statistik</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
