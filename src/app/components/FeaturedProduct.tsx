import Image from "next/image";

const FeaturedProduct =() =>{
    return(
        <div className="flex lg:flex-row flex-col pt-7 gap-5  justify-items-center">
          <div className=" md:w-6/12 w-full  mb-20 ">
           <Image 
           src="/product1.jpg"
           alt="Notebook"
           width={400}
           height={300}/>
           <p className=" text-center pt-5"> PKR 10,000
           </p>
           <div className="flex justify-center items-center my-3">
            <button className="px-10 py-3 bg-blue-700 text-white rounded-md">Buy Now</button>
           </div>
          </div>

          
          <div className="md:w-6/12 w-full mb-20">
           <Image 
           src="/product2.jpg"
           alt="Notebook"
           width={400}
           height={300}/>
           <p className="text-center pt-5"> PKR 10,000
           </p>
           <div className="flex justify-center items-center my-3">
            <button className="px-10 py-3 bg-blue-700 text-white rounded-md">Buy Now</button>
           </div>
          </div>


          <div className="md:w-6/12 w-full mb-20">
           <Image 
           src="/product3.jpg"
           alt="Notebook"
           width={400}
           height={300}/>
           <p className="text-center pt-5"> PKR 10,000
           </p>
           <div className="flex justify-center items-center my-3">
            <button className="px-10 py-3 bg-blue-700 text-white rounded-md">Buy Now</button>
           </div>
          </div>


          <div className="md:w-6/12 w-full mb-20">
           <Image 
           src="/product4.jpg"
           alt="Notebook"
           width={400}
           height={300}/>
           <p className="text-center pt-5"> PKR 10,000
           </p>
           <div className="flex justify-center items-center my-3">
            <button className="px-10 py-3 bg-blue-700 text-white rounded-md">Buy Now</button>
           </div>
          </div>
        </div>
    )
}

export default FeaturedProduct;