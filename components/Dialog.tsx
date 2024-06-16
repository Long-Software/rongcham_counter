import React, { ReactElement } from 'react'

const Dialog = ({ id, children }: { id: string; children: ReactElement }) => {
  return (
    <dialog id={id} className='modal'>
      <div className='modal-box'>{children}</div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  )
}

export default Dialog
