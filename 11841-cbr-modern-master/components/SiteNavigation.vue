
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    
    <NuxtLink to="/" class="navbar-brand">Canberra Modern</NuxtLink>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom" aria-controls="navbarCustom" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarCustom">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/buildings" class="nav-link">Buildings</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/events" class="nav-link">Events</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li> -->
      </ul>
    </div>
  </nav>