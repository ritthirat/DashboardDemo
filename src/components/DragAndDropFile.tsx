import { useState, useCallback } from 'react'

import { useDropzone } from 'react-dropzone'

import { Avatar, Box, Typography } from '@mui/material'

const DragAndDropFile = () => {
  const [fileNames, setFileNames] = useState<string[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles) // แสดงไฟล์ที่ถูกลากเข้ามา

    // เก็บชื่อไฟล์ทั้งหมดที่ถูกเลือก
    const newFileNames = acceptedFiles.map(file => file.name)

    setFileNames(prev => [...prev, ...newFileNames])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'] // อนุญาตเฉพาะไฟล์ภาพ
    },
    multiple: true // อนุญาตให้เลือกหลายไฟล์
  })

  return (
    <div>
      {' '}
      <Box
        {...getRootProps()}
        sx={{
          overflow: 'auto',
          display: 'flex',
          alignItems: fileNames.length > 0 ? 'flex-start' : 'center',
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
        {fileNames.length === 0 && (
          <Avatar className='bg-transparent'>
            <i className='tabler-photo' style={{ fontSize: '10rem' }} />
          </Avatar>
        )}

        {/* แสดงชื่อไฟล์ที่เลือก */}
        {fileNames.length > 0 && (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant='subtitle1'>ไฟล์ที่เลือก:</Typography>
            {fileNames.map((fileName, index) => (
              <Typography key={index} variant='body2'>
                {fileName}
              </Typography>
            ))}
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
