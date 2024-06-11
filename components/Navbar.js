import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import marca from '../public/marca.png'
import Link from 'next/link'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const router = useRouter();

  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item')
    const navbarCollapse = document.getElementById('navbar-collapse')
    navItems.forEach((l) => {
      l.addEventListener('click', () => {
        navbarCollapse.classList.remove('show')
      })
    })

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120; // Ajuste a margem conforme necessário
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              <li className={`nav-item m-2 ${activeSection === 'apresentacao' ? 'active' : ''}`}>
                <a href='/../#apresentacao' className='text-nav p-2' onClick={() => setActiveSection('apresentacao')}>O SÃO JOÃO</a>
              </li>
              <li className={`nav-item m-2 ${activeSection === 'programacao' ? 'active' : ''}`}>
                <a href='/../#programacao' className='text-nav p-2' onClick={() => setActiveSection('programacao')}>PROGRAMAÇÃO</a>
              </li>
              <li className={`nav-item m-2 ${activeSection === 'mapa' ? 'active' : ''}`}>
                <a href='/../#mapa' className='text-nav p-2' onClick={() => setActiveSection('mapa')}>MAPA</a>
              </li>
              <li className={`nav-item m-2 ${activeSection === 'faq' ? 'active' : ''}`}>
                <a href='/../#faq' className='text-nav p-2' onClick={() => setActiveSection('faq')}>FAQ</a>
              </li>
              <li className={`nav-item m-2 ${router.pathname === '/vitrine-criativa' ? 'active' : ''}`}>
                <a href='/vitrine-criativa' className='text-nav p-2'>VITRINE CRIATIVA</a>
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

      <style jsx>{`
        .nav-item.active a {
          font-size: larger;
          font-weight: bold;
        }
        .nav-item.active-vitrine a {
          font-size: larger;
          font-weight: bold;
        
        }
      `}</style>
    </header>
  )
}
