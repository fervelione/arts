const calculate = (sizeSel, materialSel, optionalSel, promocodeSel, sumSel) => {
   const size = document.querySelector(sizeSel),
      material = document.querySelector(materialSel),
      option = document.querySelector(optionalSel),
      promocode = document.querySelector(promocodeSel),
      sum = document.querySelector(sumSel);

   function result() {
      let result = Math.round((+size.value) * (+material.value) + (+option.value))

      if (size.value == '' || material.value == '') {
         sum.textContent = 'Пожалуйста, выберите размер и материал картины'
      } else if (promocode.value == 'IWANTPOPART') {
         sum.textContent = Math.round(result * 0.7)
      } else {
         sum.textContent = result
      }
   }

   size.addEventListener('change', result)
   material.addEventListener('change', result)
   option.addEventListener('change', result)
   promocode.addEventListener('change', result)
}

export default calculate