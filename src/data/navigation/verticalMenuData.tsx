// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'

const verticalMenuData = (): VerticalMenuDataType[] => [
  {
    label: 'ระบบแจกวาป',
    children: [{ label: 'ระบบแจกวาป', href: '/home' }],
    icon: 'tabler-message-2-heart'
  },
  {
    label: 'แดชบอร์ด',
    href: '/dashboard',
    icon: 'tabler-chart-pie-2'
  },
  {
    label: 'สถิติ',
    href: '/statistics',
    icon: 'tabler-chart-bar'
  },
  {
    label: 'ประวัติการใช้งาน',
    href: '/dashboard',
    icon: 'tabler-file-chart'
  },
  {
    label: 'ตั้งค่า',
    href: '/dashboard',
    icon: 'tabler-settings'
  },
  {
    label: 'รายการ',
    href: '/about',
    icon: 'tabler-list-details'
  },
  {
    label: 'คำสั่งซื้อ',
    href: '/about',
    icon: 'tabler-receipt-dollar'
  },
  {
    label: 'โปรไฟล์',
    href: '/about',
    icon: 'tabler-user-circle'
  }
]

export default verticalMenuData
