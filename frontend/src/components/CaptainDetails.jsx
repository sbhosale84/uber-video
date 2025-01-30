import React, { useContext } from 'react';
import { CaptainDataContext } from '../context/CapatainContext';

const CaptainDetails = () => {
    const { captain } = useContext(CaptainDataContext);

    console.log(captain);

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
                    <h4 className='text-lg font-medium capitalize'>
                        {captain && captain.fullName ? `${captain.fullName?.firstName || ''} ${captain.fullName?.lastName || ''}` : 'Captain Name'}
                    </h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>₹295.20</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                </div>
            </div>
        </div>
    );
};

export default CaptainDetails;