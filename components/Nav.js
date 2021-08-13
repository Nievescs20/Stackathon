import styles from "../styles/Layout.module.css";
import "tailwindcss/tailwind.css";
import Link from "next/link";

const Nav = ({ children }) => {
  return (
    <div className="bg-black h-12 underline flex justify-center items-center">
      <ul className="text-white flex flex-wrap space-x-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
