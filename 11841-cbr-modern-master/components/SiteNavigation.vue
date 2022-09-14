<!-- this component can hold site navigation -->
<!-- if we put it here we can avoid having to repeat the code -->
<template>
	<nav class="navbar" id="navi-list">
    <div class="navlist">
      <NuxtLink to="/" class="listitem">Home</NuxtLink>
      <NuxtLink to="/about" class="listitem">About</NuxtLink>
      <NuxtLink to="/buildings" class="listitem">Buildings</NuxtLink>
    </div>
    
  </nav>
  
</template>
<script>

// const toggleButton = document.getElementById('toggle-button');
// const naviList = document.getElementById('navi-list');
	
// toggleButton.addEventListener('click', () => {
// 	naviList.classList.toggle('active');
// })

</script>

<style>


  .listitem {
    align-content: center;
    padding: 1em;
  }
  .listitem:hover {
    text-decoration: none;
  }

  .navbar {
    display: flex;
    /* list-style-type: none; */
    justify-content: center;
    flex-wrap: wrap;
    font-size: 32px;
    background-color: rgb(36, 37, 37);
    height: 70px;
  }


.navlist .listitem {
	display: inline-block;
	padding: 0px 10px;
  color: #e3e3e3;
	text-decoration: none;
  
}



.navbar a:hover {
	color: #696969;
	transition-duration: 0.5s;
}











	

	
	
@media all and (max-width: 430px) {
	.navlist {
    list-style-type: circle;
  }

	
}
</style>

