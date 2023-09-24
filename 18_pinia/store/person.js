import { defineStore } from "pinia";

export const usePersonsStore = defineStore("persons", {
    state: () => {
        return { persons: [{ id: "001", name: "Zechao" }] };
    },
    actions: {
        addPerson(person) {
            console.log(person);
            this.persons.push(person);
        },
    },
});
