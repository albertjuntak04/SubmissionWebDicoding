class Hero extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="hero">
        <h1>Apa itu CoronaVirus?</h1>
        <p>Coronavirus atau virus corona merupakan keluarga besar virus yang menyebabkan infeksi saluran pernapasan
            atas ringan hingga sedang, seperti penyakit flu. Banyak orang terinfeksi virus ini, setidaknya satu kali
            dalam hidupnya.</p>
    </div>`;
    }
}

customElements.define("hero-display",Hero);