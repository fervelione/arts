const sliders = (slidersSelector, direction, prevSelector, nextSelector) => {
   const sliders = document.querySelectorAll(slidersSelector)
   let slideIndex = 0
   let paused = false

   function checkSliders(n) {
      if (n > (sliders.length - 1)) {
         slideIndex = 0
      }

      if (n < 0) {
         slideIndex = (sliders.length - 1)
      }

      sliders.forEach(item => {
         item.style.display = 'none'
         item.classList.add('animated')
      })

      sliders[slideIndex].style.display = 'block'
   }

   checkSliders(slideIndex)

   function plusSliders(n) {
      checkSliders(slideIndex += n)
   }

   try {
      const prev = document.querySelector(prevSelector),
         next = document.querySelector(nextSelector);

      prev.addEventListener('click', () => {
         plusSliders(-1)

         sliders[slideIndex].classList.add('slideInRight')
         sliders[slideIndex].classList.remove('slideInLeft')
      })

      next.addEventListener('click', () => {
         plusSliders(1)

         sliders[slideIndex].classList.add('slideInLeft')
         sliders[slideIndex].classList.remove('slideInRight')
      })
   } catch (e) {}

   function activateAnimation() {
      if (direction == 'vertical') {
         paused = setInterval(function () {
            plusSliders(1)

            sliders[slideIndex].classList.add('slideInDown')
         }, 5000)
      } else {
         paused = setInterval(function () {
            plusSliders(1)

            sliders[slideIndex].classList.remove('slideInRight')
            sliders[slideIndex].classList.add('slideInLeft')
         }, 5000)
      }
   }

   activateAnimation()

   sliders[0].parentNode.addEventListener('mouseenter', () => {
      clearInterval(paused)
   })

   sliders[0].parentNode.addEventListener('mouseleave', () => {
      activateAnimation()
   })
}

export default sliders