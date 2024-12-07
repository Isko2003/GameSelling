import "./App.css";
import Home from "./Components/Home";
import Consoles from "./Components/Consoles";
import logo from "./game-logo.png";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Sell from "./Components/Sell";
import CallOfDuty from "./Components/CallOfDuty";
import { CartProvider } from "react-use-cart";
import Basket from "./Components/Basket";
import Ghost from "./Components/Ghost";
import LastOfUs from "./Components/LastOfUs";
import GtaV from "./Components/GtaV";
import Horizon from "./Components/Horizon";
import Spiderman from "./Components/Spiderman";
import Ghost2 from "./Components/Ghost2";
import Fifa23 from "./Components/Fifa23";
import Uncharted from "./Components/Uncharted";
import Stellar from "./Components/Stellar";
import SpiderMan2 from "./Components/SpiderMan2";
import Cyberpunk from "./Components/Cyberpunk";
import RiseOfRonin from "./Components/RiseOfRonin";
import AssassinCreed from "./Components/AssassinCreed";
import Avatar from "./Components/Avatar";
import Crew from "./Components/Crew";
import PS5 from "./Components/PS5";
import LoginRegister from "./Components/LoginRegister";
import Register from "./Components/Register";
import Madden from "./Components/Madden";
import PS4 from "./Components/PS4";
import F1 from "./Components/F1";
import Xbox from "./Components/Xbox";
import Nintendo from "./Components/Nintendo";
import PS4Pro from "./Components/PS4Pro";
import Ps5Slim from "./Components/Ps5Slim";
import Elden from "./Components/Elden";
import F124 from "./Components/F124";
import Motogp from "./Components/Motogp";
import PS4Wire from "./Components/PS4Wire";
import PS5Standard from "./Components/PS5Standard";
import XboxS from "./Components/XboxS";
import PS5DUAL from "./Components/PS5DUAL";
import PS5WHITE from "./Components/PS5WHITE";
import PS4JET from "./Components/PS4JET";
import NintendoOled from "./Components/NintendoOled";
import Search from "./Components/Search";
import Accesories from "./Components/Accesories";
import PCComponents from "./Components/PCComponents";
import PS5Red from "./Components/PS5Red";
import XboxGreen from "./Components/XboxGreen";
import Vr2 from "./Components/Vr2";
import Edge from "./Components/Edge";
import XboxSeriesX from "./Components/XboxSeriesX";
import MoveMotion from "./Components/MoveMotion";
import Logitech from "./Components/Logitech";
import XboxPulse from "./Components/XboxPulse";
import XboxDaystrike from "./Components/XboxDaystrike";
import XboxJoy from "./Components/XboxJoy";
import XboxNeonBlue from "./Components/XboxNeonBlue";
import NintendoDock from "./Components/NintendoDock";
import Oculus from "./Components/Oculus";
import SamsungM7 from "./Components/SamsungM7";
import MsiRtx from "./Components/MsiRtx";
import Lgultra from "./Components/Lgultra";
import Zotac from "./Components/Zotac";
import AsusRtx from "./Components/AsusRtx";
import Zotac2060 from "./Components/Zotac2060";
import ColorfulRtx from "./Components/ColorfulRtx";
import GalaxRtx from "./Components/GalaxRtx";
import Asus2070 from "./Components/Asus2070";
import Galax2070 from "./Components/Galax2070";
import Gigabyte from "./Components/Gigabyte";
import Galax2080 from "./Components/Galax2080";
import GIgabyte3050 from "./Components/GIgabyte3050";
import Zotac3050 from "./Components/Zotac3050";
import IntelCore from "./Components/IntelCore";
import Ps4Gold from "./Components/Ps4Gold";
import Ps4Standard from "./Components/Ps4Standard";
import Ps4Slim from "./Components/Ps4Slim";
import SellCart from "./Components/SellCart";
import Aboutus from "./Components/Aboutus";
import MultipleItems from "./Components/MultipleItems";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProtectedRoute from "./Components/ProtectedRoute";
import UserInfo from "./Components/UserInfo";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    const selectedLang = event.target.value;
    localStorage.setItem("language", selectedLang);
    i18n.changeLanguage(selectedLang.toLowerCase());
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const showLinks = () => {
    let dots = document.querySelector(".three-dots");
    let links = document.querySelector(".header-links");
    let sample = document.querySelector(".sample");
    sample.style.backgroundColor = "#1d1d1d";
    sample.classList.toggle("d-none");
    sample.classList.toggle("d-block");
    sample.style.width = "450px";
    sample.style.height = "140px";
    sample.innerHTML = `<div>${links.innerHTML}</div>`;
    links.style.position = "absolute";
    links.style.display = "block";
    let dropLink = document.querySelector(".drop-link");
    dropLink.onclick = function () {
      let dropdown = document.querySelector(".drop-link .dropdown");
      dropdown.classList.toggle("show-links");
      dropdown.classList.toggle("d-none");
    };
    sample.style.position = "absolute";
    sample.style.top = "4rem";
    sample.style.left = "0";
    sample.style.height = "260px";
    sample.style.width = "100%";
    dots.style.position = "relative";
    dots.append(sample);
  };

  const showLinksComputer = () => {
    let dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("d-none");
  };

  let items = document.querySelectorAll(".dropdown-lists li");
  items.forEach((item) => {
    if (item) {
      item.classList.add("sadasd");
    } else {
      item.classList.add("adgbrbt");
    }
  });
  return (
    <CartProvider>
      <div>
        <div className="header d-flex justify-content-between align-items-center">
          <div className="three-dots col-4 d-md-none" onClick={showLinks}>
            <div className="first-dot"></div>
            <div className="second-dot"></div>
            <div className="third-dot"></div>
          </div>
          <div className="sample d-none"></div>
          <div className="header-logo col-3 col-md-1 col-lg-3">
            <Link to={"/"}>
              <img src={logo} alt="logo-game" width={"80px"} height={"80px"} />
            </Link>
          </div>
          <div className="header-links pt-3 d-none d-md-flex col-5 col-md-8 col-lg-6">
            <ul className="d-md-flex dropdown-lists">
              <li className="drop-link" onClick={showLinksComputer}>
                {t("games")}
                <i className="fa-solid fa-chevron-down"></i>
                <ul className="dropdown d-none">
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-angles-right"></i>
                    <Link to={"/ps5"}>PlayStation 5</Link>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-angles-right"></i>
                    <Link to={"/ps4pro"}>PlayStation 4</Link>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-angles-right"></i>
                    <Link to={"/xboxseriesx"}>Xbox Series X</Link>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-angles-right"></i>
                    <Link to={"/xbox"}>Xbox One</Link>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-angles-right"></i>
                    <Link to={"/nintendodock"}>Nintendo Switch</Link>
                  </div>
                </ul>
              </li>
              <NavLink to={"/Consoles"}>
                <li>{t("consoles")}</li>
              </NavLink>
              <NavLink to={"/Accesories"}>
                <li>{t("accessories")}</li>
              </NavLink>
              <NavLink to={"/PcComponents"}>
                <li>{t("components")}</li>
              </NavLink>
              <NavLink to={"/Sell"}>
                <li>{t("sell")}</li>
              </NavLink>
            </ul>
          </div>
          <div className="search-login d-flex justify-content-center col-3 col-md-2 col-lg-3">
            <Link to={"/search"}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
            <Link to={"/user-info"}>
              <i className="fa-regular fa-user"></i>
            </Link>
            <Link to={"/basket"}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <div>
              <select
                name="language"
                id="language"
                value={i18n.language}
                onChange={handleChangeLanguage}
              >
                <option value="en">EN</option>
                <option value="az">AZ</option>
                <option value="ru">RU</option>
              </select>
            </div>
          </div>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Consoles"
            element={
              <ProtectedRoute>
                <Consoles />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Sell"
            element={
              <ProtectedRoute>
                <Sell />
              </ProtectedRoute>
            }
          />
          <Route path="/CallOfDuty" element={<CallOfDuty />} />
          <Route
            path="/basket"
            element={
              <ProtectedRoute>
                <Basket />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-info"
            element={
              <ProtectedRoute>
                <UserInfo />
              </ProtectedRoute>
            }
          />
          <Route path="/ghost" element={<Ghost />} />
          <Route path="/lastofus" element={<LastOfUs />} />
          <Route path="/gtav" element={<GtaV />} />
          <Route path="/horizon" element={<Horizon />} />
          <Route path="/spiderman" element={<Spiderman />} />
          <Route path="/ghost2" element={<Ghost2 />} />
          <Route path="/fifa23" element={<Fifa23 />} />
          <Route path="/uncharted" element={<Uncharted />} />
          <Route path="/stellar" element={<Stellar />} />
          <Route path="/spiderman2" element={<SpiderMan2 />} />
          <Route path="/cyberpunk" element={<Cyberpunk />} />
          <Route path="/riseofronin" element={<RiseOfRonin />} />
          <Route path="/assassincreed" element={<AssassinCreed />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/crew" element={<Crew />} />
          <Route
            path="/ps5"
            element={
              <ProtectedRoute>
                <PS5 />
              </ProtectedRoute>
            }
          />
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path="/register" element={<Register />} />
          <Route path="/madden" element={<Madden />} />
          <Route
            path="/ps4"
            element={
              <ProtectedRoute>
                <PS4 />
              </ProtectedRoute>
            }
          />
          <Route path="/f1" element={<F1 />} />
          <Route
            path="/xbox"
            element={
              <ProtectedRoute>
                <Xbox />
              </ProtectedRoute>
            }
          />
          <Route path="/nintendo" element={<Nintendo />} />
          <Route
            path="/ps4pro"
            element={
              <ProtectedRoute>
                <PS4Pro />
              </ProtectedRoute>
            }
          />
          <Route path="/ps5slim" element={<Ps5Slim />} />
          <Route path="/elden-ring" element={<Elden />} />
          <Route path="/f1-24" element={<F124 />} />
          <Route path="/motogp" element={<Motogp />} />
          <Route path="/ps4wire" element={<PS4Wire />} />
          <Route path="/ps5standard" element={<PS5Standard />} />
          <Route path="/xboxs" element={<XboxS />} />
          <Route path="/ps5dual" element={<PS5DUAL />} />
          <Route path="/ps5white" element={<PS5WHITE />} />
          <Route path="/ps4jet" element={<PS4JET />} />
          <Route path="/nintendoled" element={<NintendoOled />} />
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Accesories"
            element={
              <ProtectedRoute>
                <Accesories />
              </ProtectedRoute>
            }
          />
          <Route
            path="/PcComponents"
            element={
              <ProtectedRoute>
                <PCComponents />
              </ProtectedRoute>
            }
          />
          <Route path="/ps5red" element={<PS5Red />} />
          <Route path="/xboxgreen" element={<XboxGreen />} />
          <Route path="/vr2" element={<Vr2 />} />
          <Route path="/edge" element={<Edge />} />
          <Route
            path="/xboxseriesx"
            element={
              <ProtectedRoute>
                <XboxSeriesX />
              </ProtectedRoute>
            }
          />
          <Route path="/movemotion" element={<MoveMotion />} />
          <Route path="/logitech" element={<Logitech />} />
          <Route path="/xboxpulse" element={<XboxPulse />} />
          <Route path="/xboxdaystrike" element={<XboxDaystrike />} />
          <Route path="/xboxjoy" element={<XboxJoy />} />
          <Route path="/xboxneonblue" element={<XboxNeonBlue />} />
          <Route
            path="/nintendodock"
            element={
              <ProtectedRoute>
                <NintendoDock />
              </ProtectedRoute>
            }
          />
          <Route path="/oculus" element={<Oculus />} />
          <Route path="/samsungm7" element={<SamsungM7 />} />
          <Route path="/msirtx" element={<MsiRtx />} />
          <Route path="/lgultra" element={<Lgultra />} />
          <Route path="/zotac" element={<Zotac />} />
          <Route path="/asusrtx" element={<AsusRtx />} />
          <Route path="/zotac2060" element={<Zotac2060 />} />
          <Route path="/colorfulrtx" element={<ColorfulRtx />} />
          <Route path="/galaxrtx" element={<GalaxRtx />} />
          <Route path="/asus2070" element={<Asus2070 />} />
          <Route path="/galax2070" element={<Galax2070 />} />
          <Route path="gigabyte" element={<Gigabyte />} />
          <Route path="/galax2080" element={<Galax2080 />} />
          <Route path="/gigabyte3050" element={<GIgabyte3050 />} />
          <Route path="/zotac3050" element={<Zotac3050 />} />
          <Route path="/intelcore" element={<IntelCore />} />
          <Route path="/ps4gold" element={<Ps4Gold />} />
          <Route path="/ps4standard" element={<Ps4Standard />} />
          <Route path="/ps4slim" element={<Ps4Slim />} />
          <Route path="/sellcart" element={<SellCart />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/multiple" element={<MultipleItems />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
