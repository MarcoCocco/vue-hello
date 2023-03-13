

const { createApp } = Vue

createApp({

    data() {
        return {

            title: 'Hello Vue!',
            titleClass: 'red',
            image: 'img/VueImg.png',
            imgClass: 'img',

        }
    }

}).mount('#app')