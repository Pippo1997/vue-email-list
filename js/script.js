const { createApp } = Vue

createApp({
data() {
    return {
        arrayEmail: [],
        minimo: 1,
        massimo: 10,
    }
},
methods: {
    generateArray (){
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`, { params: { min: this.minimo, max: this.massimo}}).then((result) => {
            console.log(result.data.response);
        });
    }
}
}).mount('#app')