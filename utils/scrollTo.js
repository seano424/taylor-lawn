import * as Scroll from 'react-scroll'

const scroller = Scroll.scroller

export const scrollTo = (element) => {
  scroller.scrollTo(element, {
    duration: 1700,
    delay: 150,
    smooth: true,
    offset: 0,
  })
}
