import { db ,CartTable} from "@/app/lib/drizle";
import { NextRequest,NextResponse } from "next/server";
import product from "../../../../sanity/product";
import {v4  as uuid} from "uuid"
import {cookies} from "next/dist/client/components/headers"

export const Get=async(request:Request)=>{
try{
    const res=await db.select().from(CartTable)
    console.log("res",res)
    return NextResponse.json({res})
}catch(error){  
    console.log("error",error)
    return NextResponse.json({message:"data not fetch"})
}
}



export const POST=async(request:Request)=>{

    const req =await request.json()
    const uid=uuid()
    const setCookies=cookies()
    // const user_id= cookies().get("user_id")?.value 
    // if(!user_id){

    // }
    setCookies.set("user_id",uid)
    const user_id= cookies().get("user_id")?.value 

    try{
       
        const res=await db.insert(CartTable).values({
            product_id: req.product_id,
        quantity:1,
        user_id:user_id as string
        }).returning()
        

    
        return NextResponse.json({res})
    }catch(error){
        console.log("post error",error)
    
    }
    }