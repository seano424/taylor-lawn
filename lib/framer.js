export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 2 },
  },
}

export const span = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: 'easeOut', duration: 1 },
  },
}

export const header1 = {
  hidden: { x: 300, opacity: 0, scale: 0.1 },
  show: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { ease: 'backInOut', duration: 2 },
  },
}

export const header2 = {
  hidden: { x: -300, opacity: 0, scale: 0.1 },
  show: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: { ease: 'backInOut', duration: 2 },
  },
}