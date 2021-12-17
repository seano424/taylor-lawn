import { useContext, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ModalContext } from '../context/ModalContext'
import useOutsideClick from '../hooks/use-outside-click'
import { urlFor } from '../lib/client'
import Image from 'next/image'

function Modal() {
  const { showModal, setShowModal, item } = useContext(ModalContext)
  const containerRef = useRef()
  useOutsideClick(containerRef, () => {
    setShowModal(false)
  })

  console.log('item', item)

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: 'auto' }}
        ref={containerRef}
        layoutId={item._key}
        onClick={() => setShowModal(false)}
        className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-60 z-10 border"
      >
        <motion.div
          layoutId={item._key}
          className="fixed left-1/2 transform -translate-x-1/2 w-full max-w-screen-lg z-20 top-16 text-white h-5/6"
        >
          <Image
            className="rounded object-cover"
            src={urlFor(item.image).url()}
            layout="fill"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Modal
