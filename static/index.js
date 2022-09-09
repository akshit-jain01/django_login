let movies = [{
        name: "Chardham Yatra",
        des: "Kedarnath Temple is a Hindu temple dedicated to Shiva. The temple is located on the Garhwal Himalayan range near the Mandakini river, in the state of Uttarakhand, India.",
        image: "https://cdn.dollsofindia.com/images/p/photography/photo-print-SR97_l.jpg"
    },

    {
        name: "Golden Triangle Tour",
        des: "India's golden triangle is a tourist circuit in India which connects the national capital New Delhi, Agra and Jaipur. The Golden Triangle is so called because of the triangular shape formed by the locations of Delhi, Uttar Pradesh and Rajasthan on a map.",
        image: "https://resources.stuff.co.nz/content/dam/images/4/y/o/9/i/9/image.related.StuffLandscapeSixteenByNine.1420x800.212cei.png/1599685199562.jpg"
    },

    {
        name: "Akshardham Temple",
        des: "Swaminarayan Akshardham is a Hindu temple, and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture.",
        image: "https://images7.alphacoders.com/481/thumb-1920-481040.jpg"
    },

    {
        name: "Golden Temple",
        des: "The Golden Temple (also known as the Harimandir Sahib, lit. 'abode of God',or the Darbār Sahib,or Suvaran Mandir[2]) is a gurdwara located in the city of Amritsar, Punjab, India.",
        image: "https://lh4.googleusercontent.com/jIcDOc2A9jYrISpRnIE4kQvlIgayp1BBlVQgCUn_Zb5gCt5P7esxiDjXkiBeFuJZluUg56K0a8wzaLO0i9wHYl7vDApZxtrueHFBd_2KKSrx8FkWPMUozF7j5SjTDSZBLvDwsvM"
    }
];

const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0; //track the current slide
const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }
    // create DOM elements
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    // attaching all the elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
    // setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
    //    setting elements classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
};
for (let i = 0; i < 3; i++) {
    createSlide();
}
setInterval(() => {
    createSlide();
}, 3000);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});
//   card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nxtBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth - 200;
    });
    preBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    });
});