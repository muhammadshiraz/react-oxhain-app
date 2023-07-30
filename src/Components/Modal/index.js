import React from 'react'
import Modal01 from './Modal01'
import Modal02 from './Modal02'

const ModalManager = ({
  closeFn = () => null,
  modal = ''
}) => (
  <>
    <Modal01
      closeFn={closeFn}
      open={modal === 'modal-01'} />

    <Modal02
      closeFn={closeFn}
      open={modal === 'modal-02'} />

    {/* <Modal03
      closeFn={closeFn}
      open={modal === 'modal-03'} /> */}
  </>
)

export default ModalManager