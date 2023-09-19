
import { client } from '../../sanity/lib/client'

import ProductCard from './productCard'


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
     
    <ProductCard item={item}/>
      </div>

})}
   </div>
  )
}
