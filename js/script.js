const { createApp } = Vue

createApp({
data() {
    return {
        minimo: 1,
        massimo: 10,
        arrayEmail: [],
    }
},
methods: {
    generateArray (){
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`, { params: { min: this.minimo, max: this.massimo}}).then((result) => {
            // console.log(result.data.response);
        });

        for (let i=0; i<10; i++){
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((result) => {
            this.arrayEmail.push(result.data.response)
            });
        }
        console.log(this.arrayEmail)
    }
}
}).mount('#app')