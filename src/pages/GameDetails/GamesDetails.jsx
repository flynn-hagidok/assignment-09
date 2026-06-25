import { useLoaderData, useParams } from "react-router";
import Details from "./Details";


const GamesDetails = () => {

    const gameData = useLoaderData()
    const {id} = useParams()
    const filterGames = gameData.filter(gameDetails => parseInt(gameDetails.id) === parseInt(id))
    // console.log(filterGames);

    return (
        <div>
            {
                filterGames.map(game => <Details key={game.id} game={game}></Details>)
            }
        </div>
    );
};

export default GamesDetails;