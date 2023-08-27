import Banner from "@/components/banner/Banner"
import Feature from "@/components/features/Feature"
import Overview from "@/components/overview/Overview"
import Product from "@/components/product/Product"

const HomePage=()=>{
  return(
    <div >
       <Banner></Banner>
       <Product></Product>
       <Feature></Feature>
       <Overview></Overview>
    </div>
  )
}
export default HomePage