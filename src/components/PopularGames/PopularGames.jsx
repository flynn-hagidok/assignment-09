import { NavLink } from "react-router";

const PopularGames = ({ popularGame }) => {

    const { id, title, coverPhoto, category, ratings, developer } = popularGame;

    return (
        <NavLink to={`/auth/details/${id}`} className="p-6 cursor-pointer shadow-2xl shadow-secondary rounded-sm">
            <div className="space-y-2">
                <img src={coverPhoto} alt="" className="h-[250px] w-full object-fill rounded-md" />
                <h4 className="font-semibold md:text-xl">{title}</h4>
            </div>
            <div className="text-sm space-y-1 mt-2 text-accent">
                <span className="flex justify-between">
                    <p>Category: {category}</p>
                    <p>Ratings: {ratings}</p>
                </span>
                <span className="text-end">
                    <p>Developed by: {developer}</p>
                </span>
            </div>
        </NavLink>
    );
};

export default PopularGames;