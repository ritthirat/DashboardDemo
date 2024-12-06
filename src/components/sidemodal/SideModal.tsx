import React, { useState, useEffect } from 'react'

import './SideModal.css'
import { Button } from '@mui/material'

interface DynamicModalProps {
  isOpen: boolean
  title: string
  toggleModal: () => void
  children: React.ReactNode
}

const DynamicModal = ({ isOpen, title, toggleModal, children }: DynamicModalProps) => {
  // const [isOpen, setIsOpen] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  // ตรวจสอบขนาดหน้าจอ (responsive)
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768) // ขนาดหน้าจอเล็ก (มือถือ)
    }

    window.addEventListener('resize', handleResize)

    handleResize() // ตรวจสอบขนาดหน้าจอในครั้งแรก

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // const toggleModal = () => {
  //   setIsOpen(prev => !prev)
  // }

  return (
    <>
      {/* Backdrop Overlay */}
      <div className={`modal-overlay ${isOpen ? 'show' : ''}`} onClick={toggleModal} />

      {/* Modal Customizer */}
      <div className={`side-modal ${isOpen ? 'show' : ''} ${isSmallScreen ? 'smallScreen' : ''}`}>
        <div className='modal-header flex justify-between mb-10'>
          <h2>{title}</h2>
          <button
            onClick={toggleModal}
            className='absolute top-4 right-4 p-2  bg-transparent rounded-full hover:bg-gray-300'
          >
            <i className='tabler-x' />
          </button>
        </div>
        <div className='relative overflow-y-auto' style={{ maxHeight: 'calc(100vh - 10rem)' }}>
          {children}

          <div className='flex gap-2 w-full mt-10'>
            <Button variant='contained' size='small' className='rounded-xl w-full' color='primary'>
              บันทึก
            </Button>
            <Button variant='outlined' size='small' className='rounded-xl w-full' onClick={toggleModal}>
              ยกเลิก
            </Button>
          </div>
        </div>
      </div>

      {/* Toggler button */}
    </>
  )
}

export default DynamicModal
