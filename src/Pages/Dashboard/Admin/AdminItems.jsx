import { Helmet } from "react-helmet-async";
import HeadingBanner from "../../../Components/HeadingBanner/HeadingBanner";
import { useForm } from "react-hook-form";
import ourShop from "../../../assets/contact/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import imageBB from "../../../Utilities/imageBB";

const shop = {
  heading: "Add Item",
  bannerImage: ourShop,
  description: "Add new Items Here",
};

function AdminItems() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const selectedCategory = watch("category")

  const onSubmit = async(data) => {
    const imageData = await imageBB(data.image[0])
    console.log(imageData);
  };
  return (
    <section>
      <Helmet title='Add Item' />
      <HeadingBanner bannerData={shop} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-gray-100 rounded-lg shadow-md p-8 space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              Title*
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type='text'
              placeholder='Recipe name'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold'
            />
            {errors.title && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-gray-700'>
              Price*
            </label>
            <input
              {...register("price", {
                required: "Price is required",
              })}
              type='number'
              placeholder='Item Price'
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold'
            />
            {errors.price && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.price.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-700'>
            Category*
          </label>
          <select defaultValue="selected" {...register("category", {
              required: "Category is required"
            })} name="Category" className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold font-semibold text-lg'>
            <option disabled value="selected">Select category</option>
            <option value="dessert">Dessert</option>
            <option value="pizza">Pizza</option>
            <option value="salad">Salad</option>
            <option value="soup">Soup</option>
          </select>
          {errors.category && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.category.message}
            </p>
          )}
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-700'>
            Description*
          </label>
          <textarea
            {...register("description", {
              required: "description is required",
            })}
            placeholder='Recipe Description'
            rows='4'
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold'></textarea>
          {errors.description && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.description.message}
            </p>
          )}
        </div>
        <div className='flex items-center space-x-4'>
          <input
            type='file'
            {...register("image",{
              required:"Image is Required"
            })}
            className='file-input bg-sonali/45 text-white w-full max-w-xs'
          />
          {errors.image && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.image.message}
            </p>
          )}
        </div>
        <section className='w-full flex justify-center items-center'>
          <button
            type='submit'
            className='bg-gold text-white text-xl px-6 py-2 rounded-md bg-sonali transition'>
            Add Item
            <FontAwesomeIcon className="text-2xl ml-2"  icon={faUtensils}/>
          </button>
        </section>
      </form>
    </section>
  );
}

export default AdminItems;
