/* eslint-disable @next/next/no-img-element */

/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable react/jsx-key */
import Footer from '@/components/Footer';
import NavBar from '../components/NavBar';

export default function Page() {
  return (
    <div>
      <NavBar />
      <div className="m-auto grid h-80 items-center justify-center text-center text-xl font-extrabold">
        COMING SOON... <br /> MEANWHILE, CHECK OUT OUR PROJECTS <br />
        <a href="/projects">
          <button className=" mt-4 rounded-lg bg-sky-950 p-6 text-6xl text-white">
            Projects
          </button>
        </a>
      </div>
    </div>
  );
}
