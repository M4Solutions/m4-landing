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
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
                <div className="grid grid-cols-1 ijustify-items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        features.map((item, idx) => {
                            return (
                                <div key={item.title} className="bg-white rounded-lg shadow-lg p-6 flex-1">
                                    <div className="flex items-center gap-2 mb-4">
                                    <span className=''>
                                        <FontAwesomeIcon icon={item.icon} />
                                    </span>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    );
}
 
export default Features;