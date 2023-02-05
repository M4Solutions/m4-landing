import React from "react";

const Service = ({title, body, image, background}) => {

    return (         
        <div className={`w-full py-5 bg-${background}`}>
            <div className="mx-auto flex justify-center items-center gap-6 flex-col md:flex-row md:max-w-6xl">
                <div className="flex-1">
                    <div className="text-center lg:text-left">
                        <h3 className="heading-3">{title}</h3>
                        <p>{body}</p>
                    </div>
                </div>
                {
                 background === 'dark-blue' ? 
                    <div className="flex-1 md:order-first">
                         <img src={`/images/${image}`} className="w-full max-w-md" alt={title} />
                    </div>
                    : 
                    <div className="flex-1">
                         <img src={`/images/${image}`} className="w-full max-w-md" alt={title} />
                    </div>
                }
               
            </div>
        </div>

     );
}
 
export default Service;