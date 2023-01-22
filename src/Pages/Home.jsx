import Meetup from '../Assets/meetup.jpg'
import HeroImage from '../Assets/heroimage.png'
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar menu={"home"}/>
      <main>
        <section>
          <div className="h-fit bg-[#E0ECF0] py-10 md:pb-0 pt-[74px]">
            <div className="h-full w-full flex items-center px-[30px]">
              <div className="w-full h-full flex flex-col justify-center">
                <h2 className="text-[30px] text-gray-800 font-semibold font-mono">Partner Digital Pengembang Web</h2>
                <p className="text-[24px] my-[24px] text-gray-800 font-mono">Bergabung dengan Kami dan rasakan manfaat positif dari layanan digital 3 Background</p>
                <Link className="text-[18px] bg-green-600 hover:bg-green-500 duration-300 w-[225px] h-[55px] flex items-center justify-center rounded-full font-semibold text-gray-100">Konsultasi Gratis</Link>
              </div>
              <div className="w-full h-full hidden md:block">
                <div className="w-full h-full flex justify-center items-end">
                  <img src={HeroImage} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full flex items-center justify-center py-[40px]">
            <h1 className="text-[25px] md:text-[30px] text-center text-gray-800 font-semibold font-mono">Layanana Terbaik 3 Background</h1>
          </div>
          <div className="grid grid-flow-row md:grid-cols-3 gap-5 px-[30px] pb-[60px] ">
            <div className="rounded-md p-10" style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
              <div className="w-full mb-5">
                <FontAwesomeIcon className="text-[32px]" icon={faGlobe} />
              </div>
              <div>
                <h3 className="text-[25px] font-semibold font-mono text-gray-800 mb-2">Jasa Landing Page</h3>
                <p className="text-[18px] text-gray-500 font-mono">Tingkatkan penjualan anda dengan landing page profesional</p>
              </div>
            </div>
            <div className="rounded-md p-10" style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
              <div className="w-full mb-5">
                <FontAwesomeIcon className="text-[32px]" icon={faGlobe} />
              </div>
              <div>
                <h3 className="text-[25px] font-semibold font-mono text-gray-800 mb-2">Website Development</h3>
                <p className="text-[18px] text-gray-500 font-mono">Membangun website profesional untuk mendeskripsikan profil bisnis anda di digital. Tanpa batas jarak dan waktu</p>
              </div>
            </div>
            <div className="rounded-md p-10 " style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
              <div className="w-full mb-5">
                <FontAwesomeIcon className="text-[32px]" icon={faGlobe} />
              </div>
              <div>
                <h3 className="text-[25px] font-semibold font-mono text-gray-800 mb-2">Website Maintenece & Management</h3>
                <p className="text-[18px] text-gray-500 font-mono">Pantau Perkembangan & kelola website anda setiap saat dengan dibantu oleh tim profesional kami</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="w-full h-fit px-[30px] flex flex-col md:flex-row">
            <div className="w-full px-5 flex items-center">
              <img className="rounded-xl" src={Meetup} alt="" />
            </div>
            <div className="w-full flex flex-col justify-center gap-2 p-[30px]">
              <h1 className="text-[30px] text-gray-800 font-mono font-semibold mb-3">Bekerja dengan kreativitas!</h1>
              <p className="text-[18px] text-gray-500 font-mono mb-3">Telah berdiri sejak 2023 dan berkembang pesat. Pada dasarnya tiap individu tim kami adalah praktisi yang sudah memiliki kemampuan di bidangnya masing-masing, kami selalu memberikan layanan dari apa yang telah kami alami dan lakukan.</p>
              <h1 className="py-[17px] px-[40px] bg-[#f9fafb] w-fit rounded-full text-[14px] md:text-[18px] font-mono cursor-default text-gray-800"><FontAwesomeIcon className="text-green-500" icon={faCircleCheck} /> Bekerja dengan kreativitas</h1>
              <h1 className="py-[17px] px-[40px] bg-[#f9fafb] w-fit rounded-full text-[14px] md:text-[18px] font-mono cursor-default text-gray-800"><FontAwesomeIcon className="text-green-500" icon={faCircleCheck} /> Bekerja Sesuai KPI & Target</h1>
              <h1 className="py-[17px] px-[40px] bg-[#f9fafb] w-fit rounded-full text-[14px] md:text-[18px] font-mono cursor-default text-gray-800"><FontAwesomeIcon className="text-green-500" icon={faCircleCheck} /> Pelayanan After Sales</h1>
            </div>
          </div>
        </section>
        {/* Client Rate */}
        {/* <section>
          <div className="w-full h-fit py-[60px] px-[30px] bg-[#f9fafb]">
            <div className="w-full text-center mb-[60px]">
              <h1 className="text-[30px] font-bold font-mono text-gray-800">Apa Kata Partner Kami</h1>
            </div>
            <div className="grid md:grid-cols-3 grid-flow-row gap-5">
              <div className="bg-white px-[40px] py-[25px] rounded-md" style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
                <h1 className="text-[24px] text-gray-800 font-mono font-semibold mb-5">Personal Client</h1>
                <div className="flex justify-center items-center mb-5">
                  <img className="w-[100px] h-[100px]" src="https://ardata.co.id/wp-content/uploads/2021/05/pak-agus-200x188.jpg" alt="" />
                </div>
                <p className="text-[18px] text-gray-500 font-mono mb-5"><i>“Layanan Social Media Management sangat membantu dalam meningkatkan personal branding saya, terimakasih tim ardata”</i></p>
                <p className="text-[16px] font-mono"><span className="font-bold underline">Agus Saputra</span> Tokoh Masyarakat & Organisasi</p>
              </div>
              <div className="bg-white px-[40px] py-[25px] rounded-md" style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
                <h1 className="text-[24px] text-gray-800 font-mono font-semibold mb-5">Corporate Client</h1>
                <div className="flex justify-center items-center mb-5">
                  <img className="w-[100px] h-[100px]" src="https://ardata.co.id/wp-content/uploads/2021/05/pak-ahsan-200x188.jpg" alt="" />
                </div>
                <p className="text-[18px] text-gray-500 font-mono mb-5"><i>“Ardata punya tim enginer yang handal, selalu memberi advice dan solusi. Alhamdulillah, Apps kami telah dipakai oleh 100ribu user“</i></p>
                <p className="text-[16px] font-mono"><span className="font-bold underline">Dr. Muhammad Ahsan</span> AGPAII</p>
              </div>
              <div className="bg-white px-[40px] py-[25px] rounded-md" style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
                <h1 className="text-[24px] text-gray-800 font-mono font-semibold mb-5">Government Client</h1>
                <div className="flex justify-center items-center mb-5">
                  <img className="w-[100px] h-[100px]" src="https://ardata.co.id/wp-content/uploads/2021/05/pp-200x188.jpg" alt="" />
                </div>
                <p className="text-[18px] text-gray-500 font-mono mb-5"><i>“Enak diajak diskusi, hasil bagus, dan sesuai target KPI yang diberikan”</i></p>
                <p className="text-[16px] font-mono"><span className="font-bold underline">Joko Usito, M.Kom</span> Tim IT Politeknik Negeri Semarang</p>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
      
    </Fragment>
  )
}

export default Home;