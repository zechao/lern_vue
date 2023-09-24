import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
    state: () => {
        return { sum: 0, school: "UIB", subject: "Vue" };
    },
    actions: {
        add(value) {
            this.sum += value;
        },
        sub(value) {
            this.sum -= value;
        },
        addOdd(value) {
            if (this.sum % 2 == 1) {
                this.sum += value;
            }
        },
        addWait(value) {
            setTimeout(() => {
                this.sum += value;
            }, 500);
        },
    },
    getters: {
        bigSum: (state) => {
            return state.sum * 10;
        },
    },
});
