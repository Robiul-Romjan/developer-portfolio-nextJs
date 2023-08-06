import { Inter } from 'next/font/google'
import MainLayout from '@/layouts/MainLayout'
import Banner from '@/components/Banner/Banner'
import Navbar from '@/components/Navbar'
import WhatIDo from '@/components/WhatIDo/WhatIDo'
import MyResume from '@/components/MyResume/MyResume'
import Contact from '@/components/Contact/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MainLayout>
      <div>
        <Banner />
        <WhatIDo />
        <MyResume />
        <Contact />
      </div>
    </MainLayout>
  )
}
