import { useEffect, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Loading from "../Loader/Loding"

const Banner = ({ banners }) => {

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 3000);

        return () => clearInterval(interval)
    }, [banners.length])

    if (!banners || banners.length === 0) {
        return <Loading></Loading>
    }

    // next slide 
    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % banners.length);
    }
    const prevSlide = () => {
        setCurrent(prev =>
            prev === 0 ? banners.length - 1 : prev - 1
        )
    }

    // previous slide
    const banner = banners[current]

    return (
        <div className="w-full md:h-[350px] lg:h-[560px] h-64 relative mt-32 lg:mt-24">
            <div className="h-full">
                <img src={banner.bannerPhoto} alt="" className="h-full w-full object-fill" />
            </div>

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* name & description */}
            <div className="absolute md:top-2/3 top-40 left-4 lg:left-10 space-y-2">
                <h2 className="text-md lg:text-3xl font-semibold">{banner.title}</h2>
                <p className="lg:font-semibold md:text-sm text-[10px] text-accent">{banner.description}</p>
            </div>

            {/* arrow btn to change */}
            <button onClick={nextSlide} className="absolute right-3 lg:right-10 top-26 md:top-40 lg:top-58 cursor-pointer">
                <GrFormNext size={28} />
            </button>
            <button onClick={prevSlide} className="absolute left-3 lg:left-10 top-26 md:top-40 lg:top-58 cursor-pointer">
                <GrFormPrevious size={28} />
            </button>
        </div>
    );
};

export default Banner;