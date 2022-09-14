<template>
    <div>
        <SiteNavigation />
        <div class="container">
            <pre>{{ $data }}</pre>
        </div>
    </div>
</template>

<script>
    // in this API call, we go get a specifci building, filtered by the ID in the URL
    // we access what is in the URL by using the params object
    export default {
        async asyncData({ params }) {
            const about = await fetch(
                `http://cm.beneb.com/wp-json/wp/v2/events/`
            ).then((res) => {
                if (res.ok) {
                    return res.json()
                }
                throw new Error(res.status)
            })
            return { about }
        },
    }
    </script>