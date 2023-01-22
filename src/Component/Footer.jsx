import Logo3B from "../Assets/logo3b.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return(
    <footer>
      <div className="w-full grid md:grid-cols-3 grid-flow-row py-[60px] px-[30px] gap-5 bg-[#E0ECF0]">
        <div className="p-5">
          <img className="w-[70px] h-[70px] mb-5" src={Logo3B} alt="" />
          <p className="text-[18px] font-mono text-gray-500">3 Backgroudn merupakan sebuah startup yang bergerak di bidang IT dengan produknya berupa Jasa dan Produk Digital.</p>
        </div>
        <div className="p-5">
          <h1 className="text-[18px] font-semibold mb-5">Navigasi</h1>
          <div className="flex w-full">
            <div className="w-full">
              <p className="text-[18px] text-gray-800 hover:text-green-600 cursor-pointer duration-300 font-semibold mb-5">Layanan 3 BG</p>
              <p className="text-[18px] text-gray-800 hover:text-green-600 cursor-pointer duration-300 font-semibold mb-5">Mengenal 3 BG</p>
              <p className="text-[18px] text-gray-800 hover:text-green-600 cursor-pointer duration-300 font-semibold">Blog</p>
            </div>
            <div className="w-full">
              <p className="text-[18px] text-gray-500 hover:text-green-600 cursor-pointer duration-300 mb-5 line-through">Karir</p>
              <p className="text-[18px] text-gray-500 hover:text-green-600 cursor-pointer duration-300 line-through">Magang</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div>
            <h1 className="text-[18px] text-gray-800">Info Bisnis</h1>
            <p className="text-[18px] text-gray-500">Politama, Surakarta, Indonesia</p>
            <div className="flex flex-col gap-2 mt-5">
              <a href="/" className="w-full text-[18px] px-[40px] py-[15px] bg-white rounded-full text-center font-semibold font-mono text-gray-800 hover:bg-green-400 hover:text-white">WA +62894048058</a>
              <a href="/" className="w-full text-[18px] px-[40px] py-[15px] bg-white rounded-full text-center font-semibold font-mono text-gray-800 hover:bg-green-400 hover:text-white">info@3bg.co.id</a>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row md:grid-cols-2 gap-5 md:gap-0 w-full px-[30px] pb-[60px] bg-[#E0ECF0]">
        <div className="flex justify-center md:justify-start">
          <p className="text-gray-500 text-[14px] md:text-[16px]">© 2023 3 Background</p>
        </div>
        <div className="flex justify-center md:justify-end">
          <FontAwesomeIcon className="px-3 hover:text-green-400 duration-300 cursor-pointer text-xl" icon={faFacebook} />
          <FontAwesomeIcon className="px-3 hover:text-green-400 duration-300 cursor-pointer text-xl" icon={faYoutube} />
          <FontAwesomeIcon className="px-3 hover:text-green-400 duration-300 cursor-pointer text-xl" icon={faInstagram} />
          <FontAwesomeIcon className="px-3 hover:text-green-400 duration-300 cursor-pointer text-xl" icon={faWhatsapp} />
        </div>
      </div>
    </footer>
  )
}

export default Footer;