import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { artistas } from "./data/artistasConfirmados";
import marca from "../public/logo-grande.png";

// --- ALGORITMOS DE INTELIGÊNCIA DA BUSCA ---

const normalize = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
};

const calculateLevenshtein = (a, b) => {
  const matrix = [];

  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1),
        );
      }
    }
  }

  return matrix[b.length][a.length];
};

const isMatch = (term, target) => {
  const termNorm = normalize(term);
  const targetNorm = normalize(target);

  if (targetNorm.includes(termNorm)) return true;

  if (termNorm.length > 3) {
    const distance = calculateLevenshtein(termNorm, targetNorm);
    const threshold = termNorm.length > 6 ? 3 : 2;
    return distance <= threshold;
  }

  return false;
};

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [termoBusca, setTermoBusca] = useState("");

  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSearchFocus = (e) => {
    if (e.type === "keydown" && e.key !== "Enter") return;

    e.preventDefault();
    const termo = termoBusca;

    if (!termo.trim()) return;

    closeMenu();

    // MAPA
    const searchMap = [
      {
        route: "/historia",
        keywords: [
          "historia",
          "origem",
          "sao joao",
          "serra negra",
          "cultura",
          "tradicao",
          "fogueira",
          "frio",
        ],
      },
      {
        route: "/servicos",
        keywords: [
          "servico",
          "banheiro",
          "seguranca",
          "policia",
          "saude",
          "samu",
          "informacao",
          "cat",
          "reciclagem",
          "emergencia",
        ],
      },
      {
        route: "/faq",
        keywords: [
          "faq",
          "duvida",
          "pergunta",
          "roupa",
          "frio",
          "crianca",
          "vidro",
          "regras",
          "como chegar",
          "horario",
        ],
      },
      {
        route: "/#sitio-cidade",
        keywords: [
          "sitio",
          "cidade",
          "rural",
          "comunidade",
          "programacao",
          "festa",
          "atrações",
        ],
      },
      {
        route: "/vitrine-criativa",
        keywords: [
          "vitrine",
          "criativa",
          "artesanato",
          "comprar",
          "lembrancinha",
          "arte",
          "sebrae",
        ],
      },
      {
        route: "/#mapa",
        keywords: [
          "mapa",
          "local",
          "onde",
          "estrada",
          "caminho",
          "polo",
          "localizacao",
          "acesso",
        ],
      },
    ];

    for (const item of searchMap) {
      if (item.keywords.some((keyword) => isMatch(termo, keyword))) {
        router.push(item.route);
        setTermoBusca("");
        return;
      }
    }

    const artistaEncontrado = artistas.find((a) => isMatch(termo, a.nome));

    const termosGenericProg = [
      "atracao",
      "banda",
      "show",
      "cantor",
      "palco",
      "programacao",
      "agenda",
    ];
    const ehBuscaGenerica = termosGenericProg.some((k) => isMatch(termo, k));

    if (ehBuscaGenerica || artistaEncontrado) {
      const queryBusca = artistaEncontrado
        ? artistaEncontrado.nome
        : termoBusca;

      router.push({
        pathname: "/",
        query: { busca: queryBusca },
        hash: "programacao",
      });
      setTermoBusca("");
      return;
    }

    alert(
      `Não encontramos resultados para "${termoBusca}", tente com outro termo.`,
    );
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;

      const sections = document.querySelectorAll("section");
      let currentSection = "";
      const scrollMiddle = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollMiddle >= sectionTop &&
          scrollMiddle < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeSection]);

  return (
    <header>
      <nav
        id="navbar"
        className={`navbar navbar-expand-lg fixed-top ${
          isVisible ? "visible" : "hidden"
        }`}
      >
        <div className="container">
          <a href="/" className="navbar-brand">
            <Image
              className="m-navbar-marca"
              src={marca}
              alt="marca carnaval"
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
            <ul className="navbar-nav me-auto align-items-center">
              <li
                className={`nav-item m-2 ${activeSection === "programacao" ? "active" : ""}`}
              >
                <a
                  href="/../#programacao"
                  className="text-nav p-2"
                  onClick={() => {
                    setActiveSection("programacao");
                    closeMenu();
                  }}
                >
                  ATRAÇÕES
                </a>
              </li>

              <li
                className={`nav-item m-2 ${activeSection === "mapa" ? "active" : ""}`}
              >
                <a
                  href="/../#mapa"
                  className="text-nav p-2"
                  onClick={() => {
                    setActiveSection("mapa");
                    closeMenu();
                  }}
                >
                  MAPA
                </a>
              </li>

              <li
                className={`nav-item m-2 ${activeSection === "vitrine-criativa" ? "active" : ""}`}
              >
                <a
                  href="/../vitrine-criativa"
                  className="text-nav p-2"
                  onClick={() => {
                    setActiveSection("vitrine-criativa");
                    closeMenu();
                  }}
                >
                  VITRINE CRIATIVA
                </a>
              </li>
            </ul>

            <div className="search-pill-container">
              <div className="search-pill">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="search-input"
                  value={termoBusca}
                  onChange={(e) => setTermoBusca(e.target.value)}
                  onKeyDown={handleSearchFocus}
                />
                <button className="search-btn" onClick={handleSearchFocus}>
                  <i className="bx bx-search bx-sm"></i>
                </button>
              </div>
            </div>

            <ul className="navbar-nav ms-auto d-flex justify-content-center flex-row align-items-center m-navbar-icones">
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
    </header>
  );
}
