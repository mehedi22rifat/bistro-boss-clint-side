import { useForm } from "react-hook-form";
import SectionHead from "../../SectionHead/SectionHead";
import { MdOutlineAddToPhotos } from "react-icons/md";
import userAxiosPublick from './../../../Hooks/userAxiosPublick';
import useAxiosSecure from './../../../Hooks/useAxiosSecure';
import Swal from "sweetalert2";

const img_hosting_kye = import.meta.env.VITE_IMAG_HOSTING_KYE;
const img_hosting_api =`https://api.imgbb.com/1/upload?key=${img_hosting_kye}`

const AddItem = () => {
  const axiosPublic = userAxiosPublick()
  const axiosSecure = useAxiosSecure() 
  const { register, handleSubmit ,reset} = useForm();
  const onSubmit = async(data) =>{
    console.log(data)
    const imageFile = { image: data.image[0] }
  
    const res = await axiosPublic.post(img_hosting_api,imageFile,{
      headers:{
        'content-type':'multipart/form-data'
      }
    })
    if(res.data.success){
      // now send the item manu to the server width image url
    const manuItem ={
      name: data.name,
      cetagory: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
      image: res.data.data.display_url,
    }
    const manuRes = await axiosSecure.post('/manu',manuItem);
      console.log(manuRes.data)
    if(manuRes.data.insertedId){
      reset()
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "AddItem Successfull",
        showConfirmButton: false,
        timer: 1500
      });
    }

    }
  
    console.log(res.data)
  }
    
  return (
    <div>
      <SectionHead
        subTitle={"Add and item"}
        Heading={"What's new"}
      ></SectionHead>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="my-4">
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Recepi</span>
        </div>
        <input
          type="text"
          placeholder="Recipe"
          {...register("name",{required:true})}
          className="input input-bordered w-full"
        />
      </label>
      </div>
       
       <div className="flex w-full gap-6 my-4">
        {/* cetagory */}
         <div className="w-full">
          <label className="form-control w-full">
          <div className="label">
             <span className="label-text">Cetagory</span>
           </div>
         <select
            defaultValue={"defult"}
            {...register("category",{required:true})}
            className="select select-ghost w-full border-black"
          >
            <option disabled value={"defult"}>
              Select a cetagory
            </option>
            <option value={"salad"}>Salad</option>
            <option value={"pizza"}>Pizza</option>
            <option value={"soup"}>Soup</option>
            <option value={"dessert"}>Dessert</option>
            <option value={"drinks"}>Drinks</option>
          </select>
         </label>
         </div>
         {/*  */}
         <div className="w-full">
          <label className="form-control w-full">
            <div className="label">
             <span className="label-text">Price</span>
            </div>
        <input
          type="text"
          placeholder="Price"
          {...register("price",{required:true})}
          className="input input-bordered w-full"
          />
        </label>
       </div>

       </div>
      <div className="w-full my-4">
        <label>
          <span>Descreption</span>
        </label>
      <textarea {...register("recipe")} className="textarea textarea-bordered w-full bordered" placeholder="Bio"></textarea>
      </div>
      <div className="w-full">
       <input type="file" {...register("image",{required:true})} className="file-input file-input-bordered w-full max-w-xs" />
      </div>
       <button className="btn mt-4">
           Add Item <MdOutlineAddToPhotos className="ml-4 text-xl" />
       </button>
      </form>
      {/* <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} />
          <select
            {...register("category")}
            className="select select-ghost w-full"
          >
            <option disabled selected>
              Select a cetagory
            </option>
            <option value={"salad"}>Salad</option>
            <option value={"pizza"}>Pizza</option>
            <option value={"soup"}>Soup</option>
            <option value={"dessert"}>Dessert</option>
            <option value={"drinks"}>Drinks</option>
          </select>
          <input type="submit" />
        </form>
      </div> */}
    </div>
  );
};

export default AddItem;
