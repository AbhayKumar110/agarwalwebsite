// Hamburger Menu Toggle
document.getElementById('hamburgerMenu').addEventListener('click', function() {
    const verticalNavbar = document.getElementById('verticalNavbar');
    verticalNavbar.classList.toggle('show');
    verticalNavbar.classList.toggle('hide');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    const verticalNavbar = document.getElementById('verticalNavbar');
    verticalNavbar.classList.toggle('show');
    verticalNavbar.classList.toggle('hide');
});

// Chart.js Setup
var salesBarCtx = document.getElementById('salesBarChart').getContext('2d');
var salesBarChart = new Chart(salesBarCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Sales Volume',
            data: [500, 400, 700, 600, 800],
            backgroundColor: '#FF5733',
            borderColor: '#FF5733',
            borderWidth: 1
        }]
    }
});

var productionPieCtx = document.getElementById('productionPieChart').getContext('2d');
var productionPieChart = new Chart(productionPieCtx, {
    type: 'pie',
    data: {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [{
            label: 'Production Breakdown',
            data: [300, 200, 500],
            backgroundColor: ['#FF5733', '#33FF57', '#3357FF']
        }]
    }
});

var stockLineCtx = document.getElementById('stockLineChart').getContext('2d');
var stockLineChart = new Chart(stockLineCtx, {
    type: 'line',
    data: {
        labels: ['2021', '2022', '2023', '2024'],
        datasets: [{
            label: 'Stock Price Trend',
            data: [100, 110, 120, 130],
            borderColor: '#4bc0c0',
            fill: false
        }]
    }
});

var swiper = new Swiper('.about-carousel', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});

var aboutSwiper = new Swiper(".about-cards", {
    slidesPerView: 1,   // Show 1 card at a time on small screens
    spaceBetween: 10,   // Adjust spacing
    loop: true,         // Infinite scrolling
    autoplay: {         // Enable auto-slide
        delay: 3000,    // Slide every 3 seconds
        disableOnInteraction: false, // Keep autoplay active
    },
    pagination: {       // Enable pagination dots
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: { 
        768: {         // For larger screens
            slidesPerView: 3, // Show 3 cards at a time
            spaceBetween: 20,
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".about-carousel", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true, // Enables infinite sliding
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            hideOnClick: true, // Optional: hides buttons if clicked
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            // Adjust behavior based on screen size
            768: {
                slidesPerView: 3, // Show 3 slides for larger screens
                spaceBetween: 20,
                // Show navigation buttons for larger screens only
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            320: { // Mobile screen behavior
                slidesPerView: 1, // Default single slide view
                spaceBetween: 10,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
        },
    });

    // Conditionally hide navigation buttons based on number of slides or conditions
    const swiperWrapper = document.querySelector(".about-carousel .swiper-wrapper");
    const swiperPrevBtn = document.querySelector(".swiper-button-prev");
    const swiperNextBtn = document.querySelector(".swiper-button-next");

    // Check the number of slides
    if (swiperWrapper.children.length <= 1) {
        swiperPrevBtn.style.display = "none";
        swiperNextBtn.style.display = "none";
    } else {
        swiperPrevBtn.style.display = "block";
        swiperNextBtn.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".products-carousel", {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
});


