import HomePoster from '../../assets/images/home-poster.png';
import GridImg from '../../assets/images/grid-image.jpg';
import IconicDropLeft from '../../assets/images/ionic-md-arrow-dropleft.svg';

const Postersection = () => {
    return (
        <div className="w-full px-5 md:px-16 lg:px-20 xl:px-24 2xl:px-28 3xl:px-45.5 pb-5">
            <div
                className="absolute left-0 top-0 w-full bg-center bg-cover"
                style={{ backgroundImage: `url(${GridImg})` }}></div>
            <div className="lg:flex pt-20 lg:py-20">
                <div className="w-full">
                    <h3 className="xs:w-3/5 md:w-1/2 3xl:w-full text-4xl leading-10 xs:text-5xl xs:leading-12 lg:w-full 2xl:text-7xl font-medium font-poppins">
                        Simplifying the Next.
                    </h3>
                    <div className="w-fit text-white bg-blue-850 text-base xs:text-xl md:text-2xl 3xl:text-3xl font-medium font-serif italic px-4 mt-5 py-1">
                        For Dreamers who do.
                    </div>
                </div>
                <p className="xs:w-3/4 md:w-1/2 text-base xs:text-lg xl:text-xl 3xl:text-2xl font-roboto flex flex-col text-left text-black py-10 lg:py-0">
                    High-potential global brands trust Yume Labs for better customer advocacy, stronger investor trust,
                    and higher media love.
                </p>
            </div>

            <div className="relative">
                <img
                    className="w-full h-110 xs:h-137 lg:h-175 object-cover rounded-lg"
                    src={HomePoster}
                    alt="Home Page Image"
                />
                <div className="absolute w-1/6 left-10 sm:left-20 bottom-10 xs:bottom-20 lg:left-28 lg:bottom-28 text-4xl lg:text-6xl text-white font-serif italic ">
                    Dreams Delivered
                </div>
                <div className="hidden lg:flex absolute bottom-28 right-28 items-center">
                    <div className="text-2xl text-blue-850 font-medium font-poppins px-5">Play Showreel</div>
                    <button className="flex justify-center items-center bg-blue-575 p-5 w-16 hover:bg-gradient-to-r rounded-full hover:from-pink-500 hover:to-blue-575">
                        <img src={IconicDropLeft} alt="ionic arrow dropdown right icon" />
                    </button>
                </div>
                <button className="absolute flex lg:hidden left-24 xs:left-40 sm:left-64 md:left-72 bottom-44 xs:bottom-60 sm:bottom-64 justify-center items-center bg-blue-575 p-5 w-16  hover:bg-gradient-to-r rounded-full hover:from-pink-500 hover:to-blue-575">
                    <img src={IconicDropLeft} alt="ionic arrow dropdown right icon" />
                </button>
            </div>
        </div>
    );
};

export default Postersection;
