import { Fragment } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Accordion from "../Component/Accordion";

const Portfolio = () => {
  return (
    <Fragment>
      <Navbar menu={"portfolio"} />
      <main>
          <section>
            <div className="w-full h-[430px] bg-[#E0ECF0] flex justify-center items-center">
              <div className="pt-[74px] w-full px-[30px]">
                <h1 className="text-center text-[30px] font-mono font-bold text-gray-800">Portfolio Web Developer</h1>
                <h3 className="text-center text-[18px] text-gray-500 font-mono">beberapa client kami yang meliputi pembuatan sistem informasi, website, dan aplikasi</h3>
              </div>
            </div>
          </section>
          <section>
            <div className="px-[30px] py-[60px]">
              <div className="flex flex-col md:flex-row p-[20px] md:p-[60px] gap-5 rounded-xl" style={{boxShadow: "0 0 2px 0 rgba(0,0,0,0.75)"}}>
                <div className="w-full">
                  <img className="rounded-xl" src="" alt="Coming soon" />
                </div>
                <div className="w-full">
                <p className="text-[18px] px-[12px] font-mono font-semibold text-gray-500">Coming soon</p>
                  <Accordion />
                </div>
              </div>
            </div>
          </section>
      </main>
      <Footer />
    </Fragment>
  )
}

export default Portfolio;