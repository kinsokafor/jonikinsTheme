// Template Name: Homely
// Template URL: https://techpedia.co.uk/template/homely
// Description: Homely - Real Estate HTML5 Template
// Version: 1.0.0
(function (window, document, $, undefined) {
  "use strict";
  // ==========================================================
  // Detect mobile device and add class "is-mobile" to </body>
  // ==========================================================

  // Detect mobile device (Do not remove!!!)
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(navigator.userAgent) ? true : false;

  // Add class "is-mobile" to </body>
  if (isMobile) {
    $("body").addClass("is-mobile");
  }

  var Init = {
    i: function (e) {
      Init.s();
      Init.methods();
    },
    s: function (e) {
      (this._window = $(window)),
        (this._document = $(document)),
        (this._body = $("body")),
        (this._html = $("html"));
    },
    methods: function (e) {
      Init.w();
      Init.BackToTop();
      Init.preloader();
      Init.smoothScroll();
      Init.dropdown();
      Init.intializeSlick();
      Init.formValidation();
      Init.contactForm();
      Init.videoPlay();
      Init.jsSlider();
    },
    w: function (e) {
      this._window.on("load", Init.l).on("scroll", Init.res);
    },
    BackToTop: function () {
      var btn = $("#backto-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > 300) {
          btn.addClass("show");
        } else {
          btn.removeClass("show");
        }
      });
      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: 0,
          },
          "300"
        );
      });
    },
    preloader: function () {
      setTimeout(function () {
        $('#ctn-preloader').addClass('loaded');
        // Una vez haya terminado el preloader aparezca el scroll
        $('body').removeClass('no-scroll-y');

        if ($('#ctn-preloader').hasClass('loaded')) {
          // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
          $('#preloader').delay(1000).queue(function () {
            $(this).remove();
          });
        }
      }, 3000);
    },
    smoothScroll: function () {
      if ($("body").hasClass("ui-smooth-scroll")) {
        // Not for mobile devices!
        if (!isMobile) {
          const Scrollbar = window.Scrollbar;
    
          class AnchorPlugin extends Scrollbar.ScrollbarPlugin {
            static pluginName = "anchor";
    
            onHashChange = () => {
              // Only handle smooth scroll if the hash is not managed by Vue Router
              if (!this.isVueManagedHash(window.location.hash)) {
                this.jumpToHash(window.location.hash);
              }
            };
    
            onClick = (event) => {
              const { target } = event;
              if (target.tagName !== "A") {
                return;
              }
              const hash = target.getAttribute("href");
              if (!hash || hash.charAt(0) !== "#" || this.isVueManagedHash(hash)) {
                return;
              }
              this.jumpToHash(hash);
            };
    
            jumpToHash = (hash) => {
              if (!hash) {
                return;
              }
              const { scrollbar } = this;
              const target = document.querySelector(hash);
              if (target) {
                scrollbar.scrollIntoView(target, {
                  offsetTop: parseFloat(target.getAttribute("data-offset")) || 0, // Set default offset
                });
              }
            };
    
            isVueManagedHash = (hash) => {
              // Logic to determine if Vue Router should manage this hash scroll
              return Boolean(document.querySelector(`[data-vue-router="${hash}"]`));
            };
    
            onInit() {
              window.addEventListener("hashchange", this.onHashChange);
              this.scrollbar.contentEl.addEventListener("click", this.onClick);
            }
    
            onDestroy() {
              window.removeEventListener("hashchange", this.onHashChange);
              this.scrollbar.contentEl.removeEventListener("click", this.onClick);
            }
          }
    
          // Usage
          Scrollbar.use(AnchorPlugin);
    
          // Initialize Smooth Scrollbar
          const bodyScrollBar = Scrollbar.init(document.querySelector("#scroll-container"), {
            damping: 0.06,
            renderByPixel: true,
            continuousScrolling: true,
            alwaysShowTracks: true,
          });
    
          // ScrollTrigger setup
          let scrollPositionX = 0,
            scrollPositionY = 0;
    
          bodyScrollBar.addListener(({ offset }) => {
            scrollPositionX = offset.x;
            scrollPositionY = offset.y;
          });
    
          bodyScrollBar.setPosition(0, 0);
          bodyScrollBar.track.xAxis.element.remove();
    
          // Handle nested scrollable elements with "tt-overflow" class
          if ($(".tt-overflow").length) {
            $(".tt-overflow").each(function () {
              const $this = $(this);
              if ($this[0].scrollWidth > $this[0].clientWidth || $this[0].scrollHeight > $this[0].clientHeight) {
                $this.on("wheel", (e) => e.stopPropagation());
              }
            });
          }
    
          // Prevent input[type=number] from scrolling on focus
          $("input[type=number]").on("focus", function () {
            $(this).on("wheel", (e) => e.stopPropagation());
          });
        }
      }
    },
    
    dropdown: function () {
      const selectedAll = document.querySelectorAll(".wrapper-dropdown");

      selectedAll.forEach((selected) => {
        const optionsContainer = selected.children[2];
        const optionsList = selected.querySelectorAll(
          "div.wrapper-dropdown li"
        );

        selected.addEventListener("click", () => {
          let arrow = selected.children[1];

          if (selected.classList.contains("active")) {
            handleDropdown(selected, arrow, false);
          } else {
            let currentActive = document.querySelector(
              ".wrapper-dropdown.active"
            );

            if (currentActive) {
              let anotherArrow = currentActive.children[1];
              handleDropdown(currentActive, anotherArrow, false);
            }

            handleDropdown(selected, arrow, true);
          }
        });

        // update the display of the dropdown
        for (let o of optionsList) {
          o.addEventListener("click", () => {
            selected.querySelector(".selected-display").innerHTML = o.innerHTML;
          });
        }
      });

      // check if anything else ofther than the dropdown is clicked
      window.addEventListener("click", function (e) {
        if (e.target.closest(".wrapper-dropdown") === null) {
          closeAllDropdowns();
        }
      });

      // close all the dropdowns
      function closeAllDropdowns() {
        const selectedAll = document.querySelectorAll(".wrapper-dropdown");
        selectedAll.forEach((selected) => {
          const optionsContainer = selected.children[2];
          let arrow = selected.children[1];

          handleDropdown(selected, arrow, false);
        });
      }

      // open all the dropdowns
      function handleDropdown(dropdown, arrow, open) {
        if (open) {
          arrow.classList.add("rotated");
          dropdown.classList.add("active");
        } else {
          arrow.classList.remove("rotated");
          dropdown.classList.remove("active");
        }
      }
    },

    // intializeSlick: function (e) {
    //   if ($(".category-slider").length) {
    //     $(".category-slider").slick({
    //       infinite: true,
    //       slidesToShow: 5,
    //       slidesToScroll: 1,
    //       arrows: false,
    //       centerPadding: '0px',
    //       centerMode: true,
    //       autoplay: true,
    //       dots: false,
    //       cssEase: 'linear',
    //       autoplaySpeed: 2000,
    //       responsive: [
    //         {
    //           breakpoint: 1199,
    //           settings: {
    //             slidesToShow: 4,
    //           },
    //         },
    //         {
    //           breakpoint: 992,
    //           settings: {
    //             slidesToShow: 3,
    //           },
    //         },
    //         {
    //           breakpoint: 768,
    //           settings: {
    //             slidesToShow: 2,
    //           },
    //         },
    //         {
    //           breakpoint: 492,
    //           settings: {
    //             slidesToShow: 2,
    //           },
    //         },
    //       ],
    //     });
    //   }
    //   if ($(".property-slider").length) {
    //     $(".property-slider").slick({
    //       infinite: true,
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       arrows: false,
    //       centerPadding: '0px',
    //       centerMode: true,
    //       autoplay: true,
    //       dots: true,
    //       cssEase: 'linear',
    //       autoplaySpeed: 2000,
    //       responsive: [
    //         {
    //           breakpoint: 1199,
    //           settings: {
    //             slidesToShow: 2,
    //           },
    //         },
    //         {
    //           breakpoint: 768,
    //           settings: {
    //             slidesToShow: 1,
    //           },
    //         }
    //       ],
    //     });
    //   }
    //   if ($(".testimonial-slider").length) {
    //     $(".testimonial-slider").slick({
    //       infinite: true,
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       arrows: false,
    //       centerPadding: '0px',
    //       centerMode: true,
    //       autoplay: true,
    //       dots: false,
    //       cssEase: 'linear',
    //       autoplaySpeed: 2000,
    //       responsive: [
    //         {
    //           breakpoint: 992,
    //           settings: {
    //             slidesToShow: 2,
    //           },
    //         },
    //         {
    //           breakpoint: 768,
    //           settings: {
    //             slidesToShow: 1,
    //           },
    //         }
    //       ],
    //     });
    //   }
    //   if ($(".team-slider").length) {
    //     $(".team-slider").slick({
    //       infinite: true,
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //       arrows: false,
    //       centerPadding: '0px',
    //       centerMode: true,
    //       autoplay: true,
    //       dots: false,
    //       cssEase: 'linear',
    //       autoplaySpeed: 2000,
    //       responsive: [
    //         {
    //           breakpoint: 1199,
    //           settings: {
    //             slidesToShow: 3,
    //           },
    //         },
    //         {
    //           breakpoint: 992,
    //           settings: {
    //             slidesToShow: 2,
    //           },
    //         },
    //         {
    //           breakpoint: 768,
    //           settings: {
    //             slidesToShow: 1,
    //           },
    //         }
    //       ],
    //     });
    //   }
    //   if ($(".house-detail-slider").length) {
    //     $(".house-detail-slider").slick({
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       arrows: false,
    //       fade: true,
    //       asNavFor: ".house-detail-slider-nav",
    //     });
    //   }
    //   if ($(".house-detail-slider-nav").length) {
    //     $(".house-detail-slider-nav").slick({
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //       asNavFor: ".house-detail-slider",
    //       dots: false,
    //       arrows: false,
    //       centerMode: false,
    //       focusOnSelect: true,
    //       responsive: [
    //         {
    //           breakpoint: 990,
    //           settings: {
    //             arrows: false,
    //           },
    //         },
    //         {
    //           breakpoint: 768,
    //           settings: {
    //             arrows: false,
    //             slidesToShow: 2,
    //           },
    //         },
    //       ],
    //     });
    //   }
    //   if ($(".logo-slider").length) {
    //     $(".logo-slider").slick({
    //       slidesToShow: 5,
    //       arrows: false,
    //       dots: false,
    //       infinite: true,
    //       autoplay: true,
    //       cssEase: "linear",
    //       autoplaySpeed: 0,
    //       speed: 6000,
    //       pauseOnFocus: false,
    //       pauseOnHover: false,
    //       responsive: [
    //         {
    //           breakpoint: 1399,
    //           settings: {
    //             slidesToShow: 4,
    //           },
    //         },
    //         {
    //           breakpoint: 992,
    //           settings: {
    //             slidesToShow: 3,
    //           },
    //         },
    //         {
    //           breakpoint: 768,
    //           settings: {
    //             slidesToShow: 2,
    //           },
    //         },
    //         {
    //           breakpoint: 580,
    //           settings: {
    //             slidesToShow: 1,
    //           },
    //         }
    //       ],
    //     });
    //   }

    // },
    // formValidation: function () {
    //   if ($(".contact-form").length) {
    //     $(".contact-form").validate();
    //   }
    // },
    // contactForm: function () {
    //   $(".contact-form").on("submit", function (e) {
    //     e.preventDefault();
    //     if ($(".contact-form").valid()) {
    //       var _self = $(this);
    //       _self
    //         .closest("div")
    //         .find('button[type="submit"]')
    //         .attr("disabled", "disabled");
    //       var data = $(this).serialize();
    //       $.ajax({
    //         url: "./assets/mail/contact.php",
    //         type: "post",
    //         dataType: "json",
    //         data: data,
    //         success: function (data) {
    //           $(".contact-form").trigger("reset");
    //           _self.find('button[type="submit"]').removeAttr("disabled");
    //           if (data.success) {
    //             document.getElementById("message").innerHTML =
    //               "<h3 class='bg-primary text-white p-3 mt-3'>Email Sent Successfully</h3>";
    //           } else {
    //             document.getElementById("message").innerHTML =
    //               "<h3 class='bg-primary text-white p-3 mt-3'>There is an error</h3>";
    //           }
    //           $("#message").show("slow");
    //           $("#message").slideDown("slow");
    //           setTimeout(function () {
    //             $("#message").slideUp("hide");
    //             $("#message").hide("slow");
    //           }, 3000);
    //         },
    //       });
    //     } else {
    //       return false;
    //     }
    //   });
    // },
    videoPlay: function () {
      $(".video .play-btn").on("click", function () {
        $(".video .img-box").hide("slow");
        $(".video .video-box").show("slow");
      });
    },
    jsSlider: function () {
      $(".js-slider").ionRangeSlider({
        skin: "big",
        type: "double",
        grid: false,
        min: 0,
        max: 100,
        from: 20,
        to: 80,
        hide_min_max: true,
        hide_from_to: true,
    });
    }
  }
  Init.i();
})(window, document, jQuery);
