import { Typography } from '@mui/material'

import DynamicModal from './sidemodal/SideModal'
import CustomSwitch from '@/@core/components/mui/Switch'

interface Props {
  isOpen: boolean
  toggleModal: () => void
}

const AiSetting = ({ isOpen, toggleModal }: Props) => {
  return (
    <DynamicModal isOpen={isOpen} toggleModal={toggleModal} title='ตั้งค่า AI'>
      <div className='mt-4 mx-4 flex flex-col  gap-2'>
        <div>
          <Typography variant='h4'>แอลกอฮอล์</Typography>
          <div className='flex items-center gap-2'>
            <CustomSwitch defaultChecked />
            <Typography variant='h5'>เครื่องดื่มแอลกอฮอล์</Typography>
          </div>
          <div className='flex items-center gap-2'>
            <CustomSwitch defaultChecked />
            <Typography variant='h5'>การดื่มแอลกอฮอล์</Typography>
          </div>
        </div>
        <div>
          <Typography variant='h4'>ยา</Typography>
          <div className='flex items-center gap-2'>
            <CustomSwitch defaultChecked />
            <Typography variant='h5'>อุปกรณ์ยาเสพติด</Typography>
          </div>
          <div className='flex items-center gap-2'>
            <CustomSwitch defaultChecked />
            <Typography variant='h5'>ผลิตภัณฑ์ยา</Typography>
          </div>
        </div>
      </div>
    </DynamicModal>
  )
}

export default AiSetting
