'use client'

import { Card, CardContent, Grid, Typography } from '@mui/material'

import DynamicModal from './sidemodal/SideModal'

interface HistoryDetailModalProps {
  isOpen: boolean
  toggleModal: () => void
}

const HistoryDetailModal = ({ isOpen, toggleModal }: HistoryDetailModalProps) => {
  return (
    <div>
      <DynamicModal title='test123' isOpen={isOpen} toggleModal={toggleModal}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <div className='flex justify-between'>
                  <div>
                    <Typography variant='h5' className='font-medium'>
                      รายได้ของร้าน
                    </Typography>
                    <Typography variant='h4' className='font-medium mt-6 text-primary'>
                      999999
                    </Typography>
                    <Typography variant='h6' className='font-medium'>
                      คน
                    </Typography>
                  </div>
                  <div className='relative pb-0 pr-0 -mb-8 ml-6 '>
                    <img src='/images/avatars/2.png' alt='Man' height={147} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <Card>
              <CardContent>
                <div className='flex justify-between'>
                  <div>
                    <Typography variant='h5' className='font-medium'>
                      รายได้ทั้งหมด
                    </Typography>
                    <Typography variant='h4' className='font-medium mt-6 text-primary'>
                      999999
                    </Typography>
                    <Typography variant='h6' className='font-medium'>
                      คน
                    </Typography>
                  </div>
                  <div className='relative pb-0 pr-0 -mb-8 ml-6 '>
                    <img src='/images/avatars/2.png' alt='Man' height={147} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </DynamicModal>
    </div>
  )
}

export default HistoryDetailModal
