import React from 'react';

const SectionHead = ({header, desc}) => {
    return ( 
        <div className="text-center">
            <h3 className="heading-3">{header}</h3>
            <h4 className="heading-2 heading-curve text-pink">{desc}</h4> 
        </div>
     );
}
 
export default SectionHead;