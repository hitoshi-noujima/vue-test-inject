import { inject, InjectionKey } from "vue";
import { userState } from "./user";
import { productState } from "./product";

export function getStore() {
  return {
    user: userState(),
    product: productState(),
  };
}

export type storeType = ReturnType<typeof getStore>;

type storesKey = keyof storeType;

export const storeKey: InjectionKey<storeType> = Symbol("store");

// keyを引数で受け取って各stateを取得したい
export function useStore(storeName: storesKey) {
  const store = inject(storeKey);
  if (!store) {
    throw new Error(`Error`);
  }
  return store[storeName];
}
