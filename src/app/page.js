'use client'
import Marquee from 'react-fast-marquee'
import Accordion from './components/Accordion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const accordionItems = [
  {
    header: 'Why do we need to use Kapp?',
    text: 'Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments',
  },
  {
    header: 'What if data doesn’t get stored?',
    text: 'Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments',
  },
  {
    header: 'Do we need to pay 6 months per item?',
    text: 'Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments',
  },
  {
    header: 'Can we guarantee no any loss at all?',
    text: 'Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments',
  },
  {
    header: 'How to migrate from other service?',
    text: 'Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments',
  },
  {
    header: 'Send eMail to us for other questions',
    text: 'Kapp is able to develop by themselve without removing the parents permission and lorem dolor si amet fully run network at 100% avoiding data-loss at any moments',
  },
]

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto">
        <section
          className="flex flex-col md:flex-row justify-between items-center space-y-10 mt-24 px-5 lg:px-0"
          id="hero"
        >
          <div className="flex flex-col w-full md:w-1/2">
            <div className="w-full md:w-7/12 flex space-x-2 items-center bg-white rounded-full py-3 px-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 22.5C18.0228 22.5 22.5 18.0228 22.5 12.5C22.5 6.97715 18.0228 2.5 12.5 2.5C6.97715 2.5 2.5 6.97715 2.5 12.5C2.5 18.0228 6.97715 22.5 12.5 22.5Z"
                  stroke="#080C2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.50001 3.5H9.50001C7.55001 9.34 7.55001 15.66 9.50001 21.5H8.50001"
                  stroke="#080C2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 3.5C17.45 9.34 17.45 15.66 15.5 21.5"
                  stroke="#080C2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 16.5V15.5C9.34 17.45 15.66 17.45 21.5 15.5V16.5"
                  stroke="#080C2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 9.50001C9.34 7.55001 15.66 7.55001 21.5 9.50001"
                  stroke="#080C2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-base font-semibold">
                We host more than 120,000 websites
              </p>
            </div>
            <div className="justify-center items-center text-center md:text-left md:items-start md:justify-start my-10">
              <h1 className="text-4xl md:text-7xl font-semibold mb-3">
                Grow Online Business Faster.
              </h1>
              <p className="w-full md:w-8/12 text-base font-medium text-[#5D5D7C]">
                We provide a variety of servers to grow your users acquisition
                much user-friendly and boosting up sales.
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-5">
              <button className="px-6 md:px-10 py-2 md:py-4 rounded-full bg-[#640EF1] text-md md:text-lg font-medium md:font-bold text-white shrink-0">
                Try Free Trial
              </button>
              <a href="#" className="flex items-center space-x-2">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 12.2V13.9C20.5 17.05 18.7 18.4 16 18.4H7C4.3 18.4 2.5 17.05 2.5 13.9V8.5C2.5 5.35 4.3 4 7 4H9.7C9.57 4.38 9.5 4.8 9.5 5.25V9.15002C9.5 10.12 9.82 10.94 10.39 11.51C10.96 12.08 11.78 12.4 12.75 12.4V13.79C12.75 14.3 13.33 14.61 13.76 14.33L16.65 12.4H19.25C19.7 12.4 20.12 12.33 20.5 12.2Z"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.5 5.25V9.15002C22.5 10.64 21.74 11.76 20.5 12.2C20.12 12.33 19.7 12.4 19.25 12.4H16.65L13.76 14.33C13.33 14.61 12.75 14.3 12.75 13.79V12.4C11.78 12.4 10.96 12.08 10.39 11.51C9.82 10.94 9.5 10.12 9.5 9.15002V5.25C9.5 4.8 9.57 4.38 9.7 4C10.14 2.76 11.26 2 12.75 2H19.25C21.2 2 22.5 3.3 22.5 5.25Z"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.89999 22H15.1"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.5 18.4V22"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.9955 7.25H19.0045"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.1957 7.25H16.2047"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3954 7.25H13.4044"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base font-semibold text-[#640EF1]">
                  Schedule a Demo
                </p>
              </a>
            </div>
          </div>
          <div className="">
            <img src="/hero-image.png" alt="hero-image" />
          </div>
        </section>

        <section
          className="flex flex-col md:flex-row space-y-8 md:space-y-0 justify-center items-center space-x-0 md:space-x-12 mt-24"
          id="client"
        >
          <a href="#">
            <img src="/client-1.png" alt="client-image" />
          </a>
          <a href="#">
            <img src="/client-2.png" alt="client-image" />
          </a>
          <a href="#">
            <img src="/client-3.png" alt="client-image" />
          </a>
          <a href="#">
            <img src="/client-5.png" alt="client-image" />
          </a>
          <a href="#">
            <img src="/client-1.png" alt="client-image" />
          </a>
        </section>

        <section className="mt-24 flex flex-col px-5 lg:px-0" id="bestChoice">
          <div className="font-semibold text-3xl md:text-5xl text-center mb-8">
            <h2>Your Best Choice</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-xl shadow-lg">
              <div className="p-6 flex flex-col gap-y-7">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.5292 27.6V16.2917C31.5292 15.2375 30.6667 14.375 29.6125 14.375H24.0541"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.9292 11.5L23.4792 14.375L26.9292 17.25"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.4708 19.55V27.6"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.7584 18.975C16.8225 18.975 18.4959 17.3017 18.4959 15.2375C18.4959 13.1734 16.8225 11.5 14.7584 11.5C12.6942 11.5 11.0208 13.1734 11.0208 15.2375C11.0208 17.3017 12.6942 18.975 14.7584 18.975Z"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.4708 34.5C16.3762 34.5 17.9208 32.9554 17.9208 31.05C17.9208 29.1446 16.3762 27.6 14.4708 27.6C12.5654 27.6 11.0208 29.1446 11.0208 31.05C11.0208 32.9554 12.5654 34.5 14.4708 34.5Z"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M31.5292 34.5C33.4346 34.5 34.9792 32.9554 34.9792 31.05C34.9792 29.1446 33.4346 27.6 31.5292 27.6C29.6238 27.6 28.0792 29.1446 28.0792 31.05C28.0792 32.9554 29.6238 34.5 31.5292 34.5Z"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.25 42.1666H28.75C38.3333 42.1666 42.1667 38.3333 42.1667 28.75V17.25C42.1667 7.66665 38.3333 3.83331 28.75 3.83331H17.25C7.66668 3.83331 3.83334 7.66665 3.83334 17.25V28.75C3.83334 38.3333 7.66668 42.1666 17.25 42.1666Z"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="">
                  <h5 className="text-[22px] font-bold">Extra Layer</h5>
                  <p className="text-base font-medium text-gray-600">
                    Making your project more secure avoiding DDoS
                  </p>
                </div>
                <a
                  href="#"
                  className="w-fit text-base font-semibold flex gap-x-2 items-center text-[#640EF1]"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="rounded-xl shadow-lg">
              <div className="p-6 flex flex-col gap-y-7">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.7633 4.33167L37.2408 11.0592C38.6975 11.845 38.6975 14.0875 37.2408 14.8733L24.7633 21.6008C23.6517 22.195 22.3483 22.195 21.2367 21.6008L8.75917 14.8733C7.30251 14.0875 7.30251 11.845 8.75917 11.0592L21.2367 4.33167C22.3483 3.73751 23.6517 3.73751 24.7633 4.33167Z"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.91916 19.4158L18.515 25.2233C19.9525 25.9516 20.8725 27.4275 20.8725 29.0375V40.0008C20.8725 41.5917 19.205 42.6075 17.7867 41.8983L6.19083 36.0908C4.75333 35.3625 3.83333 33.8867 3.83333 32.2767V21.3133C3.83333 19.7225 5.50083 18.7066 6.91916 19.4158Z"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M39.0808 19.4158L27.485 25.2233C26.0475 25.9516 25.1275 27.4275 25.1275 29.0375V40.0008C25.1275 41.5917 26.795 42.6075 28.2133 41.8983L39.8092 36.0908C41.2467 35.3625 42.1667 33.8867 42.1667 32.2767V21.3133C42.1667 19.7225 40.4992 18.7066 39.0808 19.4158Z"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="">
                  <h5 className="text-[22px] font-bold">Customizable</h5>
                  <p className="text-base font-medium text-gray-600">
                    Only install what your business needs to grow
                  </p>
                </div>
                <a
                  href="#"
                  className="w-fit text-base font-semibold flex gap-x-2 items-center text-[#640EF1]"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="rounded-xl shadow-lg">
              <div className="p-6 flex flex-col gap-y-7">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1867 34.7875V30.82"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M23 34.7875V26.8525"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M32.8133 34.7875V22.8658"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M32.8133 11.2125L31.9317 12.2475C27.0442 17.9592 20.4892 22.0034 13.1867 23.8242"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M27.1975 11.2125H32.8133V16.8092"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.25 42.1666H28.75C38.3333 42.1666 42.1667 38.3333 42.1667 28.75V17.25C42.1667 7.66665 38.3333 3.83331 28.75 3.83331H17.25C7.66666 3.83331 3.83333 7.66665 3.83333 17.25V28.75C3.83333 38.3333 7.66666 42.1666 17.25 42.1666Z"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="">
                  <h5 className="text-[22px] font-bold">AI Automation</h5>
                  <p className="text-base font-medium text-gray-600">
                    Decide the business flow based on latest reports
                  </p>
                </div>
                <a
                  href="#"
                  className="w-fit text-base font-semibold flex gap-x-2 items-center text-[#640EF1]"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="rounded-xl shadow-lg">
              <div className="p-6 flex flex-col gap-y-7">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 11.9792V15.8125"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokLinecap="round"
                    strokLinejoin="round"
                  />
                  <path
                    d="M42.1667 23V17.25C42.1667 7.66665 38.3333 3.83331 28.75 3.83331H17.25C7.66668 3.83331 3.83334 7.66665 3.83334 17.25V28.75C3.83334 38.3333 7.66668 42.1666 17.25 42.1666H23"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokLinecap="round"
                    strokLinejoin="round"
                  />
                  <path
                    d="M19.1667 11.9792V15.8125"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokLinecap="round"
                    strokLinejoin="round"
                  />
                  <path
                    d="M11.5 30.6667V34.5"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokLinecap="round"
                    strokLinejoin="round"
                  />
                  <path
                    d="M19.1667 30.6667V34.5"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokLinecap="round"
                    strokLinejoin="round"
                  />
                  <path
                    d="M26.8333 13.8958H34.5"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokLinecap="round"
                    strokLinejoin="round"
                  />
                  <path
                    d="M3.83334 23H42.1667"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokLinecap="round"
                    strokLinejoin="round"
                  />
                  <path
                    d="M41.3233 38.9659C40.25 40.825 38.2375 42.0708 35.9375 42.0708C32.5067 42.0708 30.3983 38.6208 30.3983 38.6208M30.5325 32.7558C31.6058 30.8775 33.6183 29.6317 35.9375 29.6317C40.0967 29.6317 42.1667 33.0817 42.1667 33.0817M42.1667 29.2292V33.0625H38.3333M34.2316 38.6017H30.3983V42.1667"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokLinecap="round"
                    strokLinejoin="round"
                  />
                </svg>

                <div className="">
                  <h5 className="text-[22px] font-bold">Auto-Scaling</h5>
                  <p className="text-base font-medium text-gray-600">
                    Have a long weekend without worrying any loss
                  </p>
                </div>
                <a
                  href="#"
                  className="w-fit text-base font-semibold flex gap-x-2 items-center text-[#640EF1]"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="mt-24 gap-y-10 md:gap-y-0 flex flex-col-reverse md:flex-row items-center justify-between px-5 lg:px-0"
          id="ecosystem"
        >
          <div>
            <img src="/content-image.png" alt="content-image" />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <div className="leading-tight text-center lg:text-left">
              <h2 className="text-3xl md:text-[46px] font-semibold w-full lg:w-8/12 mb-3 leading-snug">
                We Have Very Strong Ecosystem
              </h2>
              <p className="text-base text-[#5D5D7C] font-medium w-full lg:w-8/12">
                We provide a variety of servers to grow your users acquisition
                much user-friendly and boosting up sales.
              </p>
            </div>

            <div className="my-10 flex flex-col gap-y-5">
              <div className="bg-white rounded-2xl p-7 flex items-center space-x-4 w-full lg:w-[550px]">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1925 42.1667H28.6925C38.2758 42.1667 42.1092 38.3334 42.1092 28.75V17.25C42.1092 7.66671 38.2758 3.83337 28.6925 3.83337H17.1925C7.60917 3.83337 3.77583 7.66671 3.77583 17.25V28.75C3.77583 38.3334 7.60917 42.1667 17.1925 42.1667Z"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.77583 24.3417L15.2758 24.3034C16.7133 24.3034 18.3233 25.3959 18.86 26.7375L21.045 32.2575C21.5433 33.5034 22.3292 33.5034 22.8275 32.2575L27.2167 21.1217C27.6383 20.0484 28.4242 20.01 28.9608 21.0259L30.9542 24.8017C31.5483 25.9325 33.0817 26.8525 34.3467 26.8525H42.1283"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h4 className="font-bold text-[22px]">$880 Mio</h4>
                  <p className="font-base font-medium text-[#5D5D7C]">
                    Company budget saved
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-7 flex items-center space-x-4 w-full lg:w-[550px]">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4 38.3333H27.6C35.2667 38.3333 38.3333 35.2666 38.3333 27.6V18.4C38.3333 10.7333 35.2667 7.66663 27.6 7.66663H18.4C10.7333 7.66663 7.66666 10.7333 7.66666 18.4V27.6C7.66666 35.2666 10.7333 38.3333 18.4 38.3333Z"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.125 32.5833H25.875C30.6667 32.5833 32.5833 30.6666 32.5833 25.875V20.125C32.5833 15.3333 30.6667 13.4166 25.875 13.4166H20.125C15.3333 13.4166 13.4167 15.3333 13.4167 20.125V25.875C13.4167 30.6666 15.3333 32.5833 20.125 32.5833Z"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.3525 7.66671V3.83337"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 7.66671V3.83337"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.6667 7.66671V3.83337"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M38.3333 15.3334H42.1667"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M38.3333 23H42.1667"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M38.3333 30.6666H42.1667"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.6667 38.3334V42.1667"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.0192 38.3334V42.1667"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.3525 38.3334V42.1667"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.83333 15.3334H7.66667"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.83333 23H7.66667"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.83333 30.6666H7.66667"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 18.5917L21.1983 21.735C20.7958 22.425 21.1217 23 21.9267 23H24.0733C24.8783 23 25.2042 23.575 24.8017 24.265L23 27.4083"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div>
                  <h4 className="font-bold text-[22px]">450,392</h4>
                  <p className="font-base font-medium text-[#5D5D7C]">
                    All servers available
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-7 flex items-center space-x-4 w-full lg:w-[550px]">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.6183 21.3132C1.64827 21.9457 1.64827 34.9982 10.6183 35.6307H14.2984"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.7142 21.3133C4.56173 4.19744 30.5133 -2.64505 33.4841 15.3333C41.7833 16.3875 45.1375 27.4466 38.8509 32.9475C36.9342 34.6916 34.4617 35.6499 31.8742 35.6308H31.7016"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.5833 31.6825C32.5833 33.1008 32.2766 34.4424 31.7016 35.6308C31.5483 35.9758 31.3759 36.3016 31.1842 36.6083C29.5359 39.3875 26.4883 41.2658 23 41.2658C19.5117 41.2658 16.4641 39.3875 14.8158 36.6083C14.6241 36.3016 14.4517 35.9758 14.2984 35.6308C13.7234 34.4424 13.4167 33.1008 13.4167 31.6825C13.4167 26.3925 17.71 22.0991 23 22.0991C28.29 22.0991 32.5833 26.3925 32.5833 31.6825Z"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.01 31.6825L21.9075 33.58L25.99 29.8042"
                    stroke="#640EF1"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div>
                  <h4 className="font-bold text-[22px]">189 Mio</h4>
                  <p className="font-base font-medium text-[#5D5D7C]">
                    Websites are running good
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-start items-center space-x-5">
              <button className="px-6 md:px-10 py-2 md:py-4 rounded-full bg-[#640EF1] text-md md:text-lg font-medium md:font-bold text-white shrink-0">
                Explore More
              </button>
              <a href="#" className="flex items-center space-x-2">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 12.2V13.9C20.5 17.05 18.7 18.4 16 18.4H7C4.3 18.4 2.5 17.05 2.5 13.9V8.5C2.5 5.35 4.3 4 7 4H9.7C9.57 4.38 9.5 4.8 9.5 5.25V9.15002C9.5 10.12 9.82 10.94 10.39 11.51C10.96 12.08 11.78 12.4 12.75 12.4V13.79C12.75 14.3 13.33 14.61 13.76 14.33L16.65 12.4H19.25C19.7 12.4 20.12 12.33 20.5 12.2Z"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.5 5.25V9.15002C22.5 10.64 21.74 11.76 20.5 12.2C20.12 12.33 19.7 12.4 19.25 12.4H16.65L13.76 14.33C13.33 14.61 12.75 14.3 12.75 13.79V12.4C11.78 12.4 10.96 12.08 10.39 11.51C9.82 10.94 9.5 10.12 9.5 9.15002V5.25C9.5 4.8 9.57 4.38 9.7 4C10.14 2.76 11.26 2 12.75 2H19.25C21.2 2 22.5 3.3 22.5 5.25Z"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.89999 22H15.1"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.5 18.4V22"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.9955 7.25H19.0045"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.1957 7.25H16.2047"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3954 7.25H13.4044"
                    stroke="#640EF1"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base font-semibold text-[#640EF1]">
                  Schedule a Demo
                </p>
              </a>
            </div>
          </div>
        </section>

        <section className="mt-24 flex flex-col" id="showcase">
          <div className="leading-tight flex flex-col justify-center items-center text-center mb-8">
            <h2 className="text-3xl md:text-[46px] font-semibold w-full lg:w-8/12 mb-3">
              Our Showcase
            </h2>
            <p className="text-base text-[#5D5D7C] font-medium w-full lg:w-6/12">
              They built amazing website to help more people around the world by
              using our recommendation services and products
            </p>
          </div>

          <Marquee autoFill pauseOnHover speed="60" className="">
            <div className="group mr-3 overflow-hidden">
              <div className="relative">
                <img
                  className="h-56 w-full object-cover object-center rounded-xl"
                  src="https://source.unsplash.com/640x480?art"
                  alt=""
                />
                <div className="absolute h-full w-full flex flex-col gap-y-2 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:cursor-pointer rounded-xl hover:border-8 hover:border-[#640EF1]">
                  <button className="bg-[#640EF1] text-base font-semibold text-white py-3 px-8 rounded-full shadow-lg shadow-[#640EF1]/60">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="group mr-3 overflow-hidden">
              <div className="relative">
                <img
                  className="h-56 w-full object-cover object-center rounded-xl"
                  src="https://source.unsplash.com/640x480?robot"
                  alt=""
                />
                <div className="absolute h-full w-full flex flex-col gap-y-2 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:cursor-pointer rounded-xl hover:border-8 hover:border-[#640EF1]">
                  <button className="bg-[#640EF1] text-base font-semibold text-white py-3 px-8 rounded-full shadow-lg shadow-[#640EF1]/60">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="group mr-3 overflow-hidden">
              <div className="relative">
                <img
                  className="h-56 w-full object-cover object-center rounded-xl"
                  src="https://source.unsplash.com/640x480?paint"
                  alt=""
                />
                <div className="absolute h-full w-full flex flex-col gap-y-2 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:cursor-pointer rounded-xl hover:border-8 hover:border-[#640EF1]">
                  <button className="bg-[#640EF1] text-base font-semibold text-white py-3 px-8 rounded-full shadow-lg shadow-[#640EF1]/60">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="group mr-3 overflow-hidden">
              <div className="relative">
                <img
                  className="h-56 w-full object-cover object-center rounded-xl"
                  src="https://source.unsplash.com/640x480?3d"
                  alt=""
                />
                <div className="absolute h-full w-full flex flex-col gap-y-2 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:cursor-pointer rounded-xl hover:border-8 hover:border-[#640EF1]">
                  <button className="bg-[#640EF1] text-base font-semibold text-white py-3 px-8 rounded-full shadow-lg shadow-[#640EF1]/60">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="group mr-3 overflow-hidden">
              <div className="relative">
                <img
                  className="h-56 w-full object-cover object-center rounded-xl"
                  src="https://source.unsplash.com/640x480?future"
                  alt=""
                />
                <div className="absolute h-full w-full flex flex-col gap-y-2 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:cursor-pointer rounded-xl hover:border-8 hover:border-[#640EF1]">
                  <button className="bg-[#640EF1] text-base font-semibold text-white py-3 px-8 rounded-full shadow-lg shadow-[#640EF1]/60">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="group mr-3 overflow-hidden">
              <div className="relative">
                <img
                  className="h-56 w-full object-cover object-center rounded-xl"
                  src="https://source.unsplash.com/640x480?digital"
                  alt=""
                />
                <div className="absolute h-full w-full flex flex-col gap-y-2 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:cursor-pointer rounded-xl hover:border-8 hover:border-[#640EF1]">
                  <button className="bg-[#640EF1] text-base font-semibold text-white py-3 px-8 rounded-full shadow-lg shadow-[#640EF1]/60">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="group mr-3 overflow-hidden">
              <div className="relative">
                <img
                  className="h-56 w-full object-cover object-center rounded-xl"
                  src="https://source.unsplash.com/640x480?space"
                  alt=""
                />
                <div className="absolute h-full w-full flex flex-col gap-y-2 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:cursor-pointer rounded-xl hover:border-8 hover:border-[#640EF1]">
                  <button className="bg-[#640EF1] text-base font-semibold text-white py-3 px-8 rounded-full shadow-lg shadow-[#640EF1]/60">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </Marquee>
        </section>

        <section className="mt-24 flex flex-col px-5 lg:px-0" id="faq">
          <div className="leading-tight flex flex-col justify-center items-center text-center mb-8">
            <h2 className="text-3xl md:text-[46px] font-semibold w-full lg:w-8/12 mb-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="">
            <Accordion accordionItems={accordionItems} />
          </div>
        </section>

        <section
          className="mt-24 flex flex-col md:flex-row items-center gap-y-8 md:gap-y-0 justify-between bg-[#640EF1] p-12 rounded-[40px] relative"
          id="growing"
        >
          <div className="flex flex-col w-full md:w-1/2 text-white">
            <div className="w-full md:w-8/12 flex space-x-2 justify-center items-center bg-white rounded-full py-2 px-3 md:px-1">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 22.5C18.0228 22.5 22.5 18.0228 22.5 12.5C22.5 6.97715 18.0228 2.5 12.5 2.5C6.97715 2.5 2.5 6.97715 2.5 12.5C2.5 18.0228 6.97715 22.5 12.5 22.5Z"
                  stroke="#080C2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.50001 3.5H9.50001C7.55001 9.34 7.55001 15.66 9.50001 21.5H8.50001"
                  stroke="#080C2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.5 3.5C17.45 9.34 17.45 15.66 15.5 21.5"
                  stroke="#080C2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 16.5V15.5C9.34 17.45 15.66 17.45 21.5 15.5V16.5"
                  stroke="#080C2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 9.50001C9.34 7.55001 15.66 7.55001 21.5 9.50001"
                  stroke="#080C2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-base font-semibold text-black">
                We host more than 120,000 websites
              </p>
            </div>
            <div className="justify-center items-center text-center md:text-left md:items-start md:justify-start my-10">
              <h1 className="text-2xl md:text-5xl font-semibold mb-3">
                Start Growing Today
              </h1>
              <p className="w-full md:w-9/12 text-sm md:text-base font-medium text-white">
                We provide a variety of servers to grow your users acquisition
                much user-friendly and boosting up sales.
              </p>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-5">
              <button className="px-6 md:px-10 py-2 md:py-4 rounded-full bg-[#FFD15A] text-sm md:text-lg font-medium md:font-bold text-black shrink-0">
                Explore More
              </button>
              <a href="#" className="flex items-center space-x-2">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 12.2V13.9C20.5 17.05 18.7 18.4 16 18.4H7C4.3 18.4 2.5 17.05 2.5 13.9V8.5C2.5 5.35 4.3 4 7 4H9.7C9.57 4.38 9.5 4.8 9.5 5.25V9.15002C9.5 10.12 9.82 10.94 10.39 11.51C10.96 12.08 11.78 12.4 12.75 12.4V13.79C12.75 14.3 13.33 14.61 13.76 14.33L16.65 12.4H19.25C19.7 12.4 20.12 12.33 20.5 12.2Z"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.5 5.25V9.15002C22.5 10.64 21.74 11.76 20.5 12.2C20.12 12.33 19.7 12.4 19.25 12.4H16.65L13.76 14.33C13.33 14.61 12.75 14.3 12.75 13.79V12.4C11.78 12.4 10.96 12.08 10.39 11.51C9.82 10.94 9.5 10.12 9.5 9.15002V5.25C9.5 4.8 9.57 4.38 9.7 4C10.14 2.76 11.26 2 12.75 2H19.25C21.2 2 22.5 3.3 22.5 5.25Z"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.89999 22H15.1"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.5 18.4V22"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.9955 7.25H19.0045"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.1957 7.25H16.2047"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3954 7.25H13.4044"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="shrink-0 text-sm md:text-base font-semibold text-white">
                  Schedule a Demo
                </p>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="w-36 h-44 bg-white rounded-3xl flex flex-col justify-center items-center gap-y-5">
              <svg
                width="47"
                height="46"
                viewBox="0 0 47 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5833 42.1666H29.0833C38.6667 42.1666 42.5 38.3333 42.5 28.7499V17.2499C42.5 7.66659 38.6667 3.83325 29.0833 3.83325H17.5833C8.00001 3.83325 4.16667 7.66659 4.16667 17.2499V28.7499C4.16667 38.3333 8.00001 42.1666 17.5833 42.1666Z"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.7333 17.1924L13.9608 21.9649C13.405 22.5207 13.405 23.4599 13.9608 24.0157L18.7333 28.7882"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.9333 17.1924L32.7058 21.9649C33.2617 22.5207 33.2617 23.4599 32.7058 24.0157L27.9333 28.7882"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-lg font-bold">Web Crawl</p>
            </div>
            <div className="w-36 h-44 bg-white rounded-3xl flex flex-col justify-center items-center gap-y-5">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.4 38.3334H27.6C35.2667 38.3334 38.3333 35.2667 38.3333 27.6001V18.4001C38.3333 10.7334 35.2667 7.66675 27.6 7.66675H18.4C10.7333 7.66675 7.66666 10.7334 7.66666 18.4001V27.6001C7.66666 35.2667 10.7333 38.3334 18.4 38.3334Z"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.125 32.5834H25.875C30.6667 32.5834 32.5833 30.6667 32.5833 25.8751V20.1251C32.5833 15.3334 30.6667 13.4167 25.875 13.4167H20.125C15.3333 13.4167 13.4167 15.3334 13.4167 20.1251V25.8751C13.4167 30.6667 15.3333 32.5834 20.125 32.5834Z"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.3525 7.66659V3.83325"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 7.66659V3.83325"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.6667 7.66659V3.83325"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38.3333 15.3333H42.1667"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38.3333 23H42.1667"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M38.3333 30.6667H42.1667"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.6667 38.3333V42.1666"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.0192 38.3333V42.1666"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.3525 38.3333V42.1666"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.83334 15.3333H7.66668"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.83334 23H7.66668"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.83334 30.6667H7.66668"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 18.5916L21.1983 21.7349C20.7958 22.4249 21.1217 22.9999 21.9267 22.9999H24.0733C24.8783 22.9999 25.2042 23.5749 24.8017 24.2649L23 27.4082"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-lg font-bold">Fast Report</p>
            </div>
            <div className="w-36 h-44 bg-white rounded-3xl flex flex-col justify-center items-center gap-y-5">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1058 4.27424L10.5417 7.8584C8.33749 8.68256 6.53583 11.2892 6.53583 13.6467V27.8875C6.53583 30.1492 8.03085 33.12 9.85168 34.4809L18.0933 40.6334C20.7958 42.6651 25.2425 42.6651 27.945 40.6334L36.1867 34.4809C38.0075 33.12 39.5025 30.1492 39.5025 27.8875V13.6467C39.5025 11.2892 37.7008 8.68256 35.4966 7.8584L25.9325 4.27424C24.3033 3.68007 21.6966 3.68007 20.1058 4.27424Z"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 20.9301C22.9233 20.9301 22.8275 20.9301 22.7508 20.9301C20.9492 20.8726 19.5117 19.3775 19.5117 17.5567C19.5117 15.6975 21.0258 14.1833 22.885 14.1833C24.7442 14.1833 26.2584 15.6975 26.2584 17.5567C26.2392 19.3967 24.8017 20.8726 23 20.9301Z"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.1858 26.2967C17.3458 27.5234 17.3458 29.5358 19.1858 30.7625C21.275 32.1617 24.7058 32.1617 26.795 30.7625C28.635 29.5358 28.635 27.5234 26.795 26.2967C24.725 24.8975 21.2942 24.8975 19.1858 26.2967Z"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-lg font-bold">Anti-DDoS</p>
            </div>
            <div className="w-36 h-44 bg-white rounded-3xl flex flex-col justify-center items-center gap-y-5">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.52 35.2876V31.3201"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M23.3333 35.2875V27.3525"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M33.1467 35.2874V23.3657"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M33.1467 11.7124L32.265 12.7474C27.3775 18.4591 20.8225 22.5032 13.52 24.3241"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M27.5308 11.7124H33.1467V17.3091"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5833 42.6666H29.0833C38.6667 42.6666 42.5 38.8333 42.5 29.2499V17.7499C42.5 8.16659 38.6667 4.33325 29.0833 4.33325H17.5833C8.00001 4.33325 4.16667 8.16659 4.16667 17.7499V29.2499C4.16667 38.8333 8.00001 42.6666 17.5833 42.6666Z"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-lg font-bold">Auto-Scale</p>
            </div>
            <div className="w-36 h-44 bg-white rounded-3xl flex flex-col justify-center items-center gap-y-5">
              <svg
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4583 42.6667V29.25"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4583 10.0833V4.33325"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.5417 42.6667V36.9167"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33.5417 17.7499V4.33325"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.2083 13.9166V25.4166C18.2083 27.5249 17.25 29.2499 14.375 29.2499H10.5417C7.66668 29.2499 6.70834 27.5249 6.70834 25.4166V13.9166C6.70834 11.8083 7.66668 10.0833 10.5417 10.0833H14.375C17.25 10.0833 18.2083 11.8083 18.2083 13.9166Z"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39.2917 21.5833V33.0833C39.2917 35.1917 38.3333 36.9167 35.4583 36.9167H31.625C28.75 36.9167 27.7917 35.1917 27.7917 33.0833V21.5833C27.7917 19.475 28.75 17.75 31.625 17.75H35.4583C38.3333 17.75 39.2917 19.475 39.2917 21.5833Z"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-lg font-bold">AI Perform</p>
            </div>
            <div className="w-36 h-44 bg-white rounded-3xl flex flex-col justify-center items-center gap-y-5">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.675 36.8784H14.6583C13.8533 36.8784 12.9525 36.2459 12.6841 35.4793L4.74914 13.2843C3.61831 10.1026 4.94081 9.1251 7.66247 11.0801L15.1375 16.4276C16.3833 17.2901 17.8016 16.8493 18.3383 15.4501L21.7116 6.46094C22.785 3.58594 24.5675 3.58594 25.6408 6.46094L29.0141 15.4501C29.5508 16.8493 30.9691 17.2901 32.1958 16.4276L39.2108 11.4251C42.2008 9.27844 43.6383 10.3709 42.4116 13.8401L34.6683 35.5176C34.3808 36.2459 33.48 36.8784 32.675 36.8784Z"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.125 42.6667H34.2083"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.875 27.3333H28.4583"
                  stroke="#640EF1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-lg font-bold">Top Plugins+</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
