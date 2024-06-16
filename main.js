// Toggle & Responsive //
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector ("nav");

burger.addEventListener ("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");


});


};

navSlide ();


// Clear  Form Before unload //
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset ();
    }
};

// Setiap orang yang melakukan pelanggaran hak ekonomi percipta, termasuk pengadaptasian untuk penggunaan komersil tanpa izin, dapat dikenakan sanksi berupa pidana penjara paling lama 3 tahun dan/atau denda paling banyak 500 juta.//