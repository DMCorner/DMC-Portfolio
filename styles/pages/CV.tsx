import SideBar from '../components/SideBar'
import TopNavigation from "../components/TopNav.jsx"
import React from "react"
import BottomBar from '../components/BottomBar'
import Head from 'next/head'

const CVContainer = () => {
  return (
  <div className="bg-white dark:bg-gray-800 ">
      <div className="bg-gray-300 dark:bg-gray-700 px-4 transition-all duration-300 ease-linear">
        <div className="pt-20 grid grid-cols-1 text-center content-center">
          <div>
            <div>
                <iframe src="DanielCornerCVSE.pdf" className='inline-flex h-screen w-9/12' />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-row flex-wrap"> 
            <div className='h-1/2 w-96'>
                </div>
            </div>
            <div className='h-10 w-full'></div>
          </div>
        </div>
      </div>
      </div> 
  )
}


export default function Home() {

  return (
    <div>
      <Head>
        <title>Daniel Corner: CV</title>

        <link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <TopNavigation />
      <SideBar />
      <CVContainer/>
      <BottomBar/>
    </div>
  );
}

