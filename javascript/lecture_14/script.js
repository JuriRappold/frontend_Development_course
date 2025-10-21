console.log("init intersectionObserver");

const images = document.querySelectorAll("img.lazy-image");

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show")
            observer.unobserve(entry.target)
        }
    })
}, observerOptions)

images.forEach(image => {
    observer.observe(image)
})