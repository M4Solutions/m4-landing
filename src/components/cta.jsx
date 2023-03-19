import React from 'react';

const CTA = () => {
    return ( 
        <div className="container mx-auto text-center">
            <h2 className="text-white text-3xl font-bold mb-4">Call us now for your printing needs</h2>
            <p className="text-white mb-6">Our team is always available to provide you with quality printing services</p>
            <a href="tel:+1234567890" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition duration-300 hover:shadow-sm">Call Now</a>
        </div>
     );
}
 
export default CTA;