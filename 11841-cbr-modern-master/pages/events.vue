<template>
    <div>
        <SiteNavigation />
        <div class="container">
            <h2>{{ $route.params.slug }}</h2>        
            <h2>Events</h2>
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
			`http://cm.beneb.com/wp-json/wp/v2/pages/?slug=videos`
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
        border-color: #F27075;
    }

    img {
        max-width: 100%;
        height: auto;
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

    body {
        background-color:#f6f6f6
    }
</style>