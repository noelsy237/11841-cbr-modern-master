<!-- anything in the index file will be on the home page -->
<template>
  <div class="">
    <h2 class="is-title">Buildings</h2>

    <p>test</p>
  </div>


</template>
  
  <script>
  export default {
    computed: {
      posts() {
        return this.$store.state.posts;
      },
    },
    created() {
      this.$store.dispatch("getPosts");
    },
  };
  </script>
  