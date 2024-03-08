// var swiper = new Swiper(".popular-content", {
//     spaceBetween: 30,
//     centeredSlices: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pegination: {
//         el: ".swiper-pegination",
//         clickable: true
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// })

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoitns: {
        280: {
            slidesperview: 2,
            spacebetween: 10
        },
        320: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        510: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 15,
        }


    }
});
const swiper2 = new Swiper('.swipertwo', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-nexttwo',
        prevEl: '.swiper-button-prevtwo',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoitns: {
        280: {
            slidesperview: 2,
            spacebetween: 10
        },
        320: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        510: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        758: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 4,
            spaceBetween: 15,
        }


    }
});


const slider = new Swiper('.slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    }
});
