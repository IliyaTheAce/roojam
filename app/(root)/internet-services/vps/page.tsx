export default function page() {
  return (
    <section className="flex flex-col items-center justify-center text-white w-full  max-w-[1280px] mx-auto gap-12">
      <h1 className="text-3xl font-semibold text-center">
        دیتاسنتر ( Datacenter )
      </h1>
      <div className="text-right w-full">
        <h2 className="text-secondary">سرور مجازی چیست ؟</h2>
        <div className="px-8 mt-4 text-justify">
          سرور اختصاصی مجازی یا VPS (Virtual Private Server) از فناوری مجازی
          سازی برای تقسیم سرور به چندین سرور مجازی استفاده می کند. کلمه اختصاصی
          به معنای آن است که VPS شما مختص خودتان است، بنابراین نیازی به اشتراک
          گذاری فضای ذخیره سازی، RAM، CPU و ... با سایر کاربران ندارید.
          <br />
          <br />
          به عبارت دیگر در VPS از فناوری مجازی سازی برای ارائه منابع اختصاصی در
          سروری با چندین کاربر استفاده می شود و کاربران می توانند با هزینه کمتر
          از امکانات مشابه سرور اختصاصی بهر مند شوند.
          <br />
          <br />
          <strong className="text-lg">سرورمجازی پیشگامان (VPS)</strong>
          <br />
          <br />
          پیشگامان در سرویس سرور مجازی خود امکان ارائه VPS ایران را برای کاربران
          گرامی فراهم ساخته است. سرور مجازی ایران بدان معناست که موقعیت سرور در
          کشور ایران است.
        </div>
      </div>

      <div className="text-right w-full">
        <h2 className="text-secondary">
          VPS کاربردهای مختلفی دارد که عبارتند از:
        </h2>
        <div className="px-8 mt-4">
          <ol className="list-disc">
            <li>میزبانی وب سایت</li>
            <li>راه اندازی گیم سرور</li>
            <li>ایمیل سرور</li>
            <li>راه اندازی سرویس ویپ</li>
            <li>انجام معاملات آنلاین و بورس</li>
            <li>سرور پشتیبان</li>
          </ol>
        </div>
      </div>

      <div className="text-right w-full">
        <h2 className="text-secondary">مزایای سرور مجازی پیشگامان</h2>
        <div className="px-8 mt-4">
          <ol className="list-disc">
            <li>امکان انتخاب مشخصات سخت افزاری و نرم افزاری</li>
            <li>
              مقیاس پذیری و امکان ارتقای منابع سرور نظیر RAM ، CPU ، فضای دیسک و
              غیره
            </li>
            <li>امکان نصب سیستم عامل دلخواه براساس نیاز کاربر</li>
            <li>بهره مندی از امکانات دیتا سنتر پیشگامان</li>
            <li>تحویل آنی سرویس</li>
            <li>بدون محدودیت سرعت</li>
          </ol>
        </div>
      </div>

      <div className="text-right w-full">
        <h2 className="text-secondary">
          خدمات قابل ارائه پیشگامان برای سرور مجازی
        </h2>
        <div className="px-8 mt-4">
          <strong className="text-lg">خدمات پیش از فروش</strong>
          <br />
          <ol className="list-disc">
            <li>نیاز سنجی و مشاوره توسط کارشناسان فروش</li>
            <li>ارائه مناسب ترین راهکار با توجه نیازهای کاربران</li>
            <li>دریافت خدمات در حداقل زمان ممکن</li>
          </ol>
          <br />
          <strong className="text-lg">خدمات پس از فروش</strong>
          <br />
          <ol className="list-disc">
            <li>بررسی و رفع عیب سرویس در کوتاه ترین زمان</li>
            <li>نصب و کانفیگ اولیه رایگان برای تمامی سیستم عامل ها</li>
            <li>تضمین کیفیت</li>
            <li>پشتیبانی 7*24</li>
          </ol>
          <br />
          <strong className="text-lg">جبران خسارت و ضمانت بازپرداخت وجه</strong>
          <br />
          پیشگامان متعهد است در صورتی که اختلال و قطعی به وجود آمده مربوط به
          شبکه پیشگامان و در حیطه مسئولیت شرکت باشد مطابق با ضوابط و چارچوب
          موافقت نامه های سطح خدمات (SLA) سازمان تنظیم مقررات ارتباطات رادیویی
          اقدام به جبران قطعی ها نماید .
        </div>
      </div>

      <div className="text-right w-full">
        <h2 className="text-secondary">تعرفه سرور مجازی</h2>
        <div className="px-8 mt-4 text-justify">
          جهت کسب اطلاعات بیشتر و دریافت مشاوره رایگان برای سرویس سرورمجازی
          (VPS) با شماره <a className="text-secondary" href="tel:+982632732485">02632732485</a> تماس بگیرید.
        </div>
      </div>
    </section>
  );
}
