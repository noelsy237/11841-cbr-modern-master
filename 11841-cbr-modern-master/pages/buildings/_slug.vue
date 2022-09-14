<template>
	<div>
		<SiteNavigation />
		<div class="container">
			
			<div class="building">
				<!-- the buiding returns an array with one item in it, so need to reference it below -->
				<h2 class="building-title"><a :href="building[0].link">{{  building[0].title.rendered  }}</a></h2>
				
				<h4>Where is it located?</h4>
				<p>{{  building[0].title.rendered  }} is located at {{  building[0].acf.location  }}, {{  building[0].acf.suburb  }}, Canberra.</p>
				<h4>Who was/were the architects?</h4>
				<p>{{  building[0].title.rendered  }} was created and designed by {{  building[0].acf.architect[0].name  }} in {{  building[0].acf.year }}.</p>
				
				<!-- <ul>
					<li>Address: {{  building[0].acf.location  }}, {{  building[0].acf.suburb  }}</li>
					<li>Suburb: {{  building[0].acf.suburb  }}</li>
					<li>Architect: {{  building[0].acf.architect[0].name  }}</li>
				</ul> -->
				<!-- <pre>{{ $data }}</pre> -->
			</div>
		</div>
	</div>
</template>

<script>
// in this API call, we go get a specifci building, filtered by the ID in the URL
// we access what is in the URL by using the params object
export default {
	async asyncData({ params }) {
		const building = await fetch(
			// `http://cm.beneb.com/wp-json/wp/v2/buildings/143`
			// `https://cm.beneb.com/wp-json/wp/v2/buildings/?slug=high-court-of-australia`
			`http://cm.beneb.com/wp-json/wp/v2/buildings/?slug=${params.slug}`
		).then((res) => {
			if (res.ok) {
				return res.json()
			}
			throw new Error(res.status)
		})
		return { building }
	},
}
</script>

<style>
	.building-title {
		padding: 30px 0px 30px 0px;
	}
</style>