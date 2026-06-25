import { Link } from "react-router";


const MostPopular = ({ popular }) => {

    const { id, coverPhoto, title, category, ratings, developer } = popular;

    return (
        <Link to={`/auth/details/${id}`} className="p-6 cursor-pointer shadow-2xl shadow-secondary rounded-sm mt-6 border-base-200 border-1">
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
        </Link>
    );
};

export default MostPopular;