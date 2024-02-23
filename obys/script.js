function loco() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  loco();

  function sheryAnimation(){
    Shery.mouseFollower()
    Shery.imageEffect(".ig",{
      style:6,
      gooey:true,
      config:{"noiseDetail":{"value":6.11,"range":[0,100]},"distortionAmount":{"value":2.9,"range":[0,10]},"scale":{"value":59.54,"range":[0,100]},"speed":{"value":0.58,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8333333134651184},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.27,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.84,"range":[0,10]},"metaball":{"value":0.44,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":8.4,"range":[0,100]}}
    })
    Shery.makeMagnet(".nav-1 h4" /* Element to target.*/, {
      //Parameters are optional.
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }
  sheryAnimation()
  function loader(){
    var count = document.querySelector(".count h4");
    var grow = 0;
    
    var timer = setInterval(function(){
        if(grow <100){
            grow ++;
            count.innerHTML = grow;
        }
        else{
            clearInterval(timer)
        }
    }, 30)
    
    var tl = gsap.timeline()
    tl.from(".count",{
            opacity:0,
            delay: 0.2, 
            y:20  
    })
    tl.from(".load h1, .load span",{
        y:130,
        opacity:0,
        duration:0.7,
        delay: 0.2,
        stagger: 0.2
    })
    .from(".wait",{
        opacity:0,
    })
    .to(".load, .wait",{
        opacity:0,
        delay: 0.6,
        stagger: -0.2
    })
    .to(".loader",{
        top:'-100%',
        duration:1,
        ease:"power4.out",
        delay: 0.3,
    })
  }
  loader()

function page1(){
  var obys = document.querySelector(".nav-1-1 svg");
   var root = document.documentElement
   var flag = 0

   obys.addEventListener("click", function(){
    if(flag === 0){
      root.style.setProperty("--primary",' #fff' )
      root.style.setProperty("--secondary",' #151515' )
      flag = 1
    }
    else{
      root.style.setProperty("--primary",' #151515' )
      root.style.setProperty("--secondary",' #fff' )
      flag = 0
    }
   })

  //  var text = document.querySelector(".text")
   var text = document.querySelectorAll(".texts h2")
   text.forEach(function(text){
    text.addEventListener("mouseenter", function(){
      gsap.to(".texts img",{
        opacity:1
      })
     })
     text.addEventListener("mousemove", function(e){
      gsap.to(".texts img",{
        x:e.x -500,
        y:e.y -500,
        ease: "expo.out"
      })
     })
     text.addEventListener("mouseleave", function(){
      gsap.to(".texts img",{
        opacity:0
      })
     })
   })
   
}

function page2(){
var imgCon = document.querySelector(".image-container");
imgCon.addEventListener("mouseenter", function(){
 gsap.to('.mousefollower',{
  opacity: 0
 })
})

imgCon.addEventListener("mouseleave", function(){
  gsap.to('.mousefollower',{
   opacity: 1
  })
  gsap.to(".play",{
    left: '69%',
    top: '-18%',
  })
 })

 var video = document.querySelector(".image-container video");
 var play = document.querySelector(".play");

var flag = 0
 imgCon.addEventListener("click", function(){
  if(flag ==0){
    gsap.to(video,{
      opacity:1
    })
    gsap.to(play,{
     scale: 0.6
    })
    play.innerHTML = `<i class="ri-pause-line"></i>`
    video.play()
    flag = 1
  }
  else{
    gsap.to(video,{
      opacity:0
    })
    gsap.to(play,{
     scale: 1
    })
    play.innerHTML = `<i class="ri-play-fill"></i>`
    video.pause()
    flag = 0
  }

 })
 imgCon.addEventListener("mousemove", function(dets){
  gsap.to('.play',{
   left: dets.x -550,
   top: dets.y -200
  })
 })
 
}

function page3(){
gsap.to(".side-line",{
 transform: "translateX(0%)",
  duration: 1,
scrollTrigger:{
  trigger:".page-3",
  scroller: ".main",

}
})
var container = document.querySelector('#img1');
container.addEventListener("mouseenter", function(){
  gsap.to(".text-hover #top",{
    y:-70,
  })
  gsap.to('.text-hover #bottom',{
    y: -50,
  })
})
container.addEventListener("mouseleave", function(){
  gsap.to(".text-hover #top",{
    y:0,
  })
  gsap.to('.text-hover #bottom',{
    y: 0,
  })
})
  var container = document.querySelector('#img2');
container.addEventListener("mouseenter", function(){
  gsap.to(".text-hover #top2",{
    y:-70,
  })
  gsap.to('.text-hover #bottom2',{
    y: -50,
  })
})
container.addEventListener("mouseleave", function(){
  gsap.to(".text-hover #top2",{
    y:0,
  })
  gsap.to('.text-hover #bottom2',{
    y: 0,
  })








 
})
var container = document.querySelector('#img3');
container.addEventListener("mouseenter", function(){
  gsap.to(".text-hover #top3",{
    y:-70,
  })
  gsap.to('.text-hover #bottom3',{
    y: -50,
  })
})
container.addEventListener("mouseleave", function(){
  gsap.to(".text-hover #top3",{
    y:0,
  })
  gsap.to('.text-hover #bottom3',{
    y: 0,
  })
})

var container = document.querySelector('#img4');
container.addEventListener("mouseenter", function(){
  gsap.to(".text-hover #top4",{
    y:-70,
  })
  gsap.to('.text-hover #bottom4',{
    y: -50,
  })
})
container.addEventListener("mouseleave", function(){
  gsap.to(".text-hover #top4",{
    y:0,
  })
  gsap.to('.text-hover #bottom4',{
    y: 0,
  })
})

var container = document.querySelector('#img5');
container.addEventListener("mouseenter", function(){
  gsap.to(".text-hover #top5",{
    y:-70,
  })
  gsap.to('.text-hover #bottom5',{
    y: -50,
  })
})
container.addEventListener("mouseleave", function(){
  gsap.to(".text-hover #top5",{
    y:0,
  })
  gsap.to('.text-hover #bottom5',{
    y: 0,
  })
})
var container = document.querySelector('#img6');
container.addEventListener("mouseenter", function(){
  gsap.to(".text-hover #top6",{
    y:-70,
  })
  gsap.to('.text-hover #bottom6',{
    y: -50,
  })
})
container.addEventListener("mouseleave", function(){
  gsap.to(".text-hover #top6",{
    y:0,
  })
  gsap.to('.text-hover #bottom6',{
    y: 0,
  })
})
}

function page4(){
  gsap.to(".side-line4",{
   transform: "translateX(0%)",
    duration: 1,
    scrollTrigger:{
      trigger: ".page4",
      scroller: ".main",

    }
  })
  gsap.to(".side-line4-2",{
    transform: "translateX(0%)",
     duration: 1,
     scrollTrigger:{
       trigger: ".page4",
       scroller: ".main",
       start: 'top -80%'
     }
   })
}

function page5(){
gsap.to("#left-move",{
  x:-1000,
  duration: 1,
  scrollTrigger:{
    trigger: ".page5",
    scroller: ".main",
    start: "top 50%",
    end: 'top -50%',
  scrub: 1
  }
})

gsap.from("#right-move",{
  x:-1000,
  duration: 1,
  scrollTrigger:{
    trigger: ".page5",
    scroller: ".main",
    start: "top 50%",
    end: 'top -50%',
  scrub: 1
  }
})
}

function footer(){
gsap.to('.side-line6',{
  transform: "translateX(0%)",
  duration: 1,
  scrollTrigger:{
    trigger: ".page6",
    scroller: ".main",
  }
})

var footText = document.querySelectorAll(".text-text").forEach(function(elem){

  var text = elem.textContent
  var split = text.split("")
  var clutter = ""
  split.forEach(function(textt){
    clutter += `<span>${textt}</span>`
  })
  elem.innerHTML = clutter;
  console.log(clutter);
})

var footerText = document.querySelector(" .text6")
footerText.addEventListener("mouseenter",function(){
  gsap.to(".top6 h1 span",{
    opacity:0,
    duration:0.5,
    stagger:0.1
  })
  gsap.to(".top6 .svg",{
    x:70,
    duration: 0.5
  })
  gsap.to(".top6 h2 span",{
    opacity:1,
    duration:0.5,
    stagger:0.1,
    delay:0.5
  })
})

footerText.addEventListener("mouseleave",function(){
  gsap.to(".top6 h2 span",{
    opacity:0,
    duration:0.5,
    stagger:0.1
  })
  gsap.to(".top6 .svg",{
    x:70,
    duration: 0.5
  })
  gsap.to(".top6 h1 span",{
    opacity:1,
    duration:0.5,
    stagger:0.1,
    delay:0.5
  })
})
}

page1()
page2()
page3()
page4()
page5()
footer()