import modals from './modules/modals'
import sliders from './modules/sliders'
import forms from './modules/forms'
import checkTextInputs from './modules/checkTextInputs'
import mask from './modules/mask'
import showMoreCards from './modules/showMoreCards'
import calculate from './modules/calculate'
import filter from './modules/filter'
import changePicture from './modules/changePicture'
import accordion from './modules/accordion'
import burger from './modules/burger'
import drop from './modules/drop'

document.addEventListener('DOMContentLoaded', () => {
   'use strict'

   modals()
   forms()
   checkTextInputs('[name="name"]')
   checkTextInputs('[name="message"]')
   mask('[name="phone"]')
   showMoreCards('.button-styles', '.styles-2')
   sliders('.main-slider-item', 'vertical')
   sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn')
   calculate('#size', '#material', '#options', '.promocode', '.calc-price')
   filter()
   changePicture('.sizes-block')
   accordion('.accordion-heading')
   burger('.burger-menu', '.burger')
   drop()
})