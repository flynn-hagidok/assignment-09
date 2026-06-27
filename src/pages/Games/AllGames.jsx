import { Link } from "react-router";
import { motion } from "motion/react";

const AllGames = ({ game }) => {

    const { id, coverPhoto, title, ratings, developer } = game;

    return (
        <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}>
            <Link to={`/auth/details/${id}`} className="p-6 cursor-pointer shadow-2xl shadow-secondary rounded-sm">
                <div className="space-y-2">
                    <img src={coverPhoto} alt="" className="h-[250px] w-full object-fill rounded-md" />
                    <h4 className="font-semibold md:text-xl">{title}</h4>
                </div>
                <div className="text-sm space-y-1 mt-2 text-accent">
                    <span className="flex justify-between">
                        <p>Category: {title}</p>
                        <p>Ratings: {ratings}</p>
                    </span>
                    <span className="text-end">
                        <p>Developed by: {developer}</p>
                    </span>
                </div>
            </Link>
        </motion.div>
    );
};

export default AllGames;