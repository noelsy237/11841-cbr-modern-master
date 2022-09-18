<!-- 
<template>
  <div class="posts">
    <SiteNavigation />
    <main class="container">
    

      <div class="row">
       
        <div class="post col" v-for="post in posts" :key="post.id">
          <h3>
      
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

  </style> -->

  <template>
    <div>
        <SiteNavigation />
        <div class="container">
            <h2>{{ $route.params.slug }}</h2>
      
            
            <h2>{{  page[0].title.rendered  }}</h2>
            <hr class="hr-class">
            <div class="container-custom">
              <div v-html="renderedContent"></div>
            </div>
        </div>
    </div>
</template>

<script>
// in this API call, we load a page based off the URL paramter
// we access what is in the URL by using the params object
export default {
	async asyncData({ params }) {
		//page returns the data so we can access it below
		const page = await fetch(
			`http://cm.beneb.com/wp-json/wp/v2/pages/?slug=sample-page`
		).then((res) => {
			if (res.ok) {
				return res.json()
			}
			throw new Error(res.status)
		})
		//now we've got the data, lets create a new variable to hold just the rendered content
		let renderedContent = page[0].content.rendered;
		//return the renderedContent and the page content 
		return {renderedContent, page}
		
	},
}
</script>

<style>
  .hr-class {
      border-width: 3px;
      border-color: #343A40;

  }

  .container-custom {
      max-width: 700px;
	    margin: 0 auto;
    	text-align: center;
  }

  p {
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    h2, h4 {
        font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
    }
</style>