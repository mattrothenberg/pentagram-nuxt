<template>
  <article>
    <div class="main" ref="main">
      <page-header :color="post.header"></page-header>
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
    <h2 ref="nextProjHeading" class="font-normal text-red text-md mb-4">Next Project</h2>
    <footer ref="footer">
      <a href="#" @click="handleNavigate" class="no-underline">
        <page-header :color="upcomingPost.header"></page-header>
      </a>
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
    }
  },
  components: {
    PageHeader
  },
  methods: {
    handleNavigate(e) {
      e.preventDefault();
      this.fadeOutContent();
    },
    fadeOutContent() {
      document.body.classList.toggle("transitioning");
      this.$refs.footer.classList.toggle("animating");

      const footerOffset = () => {
        return -document
          .getElementsByTagName("footer")[0]
          .getBoundingClientRect().top;
      };

      const cb = () => {
        this.$router.push(this.upcomingPost.slug);
        window.scroll(0, 0);
        document.body.classList.toggle("transitioning");
        this.$refs.footer.classList.toggle("animating");
      };

      const tl = new TimelineLite({ onComplete: cb });
      tl.to(this.$refs.nextProjHeading, 0.25, { opacity: 0 });
      tl.to(this.$refs.main, 0.5, { opacity: 0 });
      tl.to(
        this.$refs.footer,
        0.85,
        { y: footerOffset, ease: Power2.easeOut },
        0.5
      );
    }
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
  font-size: 1.25rem;
  line-height: 1.45;
  margin-bottom: 1.5rem;
}

footer {
  max-height: 250px;
  overflow: hidden;
}

footer.animating {
  overflow: visible;
}

body.transitioning {
  min-height: 100vh;
}
</style>
