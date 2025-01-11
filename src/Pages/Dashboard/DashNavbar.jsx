import { icon } from "@fortawesome/fontawesome-svg-core";
import { faBars, faBookAtlas, faBookQuran, faBookSkull, faCalendarCheck, faCalendarDay, faCartShopping, faChartSimple, faCommentSms, faEnvelope, faHome, faPeopleGroup, faShoppingBag, faUtensils, faUtensilSpoon, faWallet} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";





const userMenu = [
  { name: 'Statics', path: '/dashboard/statics', icon:faChartSimple},
  { name: 'Reservation', path: '/dashboard/reservation', icon:faCalendarDay},
  { name: 'Payments', path: '/dashboard/payments', icon:faWallet},
  { name: 'My Cart', path: '/dashboard/myCart', icon:faCartShopping},
  { name: 'Add Review', path: '/dashboard/addReview',icon:faCommentSms},
  { name: 'Booking', path: '/dashboard/bookings',icon:faCalendarCheck},

];
const adminMenu = [
  { name: 'Statics', path: '/dashboard/adminHome', icon:faChartSimple},
  { name: 'Admin Items', path: '/dashboard/items', icon:faUtensils},
  { name: 'Manage Items', path: '/dashboard/manage', icon:faWallet},
  { name: 'Manage Bookings', path: '/dashboard/booking', icon:faBookAtlas},
  { name: 'All Users', path: '/dashboard/users',icon:faPeopleGroup},
];

const navigation = [
  { name: 'Home', path: '/', icon:faHome},
  { name: 'Our Menu', path: '/menu', icon:faBars},
  { name: 'Our Shop', path: '/shop', icon:faShoppingBag},
  { name: 'Contact', path: '/contact', icon:faEnvelope}
];


function DashNavbar(){
  const {data:adminInfo, isLoading:adminLoading, isError:adminIsError, error:adminError} = useAdmin();

if (adminLoading) {
  return (
    <p className='text-center text-5xl text-green-500 font-semibold italic'>
      Loading . . .
    </p>
  );
}

if (adminIsError) {
  console.log(adminError)
  return (
    <p className='text-center text-5xl text-red-500 font-semibold italic'>
      {adminError?.response?.data?.message}
    </p>
  );
}

const dashMenu = adminInfo?.data?.isAdmin ? adminMenu : userMenu;


  return (
    <>
      <section>
        <div className='drawer'>
          <input id='my-drawer' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content absolute top-0 left-3 '>
            <label
              htmlFor='my-drawer'
              className='drawer-button rounded-full'>
              <FontAwesomeIcon className="text-xl rounded-full" icon={faBars}/>
            </label>
          </div>
          <div className='drawer-side'>
            <label
              htmlFor='my-drawer'
              aria-label='close sidebar'
              className='drawer-overlay'></label>
            <section className='menu bg-[#D1A054] text-base-content min-h-full w-80 p-4'>
            {dashMenu.map((item, index) => (
                  <NavLink
                  to={item.path}
                    key={item.name}
                    className={({isActive})=>
                      isActive
                        ? 'text-white text-xl px-3 py-2 font-medium'
                        : 'text-gray-900/65 hover:text-white rounded-md px-3 py-2 text-xl font-medium'
                    }
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-inherit mx-3"/>
                    {item.name}
                  </NavLink>
                ))}
                <div className="divider"/>
                {navigation.map((item, index) => (
                  <NavLink
                  to={item.path}
                    key={item.name}
                    className={({isActive})=>
                      isActive
                        ? 'text-white text-xl px-3 py-2 font-medium'
                        : 'text-gray-900/65 hover:text-white rounded-md px-3 py-2 text-xl font-medium'
                    }
                  >
                    <FontAwesomeIcon icon={item.icon} className="text-inherit mx-3"/>
                    {item.name}
                  </NavLink>
                ))}
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default DashNavbar;
