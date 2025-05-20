import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import marca from "../public/marca.png";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;

      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <header>
      <nav
        id="navbar"
        className={`navbar navbar-expand-lg fixed-top bg-white ${
          isVisible ? "visible" : "hidden"
        }`}
      >
        <div className="container">
          <a href="/">
            <Image
              className="m-navbar-marca"
              src={marca}
              alt="marca são joão"
              height={85}
            />
          </a>

          <button
            id="btn-nav"
            className="navbar-toggler text-white"
            type="button"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <i className="bx bx-menu bx-md"></i>
          </button>

          <div
            className={`navbar-collapse collapse ${isMenuOpen ? "show" : ""}`}
            id="navbar-collapse"
          >
            <ul className="navbar-nav ms-auto align-items-center">
              {[
                { id: "apresentacao", label: "O SÃO JOÃO" },
                { id: "programacao", label: "PROGRAMAÇÃO" },
                { id: "mapa", label: "MAPA" },
                { id: "faq", label: "FAQ" },
              ].map(({ id, label }) => (
                <li
                  key={id}
                  className={`nav-item m-2 ${
                    activeSection === id ? "active" : ""
                  }`}
                >
                  <a
                    href={`/../#${id}`}
                    className="text-nav p-2"
                    onClick={() => {
                      setActiveSection(id);
                      closeMenu();
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}

              <li
                className={`nav-item m-2 ${
                  router.pathname === "/vitrine-criativa" ? "active" : ""
                }`}
              >
                <a
                  href="/vitrine-criativa"
                  className="text-nav p-2"
                  onClick={closeMenu}
                >
                  VITRINE CRIATIVA
                </a>
              </li>
            </ul>

            <ul className="navbar-nav d-flex justify-content-center flex-row align-items-center ms-auto m-navbar-icones">
              <li className="nav-item m-2">
                <Link
                  href="https://www.facebook.com/saojoaonaserranegra/"
                  target="_blank"
                  rel="noreferrer"
                  className="m-icone-navbar text-white p-1"
                >
                  <i className="bx bxl-facebook-circle bx-sm"></i>
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link
                  href="https://www.instagram.com/saojoaonaserranegra/"
                  target="_blank"
                  rel="noreferrer"
                  className="m-icone-navbar text-white p-1"
                >
                  <i className="bx bxl-instagram bx-sm"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        #navbar {
          transition: transform 0.3s ease-in-out;
          transform: translateY(0);
        }
        #navbar.hidden {
          transform: translateY(-100%);
        }
        #navbar.visible {
          transform: translateY(0);
        }
        .nav-item.active a {
          font-size: larger;
          font-weight: bold;
        }
      `}</style>
    </header>
  );
}
