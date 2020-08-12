class InformationPrevention extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML =` <div class="step-prevention">
        <div class="left-container">
            <img src="./src/static/images/cuci-tangan.jpg">
        </div>
        <div class="right-container">
            Jika Anda adalah pekerja komuter yang berada di dalam transportasi umum,
            akan sulit untuk menemukan air dan sabun. Anda bisa membersihkan tangan dengan
            hand sanitizer. Gunakan produk hand sanitizer dengan kandungan alkohol minimal 60% agar lebih
            efektif membasmi kuman.

            Cucilah tangan secara teratur, terutama sebelum dan setelah makan,
            setelah menggunakan toilet, setelah menyentuh hewan, membuang sampah,
            serta setelah batuk atau bersin. Cuci tangan juga penting dilakukan sebelum menyusui bayi atau
            memerah ASI.
        </div>
    </div>
    <div class="step-prevention">
        <div class="right-container">
            Cara pakai masker bedah yang benar adalah sisi berwarna pada masker harus menghadap ke luar,
            sementara sisi dalamnya yang berwarna putih menghadap wajah dan menutupi dagu, hidung, dan mulut.
            Sisi berwarna putih terbuat dari material yang dapat menyerap kotoran dan menyaring kuman dari
            udara.

            Meski tidak sepenuhnya efektif mencegah paparan kuman, namun penggunaan masker
            ini tetap bisa menurunkan risiko penyebaran penyakit infeksi, termasuk infeksi virus Corona.
            Penggunaan masker lebih disarankan bagi orang yang sedang sakit untuk mencegah penyebaran virus dan
            kuman, ketimbang pada orang yang sehat.
        </div>
        <div class="left-container">
            <img src="./static/images/masker.jpg">
        </div>

    </div>

    <div class="step-prevention">
        <div class="left-container">
            <img src="./static/images/olahraga.jpg">
        </div>
        <div class="right-container">
            Jika bosan dengan makanan yang dimasak sendiri, Anda bisa membeli makanan siap saji atau makanan
            di restoran melalui layanan pesan antar, namun pastikan makanan tersebut bersih dan sehat. Bila
            perlu,
            Anda juga menambah konsumsi suplemen sesuai anjuran dokter.

            Selain itu, rutin berolahraga, tidur yang cukup, tidak merokok, dan tidak mengonsumsi minuman
            beralkohol
            juga bisa meningkatkan daya tahan tubuh agar terhindar dari penularan virus Corona.
        </div>
    </div>`
    }
}

customElements.define("information-prevention",InformationPrevention);