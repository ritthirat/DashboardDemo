'use client'

import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import type { ResponseData } from '@/plugins/type'
import type { ProfileData } from '@/types/authType'

import { getProfile } from '@/store/actions/authAction'

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const fetchGetProfile = async (): Promise<ResponseData<ProfileData> | undefined> => {
      try {
        const response: ResponseData<ProfileData> = await getProfile(dispatch)

        setIsClient(true)

        return response
      } catch (error) {
        console.log('error:', error)
        setIsClient(false)
        window.location.href = '/login'

        return undefined
      }
    }

    fetchGetProfile()
  }, [dispatch])

  return <>{isClient === true && children}</>
}
