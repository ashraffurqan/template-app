import Image from 'next/image'
import { client } from '../../sanity/lib/client'
import {PortableText} from '@portabletext/react'
import { urlForImage } from '../../sanity/lib/image'

const getdata=async()=>{
  const data1 = await client.fetch(`*[_type=="product" ]`,{},{cache:'no-store'})

  return data1
}

export default async function Home() {
  const data =await getdata()
  return (
    <div className='grid grid-cols-3  p-4 gap-4' > 
    {data.map((item:any,i:any)=>{
      return <div key={i} >
     
     <PortableText
  value={[item.description [0]]}

/>
<h1>{item.title}</h1>
    
      <p>{item.price}</p>
      <Image className='h-[300px] w-[250px]' alt='image' height={500}width={500} 
       src={urlForImage(item.image).url() } />

       <button
        className='bg-indigo-500 h-10 pl-4 pr-4 rounded-full mt-10  hover:bg-slate-600 text-black   '>
          Add TO Cartt</button>
      </div>

})}
   </div>
  )
}
