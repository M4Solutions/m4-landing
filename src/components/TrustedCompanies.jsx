import React from 'react';

const TrustedCompanies = () => {
    return ( 
        <section className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h3 className="font-semibold text-sm text-gray-600 text-center">
                WE ARE ALSO TRUSTED BY PROMINENT BODIES
            </h3>
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {/* LOGO 1 */}
                    <li>
                        <img src="https://www.cbn.gov.ng/images/HighResoultion/cbnlogotrans.gif" className="w-28" alt="Central Bank of Nigeria" />
                    </li>

                    {/* LOGO 2 */}
                    <li>
                        <img src="https://th.bing.com/th/id/R.c3abf343e3ecd8b198ada6d5a191b1ec?rik=UHKsBUZ7Yz4Pfg&pid=ImgRaw&r=0" className="w-28" alt="Enaira" />
                    </li>

                    {/* LOGO 3 */}
                    <li>
                        <img src="https://www.cbn.gov.ng/images/HighResoultion/cbnlogotrans.gif" className="w-28" alt="Central Bank of Nigeria" />
                    </li>

                    {/* LOGO 4 */}
                    <li>
                        <img src="https://th.bing.com/th/id/R.c3abf343e3ecd8b198ada6d5a191b1ec?rik=UHKsBUZ7Yz4Pfg&pid=ImgRaw&r=0" className="w-28" alt="Enaira" />
                    </li>

                </ul>
            </div>
        </section>
     );
}
 
export default TrustedCompanies;
