'use client'

import { Typography } from '@mui/material'

import DynamicModal from './sidemodal/SideModal'

interface HistoryDetailModalProps {
  isOpen: boolean
  toggleModal: () => void
}

const HistoryDetailModal = ({ isOpen, toggleModal }: HistoryDetailModalProps) => {
  return (
    <div>
      <DynamicModal title='test123' isOpen={isOpen} toggleModal={toggleModal}>
        <Typography variant='h4'>History Detail</Typography>
      </DynamicModal>
    </div>
  )
}

export default HistoryDetailModal
