import { createContext, useState } from 'react'
import { useDisableBodyScroll } from '../hooks/use-disable-body'
export const ModalContext = createContext()

export function ModalProvider(props) {
  const [showModal, setShowModal] = useState(false)
  const [item, setItem] = useState({})
  useDisableBodyScroll(showModal)

  return (
    <ModalContext.Provider value={{ showModal, setShowModal, item, setItem }}>
      {props.children}
    </ModalContext.Provider>
  )
}
