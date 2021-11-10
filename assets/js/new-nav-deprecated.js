(function() {
    function transformStart() {
        document.querySelector(".js-nav").classList.toggle("is-visible");
        document.querySelector("body").classList.toggle("overflow-hidden");
    }
    document.querySelector("#js-menu").addEventListener("click", transformStart);
})();
