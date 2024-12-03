'use client'
import { useState } from 'react'

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'

import { historylist } from '@/data/mock/dashboardData'

import HistoryDetailModal from '@/components/็HistoryDetailModal'
import { formattedDate } from '@/utils/formate'

const History = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(prev => !prev)
  }

  const historyListdata = historylist

  return (
    <div>
      <Card>
        <CardHeader title='History' />
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>วันที่</TableCell>
                  <TableCell align='center'>สถานะ</TableCell>
                  <TableCell align='center' className='text-nowrap'>
                    เวลาจ่าย
                  </TableCell>
                  <TableCell align='center'>สร้างเมื่อ</TableCell>
                  <TableCell align='center'>จัดการ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {historyListdata.map(transaction => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <Typography variant='body2'>{formattedDate(transaction.date)}</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Chip
                        size='small'
                        label={transaction.status}
                        color={
                          transaction.status === 'success'
                            ? 'success'
                            : transaction.status === 'pending'
                              ? 'warning'
                              : 'error'
                        }
                      />
                    </TableCell>
                    <TableCell align='center' className='text-nowrap'>
                      <Typography variant='body2'>sa</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <Typography variant='body2'>{formattedDate(transaction.createDate)}</Typography>
                    </TableCell>
                    <TableCell align='center'>
                      <div className='flex justify-center  gap-2 '>
                        <Button
                          variant='outlined'
                          size='small'
                          color='primary'
                          onClick={toggleModal}
                          className='text-nowrap'
                        >
                          ดูรายงาน
                        </Button>
                        <Button variant='outlined' size='small' color='primary' className='text-nowrap'>
                          ดาวโหลดรายงาน
                        </Button>
                        <Button variant='outlined' size='small' color='primary' className='text-nowrap'>
                          สลิปโอนเงิน
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <HistoryDetailModal isOpen={isOpen} toggleModal={toggleModal} />
    </div>
  )
}

export default History
