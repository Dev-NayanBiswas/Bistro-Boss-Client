import { useContext, useState } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"
import auth from "../../Utilities/firebase";
import sweetAlert from "../../Utilities/sweetAlert";
import { AuthContext } from "../../AllContext/AuthContext/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useCartMutations from "../../Hooks/useCartMutations";

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Contact Us', href: '/contact', current: false },
  { name: 'Our Menu', href: '/menu', current: false },
  { name: 'Our Shop', href: '/shop', current: false },
  { name: 'Dashboard', href: 'dashboard', current: false },
  { name: 'Login', href: 'login', current: false },
  { name: 'Register', href: 'register', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar(){
  const {userInfo,signOutHandler:kickOffUser} = useContext(AuthContext);
  const {data, isLoading, isError, error} = useCartMutations();
  const [activeIndex, setActiveIndex] = useState(
    navigation.findIndex((item) => item.current)
  );



  if(isLoading){
    return <p className="text-center text-5xl text-green-500 font-semibold italic">Loading . . .</p>
  }
  if(isError){
    return <p className="text-center text-5xl text-red-500 font-semibold italic">{error.message}</p>
  }

  // console.log(data)

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  function signOutHandle(){
    kickOffUser(auth)
    .then(()=>{sweetAlert("info", "Signed Out");
    })
    .catch(()=>{
      sweetAlert("error", "Error in Signout")
    })
  }

  

  return (
    <Disclosure as="nav" className="bg-white/15">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center gap-3">
              <img
                alt="Your Company"
                src={logo}
                className="h-8 w-auto"
              />
              <div className="flex flex-col">
              <h1 className="text-base-300 text-2xl font-semibold">Bistro Boss</h1>
              <small className="text-base-300 text-xs">Restaurant</small>
              </div>
            </div>
            <div className="hidden sm:ml-6 lg:block">
              <div className="flex space-x-4 mx-7 my-3">
                {navigation.map((item, index) => (
                  <NavLink
                  to={item.href}
                    key={item.name}
                    onClick={() => handleButtonClick(index)}
                    className={({isActive})=>
                      isActive
                        ? 'border-b-2 border-green-700 text-white px-3 py-2 text-sm font-medium'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 h-8 w-8 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="relative">
                  <FontAwesomeIcon icon={faCartShopping} className="text-gray-300 p-2"/>
                  <span className="text-sm h-6 w-6 flex justify-center items-center  rounded-full bg-pink-950 text-white font-cin absolute -top-3 -left-4">{data?.length}</span>
                </span>
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                  className="h-10 aspect-square rounded-full"
                    alt=""
                    src={userInfo?.photoURL}
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <span
                    onClick={signOutHandle}
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign out
                  </span>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
          {navigation.map((item, index) => (
            <NavLink
            to={item.href}
              key={item.name}
              onClick={() => handleButtonClick(index)}
              className={({isActive})=>
                isActive
                  ? 'bg-base-300 text-inherit rounded-md px-3 py-2 text-sm font-medium'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
