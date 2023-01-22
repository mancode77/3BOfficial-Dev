import { Fragment } from "react";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const Kontak = () => {
  return (
    <Fragment>
      <Navbar menu={"kontak"} />
      <main>
        <section>
          <div className="w-full h-[430px] bg-[#E0ECF0] flex justify-center items-center">
            <div className="pt-[74px] w-full px-[30px]">
              <h1 className="text-center text-[30px] font-mono font-bold text-gray-800">Hubungi Kami!</h1>
              <h3 className="text-center text-[18px] text-gray-500">Mari Berdiskusi bersama Tim kami</h3>
            </div>
          </div>
        </section>
        <section>
          <div className="px-[30px] py-[60px] flex justify-center">
            <div className="w-[800px] p-[30px] md:p-[60px] rounded-xl shadow-sm" style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
              <div className="flex flex-col gap-2 mb-10">
                <label className="text-[20px] text-gray-500 font-mono font-semibold tracking-widest" htmlFor="">Nama :</label>
                <input className="h-[50px] text-[20px] px-5 py-5 text-gray-500 font-mono border hover:border-green-500 focus:outline-8 focus:outline-green-500 bg-transparent rounded-md transition-all duration-300" type="text" name="name" id="inputname" placeholder="Jhon*" />
              </div>
              <div className="flex flex-col gap-2 mb-10">
                <label className="text-[20px] text-gray-500 font-mono font-semibold tracking-widest" htmlFor="">No Whatsapp :</label>
                <input className="h-[50px] text-[20px] px-5 py-5 text-gray-500 font-mono border hover:border-green-500 focus:outline-8 focus:outline-green-500 bg-transparent rounded-md transition-all duration-300" type="text" name="name" id="inputnomorwa" placeholder="+62 85738343*" />
              </div>
              <div className="flex flex-col gap-2 mb-10">
                <label className="text-[20px] text-gray-500 font-mono font-semibold tracking-widest" htmlFor="name">Email :</label>
                <input className="h-[50px] text-[20px] px-5 py-5 text-gray-500 font-mono border hover:border-green-500 focus:outline-8 focus:outline-green-500 bg-transparent rounded-md transition-all duration-300" type="text" name="name" id="inputemail" placeholder="nama@email.com*" />
              </div>
              <div className="flex flex-col gap-2 mb-10">
                <label className="text-[20px] text-gray-500 font-mono font-semibold tracking-widest" htmlFor="name">Apa Yang Kami Bantu?</label>
                <textarea name="" id="valuetextarea" className="h-[200px] text-[16px] px-5 py-5 text-gray-500 font-mono border hover:border-green-500 focus:outline-8 focus:outline-green-500 bg-transparent rounded-md transition-all duration-300" placeholder="Isi Dengan Kebutuhan Anda" />
              </div>
              <input className="w-full h-[60px] text-[20px] rounded-full bg-green-600 hover:bg-green-500 text-gray-100 transition-all duration-300" type="submit" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  )
}

export default Kontak;