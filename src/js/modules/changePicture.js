const changePicture = (imgSelector) => {
   const imgBlocks = document.querySelectorAll(imgSelector)

   function showImg(img) {
      const imgs = img.querySelector('img')
      // something.png => something-1.png
      imgs.src = imgs.src.slice(0, -4) + '-1.png'

      img.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
         p.style.display = 'none'
      })
   }

   function hideImg(block) {
      const img = block.querySelector('img')
      // something.png => something-1.png
      img.src = img.src.slice(0, -6) + '.png'

      block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
         p.style.display = 'block'
      })
   }

   imgBlocks.forEach(img => {
      img.addEventListener('mouseover', () => {
         showImg(img)
      })

      img.addEventListener('mouseout', () => {
         hideImg(img)
      })
   })
}

export default changePicture