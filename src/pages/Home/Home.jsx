import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import PopularGames from "../../components/PopularGames/PopularGames";
// import Banner2 from "../../components/Banner/Banner2";

const Home = () => {

    const [banners, setBanners] = useState([])
    const [popular, setPopular] = useState([])

    // banner games data
    useEffect(() => {
        fetch("/bannerGames.json")
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])

    // popular games data



    return (
        <div className="lg:mt-4 space-y-14">
            <Banner banners={banners}></Banner>
            <div className="w-11/12 border-2 m-auto h-100">
                <h2 className="lg:text-2xl font-semibold">
                    Popular Games
                </h2>
                <PopularGames></PopularGames>
            </div>
        </div>
    );
};

export default Home;