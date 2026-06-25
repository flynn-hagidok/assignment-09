import icon from "../../assets/logo.png"

const Details = ({ game }) => {

    const { coverPhoto, title, description, category, ratings, developer } = game;

    return (
        <div className="md:flex items-center gap-10 md:w-11/12 lg:w-10/12 m-auto md:mt-10 p-4 md:p-0">
            <title>{title}</title>
            <link rel="shortcut icon" href={icon} type="image/x-icon" />

            <div className="h-60 md:w-[900px] lg:w-[1000px] md:h-[350px]">
                <img src={coverPhoto} alt="" className="h-full object-fill" />
            </div>

            <div className="space-y-4 w-full mt-10 md:mt-0">
                <div className="border-b-2 space-y-2 pb-4 lg:pb-6 md:pb-2 border-b-base-200">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="lg:flex gap-10 border-b-2 pb-4 lg:pb-6 md:pb-2 lg:mt-8 border-b-base-200">
                    <p>Category: {category}</p>
                    <p>Ratings: {ratings}</p>
                    <p>Devloped by: {developer}</p>
                </div>

                <div className="flex gap-4">
                    <button className="btn btn-primary lg:mt-4">Download</button>
                    <button className="btn btn-primary lg:mt-4">Whislist</button>
                </div>
            </div>
        </div>
    );
};

export default Details;