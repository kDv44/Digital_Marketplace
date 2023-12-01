import MaxWithWrapper from '@/components/MaxWindthWrapper'
import Image from 'next/image'

export default function Home() {
  return <MaxWithWrapper>
    <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
      <h1 className='text-4x1 font-bold tracking-tight text-gray-900 sm:text-6xl'>
        Your marketpace for high-quality{''}
      <span className='text-blue-600'> digital assets</span>.</h1>
      <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
        Welcome to  VSTAVTENAZVANIE. Every asset on our platform is verified 
        by our team to ensure our highest quality standarts.
        </p>
      <div className='flex flex-col sm:flex-row'></div>
    </div>
  </MaxWithWrapper>
}

