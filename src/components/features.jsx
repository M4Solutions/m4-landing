import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset, faPeopleGroup, faMoneyBills, faScaleBalanced, faStar } from '@fortawesome/free-solid-svg-icons'




const Features = () => {
    const features = [
        {
            icon: faHeadset,
            title: "Services",
            desc: "We commit to listen, understand and deliver the outcomes desired by our clients"
        },
        {
            icon: faPeopleGroup,
            title: "Our Clients",
            desc: "The secret of our success is in earmimg the right to sustain successful long term relationships with our clients. Our objective is to achieve a well deserved reputation where our client will recommend and refer other to us - this is a privilege and an ultimate reward in our endaviour for excelience"
        },
        {
            icon: faStar,
            title: "Premium Quality",
            desc: "We will only offer the best product of the highest quality our customers, unless otherwise instructed. We are commited to selling and delievering high quality products and services."
        },
        {
            icon: faMoneyBills,
            title: "Exceptional Values",
            desc: "We stand behind the values of our company and promise to provide you not only with value in the product we sell but will also go beyond the call of duty to ensure youre are successful in the market place."
        },
        {
            icon: faScaleBalanced,
            title: "Integrity",
            desc: "We act with honesty, integrity and humility in all we do. Not compromising the truth."
        },
    ]

    return (
        <div className="py-14">
                <div className='flex items-stretch justify-center flex-wrap -m-4'>
                    {
                        features.map((item, idx) => (
                            <div key={item.title} className="p-4 md:w-1/3">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-light-blue text-white flex-shrink-0">
                                    <FontAwesomeIcon icon={item.icon} />
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">{item.title}</h2>
                                </div>
                                <div class="flex-grow">
                                    <p className="leading-relaxed text-base">{item.desc}</p>
                                    <a href='/' className="mt-3 text-light-blue inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                    </a>
                                </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    );
}
 
export default Features;