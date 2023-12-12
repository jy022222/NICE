//스크롤 부들럽게
const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


//gnb
$('.header .gnb ul .depth1').mouseover(function () {
  $('.header .gnb .depth2').addClass('show');
  $('.header').addClass('open')
});

$('.header').mouseleave(function () {
  $('.header .gnb .depth2').removeClass('show');
  $('.header').removeClass('open')
});

$('.header .depth1').hover(function () {
  leftOffset = $(this).position().left;
  w = $(this).find('span').outerWidth()
  $('.header .gnb > ul').css({
    "--barOffset": leftOffset + 'px',
    "--barWidth": w + 'px',
  })
})
let lastScroll = 0;
$(window).scroll(function () {
  current = $(this).scrollTop();
  if (current > lastScroll) {
    //내릴 때
    $('.header').addClass('hide');
    $('.header').removeClass('fixed');
  } else {
    //올릴 때
    $('.header').removeClass('hide');
    $('.header').addClass('fixed');
  }
  if (current == 0) {
    $('.header').removeClass('hide');
    $('.header').removeClass('fixed');
  }
  lastScroll = current;
})

$('.header .btn_allMenu').click(function () {
  $(this).toggleClass('on');
  $('.all_menu').toggleClass('show');
  $('.mask').toggleClass('active')
});

$('.all_menu .menu .depth1 > a').click(function (e) {
  e.preventDefault();
  if ($(this).hasClass('on')) {
    $('.all_menu .menu .depth1 a').removeClass('on').siblings('.depth2').stop().slideUp();
  } else {
    $('.all_menu .menu .depth1 a').removeClass('on').siblings('.depth2').stop().slideUp();
    $(this).addClass('on').siblings('.depth2').stop().slideDown();
  }
});

//intro
const introTl = gsap.timeline({})
introTl.to('.sc_intro .banner_wrap .banner_mask .mask', {
  transform: 'scale(0,1)',
  stagger: {
    from: "end",
    each: 0.1,
  }
})
introTl.to('.sc_intro .txt_wrap .big_txt .big_txt_line1 .txt_mask .txt', 1, {
  transform: 'translateX(0)'
})
introTl.to('.sc_intro .txt_wrap .big_txt .big_txt_line1 .desc .line_wrap .line_inner1', {
  transform: 'translateY(0)'
}, 'a')
introTl.to('.sc_intro .txt_wrap .big_txt .big_txt_line1 .desc .line_wrap .line_inner2', {
  transform: 'translateY(0)'
}, 'a+=0.2')
introTl.to('.sc_intro .txt_wrap .big_txt .big_txt_line1 .desc .line_wrap .line', 1, {
  width: 77
}, 'b')
introTl.to('.sc_intro .txt_wrap .big_txt .big_txt_line2 span', 1, {
  transform: 'translateX(0)'
}, 'b')

//record
ScrollTrigger.create({
  trigger: '.sc_record',
  start: "0% 50%",
  end: "100% 100%",
  //markers: true,
  onEnter: function () {
    const recordTl = gsap.timeline({})
    recordTl.to('.sc_record .title .tit_wrap .line_wrap:first-child .line_inner', 1, {
      transform: 'translateY(0)'
    }, 'a')
    recordTl.to('.sc_record .title .tit_wrap .line_wrap:nth-child(2) .line_inner', 1, {
      transform: 'translateY(0)'
    }, 'a+=0.2')
    recordTl.to('.sc_record .txt_desc .desc_inner', 1, {
      opacity: 1,
      transform: 'translateX(0)'
    }, 'a+=0.6')
  },
})
ScrollTrigger.create({
  trigger: '.sc_record',
  start: "0% 30%",
  end: "100% 100%",
  //markers: true,
  onEnter: function () {
    const recordTl2 = gsap.timeline({})
    recordTl2.to('.sc_record .data_area .stat_wrap1 .single_stat1 .line_wrap .char', 1, {
      transform: 'translateY(0)',
      stagger: 0.2,
    }, 'b')
    recordTl2.to('.sc_record .data_area .stat_wrap1 .single_stat2 .line_wrap .char', 1, {
      transform: 'translateY(0)',
    }, 'b')
    recordTl2.to('.sc_record .data_area .stat_wrap2 .single_stat3 .char', 1, {
      transform: 'translateY(0)',
    }, 'b')
    recordTl2.to('.sc_record .data_area .line_inner', 1, {
      transform: 'translateY(0)',
      stagger: 0.2,
    }, 'b')
  }
})

var countOptions = {
  useEasing: true,
  separator: ",",
  decimal: ".",
}

var countUp = new CountUp("number1", 0, 342, 0, 1, countOptions);
var countUp2 = new CountUp("number2", 0, 100, 0, 1, countOptions);

ScrollTrigger.create({
  trigger: '.sc_record',
  start: "0% 10%",
  end: "100% 100%",
  delay: 1,
  //markers: true,
  onEnter: function () {
    countUp.start();
    countUp2.start();
  },
})

//about
ScrollTrigger.create({
  trigger: '.sc_about',
  start: "0% 50%",
  end: "100% 100%",
  //markers: true,
  onEnter: function () {
    const aboutTl = gsap.timeline({})
    aboutTl.to('.sc_about .banner_mask .mask_wrap .mask', {
      transform: 'scale(0,1)',
      stagger: {
        from: "end",
        each: 0.1,
      }
    })
  },
})

ScrollTrigger.create({
  trigger: '.sc_about',
  start: "0% 30%",
  end: "100% 100%",
  //markers: true,
  onEnter: function () {
    const aboutTl2 = gsap.timeline({})
    aboutTl2.to('.sc_about .txt_wrap .big_txt .big_txt_line1 .txt_mask .txt', {
      transform: 'translateX(0)'
    })
    aboutTl2.to('.sc_about .line_inner1', {
      transform: 'translateY(0)'
    }, 'a')
    aboutTl2.to('.sc_about .line_inner2', {
      transform: 'translateY(0)'
    }, 'a+=0.2')
    aboutTl2.to('.sc_about .txt_desc .desc_inner', {
      transform: 'translateX(0)',
      opacity: 1,
    }, 'b')
    aboutTl2.to('.sc_about .title_area .btn_link', {
      opacity: 1,
    }, 'b')
  },
})

//element 
let mm = gsap.matchMedia();
mm.add("(min-width: 769px)", () => {
  elemTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc_element",
      start: "0% 30%",
      end: "100% 100%",
      scrub: 0,
      //markers: true,
      onUpdate: self => {
        currentTime = elemTl.time();
        if (currentTime >= elemTl.labels.d) {
          $('.sc_element .inner .navi li:nth-child(4)').addClass('on').siblings().removeClass('on')
        } else if (currentTime >= elemTl.labels.c) {
          $('.sc_element .inner .navi li:nth-child(3)').addClass('on').siblings().removeClass('on')
        } else if (currentTime >= elemTl.labels.b) {
          $('.sc_element .inner .navi li:nth-child(2)').addClass('on').siblings().removeClass('on')
        } else {
          $('.sc_element .inner .navi li:nth-child(1)').addClass('on').siblings().removeClass('on')
        }
      }
    },
  })

  elemTl.to('.sc_element .bg', {
    width: '100%',
    height: '100%',
  }, 'a')
  elemTl.to('.sc_element .navi', {
    opacity: 1,
  }, 'a')
  elemTl.to('.sc_element .inner .slide1 .txt_wrap .tit', {
    transform: 'translateY(0)',
  }, 'a')
  elemTl.to('.sc_element .inner .slide1 .txt_wrap .tit', {
    marginBottom: '60px'
  }, 'a')
  elemTl.from('.sc_element .inner .slide .txt_wrap .desc .txt_box span', {
    color: '#999'
  }, 'a')
  elemTl.to('.sc_element .inner .slide .txt_wrap .desc .txt_box .btn_more', {
    opacity: 1
  }, 'a')

  elemTl.to('.sc_element .slide2', {
    transform: 'translateY(0)'
  }, 'b')
  elemTl.from('.sc_element .inner .slide2 .txt_wrap .tit', {
    transform: 'translateY(50px)',
    opacity: 0,
  }, 'b')
  elemTl.from('.sc_element .inner .slide2 .txt_wrap .desc', {
    opacity: 0,
  }, 'b')

  elemTl.to('.sc_element .slide3', {
    transform: 'translateY(0)'
  }, 'c')
  elemTl.from('.sc_element .inner .slide3 .txt_wrap .tit', {
    transform: 'translateY(50px)',
    opacity: 0,
  }, 'c')
  elemTl.from('.sc_element .inner .slide3 .txt_wrap .desc', {
    opacity: 0,
  }, 'c')

  elemTl.to('.sc_element .slide4', {
    transform: 'translateY(0)',
  }, 'd')
  elemTl.from('.sc_element .inner .slide4 .txt_wrap .tit', {
    transform: 'translateY(50px)',
    opacity: 0,
  }, 'd')
  elemTl.from('.sc_element .inner .slide4 .txt_wrap .desc', {
    opacity: 0,
  }, 'd')
})

mm.add("(max-width: 768px)", () => {
  ScrollTrigger.create({
    trigger: '.sc_element .slide1',
    start: "0% 30%",
    end: "100% 100%",
    //markers: true,
    onEnter: function () {
      const elemTl1 = gsap.timeline({})
      elemTl1.to('.sc_element .inner .slide1 .txt_wrap .tit', {
        transform: 'translate(0,0)'
      }, 'a')
      elemTl1.to('.sc_element .inner .slide1 .txt_wrap .desc', {
        opacity: 1
      }, 'a+=0.2')
    },
  })

  ScrollTrigger.create({
    trigger: '.sc_element .slide2',
    start: "0% 30%",
    end: "100% 100%",
    //markers: true,
    onEnter: function () {
      const elemTl2 = gsap.timeline({})
      elemTl2.to('.sc_element .inner .slide2 .txt_wrap .tit', {
        transform: 'translate(0,0)'
      }, 'a')
      elemTl2.to('.sc_element .inner .slide2 .txt_wrap .desc', {
        opacity: 1
      }, 'a+=0.2')
    },
  })

  ScrollTrigger.create({
    trigger: '.sc_element .slide3',
    start: "0% 30%",
    end: "100% 100%",
    //  markers: true,
    onEnter: function () {
      const elemTl3 = gsap.timeline({})
      elemTl3.to('.sc_element .inner .slide3 .txt_wrap .tit span', {
        transform: 'translate(0,0)',
        stagger: 0.1
      }, 'a')
      elemTl3.to('.sc_element .inner .slide3 .txt_wrap .desc', {
        opacity: 1
      }, 'a+=0.2')
    },
  })

  ScrollTrigger.create({
    trigger: '.sc_element .slide4',
    start: "0% 30%",
    end: "100% 100%",
    //markers: true,
    onEnter: function () {
      const elemTl4 = gsap.timeline({})
      elemTl4.to('.sc_element .inner .slide4 .txt_wrap .tit span', {
        transform: 'translate(0,0)',
        stagger: 0.1
      }, 'a')
      elemTl4.to('.sc_element .inner .slide4 .txt_wrap .desc', {
        opacity: 1
      }, 'a+=0.2')
    },
  })
})

//news
ScrollTrigger.create({
  trigger: '.sc_news',
  start: "0% 50%",
  end: "100% 100%",
  //markers: true,
  onEnter: function () {
    const newsTl = gsap.timeline({})

    newsTl.to('.sc_news .inner .big_title span', 1, {
      transform: 'translateX(0)'
    }, 'a')
    newsTl.to('.sc_news .inner .news_list', 1, {
      opacity: 1,
    }, 'a')
    newsTl.to('.sc_news .inner .btn_link', 1, {
      opacity: 1,
    }, 'a')
  },
})

//career
ScrollTrigger.create({
  trigger: '.sc_careers',
  start: "0% 50%",
  end: "100% 100%",
  //markers: true,
  onEnter: function () {
    const careerTl1 = gsap.timeline({})
    careerTl1.to('.career_slider .item1 .thumb .thumb_mask .mask', {
      transform: 'scale(0,1)',
      stagger: {
        from: "end",
        each: 0.1,
      }
    }, 'a')
    careerTl1.to('.sc_careers .info_wrap', 1, {
      opacity: 1,
    }, 'a')
    careerTl1.to('.sc_careers .career_slider .controller', 1, {
      opacity: 1,
    }, 'a')
    careerTl1.to('.sc_careers .btn_link', 1, {
      opacity: 1,
    }, 'a')
    careerTl1.to('.sc_careers .title_mask .big_title span', 1, {
      transform: 'translateX(0%)'
    }, 'a+=0.3')
  },
})

const careerSlider = new Swiper('.career_slider', {
  effect: "fade",
  slidesPerView: 1,
  loop: true,
  on: {
    "init": function () {},
  }
})

careerSlider.on("slideChange", function () {
  el = this.slides[this.activeIndex];
  gsap.set('.career_slider .thumb .thumb_mask .mask', {
    transform: 'scale(1,1)',
  })
  gsap.to(el.querySelectorAll('.mask'), {
    transform: 'scale(0,1)',
    stagger: 0.1,
  })
})

$('.sc_careers .controller .swiper-next').click(function () {
  el = careerSlider.slides[careerSlider.activeIndex];
  gsap.to(el.querySelectorAll('.mask'), {
    transform: 'scale(1,1)',
    stagger: {
      from: "end",
      each: 0.1,
    },
    onComplete: function () {
      careerSlider.slideNext();
    }
  })
})

$('.sc_careers .controller .swiper-prev').click(function () {
  el = careerSlider.slides[careerSlider.activeIndex];
  gsap.to(el.querySelectorAll('.mask'), {
    transform: 'scale(1,1)',
    stagger: {
      from: "end",
      each: 0.1,
    },
    onComplete: function () {
      careerSlider.slidePrev();
    }
  })
})

//stock
var countOptions2 = {
  useEasing: true,
  separator: ",",
  decimal: ".",
};
var countUp3 = new CountUp("number3", 0, 13030, 0, 1, countOptions2);
ScrollTrigger.create({
  trigger: '.sc_stock',
  start: "0% 70%",
  end: "100% 100%",
  //markers: true,
  onEnter: function () {
    countUp3.start()
  },
})

//footer
$('.footer .pc .family_site .tit').click(function () {
  $(this).toggleClass('open');
  $('.footer .pc .family_site .site_list').toggleClass('show')
})
//하단으로 이동
$(".container .copyright .arrow").click(function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});
//상단으로 이동
$(".footer .copyright .arrow").click(function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});

ScrollTrigger.create({
  trigger: '.footer',
  start: "0% 100%",
  end: "0% 100%",
  //markers: true,
  onEnter: function () {
    $('.container .copyright').hide();
    $('.footer .copyright').show();
  },
  onEnterBack: function () {
    $('.container .copyright').show();
    $('.footer .copyright').hide();
  }
});

$('.footer .mo .site_map .depth1 > a').click(function (e) {
  e.preventDefault();
  if ($(this).hasClass('on')) {
    $('.footer .mo .site_map .depth1 > a').removeClass('on').siblings('.depth2').stop().slideUp();
  } else {
    $('.footer .mo .site_map .depth1 > a').removeClass('on').siblings('.depth2').stop().slideUp();
    $(this).addClass('on').siblings('.depth2').stop().slideDown();
  }
});

$('.footer .mo .family_site .tit').click(function () {
  $(this).toggleClass('open');

  $('.footer .mo .family_site .site_list').slideToggle()

  setTimeout(() => {
    lenis.resize();
  }, 400);
})
