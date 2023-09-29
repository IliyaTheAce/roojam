import DeleteButton from "@/Components/Dashboard/Messages/DeleteButton";
import SetAsReadButton from "@/Components/Dashboard/Messages/SetAsReadButton";
import BackButton from "@/Components/Dashboard/Shared/BackButton";
import { BaseUrl } from "@/Constants/Config";

export default async function MessageShow({
  params,
}: {
  params: { messageId: string };
}) {
  const message = await (
    await fetch(new URL(`/api/message?uid=${params.messageId}`, BaseUrl))
  ).json();
  return (
    <section className="bg-white m-2 rounded-2xl border-[1px] h-full flex flex-col gap-3 p-7">
      <div className="flex justify-between border-b-2 pb-4 items-center">
        <span>موضوع: {message.data.title}</span>
        <div className="flex gap-3 items-center">
          <div
            className={`${
              message.data.read ? "bg-green-500" : "bg-red-500"
            } px-3 py-2 rounded-lg text-white`}
          >
            {message.data.read ? "خوانده شده" : "خوانده نشده"}
          </div>
          <SetAsReadButton uid={message.data._id} />
          <DeleteButton uid={message.data._id} />
          <BackButton />
        </div>
      </div>
      <div>فرستنده: {message.data.composer}</div>
      <div>شماره تلفن: {message.data.phone}</div>
      <div>ایمیل: {message.data.email}</div>
      <div>
        تاریخ و ساعت ارسال پیام:{" "}
        {new Date(message.data.time).toLocaleString("fa")}
      </div>
      <div>متن پیام: {message.data.content}</div>
    </section>
  );
}
