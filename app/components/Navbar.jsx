import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
        <nav className="navbar">
      
            <Link href="/">
              <div className="title">
                  {`CODESQUAD`}
              </div>
            </Link>
            <div className="nav-list">
                <Link className="nav-item" href="/">Events</Link>
                <Link className="nav-item" href="/">Blog</Link>
                <Link className="nav-item" href="/">Clubs</Link>
                <Link className="nav-item" href="/">Contact</Link>
            </div>

        
        </nav>
    </>
  )
}
