function mousemove_animation() {
  document.querySelectorAll('.contener').forEach(function (elem) {
    elem.addEventListener('mousemove', function (dets) {
      const dim = elem.getBoundingClientRect();
      elem.children[0].style.clipPath = `circle(150% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
      elem.children[0].style.transition = `cubic-bezier(0.19, 1, 0.22, 1) 2.5s`

    })
    elem.addEventListener('mouseleave', function (dets) {
      const dim = elem.getBoundingClientRect();
      elem.children[0].style.clipPath = `circle(0% at ${dets.clientX - dim.left}px ${dets.clientY - dim.top}px)`
      elem.children[0].style.transition = `cubic-bezier(0.19, 1, 0.22, 1) 2.5s`
    })
  })
}
mousemove_animation()

function loaderFun(){ 
  var loader = document.querySelector('.loader');
  window.addEventListener('load', function () {
    setTimeout(() => {
      loader.style.display = "none";
    }, 100);
  })
}
loaderFun()