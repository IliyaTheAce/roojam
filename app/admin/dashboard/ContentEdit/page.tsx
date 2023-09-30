import dynamic from "next/dynamic";

export default function ContentEdit() {
  const ContentEditor = dynamic(
    () => import("@/Components/Dashboard/ContentEdit/ContentEditor"),
    { ssr: false }
  );
  return (
    <section className="flex flex-col w-full h-full p-4 bg-white border-[1px] rounded-2xl">
      <div className="w-full">
        <div className="text-xl font-bold border-b-[1px] pb-2 mb-3">
          درباره ما
        </div>
        <div>
          <ContentEditor />
        </div>
      </div>
    </section>
  );
}
