import ExploreImage1 from '../assets/images/img1.png';
import ExploreImage2 from '../assets/images/img2.png';
import ExploreImage3 from '../assets/images/img3.png';
import ArrowIcon from '../assets/icons/errow.png';

const ExploreInnovationSection = () => {

    return (
        <div className="grid gap-4  lg:grid-flow-col p-37 ">
            <div className="p-6 grid sm:col-span-2  ssm:col-span-2 lg:row-span-3 bg-#F7F7F7 rounded opacity-100 sm:h-350 lg:w-320 lg:h-771 xl:w-510 3xl:w-auto">
                <h1 className="font-normal text-medium text-36 text-#0B1226 leading-43 xl:text-56 xl:leading-60  opacity-100 pt-47 pb-25 2xl:text-normal  2xl:px-70 
                 2xl:font-medium 2xl:text-56 2xl:font-poppins  2xl:leading-67  2xl:text-#272727 2xl:opacity-100 ">
                    Innovation is the New Marketing.
                </h1>
                <p className="font-normal text-normal text-20 leading-24 text-#696969 opacity-100 pt-5 pb-65 2xl:px-70  2xl:font-normal  2xl:text-24  2xl:leading-29 2xl:text-#696969  2xl:opacity-100">
                    Translating user needs into actionable business objectives.
                </p>
                <div className="flex items-center">
                    <h3 className="font-bold text-14 leading-21 tracking-0.9 text-#253F9C opacity-100 2xl:pl-70 2xl:text-20   2xl:bg-#F4F8FF 2xl:py-26 2xl:pr-56 2xl:rounded-40">
                        ALL OUR SERVICES
                    </h3>
                    <span className="ml-2 2xl:ml-3">
                        <img src={ArrowIcon} alt="icon" className="w-42 2xl:w-70" />
                    </span>
                </div>
            </div>

            <div>
                <img
                    src={ExploreImage1}
                    alt="Image not available"
                    className=" w-full bg-#F7F7F7 rounded  ssm:h-318 lg:w-305 lg:h-377 sm:h-400  xl:w-510 3xl:w-auto object-cover"
                />
            </div>
            <div>
                <img
                    src={ExploreImage2}
                    alt="Image not available"
                    className="w-full bg-#F7F7F7 rounded  ssm:h-318 lg:w-305 lg:h-377 sm:h-400 xl:w-510 3xl:w-auto object-cover"
                />
            </div>
            <div className="grid sm:col-span-2 ssm:col-span-2  lg:row-span-3">
                <img
                    src={ExploreImage3}
                    alt="Image not available"
                    className=" w-full rounded  ssm:h-304 lg:w-300 lg:h-771 sm:w-full sm:h-350 xl:w-510 3xl:w-auto object-cover"
                />
            </div>
        </div>
    );
};
export default ExploreInnovationSection;
