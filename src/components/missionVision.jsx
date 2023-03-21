import React from 'react';

const MissionVision = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
                Our Mission
            </h2>
            <p className="mt-4 text-lg">
                We are committed to providing the best printing services for our clients while maintaining our core values.
            </p>
            </div>
            <div className="mt-10">
            <div className="flex flex-wrap -mx-4">

                <div className="md:w-1/3 px-4 mb-8">
                    <div className="h-full border-2 border-white rounded-lg overflow-hidden">
                        <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-slate-100">Mission</h3>
                        <p className="leading-relaxed text-base mb-3">
                            M4 Solutions Limited strives to be the highest quality printing company in the country and strives to exceed the expectations of those we partner with by, being the best printing service provider our Clients have ever had, being the best company our employees have everworked for and to continuously improve all aspects of our business while building on our culture of excellence.
                        </p>
                        </div>
                        <img className="h-48 w-full object-cover mt-6" src="./images/mission.jpg" alt="Core Values Image" />
                    </div>
                </div>
                
                <div className="md:w-1/3 px-4 mb-8">
                    <div className="h-full border-2 border-whiterounded-lg overflow-hidden">
                        <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-slate-100">Vision</h3>
                        <p className="leading-relaxed text-base mb-3">
                            M4 Solutions Limited strives to be the highest quality printing company in the country and strives to exceed the expectations of those we partner with by, being the best printing service provider our Clients have ever had, being the best company our employees have everworked for and to continuously improve all aspects of our business while building on our culture of excellence.
                        </p>
                        </div>
                        <img className="h-48 w-full object-cover mt-6" src="./images/vision.jpg" alt="Vision Image" />
                    </div>
                </div>
                <div className="md:w-1/3 px-4 mb-8">
                    <div className="h-full border-2 border-white rounded-lg overflow-hidden">
                        <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-slate-100">Core Values</h3>
                        <p className="leading-relaxed text-base mb-3">
                            M4 Solutions Limited strives to be the highest quality printing company in the country and strives to exceed the expectations of those we partner with by, being the best printing service provider our Clients have ever had, being the best company our employees have everworked for and to continuously improve all aspects of our business while building on our culture of excellence.
                        </p>
                        </div>
                        <img className="h-48 w-full object-cover mt-6" src="./images/mission.jpg" alt="Core Values Image" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default MissionVision;