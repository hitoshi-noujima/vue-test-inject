<template>
  <p>{{ userState.user.age }}</p>
  <p>{{ productState.product.price }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store/index";

export default defineComponent({
  name: "App",
  setup() {
    const { state: userState } = useStore("user");
    const { state: productState } = useStore("product");

    // エラー
    // TS2339: Property 'id' does not exist on type 'state | state'.
    // Property 'id' does not exist on type 'state'.
    // console.log(userState.user.age);
    // console.log(productState.product.price);

    return {
      userState,
      productState,
    };
  },
});
</script>
