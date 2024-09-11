//  ====================================================================================================================================
let btnToggle = document.querySelector(".btn-navbar-toggler");
let listNav = document.querySelector(".box-navbar-nav");
let btnCloseNav = document.querySelector(".btn-close-nav");

document.addEventListener("DOMContentLoaded", () => {
  // createElement in Dom
  let layerScreen = document.createElement("div");
  layerScreen.className = "box-layer-screen";
  layerScreen.textContent = "";
  // تحديد المكان الذي تريد إضافة العنصر إليه، هنا نضيفه إلى body
  document.body.appendChild(layerScreen);
  let navbarComprehensive = document.querySelector(".box-navbar");
  layerScreen.remove();

  //   --------------------------------------------------
  btnToggle.onclick = () => {
    // console.log("btnToggle");
    listNav.classList.toggle("active");

    // ---------------------
    if (layerScreen && !navbarComprehensive.contains(layerScreen)) {
      navbarComprehensive.appendChild(layerScreen); // إعادة إضافة العنصر إلى DOM
      setTimeout(() => {
        layerScreen.classList.add("visible");
      }, 10); // تأخير بسيط للسماح بإعادة إضافة العنصر إلى DOM
    } else if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.toggle("visible");
    }
  };

  //   -----------------------------
  btnCloseNav.onclick = () => {
    console.log("btnCloseNav");
    listNav.classList.remove("active");

    //-------------------
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");

      setTimeout(() => {
        layerScreen.remove();
      }, 500); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  };

  // -------------------------------
  layerScreen.onclick = () => {
    console.log("layerScreen");
    listNav.classList.remove("active");
    if (layerScreen && navbarComprehensive.contains(layerScreen)) {
      layerScreen.classList.remove("visible");

      setTimeout(() => {
        layerScreen.remove();
      }, 500); // تأخير إزالة العنصر حتى تنتهي الانتقالية
    }
  };
});

// ----------------------------------------------------

// Navbar
// $(window).scroll(function () {
//   // console.log("Hello");
//   let wScroll = $(window).scrollTop();

//   if (wScroll > 50) {
//     $(".box-navbar").addClass("nav-sticky");


//   } else {
//     $(".box-navbar").removeClass("nav-sticky");
//   }
// });


// ---------------------------------------------------
function dt_counterFlip() {
  var $counterTop = $(".counterTop");

  // Check if .counterTop exists on the page
  if ($counterTop.length > 0) {
      var oTop = $counterTop.offset().top - window.innerHeight;
      var counterAnimated = false;  // Flag to ensure the counter animation only runs once
      
      $(window).scroll(function () {
          let wScroll = $(window).scrollTop();

          // Sticky navbar functionality
          if (wScroll > 50) {
              $(".box-navbar").addClass("nav-sticky");
          } else {
              $(".box-navbar").removeClass("nav-sticky");
          }

          // Counter animation functionality
          if (wScroll > oTop && !counterAnimated) {
              counterAnimated = true;  // Set flag to true after the first animation
              $(".count", ".counterTop").each(function () {
                  var $this = $(this);
                  var countTo = $this.text().replace(/,/g, ''); // Remove commas

                  $this.prop("Counter", 0).animate(
                      {
                          Counter: countTo,
                      },
                      {
                          duration: 5000,
                          easing: "swing",
                          step: function (now) {
                              $this.text(Math.ceil(now).toLocaleString()); // Add commas back
                          },
                      }
                  );
              });
          }
      });
  } else {
      console.warn(".counterTop element not found on this page.");
  }
}

$(document).ready(function () {
  dt_counterFlip();
});

$(window).scroll(function () {
  let wScroll = $(window).scrollTop();
  console.log('Scroll position:', wScroll);

  if (wScroll > 50) {
      console.log('Adding nav-sticky class');
      $(".box-navbar").addClass("nav-sticky");
  } else {
      console.log('Removing nav-sticky class');
      $(".box-navbar").removeClass("nav-sticky");
  }
});

// =========================================================================================
var swiper = new Swiper(".mySwiperProducts", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  loop:true,
  rtl:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
