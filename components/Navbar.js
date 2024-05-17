import Image from 'next/image'
import { useEffect } from 'react'
import marca from '../public/marca2.svg'
import Link from 'next/link'

export default function Navbar() {
  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item')
    const navbarCollapse = document.getElementById('navbar-collapse')
    navItems.forEach((l) => {
      l.addEventListener('click', () => {
        navbarCollapse.classList.remove('show')
      })
    })
  }, [])

  return (
    <header>
      <nav id='navbar' className='navbar navbar-expand-lg fixed-top'>
        <div className='container'>

          <a href="/"><Image className='m-navbar-marca' src={marca} alt='marca são joao' height={85} /></a>

          <button id='btn-nav' className='navbar-toggler text-white' type='button' aria-expanded='false' data-bs-toggle='collapse' data-bs-target='#navbar-collapse'>
            <i className='bx bx-menu bx-md'></i>
          </button>

          <div className='navbar-collapse collapse' id='navbar-collapse'>
            <ul className='navbar-nav ms-auto align-items-center'>
              <li className='nav-item m-2'>
                <a href='/../#apresentacao' className='text-nav p-2'>O SÃO JOÃO</a>
              </li>
              <li className='nav-item m-2'>
                <a href='/../#programacao' className='text-nav p-2'>PROGRAMAÇÃO</a>
              </li>
              <li className='nav-item m-2'>
                <a href='/../#mapa' className='text-nav p-2'>MAPA</a>
              </li>
              <li className='nav-item m-2'>
                <a href='/../#faq' className='text-nav p-2'>FAQ</a>
              </li>
            </ul>
            <ul className='navbar-nav d-flex justify-content-center flex-row align-items-center ms-auto m-navbar-icones'>
              <li className='nav-item m-2'>
                <Link href='https://www.facebook.com/saojoaonaserranegra/' rel="noreferrer" className='m-icone-navbar text-white p-1' target='_blank'><i className='bx bxl-facebook-circle bx-sm'></i></Link>
              </li>
              <li className='nav-item m-2'>
                <Link href='https://www.instagram.com/saojoaonaserranegra/' rel="noreferrer" className='m-icone-navbar text-white p-1' target='_blank'><i className='bx bxl-instagram bx-sm'></i></Link>
              </li>
              <li className='nav-item m-2'>
                <Link href='https://www.tiktok.com/@saojoaonaserranegra' rel="noreferrer" className='m-icone-navbar text-white p-1' target='_blank'><i className='bx bxl-tiktok bx-sm'></i></Link>
              </li>
              <li className='nav-item m-2'>
                <Link href='https://open.spotify.com/playlist/4bbNlh9UEg2hwU3NvwuWuI?si=6yEOQUjCTVWHxpZGzcqODw' rel="noreferrer" className='m-icone-navbar text-white p-1' target='_blank'><i className='bx bxl-spotify bx-sm'></i></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}