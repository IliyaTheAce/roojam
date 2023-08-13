import ServicesCard from "@/Components/InternetServices/ServicesCard";

export default function InternetServices () {
    return <section className="flex flex-col  items-center justify-center w-full">
        <div className="flex flex-wrap flex-row items-center justify-center">
        <ServicesCard title="اینترنت adsl" imgUrl="/assets/services-icons/adsl-red.png" url="adsl"/>
        <ServicesCard title="td-lte" imgUrl="/assets/services-icons/mini-icon-6.png" url="td-lte"/>
        <ServicesCard title="خدمات دیتاسنتر" imgUrl="/assets/services-icons/datacenter-red.png" url="data-center"/>
        <ServicesCard title="پهنای باند اخصاصی" imgUrl="/assets/services-icons/mini-icon-5.png" url="dedicated-internet"/>
        </div>
        <div className="flex flex-wrap flex-row items-center justify-center">
        <ServicesCard title="سرور کجازی VPS" imgUrl="/assets/services-icons/vps.png" url="vps"/>
        <ServicesCard title="فیبر نوری FTTH" imgUrl="/assets/services-icons/fiber-red-1.png" url="fiber"/>
        <ServicesCard title="برج و مجتمع" imgUrl="/assets/services-icons/mini-icon-3.png" url="tower"/>
        <ServicesCard title="مگافون" imgUrl="/assets/services-icons/mini-icon-1.png" url="mega-phone"/>
        </div>
    </section>
}