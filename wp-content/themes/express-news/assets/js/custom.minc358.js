jQuery(function(e){e("#preloader").delay(1e3).fadeOut(),e("#loader").delay(1e3).fadeOut("slow"),e(".four-column.carousel-wrapper").slick({autoplay:!1,autoplaySpeed:3e3,dots:!1,arrows:!0,adaptiveHeight:!0,slidesToShow:4,nextArrow:'<button class="adore-arrow slide-next fas fa-angle-double-right"></button>',prevArrow:'<button class="adore-arrow slide-prev fas fa-angle-double-left"></button>',responsive:[{breakpoint:1025,settings:{slidesToShow:4}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),e(".three-column.carousel-wrapper").slick({autoplay:!1,autoplaySpeed:3e3,dots:!1,arrows:!0,adaptiveHeight:!0,slidesToShow:3,nextArrow:'<button class="adore-arrow slide-next fas fa-angle-double-right"></button>',prevArrow:'<button class="adore-arrow slide-prev fas fa-angle-double-left"></button>',responsive:[{breakpoint:1025,settings:{slidesToShow:3}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),e(".two-column.carousel-wrapper").slick({autoplay:!1,autoplaySpeed:3e3,dots:!1,arrows:!0,adaptiveHeight:!0,slidesToShow:2,nextArrow:'<button class="adore-arrow slide-next fas fa-angle-double-right"></button>',prevArrow:'<button class="adore-arrow slide-prev fas fa-angle-double-left"></button>',responsive:[{breakpoint:1025,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),e(".one-column.carousel-wrapper").slick({autoplay:!1,autoplaySpeed:3e3,dots:!1,arrows:!0,adaptiveHeight:!0,slidesToShow:1,nextArrow:'<button class="adore-arrow slide-next fas fa-angle-double-right"></button>',prevArrow:'<button class="adore-arrow slide-prev fas fa-angle-double-left"></button>'}),e(".post-tabs-wrapper").each(function(a){e(this).find(".post-tab-container:not(:first-child)").hide(),e(this).find(".post-tabs li:not(:first-child) a").addClass("inactive")}),e(".post-tabs li a").click(function(){var a=e(this).attr("href");return e(this).closest(".post-tabs-wrapper").find(".post-tabs li a").addClass("inactive"),e(this).removeClass("inactive"),e(this).closest(".post-tabs-wrapper").find(".post-tab-container").hide(),e(this).closest(".post-tabs-wrapper").find(a).fadeIn("slow"),!1}),e(document).ready(function(){e(".menu-toggle").click(function(){e(".main-navigation .nav-menu").slideToggle(500,function(){"none"==e(this).css("display")&&e(this).css("display","")})})}),e(window).on("load resize",function(){1200>e(window).width()?e(".main-navigation").find("li").last().bind("keydown",function(a){9===a.which&&(a.preventDefault(),e("#masthead").find(".menu-toggle").focus())}):e(".main-navigation").find("li").unbind("keydown")});var a=e("#masthead .menu-toggle");a.on("keydown",function(o){var s=9===o.keyCode,t=o.shiftKey;a.hasClass("open")&&t&&s&&(o.preventDefault(),e(".main-navigation").toggleClass("toggled"),a.removeClass("open"))});var o=e(".navigation-search-wrap");e(".navigation-search-icon").click(function(e){e.preventDefault(),o.toggleClass("show"),o.find("input.search-field").focus()}),e(document).click(function(a){o.is(a.target)||o.has(a.target).length||e(".navigation-search-wrap").removeClass("show")}),e(".navigation-search-wrap").find(".search-submit").bind("keydown",function(a){9===a.keyCode&&(a.preventDefault(),e(".navigation-search-icon").focus())}),e(".navigation-search-icon").on("keydown",function(a){var o=9===a.keyCode,s=a.shiftKey;e(".navigation-search-wrap").hasClass("show")&&s&&o&&(a.preventDefault(),e(".navigation-search-wrap").removeClass("show"),e(".navigation-search-icon").focus())}),e(document).ready(function(){e("ul#newstick").endlessRiver({speed:100})});var s=e(".express-news-scroll-to-top");e(window).scroll(function(){e(window).scrollTop()>400?s.addClass("show"):s.removeClass("show")}),s.on("click",function(a){a.preventDefault(),e("html, body").animate({scrollTop:0},"300")})});