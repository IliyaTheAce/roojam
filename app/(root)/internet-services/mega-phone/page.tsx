import Image from "next/image";

export default function adsl() {
  return (
    <section className="flex flex-col items-center justify-center text-white w-full  max-w-[1280px] mx-auto gap-12">
      <h1 className="text-3xl font-semibold text-center">
        مگافون ( نسل جدید تلفن ثابت )
      </h1>
      <div className="text-right w-full">
        <h2 className="text-secondary">معرفی سرویس مگافون</h2>
        <div className="px-8 mt-4 text-justify">
          پیشگامان سرویس تلفن ثابت اینترنتی خود را با نام مگافون ارائه می نماید.
          مگافون به صورت شماره های 8 رقمی و با پیش شماره 9109 ارائه می شود که
          چهار رقم بعدی توسط مشتری قابل انتخاب خواهد بود.
          <br />
          <br />
          با بهره گیری از این سرویس، مشکلاتی نظیر جابجایی خط تلفن به دلیل تغییر
          محل به طور کامل از بین خواهد رفت و کاربران سازمانی و خانگی میتوانند
          فارغ از اینکه جابجایی فیزیکی محل کار و منزل داشته اند، شماره خود را به
          هر نقطه که مورد نظرشان است انتقال دهند. همچنین مگافون، این امکان را
          می‌دهد که مشتریان با استفاده از خط تلفن ثابت اینترنتی، نامبرینگ
          اختصاصی خود را نیز داشته باشند.
          <br />
          <br />
          اینترنت پرسرعت نسل ۴ ثابت، جدیدترین تکنولوژی اینترنت ثابت بی‌ سیم به
          شمار می‌رود. بدون شک، این فناوری در مقایسه با سایر فناوری‌های اینترنت
          نظیر ADSL و WIMAX سرعت بالاتری دارد.
          <br />
          <br />
          <strong className="text-lg">تلفن ثابت مبتنی بر IP</strong>
          <br />
          NGN یا شبکه های نسل آینده (Next Generation Network) در واقع راه حلی
          برای کنترل رقابت فشرده و افزايش حجم ترافيك ديتا در سرویس های مخابراتی
          است.شبكه فعلي شامل سه شبـكه مجزا به نام هاي PSTN، شبكه Wireless
          Mobile، شبكه ديتا (PSDN) و شبكه هوشمند (IN) مي باشد.
          <br />
          <br />
          NGN شبكه اي مبتني بر IP و مولتي سرويس است كه ساختار مديريت وكنترل واحد
          دارد و سه شبكه فوق را در يك ساختار عمومي Packet-base يكپارچه مي كند.
          در NGN، شبكه موجود از يك معمـاري گسترده به شبكـه اي با لايه انتقال
          Packet Base براي صوت و ديتا تبديـل مي گردد. تمام ترافيك مخابراتي و
          ارتباطي نظير صوت، سرگرمي، آموزش و سرويسهاي اطلاعاتي از يك شبكه مجزا
          حمل خواهند شد.
          <br />
          <br />
          در این تکنولوژی سافت سوییچ ها جایگزین تجهیزات قدیمی مخابراتی خواهند شد
          و ضمن برقراری ارتباط با کیفیت تر و به مراتب ارزان تر از خطوط تلفن
          کنونی، امکان بهره گیری از خدمات ارزش افزوده برای این خدمت را نیز فراهم
          خواهد آورد.
          <br />
          <strong className="text-lg">
            ارائه این سرویس بر روی چهار بستر زیر قابل ارائه می‌باشد :
          </strong>
          <br />
          <ol>
            <li>تلفن ثابت با استفاده از IP-Phone</li>
            <li>تلفن ثابت از طریق نصب دستگاه ATA در مسیر اینترنت</li>
            <li>تلفن ثابت با استفاده از دستگاه مودم IAD </li>
            <li>تلفن ثابت با استفاده از نرم‌افزار در گوشی‌های تلفن همراه </li>
          </ol>
        </div>
      </div>

      <div className="text-right w-full">
        <h2 className="text-secondary">شرط واگذاری مگافون</h2>
        <div className="px-8 mt-4">
          متقاضیان تلفن ثابت ( مگافون ) می بایست مشترک یکی از خدمات ارتباطی
          پیشگامان باشند :
          <div className="mt-4 flex flex-row gap-3 flex-wrap w-full justify-center items-center grayscale invert">
            <Image
              src={"/assets/megaphone-icons/01.png"}
              alt="تعرفه های جشنواره"
              width={120}
              height={176}
            />
            <Image
              src={"/assets/megaphone-icons/02.png"}
              alt="تعرفه های جشنواره"
              width={120}
              height={176}
            />
            <Image
              src={"/assets/megaphone-icons/03.png"}
              alt="تعرفه های جشنواره"
              width={120}
              height={176}
            />
            <Image
              src={"/assets/megaphone-icons/04.png"}
              alt="تعرفه های جشنواره"
              width={120}
              height={176}
            />
          </div>
        </div>
      </div>
      <div className="text-right w-full">
        <h2 className="text-secondary">ثبت سرویس مگافون</h2>
        <div className="px-8 mt-4 text-justify">
          متقاضیان تلفن ثابت ( مگافون ) می بایست مشترک یکی از خدمات ارتباطی
          پیشگامان باشند . جهت دریافت سرویس می توانید از طریق ثبت نام آنلاین
          اقدام نمایید و یا جهت مشاوره و انتخاب سرویس مناسب با شماره 1577 تماس
          بگیرید .
        </div>
      </div>

      <div className="text-right w-full">
        <h2 className="text-secondary">تعرفه سرویس مگافون</h2>
        <div className="px-8 mt-4 text-justify">
          <strong className="text-lg">حق امتیاز استفاده از سرویس مگافون</strong>
          <br />
          حق امتیاز خط مگافون برای شماره های عادی به مبلغ 2.۰۰۰.۰۰۰ ریال می
          باشد.
          <br />
          <br />
          <strong className="text-lg">تعرفه کانال</strong>
          <table className="w-full text-center mt-3">
            <thead className="bg-stone-800">
              <tr>
                <td className=" py-2">هزینه کانال</td>
                <td className=" py-2">قیمت (ریال)</td>
              </tr>
            </thead>
            <tbody className="bg-stone-700">
              <td className=" py-2">یک کانال</td>
              <td className=" py-2">۷۵۰,۰۰۰</td>
            </tbody>
          </table>
          <strong className="text-lg">تعرفه مکالمه</strong>
          <table className="w-full text-center mt-3">
            <thead className="bg-stone-800">
              <tr>
                <td className=" py-2">مقصد (دقیقه)</td>
                <td className=" py-2">تعرفه مکالمه روی بستر پیشگامان</td>
              </tr>
            </thead>
            <tbody className="bg-stone-700">
              <tr>
                <td className=" py-2">پیشگامان به پیشگامان (ریال) </td>
                <td className=" py-2">۳۵</td>
              </tr>
              <tr>
                <td className=" py-2">ثابت داخل استان (ریال) </td>
                <td className=" py-2">۳۵</td>
              </tr>
              <tr>
                <td className=" py-2">ثابت بین استان (ریال) </td>
                <td className=" py-2">۳۳۰</td>
              </tr>
              <tr>
                <td className=" py-2">همراه (ریال) </td>
                <td className=" py-2">۶۲۵</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <ol className="list-disc">
            <li>
              نرخ مکالمات بین الملل برای هر کشور متفاوت و بر مبنای مصوبات سازمان
              تنظیم مقررات و رادیویی کشور می باشد.
            </li>
          </ol>
          <strong className="text-lg">بسته های اعتباری</strong>
          <table className="w-full text-center mt-3">
            <thead className="bg-stone-800">
              <tr>
                <td className=" py-2">هزینه کانال</td>
                <td className=" py-2">قیمت (ریال)</td>
              </tr>
            </thead>
            <tbody className="bg-stone-700">
              <td className=" py-2">یک کانال</td>
              <td className=" py-2">۷۵۰,۰۰۰</td>
            </tbody>
          </table>
          <strong className="text-lg">تعرفه مکالمه</strong>
          <table className="w-full text-center mt-3">
            <thead className="bg-stone-800">
              <tr>
                <td className=" py-2">بسته اعتباری تلفن ثابت</td>
                <td className=" py-2">قیمت (ریال)</td>
              </tr>
            </thead>
            <tbody className="bg-stone-700">
              <tr>
                <td className=" py-2">۵ هزارتومانی </td>
                <td className=" py-2">۵۰,۰۰۰</td>
              </tr>
              <tr>
                <td className=" py-2">۱۰ هزارتومانی </td>
                <td className=" py-2">۱۰۰,۰۰۰</td>
              </tr>
              <tr>
                <td className=" py-2">۲۰ هزارتومانی </td>
                <td className=" py-2">۲۰۰,۰۰۰</td>
              </tr>
              <tr>
                <td className=" py-2">۵۰ هزارتومانی </td>
                <td className=" py-2">۵۰۰,۰۰۰</td>
              </tr>
              <tr>
                <td className=" py-2">۱۰۰ هزارتومانی </td>
                <td className=" py-2">۱,۰۰۰,۰۰۰ </td>
              </tr>
              <tr>
                <td className=" py-2">۳۰۰ هزارتومانی </td>
                <td className=" py-2">۳,۰۰۰,۰۰۰</td>
              </tr>
              <tr>
                <td className=" py-2">۵۰۰ هزارتومانی </td>
                <td className=" py-2">۵,۰۰۰,۰۰۰</td>
              </tr>
              <tr>
                <td className=" py-2">۱ میلیون تومانی </td>
                <td className=" py-2">۱۰,۰۰۰,۰۰۰</td>
              </tr>
              <tr>
                <td className=" py-2">۵ میلیون تومانی </td>
                <td className=" py-2">۵۰,۰۰۰,۰۰۰</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-right w-full">
        <h2 className="text-secondary">طبقه بندی شماره مگافون </h2>
        <div className="px-8 mt-4 text-justify">
          شماره مگافون پیشگامان با پیش شماره ۹۱۰۹ آغاز شده و ۴ رقم بعدی را
          می‌توانید مطابق با سلیقه خود انتخاب نمایید. انتخاب شماره تلفن ثابت در
          پنج سطح زیر انجام گرفته می‌شود :
          <br />
          <br />
          <ol className="list-disc">
            <li>عادی</li>
            <li>برنزی</li>
            <li>نقره ای</li>
            <li>طلایی</li>
            <li>الماسی</li>
          </ol>
        </div>
      </div>
      <div className="text-right w-full">
        <h2 className="text-secondary">مناطق تحت پوشش </h2>
        <div className="px-8 mt-4 text-justify">
          <ol className="list-disc">
            <li>تهران </li>
            <li>یزد</li>
            <li>خراسان رضوی</li>
            <li>هرمزگان</li>
            <li>بوشهر</li>
            <li>کرمان</li>
            <li>اصفهان</li>
            <li>فارس</li>
          </ol>
        </div>
      </div>
      <div className="text-right w-full">
        <h2 className="text-secondary">مزایای سرویس مگافون </h2>
        <div className="px-8 mt-4 text-justify">
          <ol className="list-disc">
            <li>عدم نیاز به سیم مسی</li>
            <li>
              عدم نیاز به اتصال به مراکز مخابراتی و پرداخت هزینه های مخابرات
            </li>
            <li>امکان انتخاب شماره دلخواه</li>
            <li>امکان برقراری چندین تماس همزمان بر روی یک شماره تلفن</li>
            <li>
              تعرفه مقرون به صرفه برای انواع مکالمات درون شبکه ای و برون شبکه ای
            </li>
            <li>
              قابلیت برقراری و دریافت تماس با هر شماره ای در هر نقطه از ایران و
              جهان
            </li>
            <li>
              امکان نصب اپلیکیشن تلفن ثابت بر روی گوشی همراه و برقراری مکالمه
            </li>
            <li>امکان استفاده Call Forwarding و Call Conference در تماس‌ها</li>
            <li>امکان ارسال و دریافت فکس اینترنتی و عادی</li>
            <li>استفاده از یک شماره برای دفاتر در استان های مختلف</li>
            <li>امکان جابه جایی شماره تلفن با تغییر محل اقامت</li>
            <li>امکان استفاده از مرکز تماس ابری</li>
            <li>پشتیبانی 7*24</li>
          </ol>
        </div>
      </div>
      <div className="text-right w-full">
        <h2 className="text-secondary">نحوه راه اندازی مگافون</h2>
        <div className="px-8 mt-4 text-justify">
          <ol className="list-decimal">
            <li>استفاده از دستگاه IP-Phone</li>
            <li>
              استفاده از اپلیکیشن اختصاصی بدون نیاز به خرید دستگاه تلفن ثابت و
              ...
            </li>
            <li>امکان اتصال به تلفن های عادی با استفاده از مبدل ATA </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
