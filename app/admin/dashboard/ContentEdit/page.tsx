import ContentEditor from "@/Components/Dashboard/ContentEdit/ContentEditor";

export default function ContentEdit() {
    return <section className="flex flex-col w-full h-full p-4 bg-white border-[1px] rounded-2xl">
<div className="w-full">
    <div className="text-xl font-bold border-b-[1px] pb-2 mb-3">درباره ما</div>
    <div>
        <ContentEditor />
    </div>
</div>
    </section>
}