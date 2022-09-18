
<template>
  <!-- Navbar creation  -->
  <nav class="navbar navbar-expand-lg navbar-light">
    
    <NuxtLink to="/" class="navbar-brand cbr">Canberra Modern</NuxtLink>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom" aria-controls="navbarCustom" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarCustom">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/buildings" class="nav-link">Buildings</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/events" class="nav-link">Events</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/about" class="nav-link">About</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<style>
  li {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  }

  .cbr {
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  }

  nav {
    background-color: #7087C2;
  }
</style>