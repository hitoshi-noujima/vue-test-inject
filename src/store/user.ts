import { reactive } from "vue";

interface userStateType {
  user: {
    id: number;
    name: string;
    age: number;
  };
}

export const userState = () => {
  const state = reactive({
    user: {
      id: 1,
      name: "Taro",
      age: 18,
    },
  }) as userStateType;

  return {
    state,
  };
};
