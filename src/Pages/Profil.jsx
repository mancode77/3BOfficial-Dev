import Meetup from "../Assets/meetup.jpg"
import { Fragment } from "react";
import Navbar from "../Component/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear, faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Component/Footer";

const Profil = () => {
  return (
    <Fragment>
      <Navbar menu={"profil"} />
      <main>
        <section>
          <div className="w-full h-[430px] bg-[#E0ECF0] flex justify-center items-center">
            <div className="pt-[74px] w-full px-[30px]">
              <h1 className="text-center text-[30px] font-mono font-bold text-gray-800">Berkenalan dengan Tim Kami</h1>
              <h3 className="text-center text-[18px] text-gray-500">Hasil yang Bagus, Berawal dari Tim yang Profesional</h3>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-fit flex flex-col md:flex-row px-[30px] py-10 gap-3 items-center justify-center">
            <div className="w-full flex justify-center items-center">
              <img className="w-[430px] rounded-md" src={Meetup} alt="" />
            </div>
            <div className="w-full pr-5">
              <h4 className="text-[25px] text-green-600 font-mono font-bold mb-5">Overview</h4>
              <p className="text-[18px] font-mono text-gray-600 mb-5">3 Background merupakan anak perusahaan Startup Digital local yang fokus bergerak di bidang IT dengan produknya berupa Jasa dan Produk Digital.</p>
              <p className="text-[18px] font-mono text-gray-600 mb-5">Berdiri pada tahun 2023 di Surakarta, kini 3 Background memiliki 4 layanan utama, yaitu Jasa pembuatan Web, Jasa Pembuatan Aplikasi & Software, Jasa Digital Marketing.</p>
              <p className="text-[18px] font-mono text-gray-600">Tim kami selalu bekerja dengan menerapkan standar & aturan secara benar. Untuk memberikan hasil maksimal dan memastikan kepuasan pada client</p>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-fit flex flex-col md:flex-row px-[30px] py-[60px] gap-5 bg-[#f9fafb]">
            <div className="w-full px-3 flex flex-col justify-center">
              <h2 className="text-[30px] font-mono font-bold text-gray-800">Value Perusahaan.</h2>
              <p className="text-[18px] font-mono text-gray-500">Dalam menjalankan usahanya, 3 Background menerapkan standar etika yang didasarkan pada nilai-nilai perusahaan.</p>
            </div>
            <div className="w-full bg-[#f9fafb] sm:grid grid-rows-2 grid-flow-col gap-5">
              <div className="w-full flex flex-col justify-center items-center p-[30px] mb-5 sm:mb-0 rounded-md" style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
                <FontAwesomeIcon className="w-[35px] h-[35px] text-green-600 mb-5" icon={faUserGear} />
                <h5 className="text-[18px] font-mono font-bold text-gray-800">Inovatif</h5>
                <p className="text-[16px] font-mono text-green-600 text-center text-semibold">Tidak ada hari tanpa belajar & riset, tim kami selalu mengikuti perkembangan strategi</p>
              </div>
              <div className="w-full flex flex-col justify-center items-center p-[30px] mb-5 sm:mb-0 rounded-md" style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
                <FontAwesomeIcon className="w-[35px] h-[35px] text-green-600 mb-5" icon={faShieldHeart} />
                <h5 className="text-[18px] font-mono font-bold text-gray-800">Amanah</h5>
                <p className="text-[16px] font-mono text-green-600 text-center text-semibold">Setiap tugas yang diberikan kepada kami bukanlah untuk kebanggaan, namun untuk dipertanggungjawaban</p>
              </div>
              <div className="w-full flex flex-col justify-center items-center p-[30px] mb-5 sm:mb-0 rounded-md" style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
                <FontAwesomeIcon className="w-[35px] h-[35px] text-green-600 mb-5" icon={faShieldHeart} />
                <h5 className="text-[18px] font-mono font-bold text-gray-800">Transparan</h5>
                <p className="text-[16px] font-mono text-green-600 text-center text-semibold">Transparansi dalam layanan, biaya dan pencapaian, kami sangat menghindari ketidakjelasan / gharar dalam bekerja.</p>
              </div>
              <div className="w-full flex flex-col justify-center items-center p-[30px] mb-5 sm:mb-0 rounded-md" style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
                <FontAwesomeIcon className="w-[35px] h-[35px] text-green-600 mb-5" icon={faShieldHeart} />
                <h5 className="text-[18px] font-mono font-bold text-gray-800">Keseimbangan</h5>
                <p className="text-[16px] font-mono text-green-600 text-center text-semibold">Seimbang antara kebutuhan jasmani & rohani. Kedua aspek ini sangat menentukan kualitas tim</p>
              </div>
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  )
}

export default Profil;