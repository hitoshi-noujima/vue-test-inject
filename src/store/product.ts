import { reactive } from "vue";

interface productStateType {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

export const productState = () => {
  const state = reactive({
    product: {
      id: 1,
      name: "car",
      price: 1000,
    },
  }) as productStateType;

  return {
    state,
  };
};
