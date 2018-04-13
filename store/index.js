import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: {
        foo: {
          image: "https://source.unsplash.com/1400x900/?nature",
          slug: "foo"
        },
        bar: {
          image: "https://source.unsplash.com/1400x900/?water",
          slug: "bar"
        },
        baz: {
          image: "https://source.unsplash.com/1400x900/?tech",
          slug: "baz"
        }
      }
    },
    getters: {
      getPostBySlug: state => id => state.posts[id],
      nextPost: state => slug => {
        const posts = Object.entries(state.posts);
        const matchingPostObject = posts.find(post => post[0] === slug);
        const indexOfMatchingPost = posts.indexOf(matchingPostObject);
        let indexOfNewPost;

        if (indexOfMatchingPost === posts.length - 1) {
          indexOfNewPost = 0;
        } else {
          indexOfNewPost = indexOfMatchingPost + 1;
        }

        return posts[indexOfNewPost][1];
      }
    },
    mutations: {}
  });
};

export default createStore;
