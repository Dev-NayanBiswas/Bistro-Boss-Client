import { icon } from "@fortawesome/fontawesome-svg-core";
import { faBars, faBookAtlas, faBookQuran, faBookSkull, faCalendarCheck, faCalendarDay, faCartShopping, faChartSimple, faCommentSms, faEnvelope, faHome, faPeopleGroup, faShoppingBag, faUtensils, faUtensilSpoon, faWallet} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";


const admin = true;

const userMenu = [
  { name: 'Statics', href: '/dashboard/statics', icon:faChartSimple},
  { name: 'Reservation', href: '/dashboard/reservation', icon:faCalendarDay},
  { name: 'Payments', href: '/dashboard/payments', icon:faWallet},
  { name: 'My Cart', href: '/dashboard/myCart', icon:faCartShopping},
  { name: 'Add Review', href: '/dashboard/addReview',icon:faCommentSms},
  { name: 'Booking', href: '/dashboard/bookings',icon:faCalendarCheck},

];
const adminMenu = [
  { name: 'Statics', href: '/dashboard/adminHome', icon:faChartSimple},
  { name: 'Admin Items', href: '/dashboard/items', icon:faUtensils},
  { name: 'Manage Items', href: '/dashboard/manage', icon:faWallet},
  { name: 'Manage Bookings', href: '/dashboard/booking', icon:faBookAtlas},
  { name: 'All Users', href: '/dashboard/users',icon:faPeopleGroup},
];

const dashMenu = admin? adminMenu : userMenu;

const navigation = [
  { name: 'Home', href: '/', icon:faHome},
  { name: 'Our Menu', href: '/menu', icon:faBars},
  { name: 'Our Shop', href: '/shop', icon:faShoppingBag},
  { name: 'Contact', href: '/contact', icon:faEnvelope}
];

function DashNavbar() {
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
                  to={item.href}
                    key={item.name}
                    onClick={() => handleButtonClick(index)}
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
                  to={item.href}
                    key={item.name}
                    onClick={() => handleButtonClick(index)}
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
