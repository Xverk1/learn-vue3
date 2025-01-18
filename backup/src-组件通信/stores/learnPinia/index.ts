import { defineStore } from "pinia";
// export const useLearnPiniaStore = defineStore("learnPinia", () => {
//   let money = 100;

//   function increment(state:any) {
//     state.money++;
//   }
//   return{money, increment}
// });

export const useLearnPiniaStore = defineStore(
  "learnPinia",
  // () => {
  //   let money = 100;

  //   function increment(state: any) {
  //     state.money++;
  //   }
  //   return { money, increment };
  // },
  {
    state() {
      return {
        money: 100,
      };
    },
    actions: {
      increment() {
        console.log(this.money++);
      },
    },
    getters: {
      bigMoney: state => state.money * 100,
    },
  }
);
