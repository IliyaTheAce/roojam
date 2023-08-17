import AdslPrice from "@/Components/InternetServices/adsl-price";

export default function page() {
  return (
    <section className="flex flex-col items-center justify-center text-white w-full  max-w-[1280px] mx-auto gap-12">
      <h1 className="text-3xl font-semibold text-center">
        اینترنت پرسرعت ADSL
      </h1>
      <AdslPrice />
      <div className="text-right w-full">
        <h2 className="text-secondary">آشنایی با فناوری +ADSL2</h2>
        <div className="px-8 mt-4 text-justify">
          فناوری +ADSL2 نسبت به ADSL و ADSL2 پهنای باند بیشتری در اختیار کاربر
          قرار می‌دهد. سرعت دانلود در سرویس +ADSL2 می تواند تا 16مگابیت بر ثانیه
          باشد . همچنین مسافتی که تحت پوشش قرار می‌دهد تا 4.5 کیلومتر می باشد که
          نسبت به DSLهای قبلی افزایش چشمگیری داشته است.
        </div>
      </div>

      <div className="text-right w-full">
        <h2 className="text-secondary">چرا اینترنت پرسرعت +ADSL2</h2>
        <div className="px-8 mt-4 text-justify">
          •امکان ارائه سرعت تا 16 مگابیت بر ثانیه •امکان ارائه خدمات در سراسر
          کشور •سرویس ها و جشنواره های متنوع متناسب با نیاز کاربران •مقرون به
          صرفه بودن •مناسب برای بازی های ویدئویی ( گیمینگ ) •نصب و راه اندازی
          سریع و آسان •دارای کیفیت مطلوب برای سرویس های ویدئویی
        </div>
      </div>
      <div className="text-right w-full">
        <h2 className="text-secondary">مدارک لازم جهت درخواست سرویس</h2>
        <div className="px-8 mt-4 text-justify">
          مدارک مورد نیاز : نام و نام خانوادگی صاحب خط تلفن، کارت ملی صاحب خط،
          آدرس پستی دقیق، شماره همراه متقاضی{" "}
        </div>
      </div>

      <div className="text-right w-full">
        <h2 className="text-secondary">سرویس های جدید مطابق با FUP </h2>
        <div className="px-8 mt-4 text-justify">
          کلیه ی تعرفه ها مطابق با مصوبه ی ۲۶۶ سازمان تنظیم مقررات و ارتباطات
          رادیویی ( FUP ) به روز رسانی گردیده است.
        </div>
      </div>

      <div className="text-right w-full">
        <h2 className="text-secondary">تعرفه های مصوب </h2>
        <div className="px-8 mt-4 text-justify">
          تمامی تعرفه های اینترنت پرسرعت ADSL2+ مطابق مصوبات سازمان تنظیم مقررات
          رادیویی کشوراست.
        </div>
      </div>
      <div className="text-right w-full">
        <h2 className="text-secondary">وبسایت های داخلی</h2>
        <div className="px-8 mt-4 text-justify">
          با توجه به آن‌که قیمت ترافیک داخلی (وب‌سایت‌های منتخب ایران) به‌صورت
          نیم‌بها (نصف تعرفه ترافیک اینترنت “بین‌الملل”) محاسبه می‌شود، مجموع
          آستانه مصرف منصفانه ماهانه که به معنی ترافیک داخلی قابل استفاده‌ی هر
          سرویس است، دو برابر ترافیک معادل بین‌الملل خواهد بود.
        </div>
      </div>
      <div className="text-right w-full">
        <h2 className="text-secondary">تعرفه و دایری و تخلیه</h2>
        <div className="px-8 mt-4 text-justify">
          مطابق مصوبه شماره 2 جلسه شماره 323 تعرفه دایرکردن(رانژه) و
          تخلیه(درانژه) خطوط مشترکین ADSL جمعا به مبلغ ششصد هزار(600,000) ریال
          می باشد.
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-6 px-8 justify-between">
        <div className=" px-4 py-5 bg-dimBlue rounded-lg min-w-[250px]">
          <h2 className="text-lg text-secondary">چرا ADSL بخرم!</h2>
          <ol className="list-disc pr-3 mt-2">
            <li>مقرون به صرفه</li>
            <li>پایداری سرعت</li>
            <li>نصب سریع و آسان</li>
          </ol>
        </div>

        <div className=" px-4 py-5 bg-dimBlue rounded-lg min-w-[250px]">
          <h2 className="text-lg text-secondary">چطور بخرم!</h2>
          <ol className="list-disc pr-3 mt-2">
            <li>تماس تلفنی با 1577</li>
            <li>ثبت نام آنلاین</li>
            <li>ثبت نام حضوری</li>
          </ol>
        </div>
        <div className=" px-4 py-5 bg-dimBlue rounded-lg min-w-[250px]">
          <h2 className="text-lg text-secondary">چه مراحلی طی کنم!</h2>
          <ol className="list-disc pr-3 mt-2">
            <li>استعلام (بررسی امکان ارائه سرویس)</li>
            <li>انتخاب سرویس</li>
            <li>ارسال مدارک و پرداخت وجه</li>
          </ol>
        </div>
        <div className=" px-4 py-5 bg-dimBlue rounded-lg min-w-[250px]">
          <h2 className="text-lg text-secondary">چطور تمدید کنم!</h2>
          <ol className="list-disc pr-3 mt-2">
            <li>وارد پنل کاربری شو</li>
            <li>مرکز خرید رو انتخاب کن</li>
            <li>سرویس مورد نطر رو انتخاب کن</li>
            <li>سرویس جدید فعال شد</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
