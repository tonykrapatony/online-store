import React from 'react'

export default function CartModal({modalClass, closeModal}) {
  return (
    <div className={modalClass}>
        <div className="modal_content">
            <div className="modal_header">
                <div className="close" onClick={closeModal}>
                    <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                        <path fill='#0C0058' d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
                        <path d="M0 0h48v48h-48z" fill="none"/>
                    </svg>
                </div>
            </div>
            <div className="modal_body">
                <p>Thank you for your fake order!</p>
                <p>Open the browser console to familiarize yourself with it.</p>
                <p>Have a nice day!</p>
            </div>
        </div>
    </div>
  )
}
