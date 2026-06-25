

const NewsLetter = () => {
    return (
        <div className="bg-base-200 py-12 rounded-xl text-center mt-14">
            <h2 className="text-3xl font-bold mb-3">
                Stay Updated
            </h2>

            <p className="mb-6 text-gray-500">
                Get the latest gaming news, releases, and exclusive offers.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-3 p-4 md:p-0">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="input w-full max-w-md"
                />

                <button className="btn btn-primary">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default NewsLetter;