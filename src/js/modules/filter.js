const filter = () => {
   const menu = document.querySelector('.portfolio-menu'),
      items = menu.querySelectorAll('li'),
      btnAll = menu.querySelector('.all'),
      btnLovers = menu.querySelector('.lovers'),
      btnChef = menu.querySelector('.chef'),
      btnGirl = menu.querySelector('.girl'),
      btnGuy = menu.querySelector('.guy'),
      btnGrandmother = menu.querySelector('.grandmother'),
      btnGranddad = menu.querySelector('.granddad'),
      wrapper = document.querySelector('.portfolio-wrapper'),
      markAll = wrapper.querySelectorAll('.all'),
      markGirl = wrapper.querySelectorAll('.girl'),
      markLovers = wrapper.querySelectorAll('.lovers'),
      markChef = wrapper.querySelectorAll('.chef'),
      markGuy = wrapper.querySelectorAll('.guy'),
      no = document.querySelector('.portfolio-no');

   function changing(selector) {
      markAll.forEach(item => {
         item.style.display = 'none'
         item.classList.remove('animated', 'fadeIn')
      })

      no.style.display = 'none'
      no.classList.remove('animated', 'fadeIn')

      if (selector) {
         selector.forEach(item => {
            item.style.display = 'block'
            item.classList.add('animated', 'fadeIn')
         })
      } else {
         no.style.display = 'block'
         no.classList.add('animated', 'fadeIn')
      }
   }

   function evention(btn, selector) {
      btn.addEventListener('click', () => {
         changing(selector)
      })
   }

   menu.addEventListener('click', (e) => {
      const target = e.target

      if (target && target.tagName == 'LI') {
         items.forEach(item => {
            item.classList.remove('active')
         })
         target.classList.add('active')
      }
   })

   evention(btnAll, markAll)
   evention(btnLovers, markLovers)
   evention(btnChef, markChef)
   evention(btnGirl, markGirl)
   evention(btnGuy, markGuy)
   evention(btnGrandmother)
   evention(btnGranddad)
}

export default filter