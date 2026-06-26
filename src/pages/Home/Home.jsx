import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import PopularGames from "../../components/PopularGames/PopularGames";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import homeIcon from "../../assets/logo.png"
import Loading from "../../components/Loading/Loading"

const Home = () => {

    const [banners, setBanners] = useState([])
    const [popular, setPopular] = useState([])
    const [loading, setLoading] = useState(true)

    // banner games data
    useEffect(() => {
        fetch("/bannerGames.json")
            .then(res => res.json())
            .then(data => {
                setBanners(data);
                setLoading(false);
            })
    }, [])

    // popular games data
    useEffect(() => {
        fetch("/allGames.json")
            .then(res => res.json())
            .then(data => {
                setPopular(data);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <Loading></Loading>;
    }

    const popularGames = popular.filter(game => game.popular === true)


    return (
        <div className="space-y-14">
            <title>Home</title>
            <link rel="shortcut icon" href={homeIcon} type="image/x-icon" />
            {/* banner section  */}
            <Banner banners={banners}></Banner>

            {/* popular games section  */}
            <div className="w-11/12 m-auto space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                    Popular Games
                </h2>

                {/* popular games card */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        popularGames.slice(0, 9).map(popularGame => <PopularGames key={popularGame.id} popularGame={popularGame}></PopularGames>)
                    }
                </div>

            </div>

            {/* newsletter section  */}
            <div className="lg:w-7/12 m-auto">
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;