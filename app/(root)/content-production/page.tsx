import ContentCreationData from "@/lib/Actions/ContentCreation.action";

export default async function ContentProduction() {
  const data = await ContentCreationData();
  return (
    <main className="flex flex-col gap-6 justify-center w-full">

      <section dangerouslySetInnerHTML={{ __html: data.data.Content }} />
    </main>
  );
}
