'use client'
import { AdslPrices } from '@/Constants';
import Image from 'next/image';
import {useState} from 'react'
export default function AdslPrice() {
const [categoryIndex , setCategoryIndex] = useState(0);
const [periodIndex , setPeriodIndex] = useState(0);

return <div className='flex flex-col gap-6 w-full justify-center'>
    <div className='w-full flex gap-7 justify-center items-center border-b-[1px] border-dimWhite py-3 text-secondary'>
{AdslPrices.map((item,index) => <button key={item.name} onClick={() => {
    setCategoryIndex(index)
    setPeriodIndex(0)
    }}>
    {item.name}
</button>)}
    </div>
    <div className='flex flex-row w-full'>
<div className='flex flex-col gap-4 text-right min-w-fit ml-10'>
    {AdslPrices[categoryIndex].services.map((service, serviceIndex) => <button key={service.period} onClick={() => setPeriodIndex(serviceIndex)}>
        {service.period}
    </button>)}
</div>
<Image src={AdslPrices[categoryIndex].services[periodIndex].imgUrl} alt={AdslPrices[categoryIndex].services[periodIndex].period} width={0} height={0} sizes='100vw' className='w-[70%] h-auto '/>
    </div>
</div>
}