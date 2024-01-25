import Banner from "../../Banner/Banner"
import Gallery from "../../Gallery/Gallery"
import PopularItems from "../../Popular-itams/Popular-iteams"
import Product from "../../Product/Product"
import Shop from "../../Shop/Shop"
import Video from "../../Video/Video"
import WatchArea from "../../watch-area/Watch-area"

const Home = () => {

    return(

        <>
            <Banner/>
            <Product/>
            <Gallery/>
            <PopularItems/>
            <Video/>
            <WatchArea/> 
            <Shop/>
        </>

    )

}
export default Home