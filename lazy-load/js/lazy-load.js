const imagesLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold : 0.5, 
    rootMargin: "0px 0px 50px 0px",
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
      image.removeAttribute("data-src");
    };
  };

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver ((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);
    
    imagesLoad.forEach((img) => {
        observer.observe(img);
    });
}
else {
    imagesLoad.forEach((img) => {
        loadImages(img);
    });
}