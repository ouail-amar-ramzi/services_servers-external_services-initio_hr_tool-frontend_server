import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="h-full font-Poppins flex w-full">
      <SideBar />

      <main className="flex-1 min-w-0">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout