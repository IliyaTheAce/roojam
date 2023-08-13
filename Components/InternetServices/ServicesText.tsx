interface props {
  head: string;
  text: string;
}

export default function ServicesText({ head, text }: props) {
  return (
    <div className="text-right w-full">
      <h2 className="text-secondary">{head}</h2>
      <p className="px-8 mt-4">{text}</p>
    </div>
  );
}
