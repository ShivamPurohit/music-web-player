import { ReactNode } from 'react'
import SideNavbar from '../containers/SideNavbar'

export const Index = ({children}:{children: ReactNode}) => {
  return (
    <div className='flex p-3 h-full'>
        <SideNavbar/>
        <section className='w-full'>
        {children}
        </section>
    </div>
  )
}
