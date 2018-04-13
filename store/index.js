import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: {
        foo: {
          header: "#55E6C1",
          slug: "foo"
        },
        bar: {
          header: "#1B9CFC",
          slug: "bar"
        },
        baz: {
          header: "#D6A2E8",
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
