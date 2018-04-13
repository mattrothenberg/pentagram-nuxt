<template>
  <header class="pt-6">
    <div class="flex mb-8">
      <div class="flex-1">
        <h1 class="mb-2 text-black">Page Title</h1>
        <h2 class="text-grey-dark text-xl font-normal">Category</h2>
      </div>
      <p class="flex-1 text-lg leading-normal text-black">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium voluptatibus eum tenetur sapiente tempore
      </p>
    </div>
    <figure class="w-full" :style="computedStyle">

    </figure>
  </header>
</template>

<script>
export default {
  name: "page-header",
  props: ["color"],
  computed: {
    computedStyle() {
      return {
        backgroundColor: this.color
      };
    }
  }
};
</script>

<style scoped>
figure {
  height: 400px;
}
</style>
