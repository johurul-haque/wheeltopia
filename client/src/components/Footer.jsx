import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full border-t px-4 py-7 sm:px-6 md:py-10 md:pt-14 lg:px-8">
      <div className="mx-auto max-w-7xl text-gray-900">
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-12">
          <div className="col-span-full lg:col-span-2 xl:pr-8">
            <Logo />
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Explore a world of fun and excitement with our collection of toy
              cars! From speedy sports cars to mighty trucks and mini emergency
              vehicles, embark on thrilling adventures and let your imagination
              soar in our playful car wonderland.
            </p>
          </div>
          <div className="max-[480px]:col-span-2">
            <p className="text-base font-semibold ">Company</p>
            <address className="mt-3 text-sm text-gray-800">
              <p>123 Main Street</p>
              <p>Anytown, USA 12345</p>
              <a
                href="mailto:hello@johurul.dev"
                className="mt-2 flex items-center gap-2 text-base text-gray-600 transition-all duration-200 hover:bg-gradient-to-r hover:from-green-600 hover:from-50% hover:to-lime-500 hover:bg-clip-text hover:text-transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="aspect-square w-5 stroke-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                  <span className="sr-only">Email</span>
                </svg>
                hello@johurul.dev
              </a>
              <a
                href="tel:+01234567890"
                className="mt-2 flex items-center gap-1 transition-all duration-200 hover:bg-gradient-to-r hover:from-green-600 hover:from-50% hover:to-lime-500 hover:bg-clip-text hover:text-transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 fill-gray-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                    clipRule="evenodd"
                  />
                  <span className="sr-only">Call</span>
                </svg>
                <span className="text-gray-500">+880</span>
                1234-567890
              </a>
            </address>
          </div>
          <div>
            <p className="text-base font-semibold">Help</p>
            <ul className="mt-3 space-y-3 text-gray-800">
              {[
                ["Customer Support"],
                ["Delivery Details"],
                ["Terms & Conditions"],
                ["Privacy Policy"],
              ].map((title, i) => (
                <li key={i}>
                  <a
                    href="/"
                    className="text-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-green-600 hover:from-50% hover:to-lime-500 hover:bg-clip-text hover:text-transparent"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="mb-7 mt-8 border-gray-200" />
        <div className="flex-wrap items-center justify-between sm:flex">
          <p className="text-sm text-gray-600 max-sm:text-center">
            © Copyright 2023, All Rights Reserved by Wheeltopia
          </p>
          <ul className="mt-5 flex items-center justify-center space-x-3 sm:mt-0 md:order-3">
            <span className="sr-only">Social Media</span>
            <li>
              <a
                href="https://www.facebook.com/jhjony11/"
                target="_blank"
                rel="noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-800 transition-all duration-200 hover:border-transparent hover:bg-gradient-to-br hover:from-emerald-600 hover:to-lime-600 hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  <span className="sr-only">Facebook</span>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/johurul-haque"
                target="_blank"
                rel="noreferrer"
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 bg-transparent text-gray-800 transition-all duration-200 hover:rounded-full hover:border-transparent
                  hover:bg-gradient-to-br hover:from-emerald-600 hover:to-lime-600 hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  ></path>
                  <span className="sr-only">GitHub</span>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
