"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MdSearch, MdMenu, MdClose } from "react-icons/md";
import { useAuth } from "@/components/context/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import SearchMobile from "./SearchMobile ";

import CouponSearch from "./CouponSearch";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Fashion", href: "/fashion-coupon" },
  // { label: "Fashion", href: "#" },

  { label: "Electronics", href: "electronic-coupon" },
  // { label: "Electronics", href: "#" },
  { label: "Food", href: "food-coupon" },
  // { label: "Food", href: "#"  },
  { label: "Travel", href: "travel-coupon" },
  // { label: "Travel", href: "#" },
];

function Header() {
  const [auth, setAuth] = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
  };


 
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white text-black shadow-md sticky top-0 left-0 right-0 z-50">
      <div className="max-w-[1360px] mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left section: Logo */}
        <Link href="/">
          <img
            src="/images/logo3.png"
            alt="logo"
            className="h-[40px] md:h-[60px] w-auto"
          />

          {/* CouponCulture */}
        </Link>

        {/* Mobile Search */}
        {/* <div className="w-[200px] flex items-center mt-2 rounded-md bg-[#3b404b] px-1 py-1 border border-[#505866]  md:hidden">
            <Input
              type="text"
              placeholder="Search Products"
              className="border-none bg-transparent text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:outline-none"
            />
            <Button
              size="icon"
              className="rounded-md bg-[#5e6ad2] hover:bg-[#4e5ac2] text-white"
            >
              <MdSearch className="text-xl" />
            </Button>
          </div> */}

        <SearchMobile />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-xl font-medium">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href || "#"}
              className="hover:text-amber-500 hover:underline transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* <img src="/images/image.png" alt="" className=" w-[50px]" /> */}

        {/* Search Input */}
        {/* <div className="hidden md:flex items-center w-1/3 rounded-md bg-[#3b404b] px-2 py-1 border border-[#505866]">
          <Input
            type="text"
            placeholder="Search Products"
            className="border-none bg-transparent text-white placeholder:text-gray-400 focus-visible:ring-0 focus-visible:outline-none"
          />
          <Button
            size="icon"
            className="rounded-md bg-[#5e6ad2] hover:bg-[#4e5ac2] text-white"
          >
            <MdSearch className="text-xl" />
          </Button>
        </div> */}

        <CouponSearch />

        {/* Right section: Auth & Hamburger */}

        <div className="flex items-center gap-4">
          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            {auth.user ? (
              <>
                <Avatar className="w-9 h-9 ring-2 ring-white">
                  <AvatarImage src={auth.user.avatarUrl || ""} />
                  <AvatarFallback>
                    {auth.user.name?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-semibold">
                  {auth.user.firstName}
                </span>
                <Button
                  onClick={handleLogout}
                  className=" cursor-pointer bg-red-500 hover:bg-red-600 text-white"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button className=" cursor-pointer bg-[#5e6ad2] hover:bg-[#4e5ac2] text-white">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white">
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-black"
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50  px-5 py-6 space-y-6 rounded-b-xl shadow-lg">
          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href || "#"}
                className="text-black text-base font-medium hover:text-yellow-400 transition duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* User or Auth Buttons */}
          <div className="border-t border-[#333] pt-5">
            {auth.user ? (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-10 h-10 ring-2 ring-yellow-400">
                    <AvatarImage src={auth.user.avatarUrl || ""} />
                    <AvatarFallback>
                      {auth.user.firstName?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-white text-base font-semibold">
                    {auth.user.firstName}
                  </span>
                </div>
                <Button
                  onClick={handleLogout}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2"
                >
                  Logout
                </Button>
              </>
            ) : (
              <div className="flex flex-col gap-3">
                <Link href="/login">
                  <Button className="w-full bg-[#5e6ad2] hover:bg-[#4e5ac2] text-white font-medium py-2">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
