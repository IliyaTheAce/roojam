import { BaseUrl } from "@/Constants/Config";

export default async function Dashboard() {
  const todays = await fetch(new URL(`/api/message/todays`, BaseUrl));
  const todaysMessages = await todays.json();
  const unread = await fetch(new URL(`/api/message/unread`, BaseUrl));
  const unreadMessage = unread.json();

  return (
    <section className="flex flex-wrap gap-5">
      <div className="bg-white  border-[1px] rounded-lg flex flex-row">
        <i className="fi fi-rr-messages min-h-[120px] min-w-[120px] h-full bg-blue-400 flex items-center justify-center text-6xl text-white rounded-lg"></i>
        <div className="flex flex-col justify-center items-center font-bold text-sm px-16 text-gray-500">
          <span className="text-3xl">{todaysMessages}</span>
          <h2>پیام های امروز</h2>
        </div>
      </div>
      <div className="bg-white  border-[1px] rounded-lg flex flex-row">
        <i className="fi fi-rr-envelope-dot min-h-[120px] min-w-[120px] h-full bg-amber-500 flex items-center justify-center text-6xl text-white rounded-lg"></i>
        <div className="flex flex-col justify-center items-center font-bold text-sm px-16 text-gray-500">
          <span className="text-3xl">{unreadMessage}</span>
          <h2>پیام های خوانده نشده</h2>
        </div>
      </div>
    </section>
  );
}
