import { defineField } from "sanity";

export default {
    name: 'product',  // ye name wala variable hamare pass json se datat fetch ke lye hai
    type: 'document',
    title: 'Product',  // or ye wala title sanity dashbord ke lye
    fields: [
        {
            name: 'title',// ye name wala variable hamare pass json se datat fetch ke lye hai
            title: 'Title', // or ye wala title sanity dashbord ke lye
            type: 'string',
            
        },
        
        
        {
            name: 'price',// ye name wala variable hamare pass json se datat fetch ke lye hai
            title: 'Price', // or ye wala title sanity dashbord ke lye
            type: 'number',
            
        },
        defineField(

        
        {
            name: 'description',// ye name wala variable hamare pass json se datat fetch ke lye hai
            title: 'Description', // or ye wala title sanity dashbord ke lye
            type: "array",
            of: [{type: 'block'}]
            
        }
        ),

        {
            name: 'image',// ye name wala variable hamare pass json se datat fetch ke lye hai
            title: 'Image', // or ye wala title sanity dashbord ke lye
            type: "image",
        
            
        }
     
    ]}