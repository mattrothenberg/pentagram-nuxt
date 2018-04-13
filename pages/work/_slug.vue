<template>
  <article>
    <div class="main" id="main" ref="main">
      <page-header :image="post.image"></page-header>
      <div class="main-content">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure omnis odio nostrum. Dolorem deleniti at ullam, officia fuga asperiores. Sequi ipsum fugiat accusamus quisquam fugit illum qui error itaque.</p>
      </div>
    </div>
    <h2 id="next-proj" ref="nextProjHeading" class="font-normal text-red text-md mb-4">Next Project</h2>
    <footer ref="footer" id="footer">
      <nuxt-link :to="upcomingPost.slug" class="no-underline">
        <page-header :image="upcomingPost.image"></page-header>
      </nuxt-link>
    </footer>
  </article>
</template>

<script>
import { mapGetters } from "vuex";
import PageHeader from "@/components/PageHeader";
import { TweenMax, TimelineLite, Power2 } from "gsap";
export default {
  name: "slug",
  transition: {
    css: false,
    enter(el, done) {
      TweenMax.set(el.querySelector(".main-content"), { opacity: 0 });
      TweenMax.to(el.querySelector(".main-content"), 0.5, {
        opacity: 1,
        onComplete: done
      });
    },
    afterEnter(el) {
      document.body.classList.toggle("transitioning");
    },
    beforeLeave(el) {
      document.body.classList.toggle("transitioning");
      document.getElementById("footer").classList.toggle("animating");
    },
    leave(el, done) {
      const footerOffset = () => {
        return -document
          .getElementsByTagName("footer")[0]
          .getBoundingClientRect().top;
      };

      const tl = new TimelineLite({ onComplete: done });
      tl.to(document.getElementById("next-proj"), 0.25, { opacity: 0 });
      tl.to(document.getElementById("main"), 0.5, { opacity: 0 });
      tl.to(
        document.getElementById("footer"),
        0.85,
        { y: footerOffset, ease: Power2.easeOut },
        0.5
      );
    }
  },
  components: {
    PageHeader
  },
  computed: {
    ...mapGetters(["nextPost", "getPostBySlug"]),
    post() {
      return this.getPostBySlug(this.$route.params.slug);
    },
    upcomingPost() {
      return this.nextPost(this.$route.params.slug);
    }
  }
};
</script>

<style>
.main-content {
  margin: 2rem 0 6rem;
}

.main-content p {
  font-family: "BLOKK";
  font-size: 2rem;
  color: config("colors.grey");
  opacity: 0.25;
  line-height: 1.45;
  margin-bottom: 1.5rem;
}

footer {
  max-height: 450px;
  overflow: hidden;
}

footer.animating {
  overflow: visible;
}

body.transitioning {
  min-height: 100vh;
}
</style>
