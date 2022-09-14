<!-- anything in the index file will be on the home page -->
<template>
  <div class="posts">
    <SiteNavigation />
    <main class="container">
    

      <div class="row">
        <!-- here we loop through the posts -->
        <div class="post col" v-for="post in posts" :key="post.id">
          <h3>
            <!-- for each one of them, we’ll render their title, and link off to their individual page -->
            <a :href="`events/${post.slug}`">{{  post.title.rendered  }}</a>
          </h3>
          <div v-html="post.content.rendered"></div>
          <p v-html="post.slug"></p>
          <a :href="`events/${post.slug}`" class="readmore">Read more ⟶</a>
        </div>
      </div>
    </main>
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
  
  <style>

  </style>