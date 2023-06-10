// Components
import { Navbar } from './components/';
// Images
import WebThreeDesktop from './assets/images/image-web-3-desktop.jpg';
import WebThreeMobile from './assets/images/image-web-3-mobile.jpg';
import RetroPcs from './assets/images/image-retro-pcs.jpg';
import TopLaptops from './assets/images/image-top-laptops.jpg';
import GamingGrowth from './assets/images/image-gaming-growth.jpg';

function App() {
  return (
    <>
      <Navbar />
      <main className="grid grid-cols-1 xl:grid-cols-3 gap-x-[30px] gap-y-[30px] lg:gap-y-[75px] mt-4 lg:mt-14">
        <article className="xl:col-span-2 w-full">
          <img
            src={WebThreeDesktop}
            alt=""
            className="hidden lg:block object-cover object-center h-[300px] w-full"
          />
          <img
            src={WebThreeMobile}
            alt=""
            className="block lg:hidden object-cover object-center"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[30px] mt-6 xl:mt-8">
            <h2 className="text-[40px] lg:text-[56px] font-extrabold leading-none">
              The Bright Future of Web 3.0?
            </h2>
            <div className="flex flex-col items-start mt-4 xl:mt-0">
              <p className="text-[14px] text-dark-grayish-blue tracking-[0.035rem] leading-[1.55rem] xl:leading-[1.5rem]">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <a
                href="."
                className="bg-soft-red font-bold hover:bg-very-dark-blue transition duration-300 text-off-white px-[30px] py-[16px] xl:py-[18px] uppercase tracking-[0.25rem] text-[13px] leading-none whitespace-nowrap mt-6 xl:mt-8"
              >
                Read More
              </a>
            </div>
          </div>
        </article>
        <aside className="bg-very-dark-blu flex flex-col px-6 pt-6 lg:pt-8 w-full bg-very-dark-blue mt-[40px] lg:mt-0">
          <span className="text-soft-orange text-[30px] lg:text-[40px] leading-none font-bold">
            New
          </span>
          <article className="border-b border-dark-grayish-blue py-8">
            <h2 className="text-[20px] font-bold text-off-white hover:text-soft-orange transition duration-300 cursor-pointer">
              Hydrogen VS Electric Cars
            </h2>
            <p className="text-[14px] tracking-[0.035rem] text-grayish-blue mt-2 lg:mt-0">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </article>
          <article className="border-b border-dark-grayish-blue py-8">
            <h2 className="text-[20px] font-bold text-off-white hover:text-soft-orange transition duration-300 cursor-pointer">
              The Downsides of AI Artistry
            </h2>
            <p className="text-[14px] tracking-[0.035rem] text-grayish-blue mt-2 lg:mt-0">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>
          <article className="py-8">
            <h2 className="text-[20px] font-bold text-off-white hover:text-soft-orange transition duration-300 cursor-pointer">
              Is VC Funding Drying Up?
            </h2>
            <p className="text-[14px] tracking-[0.035rem] text-grayish-blue mt-2 lg:mt-0">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </aside>
        <article className="flex gap-x-[20px] lg:gap-x-[30px] mt-8 lg:mt-0">
          <img src={RetroPcs} alt="" className="w-[100px]" />
          <div className="flex flex-col justify-between">
            <span className="text-grayish-blue text-3xl font-bold">01</span>
            <h2 className="text-[18px] font-extrabold text-very-dark-blue hover:text-soft-red transition duration-300 cursor-pointer">
              Reviving Retro PCs
            </h2>
            <p className="text-[14px] tracking-[0.035rem] text-dark-grayish-blue">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </article>
        <article className="flex gap-x-[20px] lg:x-[30px]">
          <img src={TopLaptops} alt="" className="w-[100px]" />
          <div className="flex flex-col justify-between">
            <span className="text-grayish-blue text-3xl font-bold">02</span>
            <h2 className="text-[18px] font-extrabold text-very-dark-blue hover:text-soft-red transition duration-300 cursor-pointer">
              Top 10 Laptops of 2022
            </h2>
            <p className="text-[14px] tracking-[0.035rem] text-dark-grayish-blue">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </article>
        <article className="flex gap-x-[20px] lg:x-[30px]">
          <img src={GamingGrowth} alt="" className="w-[100px]" />
          <div className="flex flex-col justify-between">
            <span className="text-grayish-blue text-3xl font-bold">03</span>
            <h2 className="text-[18px] font-extrabold text-very-dark-blue hover:text-soft-red transition duration-300 cursor-pointer">
              The Growth of Gaming
            </h2>
            <p className="text-[14px] tracking-[0.035rem] text-dark-grayish-blue">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </article>
      </main>
      <footer className="flex flex-col lg:justify-center lg:flex-row mt-16 gap-x-1 text-sm text-dark-grayish-blue text-center">
        <span>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-soft-red hover:text-soft-orange"
          >
            Frontend Mentor
          </a>
          .
        </span>
        <span>
          Coded by{' '}
          <a
            href="https://github.com/waldosmuts"
            target="_blank"
            className="text-soft-red hover:text-soft-orange"
          >
            Waldo
          </a>
          .
        </span>
      </footer>
    </>
  );
}

export default App;
