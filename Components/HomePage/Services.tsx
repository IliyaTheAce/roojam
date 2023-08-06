import styles from "@/app/style";
import ServiceCard from "./ServiceCard";
import ServicesData from "@/lib/Actions/ServicesData.actions";

const Services = async () => {
  const data = await ServicesData();
  const services = data.data;
  return (
    <section
      id={"services"}
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div
        className={
          "absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"
        }
      />
      <div
        className={
          "w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"
        }
      >
        <h1 className={styles.heading2}>
          خدمات شرکت
          <br className={"sm:block hidden"} />
        </h1>
        <div className={"w-full md:mt-0 mt-6 display-content"}>
          <p
            className={`${styles.paragraph} text-right max-w-[450px] min-w-[300px] hyphens-none`}
          >
            هرچیزی که بخواهید در دسترس شماست.
          </p>
        </div>
      </div>
      <div
        className={
          "grid lg:grid-cols-3 md:grid-cols-2  gap-4 justify-center feedback-container relative z-[1] topside"
        }
      >
        {services &&
          services.map((item) => (
            <div key={item.id}>
              <ServiceCard
                key={item.id}
                content={item.content}
                title={item.title}
                imgUrl={item.imgUrl}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Services;
