const Reviews = () => {
    return (
        <div className="space-y-2 text-justify p-1">
            <div className="flex justify-between">
                <div className='flex gap-2'>
                    <div>
                        <img className='rounded-full w-18 h-12' src="https://i.ibb.co/vzypKCF/people1.jpg" alt="" />

                    </div>
                    <div>
                        <h2 className="font-medium">Arowa Akter</h2>
                        <p>Entrepreneurship</p>
                    </div>
                </div>
                <div>
                    <img className=" w-12 h-10" src="https://i.ibb.co/zFs18Jw/quote-1.jpg" alt="" />
                </div>
            </div>
            <p className="pb-5">This inventory management system has transformed our operations. Its intuitive interface simplifies tracking, ensuring accurate stock levels and timely orders. The customizable features cater perfectly to our needs, streamlining workflows effortlessly. It is boosted our efficiency, making inventory management a breeze. Highly recommend for business optimization.</p>
           
        </div>
    );
};

export default Reviews;