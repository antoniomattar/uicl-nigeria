/* eslint-disable @next/next/no-img-element */
export default function NavBar() {
  return (
    <div className="navbar bg-blue-950 text-yellow-600">
      <div className="flex-1">
        <a href="/">
          <img
            src="https://www.finelib.com/images/listings/61024_company_logo.JPG"
            alt="logo"
            className="h-16 w-16 rounded-2xl"
          />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
