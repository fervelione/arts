const modals = () => {

   let isOpen = false

   function modal(buttonSelector, modalSelector, closeSelector, destroy = false) {
      const button = document.querySelectorAll(buttonSelector),
         modal = document.querySelector(modalSelector),
         close = document.querySelectorAll(closeSelector),
         windows = document.querySelectorAll('[data-modal]'),
         scroll = calcScroll(),
         gift = document.querySelector('.fixed-gift');

      button.forEach(item => {
         item.addEventListener('click', (e) => {
            if (e.target) {
               e.preventDefault()
            }

            if (destroy) {
               gift.style.display = 'none'
            }

            windows.forEach(item => {
               item.style.display = 'none'
               item.classList.add('fadeIn', 'animated')
            })

            modal.style.display = 'block'
            document.body.style.overflow = 'hidden'
            document.body.style.marginRight = `${scroll}px`

            gift.style.right = (16 + scroll) + 'px'

            isOpen = true
         })
      })

      close.forEach(item => {
         item.addEventListener('click', () => {
            windows.forEach(item => {
               item.style.display = 'none'
            })

            modal.style.display = 'none'
            document.body.style.overflow = ''
            document.body.style.marginRight = `0px`

            gift.style.right = 16 + 'px'

            isOpen = false
         })
      })

      modal.addEventListener('click', (e) => {
         let target = e.target

         if (target === modal) {
            windows.forEach(item => {
               item.style.display = 'none'
            })

            modal.style.display = 'none'
            document.body.style.overflow = ''
            document.body.style.marginRight = `0px`

            gift.style.right = 16 + 'px'

            isOpen = false
         }
      })
   }

   function showModalByTime(modalSelector, time) {
      setTimeout(() => {
         if (isOpen == false) {
            document.querySelector(modalSelector).style.display = 'block'
            document.body.style.marginRight = `${scroll}px`
            document.body.style.overflow = 'hidden'
         }
      }, time)
   }

   function calcScroll() {
      const div = document.createElement('div')

      div.style.width = `50px`
      div.style.height = `50px`
      div.style.overflowY = 'scroll'
      div.style.visibility = 'hidden'

      document.body.appendChild(div)

      let calc = div.offsetWidth - div.clientWidth

      div.remove()

      return calc
   }

   function openByScroll(selector) {
      window.addEventListener('scroll', () => {
         let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)

         if (!isOpen && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
            document.querySelector(selector).click();
         }
      })
   }

   //showModalByTime('.popup-consultation', 60000)

   modal('.button-design', '.popup-design', '.popup-close')
   modal('.button-consultation', '.popup-consultation', '.popup-close')
   modal('.fixed-gift', '.popup-gift', '.popup-close', true)

   openByScroll('.fixed-gift')
}

export default modals