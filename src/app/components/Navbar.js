import { useState } from 'react'

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="border-gray-200 bg-[#F1F4F5]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            width="176"
            height="42"
            viewBox="0 0 176 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5246 33.1116C22.5606 29.4402 21.6298 26.4546 20.4458 26.443C19.2617 26.4314 18.2727 29.3983 18.2369 33.0697C18.201 36.7411 19.1318 39.7268 20.3158 39.7383C21.4998 39.7499 22.4888 36.783 22.5246 33.1116Z"
              fill="#640EF1"
            />
            <path
              d="M15.6576 32.2777C17.6728 29.2086 18.5041 26.1937 17.5144 25.5438C16.5245 24.8939 14.0884 26.855 12.0732 29.9241C10.058 32.9933 9.22669 36.0081 10.2164 36.6581C11.2063 37.308 13.6423 35.3469 15.6576 32.2777Z"
              fill="#640EF1"
            />
            <path
              d="M10.3233 27.8744C13.6781 26.3822 16.0074 24.2955 15.5261 23.2136C15.0449 22.1317 11.9353 22.4643 8.58062 23.9565C5.22593 25.4487 2.89655 27.5354 3.37779 28.6174C3.85902 29.6993 6.96865 29.3666 10.3233 27.8744Z"
              fill="#640EF1"
            />
            <path
              d="M15.1235 20.1796C15.3037 19.0093 12.5079 17.6078 8.87911 17.0492C5.25022 16.4907 2.16243 16.9867 1.9823 18.157C1.80217 19.3273 4.59791 20.7287 8.22678 21.2873C11.8556 21.8459 14.9434 21.3499 15.1235 20.1796Z"
              fill="#640EF1"
            />
            <path
              d="M16.4264 17.3916C17.2106 16.5044 15.616 13.8141 12.8649 11.3826C10.1137 8.95121 7.24784 7.6994 6.4637 8.58665C5.67956 9.47392 7.27412 12.1642 10.0253 14.5957C12.7764 17.0271 15.6423 18.2789 16.4264 17.3916Z"
              fill="#640EF1"
            />
            <path
              d="M19.0211 15.7623C20.1605 15.4399 20.2737 12.3145 19.274 8.78164C18.2743 5.24877 16.5402 2.64618 15.4009 2.96859C14.2615 3.29099 14.1483 6.41631 15.148 9.94921C16.1477 13.482 17.8818 16.0847 19.0211 15.7623Z"
              fill="#640EF1"
            />
            <path
              d="M26.0667 10.0591C27.1359 6.54664 27.0844 3.4197 25.9516 3.07489C24.8188 2.73007 23.0338 5.29796 21.9646 8.81043C20.8954 12.3229 20.947 15.4498 22.0798 15.7946C23.2126 16.1394 24.9976 13.5716 26.0667 10.0591Z"
              fill="#640EF1"
            />
            <path
              d="M31.1011 14.8052C33.8993 12.428 35.5462 9.76935 34.7795 8.86698C34.0128 7.96458 31.123 9.16015 28.3249 11.5373C25.5267 13.9145 23.8799 16.5731 24.6466 17.4755C25.4132 18.3779 28.3031 17.1824 31.1011 14.8052Z"
              fill="#640EF1"
            />
            <path
              d="M32.7658 21.5215C36.405 21.0346 39.2278 19.6885 39.0707 18.5149C38.9138 17.3413 35.8363 16.7845 32.1971 17.2713C28.558 17.7582 25.7351 19.1043 25.8922 20.278C26.0492 21.4516 29.1266 22.0084 32.7658 21.5215Z"
              fill="#640EF1"
            />
            <path
              d="M37.4603 28.9528C37.9628 27.8806 35.675 25.7484 32.3504 24.1903C29.0258 22.6322 25.9234 22.2384 25.4209 23.3106C24.9184 24.3828 27.2062 26.515 30.5308 28.0731C33.8554 29.6311 36.9579 30.025 37.4603 28.9528Z"
              fill="#640EF1"
            />
            <path
              d="M30.4671 36.8639C31.4695 36.2337 30.6978 33.203 28.7435 30.0947C26.7892 26.9865 24.3922 24.9778 23.3898 25.608C22.3874 26.2382 23.1591 29.269 25.1134 32.3772C27.0678 35.4854 29.4647 37.4942 30.4671 36.8639Z"
              fill="#640EF1"
            />
            <path
              d="M71 15.376L66.996 31H61.648L58.82 20.528L55.964 31H50.616L46.612 15.376H51.4L53.472 26.632L56.384 15.376H61.48L64.476 26.66L66.548 15.376H71ZM87.574 22.768C87.574 23.16 87.5274 23.5893 87.434 24.056H76.598C76.654 25.232 76.9527 26.0813 77.494 26.604C78.0354 27.108 78.726 27.36 79.566 27.36C80.2754 27.36 80.8634 27.1827 81.33 26.828C81.7967 26.4733 82.1047 26.016 82.254 25.456H87.322C87.1167 26.5573 86.6687 27.5467 85.978 28.424C85.2874 29.2827 84.41 29.964 83.346 30.468C82.282 30.9533 81.0967 31.196 79.79 31.196C78.2594 31.196 76.8967 30.8787 75.702 30.244C74.526 29.5907 73.602 28.6573 72.93 27.444C72.258 26.2307 71.922 24.812 71.922 23.188C71.922 21.5453 72.2487 20.1267 72.902 18.932C73.574 17.7187 74.5074 16.7947 75.702 16.16C76.8967 15.5067 78.2594 15.18 79.79 15.18C81.3394 15.18 82.702 15.4973 83.878 16.132C85.054 16.7667 85.9594 17.6627 86.594 18.82C87.2474 19.9587 87.574 21.2747 87.574 22.768ZM82.73 22.04C82.7487 21.0133 82.4687 20.248 81.89 19.744C81.33 19.2213 80.63 18.96 79.79 18.96C78.9127 18.96 78.1847 19.2213 77.606 19.744C77.0274 20.2667 76.7007 21.032 76.626 22.04H82.73ZM95.754 15.18C97.7326 15.18 99.31 15.6747 100.486 16.664C101.681 17.6533 102.427 18.96 102.726 20.584H98.246C98.1153 19.9493 97.8166 19.4547 97.35 19.1C96.902 18.7267 96.3326 18.54 95.642 18.54C95.1006 18.54 94.69 18.6613 94.41 18.904C94.13 19.128 93.99 19.4547 93.99 19.884C93.99 20.3693 94.242 20.7333 94.746 20.976C95.2686 21.2187 96.0806 21.4613 97.182 21.704C98.3766 21.984 99.3566 22.2733 100.122 22.572C100.887 22.852 101.55 23.3187 102.11 23.972C102.67 24.6253 102.95 25.5027 102.95 26.604C102.95 27.5 102.707 28.2933 102.222 28.984C101.737 29.6747 101.037 30.216 100.122 30.608C99.2073 31 98.1246 31.196 96.874 31.196C94.7646 31.196 93.0753 30.7293 91.806 29.796C90.5366 28.8627 89.762 27.528 89.482 25.792H94.102C94.1766 26.464 94.4566 26.9773 94.942 27.332C95.446 27.6867 96.09 27.864 96.874 27.864C97.4153 27.864 97.826 27.7427 98.106 27.5C98.386 27.2387 98.526 26.9027 98.526 26.492C98.526 25.9507 98.2646 25.568 97.742 25.344C97.238 25.1013 96.4073 24.8493 95.25 24.588C94.0926 24.3453 93.1406 24.084 92.394 23.804C91.6473 23.524 91.0033 23.076 90.462 22.46C89.9206 21.8253 89.65 20.9667 89.65 19.884C89.65 18.484 90.182 17.3547 91.246 16.496C92.31 15.6187 93.8126 15.18 95.754 15.18ZM120.441 22.768C120.441 23.16 120.395 23.5893 120.301 24.056H109.465C109.521 25.232 109.82 26.0813 110.361 26.604C110.903 27.108 111.593 27.36 112.433 27.36C113.143 27.36 113.731 27.1827 114.197 26.828C114.664 26.4733 114.972 26.016 115.121 25.456H120.189C119.984 26.5573 119.536 27.5467 118.845 28.424C118.155 29.2827 117.277 29.964 116.213 30.468C115.149 30.9533 113.964 31.196 112.657 31.196C111.127 31.196 109.764 30.8787 108.569 30.244C107.393 29.5907 106.469 28.6573 105.797 27.444C105.125 26.2307 104.789 24.812 104.789 23.188C104.789 21.5453 105.116 20.1267 105.769 18.932C106.441 17.7187 107.375 16.7947 108.569 16.16C109.764 15.5067 111.127 15.18 112.657 15.18C114.207 15.18 115.569 15.4973 116.745 16.132C117.921 16.7667 118.827 17.6627 119.461 18.82C120.115 19.9587 120.441 21.2747 120.441 22.768ZM115.597 22.04C115.616 21.0133 115.336 20.248 114.757 19.744C114.197 19.2213 113.497 18.96 112.657 18.96C111.78 18.96 111.052 19.2213 110.473 19.744C109.895 20.2667 109.568 21.032 109.493 22.04H115.597ZM127.725 18.316C128.322 17.364 129.088 16.608 130.021 16.048C130.973 15.488 132 15.208 133.101 15.208V20.332H131.729C130.46 20.332 129.47 20.6027 128.761 21.144C128.07 21.6853 127.725 22.6 127.725 23.888V31H122.937V15.376H127.725V18.316ZM142.329 26.324L145.717 15.376H150.813L145.269 31H139.333L133.789 15.376H138.885L142.329 26.324ZM167.637 22.768C167.637 23.16 167.59 23.5893 167.497 24.056H156.661C156.717 25.232 157.015 26.0813 157.557 26.604C158.098 27.108 158.789 27.36 159.629 27.36C160.338 27.36 160.926 27.1827 161.393 26.828C161.859 26.4733 162.167 26.016 162.317 25.456H167.385C167.179 26.5573 166.731 27.5467 166.041 28.424C165.35 29.2827 164.473 29.964 163.409 30.468C162.345 30.9533 161.159 31.196 159.853 31.196C158.322 31.196 156.959 30.8787 155.765 30.244C154.589 29.5907 153.665 28.6573 152.993 27.444C152.321 26.2307 151.985 24.812 151.985 23.188C151.985 21.5453 152.311 20.1267 152.965 18.932C153.637 17.7187 154.57 16.7947 155.765 16.16C156.959 15.5067 158.322 15.18 159.853 15.18C161.402 15.18 162.765 15.4973 163.941 16.132C165.117 16.7667 166.022 17.6627 166.657 18.82C167.31 19.9587 167.637 21.2747 167.637 22.768ZM162.793 22.04C162.811 21.0133 162.531 20.248 161.953 19.744C161.393 19.2213 160.693 18.96 159.853 18.96C158.975 18.96 158.247 19.2213 157.669 19.744C157.09 20.2667 156.763 21.032 156.689 22.04H162.793ZM174.248 26.212V31H169.292V26.212H174.248Z"
              fill="#080C2E"
            />
          </svg>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse items-center">
          <div className="h-11 w-11 rounded-full bg-white flex items-center justify-center">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 7.67001V6.70001C8 4.45001 9.81 2.24001 12.06 2.03001C14.74 1.77001 17 3.88001 17 6.51001V7.89001"
                stroke="#080C2E"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.50001 22H15.5C19.52 22 20.24 20.39 20.45 18.43L21.2 12.43C21.47 9.99 20.77 8 16.5 8H8.50001C4.23001 8 3.53001 9.99 3.80001 12.43L4.55001 18.43C4.76001 20.39 5.48001 22 9.50001 22Z"
                stroke="#080C2E"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.9955 12H16.0045"
                stroke="#080C2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.99451 12H9.00349"
                stroke="#080C2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="19.5" cy="7" r="4" fill="#FF3232" />
            </svg>
          </div>
          <button
            type="button"
            className="text-white bg-[#080C2E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-base px-8 py-3 text-center sm:hidden md:block hidden"
          >
            Sign In
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none dark:text-gray-400 dark:focus:ring-gray-400"
            aria-controls="navbar-cta"
            aria-expanded={isMobileMenuOpen}
            onClick={handleToggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMobileMenuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-300">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:hover:text-[#640EF1] text-base font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <button
                onClick={toggleDropdown}
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:hover:text-[#640EF1] md:p-0 md:w-auto md:dark:hover:bg-transparent text-base font-medium"
              >
                Services
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className={`absolute ${
                  isDropdownOpen ? 'block' : 'hidden'
                } z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:divide-gray-200 mt-4`}
              >
                <ul
                  className="py-2 text-base"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-[#640EF1]/70 hover:text-white"
                    >
                      Extra Layers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-[#640EF1]/70 hover:text-white"
                    >
                      Customizable
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-[#640EF1]/70 hover:text-white"
                    >
                      Ai Automation
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-base hover:bg-[#640EF1]/70 hover:text-white"
                  >
                    More Info
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:hover:text-[#640EF1] text-base font-medium"
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:hover:text-[#640EF1] text-base font-medium"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 rounded md:hover:bg-transparent md:hover:text-[#640EF1] text-base font-medium"
              >
                Blog
              </a>
            </li>
            <li className="mt-5">
              <button
                type="button"
                className="text-white bg-[#080C2E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-base px-8 py-3 text-center md:hidden"
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
