import { toast } from "react-toastify";


const NewsLetter = () => {

    const onSubmit = (e) => {
        e.preventDefault()
        const inValue = e.target.email.value
        console.log(inValue)
        toast("Thanks for subcribe!")
        e.target.reset("")
    }

    return (
        <div className="bg-base-200 py-20 lg:py-40 lg:rounded-xl text-center mt-14">
            <h2 className="text-3xl font-bold mb-3">
                Stay Updated
            </h2>

            <p className="mb-6 text-gray-500">
                Get the latest gaming news, releases, and exclusive offers.
            </p>

            <form onSubmit={onSubmit} className="flex flex-col md:flex-row justify-center gap-3 p-4 md:p-0">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input w-full max-w-md"
                />

                <button type="submit" className="btn btn-primary">
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default NewsLetter;