import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../../Components/Heading/Heading";
import useCartMutations from "../../Hooks/useCartMutations"
import { faTrash} from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useCartOperation from "../../Hooks/useCartOperation";
import { autoCloseAlert } from "../../Utilities/sweetAlert";


const heading = {
    small:"My Cart",
    header:"Wanna Add More"
}

function MyCart(){
    const {data, isLoading, isError, error} = useCartMutations();
    
    

    if (isLoading) {
        return (
          <p className='text-center text-5xl text-green-500 font-semibold italic'>
            Loading . . .
          </p>
        );
      }
    
      if (isError) {
        return (
          <p className='text-center text-5xl text-red-500 font-semibold italic'>
            {error.message}
          </p>
        );
      }

      const totalBill = data.reduce((acc, item)=> acc + item.price,0);
      
  return (
    <>
    <section>
        <Heading headingData={heading}/>
    </section>
    <section>
        <section className="lg:text-3xl text-2xl font-semibold font-cin flex lg:flex-row flex-col lg:justify-between justify-evenly items-start my-8 gap-4">
            <h1>Total orders {data?.length}</h1>
            <h2>total {" "}  ${totalBill}</h2>
            <button className="px-7 py-2 text-xl bg-[#D1A054] text-white">Pay</button>
        </section>
    </section>
    <section className="overflow-x-auto">

    <table className="table">
    <thead className="text-xl font-semibold font-cin">
      <tr className="bg-[#D1A054] text-gray-100">
        <th>
        </th>
        <th>Thumbnail</th>
        <th>Title</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
        {
            data?.map((cardData, index)=><CartTable index={index} cardData={cardData} key={index}/>)
        }
    </table>
    </section>
    </>
  )
}


function CartTable({cardData, index}){
    const {name, image, price, _id} = cardData || {};
    const queryClient = useQueryClient()
    const {deleteFromCart} = useCartOperation()
    const deleteMutation = useMutation({
        mutationKey:["cartData"],
        mutationFn:(cardData)=>deleteFromCart(cardData),
        onSuccess:()=>{
            queryClient.invalidateQueries("cartData");
            autoCloseAlert('info', `Successfully Deleted from Cart`)
        },
        onError:()=>autoCloseAlert('error', `Error to remove Data`)
    })

    function handleDelete(cardData){
        deleteMutation.mutate(cardData)
      }

    return (



    
    <tbody>
      <tr>
        <th>
          <p>{index+1}</p>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {name}
        </td>
        <td className="font-cin text-lg font-semibold">$ {price}</td>
        <th>
          <button onClick={()=>handleDelete(cardData)} className="hover:text-red-500 hover:bg-gray-500/15 rounded-full transition-all duration-500">
            <FontAwesomeIcon className="text-lg p-2 px-[10px] rounded-full border-[1px] border-red-600/75" icon={faTrash}/>
          </button>
        </th>
      </tr>
    </tbody>




    )
}

export default MyCart