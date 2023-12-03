import MaxWithWrapper from '@/components/MaxWindthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'
import Link from 'next/link'


const perks = [
  {
  name: "Instant Devlivery",
  Icom: ArrowDownToLine,
  description: "Get your assets delivered to your email in seconds and dowloand them right away.",
  },

  {
    name: "Guaranteed Quality",
    Icom: CheckCircle,
    description: "Every asset on our platform ois verified by our to ensure our highest quality standarts. Not happy ? We offer a 30-day refaund guarantee.",
  },

  {
    name: "For the Planet",
    Icom: Leaf,
    description: "We`ve pledged 1% sales to the preservation and restoration of the natural environment.",
  },

]

export default function Home() {
  return (
  <>
  <MaxWithWrapper>
    <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
      <h1 className='text-4x1 font-bold tracking-tight text-gray-900 sm:text-6xl'>
        Your marketpace for high-quality{''}
      <span className='text-green-600'> digital assets</span>.
      </h1>
      <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
        Welcome to  VSTAVTENAZVANIE. Every asset on our platform is verified 
        by our team to ensure our highest quality standarts.
        </p>
      <div className='flex flex-col sm:flex-row gap-4 mt-6'>
        <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
        <Button variant='ghost'>Our quality promise &rarr;</Button>
      </div>
    </div>

    {/* TODO  list prdct */}
  </MaxWithWrapper>

  <section className='border-t border-gray-200 bg-gray-50'>
  
  <MaxWithWrapper className='py-20'>
  <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
    {perks.map((perk) => (
      <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
        <div className='md:flex-shrink-0 flel justify-center'>
          <div className='h-16 w-16 flex items-center justify-center rounded-full bg-green-200 text-green-600'>
            {<perk.Icom className='w-1/3 h-1/3'/>}
          </div>
        </div>

        <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'></div>
      </div>
    ))}
  </div>
  </MaxWithWrapper>
  </section>

  </>
  )
}