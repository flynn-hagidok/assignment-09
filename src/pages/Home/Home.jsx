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
    useEffect(() => {
        fetch("/allGames.json")
            .then(res => res.json())
            .then(data => setPopular(data))
    }, [])

    const popularGames = popular.filter(game => game.popular === true)
    console.log(popularGames);


    return (
        <div className="space-y-14">
            <Banner banners={banners}></Banner>
            <div className="w-11/12 m-auto space-y-4">
                <h2 className="lg:text-2xl font-semibold">
                    Popular Games
                </h2>

                {/* popular games card */}
                <div className="grid grid-cols-3 gap-8">
                    {
                        popularGames.slice(0, 9).map(popularGame => <PopularGames key={popularGame.id} popularGame={popularGame}></PopularGames>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;