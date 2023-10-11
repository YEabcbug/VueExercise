import { defineStore } from "pinia";
import {computed, ref} from 'vue'

export const useCounterStore = defineStore('counter',()=>{
    const count = ref(0)
    const double = computed(()=>count.value*2)
    function increment() {
        count.value++
    }
    
    function subtract() {
        count.value--
    }
    return {count,increment,subtract,double}
})
