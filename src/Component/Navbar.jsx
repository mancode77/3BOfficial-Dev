import Logo3B from "../Assets/logo3b.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [ isopen, setIsOpen ] = useState(false)
  const [ isactive, setIsActive ] = useState("")

  useEffect(() => {
    setIsActive(props.menu)
  }, [])

  const handleNavTogle = () => {
    setIsOpen(isopen => !isopen)
  }


  return (
    <header>
      <nav className="fixed flex w-full bg-[#E0ECF0]">
        <div className=" w-full px-[30px] py-3 bg-[#E0ECF0] flex items-center justify-between z-[999]">
          <div className="flex w-full items-center justify-between">
            <img className="w-[50px] h-[50px]" src={Logo3B} alt="" />
            <FontAwesomeIcon onClick={handleNavTogle} className="text-xl cursor-pointer block md:hidden" icon={isopen ? faXmark : faBars} />
          </div>
        </div>
        <div className={`${isopen ? "top-[74px]" : "top-[-400px]"} transition-all duration-300 flex items-center bg-slate-400 md:bg-[#E0ECF0] w-full absolute md:static`}>
          <div className="w-full flex flex-col md:flex-row">
            <Link 
              to={'/'}
              // onClick={() => handleNavActive(0)}
              className={`${isactive === "home" ? "bg-slate-50 md:bg-transparent text-green-600" : "bg-transparent text-gray-900"} w-full hover:bg-slate-50 md:hover:bg-transparent text-[18px] font-semibold hover:text-green-600 px-7 py-5`}
            >
              HOME
            </Link>
            <Link 
              to={'/Profil'}
              // onClick={() => handleNavActive(1)}
              className={`${isactive === "profil" ? "bg-slate-50 md:bg-transparent text-green-600" : "bg-transparent text-gray-900"} w-full hover:bg-slate-50 md:hover:bg-transparent text-[18px] font-semibold hover:text-green-600 px-7 py-5`}
            >
              PROFIL
            </Link>
            <Link 
              to={'/Layanan'}
              // onClick={() => handleNavActive(2)}
              className={`${isactive === "layanan" ? "bg-slate-50 md:bg-transparent text-green-600" : "bg-transparent text-gray-900"} w-full hover:bg-slate-50 md:hover:bg-transparent text-[18px] font-semibold hover:text-green-600 px-7 py-5`}
            >
              LAYANAN
            </Link>
            <Link 
              to={'/Portfolio'}
              // onClick={() => handleNavActive(3)}
              className={`${isactive === "portfolio" ? "bg-slate-50 md:bg-transparent text-green-600" : "bg-transparent"} w-full hover:bg-slate-50 md:hover:bg-transparent text-[18px] font-semibold hover:text-green-600 px-7 py-5`}
            >
              PORTFOLIO
            </Link>
            <Link 
              to={'/Kontak'}
              // onClick={() => handleNavActive(4)} 
              className={`${isactive === "kontak" ? "bg-slate-50 md:bg-transparent text-green-600" : "bg-transparent text-gray-900"} w-full hover:bg-slate-50 md:hover:bg-transparent text-[18px] font-semibold hover:text-green-600 px-7 py-5`}
            >
              KONTAK
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;