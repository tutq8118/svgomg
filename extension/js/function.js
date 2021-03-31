document.querySelector(".preloader").addEventListener("click", function(e) {
    ga("send", "event", "preloader", "clicked"), this.className = "preloader active"
}), requestAnimationFrame(function() {
    requestAnimationFrame(function() {
        ["css/all.css", "https://fonts.googleapis.com/css?family=Roboto:400,700|Inconsolata"].forEach(function(e) {
            var t = document.createElement("link");
            t.rel = "stylesheet", t.crossorigin = !0, t.href = e, document.head.appendChild(t)
        })
    })
})