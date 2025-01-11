import { Helmet } from "react-helmet-async"
import ourShop from "../../assets/contact/banner.jpg"
import HeadingBanner from "../../Components/HeadingBanner/HeadingBanner";
import { useForm } from "react-hook-form";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";



const shop = {
  heading: "Contact Us",
  bannerImage: ourShop,
  description:
    "would you like to try a dish",
};

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <LocationSection />
    </div>
  );
};


// Location Section Component
const LocationSection = () => {
  const locations = [
    { icon: FaPhone, title: "Phone", details: "+38 (012) 34 56 789" },
    { icon: FaMapMarkerAlt, title: "Address", details: "+38 (012) 34 56 789" },
    {
      icon: FaClock,
      title: "Working Hours",
      details: "Mon - Fri: 08:00 - 22:00\nSat - Sun: 10:00 - 23:00",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {locations.map((location, index) => (
        <LocationCard key={index} {...location} />
      ))}
    </div>
  );
};

// Location Card Component
const LocationCard = ({ icon: Icon, title, details }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md text-center">
      <div className=" w-full bg-gradient-to-l from-yellow-700 to-yellow-600 py-2">
      <div className="flex justify-center items-center text-white rounded-full w-12 h-12 mx-auto">
        <Icon className="text-xl" />
      </div>
      </div>
      <div className="px-2 pb-2 bg-gray-500/15 min-h-[10vh] font-semibold">
      <div className="bg-[#f3f4f6] w-full rounded-b-md h-full min-h-[10vh]">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 whitespace-pre-line">{details}</p>
      </div>
      </div>
    </div>
  );
};

// Contact Form Component
const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <Helmet title="Contact Us"/>
      <HeadingBanner bannerData={shop} />
      <ContactPage/>
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-100 rounded-lg shadow-md p-8 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Name*
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email*
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Phone*
        </label>
        <input
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Invalid phone number",
            },
          })}
          type="tel"
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Message*
        </label>
        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Write your message here"
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <input type="checkbox" id="captcha" className="w-4 h-4" />
        <label htmlFor="captcha" className="text-sm text-gray-700">
          I’m not a robot
        </label>
      </div>
      <section className="w-full flex justify-center items-center">
      <button
        type="submit"
        className="bg-gold text-white px-6 py-2 rounded-md bg-gradient-to-l from-yellow-900 via-yellow-500 to-yellow-800 transition"
      >
        Send Message
      </button>
      </section>
    </form>
    </section>
  );
};

export default ContactUs;
