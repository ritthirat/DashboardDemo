import { Switch, Typography } from '@mui/material'

import DynamicModal from './sidemodal/SideModal'
import DragAndDropFile from './DragAndDropFile'
import CustomTextField from '@/@core/components/mui/TextField'

interface DonateSettingModalProps {
  isOpen: boolean
  toggleModal: () => void
}

const DonateSettingModal = ({ isOpen, toggleModal }: DonateSettingModalProps) => {
  // ใช้ useState เพื่อเก็บชื่อไฟล์หลายไฟล์

  return (
    <DynamicModal isOpen={isOpen} toggleModal={toggleModal} title='เพิ่มโดเนท'>
      <DragAndDropFile />
      <div className='mt-4 flex flex-col  gap-2'>
        <div>
          <Typography variant='h5'>ประเภทโดเนท</Typography>
          <CustomTextField fullWidth placeholder='ประเภทโดเนท' />
        </div>
        <div>
          <Typography variant='h5'>ชื่อโดเนท</Typography>
          <CustomTextField fullWidth placeholder='ชื่อโดเนท' />
        </div>
        <div>
          <Typography variant='h5'>ลำดับ</Typography>
          <CustomTextField fullWidth placeholder='ลำดับ' />
        </div>
        <div>
          <Typography variant='h5'>โดเนทขั้นต่ำ</Typography>
          <CustomTextField fullWidth placeholder='โดเนทขั้นต่ำ' />
        </div>
        <div>
          <Typography variant='h5'>โดเนทขั้นต่ำในการพิมพ์ข้อความเอง</Typography>
          <CustomTextField fullWidth placeholder='โดเนทขั้นต่ำในการพิมพ์ข้อความเอง' />
        </div>
        <div>
          <Typography variant='h5'>รายละเอียด</Typography>
          <CustomTextField fullWidth placeholder='รายละเอียดโดเนท' />
        </div>
        <div>
          <Typography variant='h5'>ข้อความ</Typography>
          <CustomTextField fullWidth placeholder='เลือกชุดข้อความ' />
        </div>
        <div>
          <div className='flex items-center'>
            <Switch defaultChecked />
            <Typography variant='h6'>ใช้งานขอเพลง</Typography>
          </div>
          <div className='flex items-center'>
            <Switch defaultChecked />
            <Typography variant='h6'>คิดอะไรออกค่อยใส่</Typography>
          </div>
        </div>
      </div>
    </DynamicModal>
  )
}

export default DonateSettingModal
