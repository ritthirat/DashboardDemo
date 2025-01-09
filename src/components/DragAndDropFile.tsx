import { useState, useCallback, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useDropzone } from 'react-dropzone'
import { Avatar, Box, Typography } from '@mui/material'

import { uploadFile } from '@/store/actions/serviceAction'

const DragAndDropFile = ({ resetFile, editImage }: { resetFile: boolean; editImage: string | null }) => {
  const [fileNames, setFileNames] = useState<string | null>(null) // เก็บชื่อไฟล์เดียว
  const dispatch = useDispatch()
  const [img, setImg] = useState<string | null>(null)

  console.log('editImage:', editImage)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.log(acceptedFiles) // แสดงไฟล์ที่ถูกลากเข้ามา

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0]

        uploadFile(dispatch, file) // อัปโหลดไฟล์แรก
        setImg(URL.createObjectURL(file))
        setFileNames(file.name) // ตั้งชื่อไฟล์ที่เลือกใหม่
      }
    },
    [dispatch]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'] // อนุญาตเฉพาะไฟล์ภาพ
    },
    maxFiles: 1 // จำกัดให้เลือกได้เพียงไฟล์เดียว
  })

  useEffect(() => {
    if (resetFile) {
      // รีเซ็ตไฟล์เมื่อได้รับค่า resetFile เป็น true
      setFileNames(null)
    }
  }, [resetFile])

  useEffect(() => {
    if (editImage) {
      setFileNames(editImage)
    }
  }, [editImage])

  return (
    <div>
      <Box
        {...getRootProps()}
        sx={{
          overflow: 'auto',
          display: 'flex',
          alignItems: fileNames ? 'flex-start' : 'center',
          justifyContent: 'center',
          border: '2px dashed',
          borderColor: theme => (theme.palette.mode === 'dark' ? '#666' : '#ccc'),
          borderRadius: '10px',
          padding: '20px',
          textAlign: 'center',
          height: '150px',
          cursor: 'pointer',
          backgroundColor: isDragActive ? theme => (theme.palette.mode === 'dark' ? '#444' : '#f0f0f0') : 'transparent'
        }}
      >
        <input {...getInputProps()} />
        {!fileNames && (
          <Avatar className='bg-transparent'>
            <i className='tabler-photo' style={{ fontSize: '10rem' }} />
          </Avatar>
        )}

        {/* แสดงชื่อไฟล์ที่เลือก */}
        {fileNames && (
          <Box sx={{ marginTop: 1 }}>
            <Typography variant='subtitle1'>ไฟล์ที่เลือก:</Typography>
            <img
              src={editImage ? editImage : img || undefined}
              alt='Uploaded'
              className=' h-20 w-20 object-cover rounded-lg'
            />
            {/* <Typography variant='body2'>{fileNames}</Typography> */}
          </Box>
        )}
      </Box>
      <Typography variant='body2' className='text-center my-2'>
        ลากไฟล์มาวางที่นี่ หรือ กดเพื่ออัปโหลดรูปภาพ
      </Typography>
    </div>
  )
}

export default DragAndDropFile
