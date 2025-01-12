import { Helmet } from "react-helmet-async"
import ourShop from "../../assets/contact/banner.jpg"
import HeadingBanner from "../../Components/HeadingBanner/HeadingBanner";
import { useForm } from "react-hook-form";



const shop = {
  heading: "Add Item",
  bannerImage: ourShop,
  description:
    "Add new Items Here",
};


// Contact Form Component
const AddItems = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section>
      <Helmet title="Add Item"/>
      <HeadingBanner bannerData={shop} />
      <ContactPage/>
      <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-100 rounded-lg shadow-md p-8 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Title*
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            placeholder="Recipe name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
          Price*
          </label>
          <input
            {...register("price", {
              required: "Price is required"
            })}
            type="number"
            placeholder="Item Price"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Category*
        </label>
        <input
          {...register("category", {
            required: "Category number is required"
          })}
          type="tel"
          placeholder="Choose a"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        />
        {errors.category && (
          <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
        )}
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Description*
        </label>
        <textarea
          {...register("description", { required: "description is required" })}
          placeholder="Recipe Description"
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
        ></textarea>
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
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

export default AddItems;
