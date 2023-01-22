import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const Layanan = () => {
  return (
    <Fragment>
      <Navbar menu={"layanan"} />
      <main>
        <section>
          <div className="w-full h-[430px] bg-[#E0ECF0] flex justify-center items-center">
            <div className="pt-[74px] w-full px-[30px]">
              <h1 className="text-center text-[30px] font-mono font-bold text-gray-800">Layanan 3 Background</h1>
              <h3 className="text-center text-[18px] text-gray-500">Layanan Terbaik dengan Tim Profesional</h3>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full px-[30px] md:px-[100px] py-[60px]">
            <div className="grid md:grid-cols-2 grid-flow-row gap-10">
              <div className="p-10 rounded-md" style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
                <FontAwesomeIcon className="w-[40px] h-[40px] text-green-600 mb-5" icon={faCode} />
                <h2 className="text-[30px] font-mono font-bold text-gray-800 mb-4">Web House</h2>
                <p className="text-[18px] font-mono text-gray-600 mb-5">Layanan 3B untuk kebutuhan website, sistem informasi dan aplikasi</p>
                <div className="flex flex-col gap-5">
                  <a className="text-[18px] text-green-600 hover:text-green-500" href="/"><FontAwesomeIcon icon={faCircleCheck} /> Jasa Pembuatan Landing Page</a>
                  <a className="text-[18px] text-green-600 hover:text-green-500" href="/"><FontAwesomeIcon icon={faCircleCheck} /> Jasa Pembuatan Website</a>
                  <a className="text-[18px] text-green-600 hover:text-green-500" href="/"><FontAwesomeIcon icon={faCircleCheck} /> Jasa Pembuatan Sistem Perpustakaan</a>
                  <a className="text-[18px] text-green-600 hover:text-green-500" href="/"><FontAwesomeIcon icon={faCircleCheck} /> Jasa Pembuatan Web & Sistem Sekolah</a>
                </div>
              </div>
              <div className="p-10 rounded-md" style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
                <FontAwesomeIcon className="w-[40px] h-[40px] text-green-600 mb-5" icon={faCode} />
                <h2 className="text-[30px] font-mono font-bold text-gray-800 mb-4">Web House</h2>
                <p className="text-[18px] font-mono text-gray-600 mb-5">Layanan 3B untuk kebutuhan website, sistem informasi dan aplikasi</p>
                <div className="flex flex-col gap-5">
                  <a className="text-[18px] text-green-600 hover:text-green-500" href="/"><FontAwesomeIcon icon={faCircleCheck} /> Jasa Pembuatan Landing Page</a>
                  <a className="text-[18px] text-green-600 hover:text-green-500" href="/"><FontAwesomeIcon icon={faCircleCheck} /> Jasa Pembuatan Website</a>
                  <a className="text-[18px] text-green-600 hover:text-green-500" href="/"><FontAwesomeIcon icon={faCircleCheck} /> Jasa Pembuatan Sistem Perpustakaan</a>
                  <a className="text-[18px] text-green-600 hover:text-green-500" href="/"><FontAwesomeIcon icon={faCircleCheck} /> Jasa Pembuatan Web & Sistem Sekolah</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layanan;