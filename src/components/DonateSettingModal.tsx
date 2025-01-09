import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import type { SelectChangeEvent } from '@mui/material'
import { MenuItem, Select, Typography } from '@mui/material'

import DynamicModal from './sidemodal/SideModal'
import DragAndDropFile from './DragAndDropFile'
import CustomTextField from '@/@core/components/mui/TextField'
import CustomSwitch from '@/@core/components/mui/Switch'
import type { RootState } from '@/store'
import { addProduct, getProductsList, getUpdateProduct } from '@/store/actions/productsAction'
import type { AddProductType } from '@/types/productsType'

interface DonateSettingModalProps {
  isOpen: boolean
  toggleModal: () => void
  data: any
}

const DonateSettingModal = ({ isOpen, toggleModal, data }: DonateSettingModalProps) => {
  const dispatch = useDispatch()

  console.log('data:', data)

  const uploadfile = useSelector((state: RootState) => state.service.uploadFile?.url)

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      thumbnail: uploadfile || ''
    }))
  }, [uploadfile])

  const handleChange = (event: SelectChangeEvent) => {
    setFormData(prev => ({
      ...prev,
      type: event.target.value
    }))
  }

  const [formdata, setFormData] = useState<AddProductType>({
    name: '',
    type: 'message_tip',
    minPrice: 0,
    thumbnail: '',
    description: '',
    enabled: true
  })

  const [resetFile, setResetFile] = useState(false)

  useEffect(() => {
    if (data) {
      setFormData(data)
    }
  }, [data])

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        type: 'message_tip',
        minPrice: 0,
        thumbnail: '',
        description: '',
        enabled: true
      })
      setResetFile(true) // รีเซ็ต DragAndDropFile เมื่อโมดอลปิด
    } else {
      setResetFile(false) // เมื่อโมดอลเปิด ให้ตั้งค่า resetFile เป็น false
    }
  }, [isOpen])

  const handleForm = async () => {
    try {
      addProduct(dispatch, formdata)
      toggleModal()
      getProductsList(dispatch)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = async () => {
    try {
      getUpdateProduct(dispatch, data.id, formdata)
      toggleModal()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DynamicModal
      isOpen={isOpen}
      toggleModal={toggleModal}
      title={data ? 'แก้ไขโดเนท' : 'เพิ่มโดเนท'}
      onSubmit={data ? handleEdit : handleForm}
    >
      <DragAndDropFile resetFile={resetFile} editImage={formdata?.thumbnail} />
      <div className='mt-4 flex flex-col  gap-2'>
        <div>
          <Typography variant='h5'>ประเภทโดเนท</Typography>
          <Select
            fullWidth
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            disabled={data ? true : false}
            value={formdata.type}
            onChange={handleChange}
          >
            <MenuItem value={'message_tip'}>ทิป</MenuItem>
            <MenuItem value={'message'}>ข้อความ</MenuItem>
            <MenuItem value={'message_image'}>รูปภาพ</MenuItem>
            <MenuItem value={'message_video'}>วีดีโอ</MenuItem>
          </Select>
        </div>
        <div>
          <Typography variant='h5'>ชื่อโดเนท</Typography>
          <CustomTextField
            fullWidth
            placeholder='ชื่อโดเนท'
            value={formdata.name}
            onChange={e => setFormData({ ...formdata, name: e.target.value })}
          />
        </div>
        {/* <div>
          <Typography variant='h5'>ลำดับ</Typography>
          <CustomTextField fullWidth placeholder='ลำดับ' onChange={e => setFormData({ ...formdata, order: e.target.value })}/>
        </div> */}
        <div>
          <Typography variant='h5'>โดเนทขั้นต่ำ</Typography>
          <CustomTextField
            fullWidth
            placeholder='โดเนทขั้นต่ำ'
            value={formdata.minPrice}
            type='number'
            onChange={e => setFormData({ ...formdata, minPrice: Number(e.target.value) })}
          />
        </div>
        <div>
          <Typography variant='h5'>รายละเอียด</Typography>
          <CustomTextField
            fullWidth
            placeholder='รายละเอียดโดเนท'
            value={formdata.description}
            onChange={e => setFormData({ ...formdata, description: e.target.value })}
          />
        </div>
        <div>
          <Typography variant='h5'>ข้อความ</Typography>
          <CustomTextField fullWidth placeholder='เลือกชุดข้อความ' />
        </div>
        <div>
          <div className='flex items-center'>
            <CustomSwitch defaultChecked />
            <Typography variant='h6'>ใช้งานขอเพลง</Typography>
          </div>
          <div className='flex items-center'>
            <CustomSwitch defaultChecked />
            <Typography variant='h6'>คิดอะไรออกค่อยใส่</Typography>
          </div>
        </div>
      </div>
    </DynamicModal>
  )
}

export default DonateSettingModal
