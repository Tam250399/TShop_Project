import React from 'react'
import { FaCarSide, FaWallet } from 'react-icons/fa6'
import { FaHeadphonesAlt, FaCheckCircle } from "react-icons/fa";

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
        title: "Miễn phí giao hàng",
        description: "Miễn phí giao hàng đã đặt"
    },
    {
        id: 2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
        title: "An toàn",
        description: "Hoàn tiền trong 30 ngày"
    },
    {
        id: 3,
        icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
        title: "Thanh toán an toàn",
        description: "Tất cả thanh toán an toàn"
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
        title: "Hỗ trợ 24/7",
        description: "Miễn phí giao hàng đã đặt"
    },
]
const Services = () => {



    return (
        <div>
            <div className='container mt-14 md:mt-20'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
                    {
                        ServiceData.map((data) => (
                            <div key={data.id} className='flex flex-col items-start sm:flex-row gap-4'>
                                {data.icon}
                                <div>
                                    <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                                    <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Services