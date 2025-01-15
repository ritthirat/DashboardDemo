// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'

const verticalMenuData = (): VerticalMenuDataType[] => [
  {
    label: 'ระบบโฆษณา',
    children: [{ label: 'แดชบอร์ด', href: '/', icon: 'tabler-chart-pie-2' }],
    icon: 'tabler-ad'
  },
  {
    label: 'ระบบแจกวาป',
    children: [{ label: 'แดชบอร์ด', href: '/dashboard', icon: 'tabler-chart-pie-2' }],
    icon: 'tabler-message-2-heart'
  },
  {
    label: 'สถิติ',
    href: '/statistics',
    icon: 'tabler-chart-bar'
  },
  {
    label: 'ประวัติการใช้งาน',
    href: '/history',
    icon: 'tabler-file-chart'
  },
  {
    label: 'ตั้งค่า',
    children: [
      { label: 'ข้อความ ', href: '/setting/message-page' },
      { label: 'โดเนท', href: '/setting/donate-page' },
      { label: 'ปรับแต่งหน้าจอ', href: '/setting/screen-page' }
    ],
    icon: 'tabler-settings'
  },
  {
    label: 'รายการ',
    href: '/list',
    icon: 'tabler-list-details'
  },
  {
    label: 'คำสั่งซื้อ',
    href: '/oders',
    icon: 'tabler-receipt-dollar'
  },
  {
    label: 'โปรไฟล์',
    href: '/profile',
    icon: 'tabler-user-circle'
  }
]

export default verticalMenuData
