import React from 'react'
import FoodCart from './FoodCart'
import FoodData from '../Data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
function FoodItems() {
  const handelToast = (name)=>{
    toast.success(`Added${name}`)
  }
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
       { FoodData.map((food)=>{
        return <FoodCart key={food.id} id={food.id} name={food.name} price={food.price} desc={food.desc} rating={food.rating} img = {food.img} handelToast={handelToast} />
       })
      
      }
    </div>
    </>
  )
}

export default FoodItems
