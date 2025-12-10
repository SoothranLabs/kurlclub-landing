'use client';

import Button from '@/components/shared/button'
import { useRouter } from 'next/navigation';


const NotFoundPage = () => {
  const route = useRouter()
  return (
    <div className='h-full w-full flex items-center flex-col justify-center mt-[200px]'>
      Page Not Found

      <Button onClick={()=>{
        route.push("/")
      }} variant='primary' className='mt-4'>
        Home
        </Button>
    </div>
  )
}

export default NotFoundPage
