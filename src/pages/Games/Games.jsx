import { useLoaderData } from "react-router";
import TopRated from "./TopRated";
import { useState } from "react";
import MostPopular from "./MostPopular";
import AllGames from "./AllGames";


const Games = () => {

    const [showAll, setShowAll] = useState(false)
    const [popular, setPopular] = useState(false)
    const [allGames, setAllGames] = useState(false)

    const games = useLoaderData()

    const topRated = games.filter(rated => rated.ratings >= 4.9)
    const populars = games.filter(popular => popular.popular === true)

    const displayGames = showAll ? topRated : topRated.slice(0, 6);
    const diplayPopular = popular ? populars : populars.slice(0, 6);
    const displayAllGames = allGames ? games : games.slice(0, 6)


    return (
        <div className="w-11/12 m-auto mt-34 lg:mt-30">
            <title>All Games</title>
            {/* top rated games */}
            <h2 className="text-2xl font-semibold">Top Rated Games</h2>
            <div className="md:grid grid-cols-2 gap-6 lg:grid-cols-3 mt-4">
                {
                    displayGames.map(topGames => <TopRated key={topGames.id} topGames={topGames}></TopRated>)
                }
            </div>
            {
                topRated.length > 6 && (
                    <div className="text-end mt-4">
                        <button onClick={() => setShowAll(!showAll)} className="cursor-pointer">
                            {showAll ? "< Show Less" : "Show More >"}
                        </button>
                    </div>
                )
            }

            <h2 className="text-2xl font-semibold mt-6">Popular Games</h2>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    diplayPopular.map(popular => <MostPopular key={popular.id} popular={popular}></MostPopular>)
                }
            </div>
            {
                populars.length > 6 && (
                    <div className="text-end mt-4">
                        <button onClick={() => setPopular(!popular)} className="cursor-pointer">
                            {popular ? "< Show Less" : "Show More >"}
                        </button>
                    </div>
                )
            }

            <h2 className="text-2xl font-semibold mt-6">All Games</h2>
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {
                    displayAllGames.map(game => <AllGames key={game.id} game={game}></AllGames>)
                }
            </div>
            {
                games.length > 6 && (
                    <div className="text-end mt-4">
                        <button onClick={() => setAllGames(!allGames)} className="text-end cursor-pointer">
                            {allGames ? "< Show Less" : "Show More >"}
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default Games;