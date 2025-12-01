import Banner from "@/components/shared/Banner/Banner"
import BannerBottom from "@/components/shared/Banner/BannerBottom"
import BestSellers from "@/components/shared/BestSellers/BestSellers"
import NewArrivals from "@/components/shared/NewArrivals/NewArrivals"
import Sale from "@/components/shared/Sale/Sale"
import SpecialOffers from "@/components/shared/SpecialOffers/SpecialOffers"
import YearProduct from "@/components/shared/YearProduct/YearProduct"


const Homepage = () => {
  return (
     <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
     <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        <SpecialOffers />
      </div>
    </div>
  )
}

export default Homepage