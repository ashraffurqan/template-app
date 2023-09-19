"use client"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { urlForImage } from "../../sanity/lib/image"
import { FC } from "react"

const ProductCard:FC<{item:any}> = ({item}) => {
    const handleToCart =async()=>{
        const res = await fetch("/api/cart",{
            method:"POST",
            body:JSON.stringify({
                product_id:item._id,


            })
        })
       const result=await res.json()
       console.log("reult",result)
    }
  return (
    <>
   <PortableText
  value={[item.description [0]]}

/>

<h1>{item.title}</h1>
    
      <p>{item.price}</p>
      <Image className='h-[300px] w-[250px]' alt='image' height={500}width={500} 
       src={urlForImage(item.image).url() } />

       <button onClick={()=>handleToCart()}
        className='bg-indigo-500 h-10 pl-4 pr-4 rounded-full mt-10  hover:bg-slate-600 text-black   '>
          Add TO Cartt</button>
      
          </>
  )
}
export default ProductCard