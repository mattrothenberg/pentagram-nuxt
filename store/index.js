import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [
        {
          image: "https://source.unsplash.com/1400x900/?nature",
          slug: "foo"
        },
        {
          image: "https://source.unsplash.com/1400x900/?water",
          slug: "bar"
        },
        {
          image: "https://source.unsplash.com/1400x900/?tech",
          slug: "baz"
        }
      ]
    },
    getters: {
      getPostBySlug: state => slug => {
        return state.posts.find(post => post.slug === slug);
      },
      nextPost: state => slug => {
        const currentPost = state.posts.find(post => post.slug === slug);
        const currentPostIndex = state.posts.indexOf(currentPost);
        let nextPostIndex;

        currentPostIndex === state.posts.length - 1
          ? (nextPostIndex = 0)
          : (nextPostIndex = currentPostIndex + 1);

        return state.posts[nextPostIndex];
      }
    },
    mutations: {}
  });
};

export default createStore;
