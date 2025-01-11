import { faTrashCan, faUser } from "@fortawesome/free-regular-svg-icons";
import useUsersMutations from "../../Hooks/useUsersMutations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../../Components/Heading/Heading";
import {faUserCog, faUsersGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function AllUsers() {
  const {queryUsers } = useUsersMutations();


  const { data, isLoading, isError, error } = queryUsers;

  if (isLoading) {
    return (
      <p className='text-center text-5xl text-green-500 font-semibold italic'>
        Loading . . .
      </p>
    );
  }

  if (isError) {
    console.log(error)
    return (
      <p className='text-center text-5xl text-red-500 font-semibold italic'>
        {error.response.data.message}
      </p>
    );
  }


  const heading = {
    small:"All users here",
    header:"Admin Panel"
  }

  return (
    <>
      <section>
        <Heading headingData={heading}/>
      </section>
      <table className="table">
    <thead className="text-xl font-semibold font-cin">
      <tr className="bg-[#D1A054] text-gray-100">
        <th>
        </th>
        <th>user</th>
        <th>Title</th>
        <th>email</th>
        <th>role</th>
        <th>Action</th>
      </tr>
    </thead>
        {
            data.data.result?.map((cardData, index)=><CartTable index={index} cardData={cardData} key={index}/>)
        }
    </table>
    </>
  );
}

function CartTable({ cardData, index }) {
  const { name, imageURl, email, _id,role} = cardData || {};
  const {deleteUserMutation,patchUserMutation} = useUsersMutations()
    

  function handleDelete(id) {
    deleteUserMutation.mutate(id);
  }

  function handleUpdate(id){
    patchUserMutation.mutate(id)
  }

  return (
    <tbody>
      <tr>
        <th>
          <p>{index + 1}</p>
        </th>
        <td>
          <div className='flex items-center gap-3'>
            <div className='avatar'>
              <div className='mask mask-squircle h-12 w-12'>
                <img src={imageURl} alt='Avatar Tailwind CSS Component' />
              </div>
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td className='font-cin text-lg font-semibold'>{email}</td>
        <td className='font-cin text-lg font-semibold'>
          <FontAwesomeIcon onClick={()=>handleUpdate(_id)} className={`text-lg p-3 px-[10px] rounded-full border-[1px] ${role && role === "admin" ? "border-red-600/75 text-green-700":"border-gray-400 text-gray-700"}`} icon={role && role === "admin" ? faUserCog : faUsersGear}/>
        </td>
        <th>
          <button
            onClick={() => handleDelete(_id)}
            className='hover:text-red-500 hover:bg-gray-500/15 rounded-full transition-all duration-500'>
            <FontAwesomeIcon
              className='text-lg p-2 cursor-pointer px-[10px] rounded-full border-[1px] border-red-600/75'
              icon={faTrashCan}
            />
          </button>
        </th>
      </tr>
    </tbody>
  );
}

export default AllUsers;
