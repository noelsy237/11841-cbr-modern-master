<template>
	<div>
		<SiteNavigation />
		<div class="container">
			<h2>Buildings</h2>  
			<hr class="hr-class">
			<div class="building container-custom">
				<h4>The Top 20 Mid and Late Century Modern Buildings.</h4>
				<BuildingsList />
			</div>
		</div>
	</div>
</template>

<script>
// in this API call, we go get a specific building, filtered by the ID in the URL
// we access what is in the URL by using the params object
export default {
	async asyncData({ params }) {
		const building = await fetch(
			`http://cm.beneb.com/wp-json/wp/v2/buildings/`
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
	.hr-class {
        border-width: 3px;
        border-color: #F27075;
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