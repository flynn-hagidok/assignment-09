

const PopularGames = ({ popularGame }) => {

    const { title, coverPhoto, category, ratings, developer } = popularGame;

    return (
        <div className="p-4 cursor-pointer shadow-2xl shadow-secondary rounded-sm">
            <div className="space-y-2">
                <img src={coverPhoto} alt="" className="h-[250px] w-full object-fill rounded-md" />
                <h4 className="font-semibold text-xl">{title}</h4>
            </div>
            <div className="text-sm space-y-1 mt-2">
                <span className="flex justify-between">
                    <p>Category: {category}</p>
                    <p>Ratings: {ratings}</p>
                </span>
                <span className="text-end">
                    <p>Develop by: {developer}</p>
                </span>
            </div>
        </div>
    );
};

export default PopularGames;