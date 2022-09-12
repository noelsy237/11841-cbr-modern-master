/*
this is where we will eventually hold the data for all of our posts
*/
export const state = () => ({
    posts: []
})
/*
this will update the state with the posts
*/
export const mutations = {
    updatePosts: (state, posts) => {
        state.posts = posts
    }
}
/*

actions is where we will make an API call that gathers the posts,
and then commits the mutation to update it
*/
export const actions = {
    async getPosts({ state, commit }) {
        if (state.posts.length) return
        try {
            let posts = await fetch(`http://cm.beneb.com/wp-json/wp/v2/pages/`
            ).then(res => res.json())
            posts = posts
                //filter out any posts which haven't been published
                .filter(el => el.status === "publish")
                //don't return everything, just what is relevant
                .map(({ id, slug, title, date, tags, content }) => ({
                    id,
                    slug,
                    title,
                    date,
                    tags,
                    content
                }))
            commit("updatePosts", posts)
        } catch (err) {
            console.log(err)
        }
    }
}