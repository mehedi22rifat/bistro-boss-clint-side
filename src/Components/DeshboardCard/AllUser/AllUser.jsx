
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const {data: users = [],refetch} = useQuery({
         queryKey:['users'],
         queryFn:async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
         }
    })

    const handleMakeAdmin = (user) =>{
         axiosSecure.patch(`/users/admin/${user._id}`) 
         .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} Admin Now!!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
         })
    }

    const handleDeleteUser = (user) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                .then(res =>{
                    if(res.data.deletedCount >0){
                        refetch()
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                    }
                })
            }
          });
    }
    return (
        <div className="">
           <div className="flex bg-slate-200 justify-evenly text-2xl p-4 font-bold">
            <h2>All User</h2>
            <h2>Total User: {users.length}</h2>
           </div>
          
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th className='text-xl font-extrabold'>Name</th>
        <th className='text-xl font-extrabold'>Email</th>
        <th className='text-xl font-extrabold'>Role</th>
        <th className='text-xl font-extrabold'>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* rows */}
      {
        users.map((user,index) =><tr key={user._id} className="">
        <th className=''>{index + 1}</th>
        <td className='text-xl'>{user.name}</td>
        <td className='text-xl'>{user.email}</td>
        <th>
       { user.role === 'admin' ? 'Admin': <button
           onClick={() => handleMakeAdmin(user)}
            className="btn bg-orange-500 btn-ghost text-xl">
           <FaUsers className='text-white' />
        </button>}
        </th>
        <td>
        <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost bg-red-500 text-xl">
            <FaTrashAlt className="text-white" />
        </button>
        </td>
      </tr>)
      }
    </tbody>
  </table>
</div>
            </div>


        </div>
    );
};

export default AllUser;