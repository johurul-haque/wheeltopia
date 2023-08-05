import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/Authentication";
import { ActiveLink } from "./ActiveLink";
import Logo from "./Logo";
import Profile from "./Profile";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const toggleNav = () => {
    document.querySelector('#main-nav').classList.toggle('max-md:scale-0');
    document.querySelector('body').classList.toggle('overflow-hidden');
  };

  const removeNav = () => {
    document.querySelector('#main-nav').classList.add('max-md:scale-0');
    document.querySelector('body').classList.remove('overflow-hidden');
    document.querySelector('#bars').classList.remove('ring');
  };

  return (
    <header className="sticky top-0 z-50 -mb-1 w-full border-b bg-slate-100/95 px-4 py-1.5 backdrop-blur-3xl sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-gray-900">
        <Logo />
        <nav
          id="main-nav"
          className="left-0 right-0 top-[4.5rem] flex origin-top-right items-center gap-x-7 gap-y-9 transition-all duration-300 focus-visible:scale-0 max-md:absolute max-md:h-screen max-md:scale-0 max-md:flex-col max-md:bg-slate-100/95 max-md:backdrop-blur-3xl"
        >
          <ul className="flex items-center justify-between gap-9 max-md:mt-10 max-md:flex-col max-md:text-xl max-md:font-semibold">
            {[
              ['Home', '/'],
              ['All Toys', '/toys'],
              ['Blogs', '/blogs'],
            ].map(([title, path], i) => (
              <li key={i} onClick={removeNav}>
                <ActiveLink to={path}>{title}</ActiveLink>
              </li>
            ))}
            {user &&
              [
                ['My Toys', '/collection'],
                ['Add a Toy', '/addtoys'],
              ].map(([title, path], i) => (
                <li key={i} onClick={removeNav}>
                  <ActiveLink to={path}>{title}</ActiveLink>
                </li>
              ))}
          </ul>
          {user ? (
            <>
              <Profile src={user.reloadUserInfo.photoUrl} />
              <button
                onClick={logOut}
                className="bg rounded-full bg-red-300/75 bg-gradient-to-br px-6 py-1 text-lg font-semibold text-red-950 outline-none ring-red-300 ring-offset-2 transition-all duration-300 hover:bg-red-500 focus:ring"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              to={'/login'}
              onClick={removeNav}
              className="rounded-full bg-gradient-to-br from-green-600 to-lime-500 px-7 py-1 text-lg font-semibold text-white transition-all duration-300 hover:from-green-600 hover:to-lime-400 max-md:px-8 max-md:py-2 max-md:text-xl"
            >
              Login
            </Link>
          )}
        </nav>
        <button
          onClick={toggleNav}
          id="bars"
          className="aspect-square rounded-full bg-slate-200/50 px-2 text-gray-800 outline-none ring-green-300 ring-offset-2 transition duration-200 hover:bg-green-100/80 hover:text-green-900 focus-visible:ring-2 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="pointer-events-none aspect-square w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Header;