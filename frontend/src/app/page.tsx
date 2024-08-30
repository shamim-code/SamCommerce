
import MyCarosel from "@/components/Carousel/MyCarosel";
import Exclusive from "@/components/Exclusive/Exclusive";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Newsletter from "@/components/Newsletter/Newsletter";
import TopRatted from "@/components/TopRatted/TopRatted";
import Trending from "@/components/Trending/Trending";

export default function page() {
  return (
    <div>
      <Navbar />
      <MyCarosel />
      <Exclusive />
      <Trending />
      <TopRatted />
      <Newsletter />
      <Footer />
    </div>
  )
}
