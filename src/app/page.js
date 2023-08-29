import Banner from "../components/banner/Banner"
import Feature from "../components/features/Feature"
import Join from "../components/join/Join"
import Overview from "../components/overview/Overview"
import Product from "../components/product/Product"


const HomePage=()=>{
  return(
    <div >
       <Banner></Banner>
       <Product></Product>
       <Feature></Feature>
       <Overview></Overview>
       <Join></Join>
    </div>
  )
}
export default HomePage