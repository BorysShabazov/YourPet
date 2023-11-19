
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../../CloseIcon/CloseIcon';
const modalRoot = document.querySelector('#modal-root');

export function BasicModal({ isOpen, onCloseModal, children }) {
    const modalRef = useRef(null);

    useEffect(() => {
      const handleEsc = event => {
        if (event.key === 'Escape') {
          onCloseModal();
        }
      };
  
      const handleClickOutside = event => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onCloseModal();
        }
      };
  
      if (isOpen) {
        document.addEventListener('keydown', handleEsc);
        document.addEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('keydown', handleEsc);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, onCloseModal]);
  return (
   <>
         { isOpen && createPortal(  <div className="flex items-center justify-center min-h-screen bg-grey">
        <div className="modal-overlay ">
          <div className="modal" ref={modalRef}>
            <div className="modal-content relative justify-center  bg-white w-full smOnly:p-3 md:p-6 rounded-3xl shadow-lg">
           <div className=' ml-auto mb-2  absolute smOnly:right-3 md:right-6 '  onClick={onCloseModal}>
           <CloseIcon  />
           </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>,
          modalRoot
          )}
   </>
 
)
    };