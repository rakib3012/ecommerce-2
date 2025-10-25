import React from 'react'
import { Outlet } from 'react-router';
import Nav from '../Component/Nav';
import Footer from '../Component/Footer';
 const RootLayout = () => {
  return (
    <div>
     
       <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Nav />

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
       
    </div>
  )
}
export default RootLayout;