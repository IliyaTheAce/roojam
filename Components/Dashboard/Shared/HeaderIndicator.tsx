interface props {
  icon: string;
  number: number;
}

export default function Indicator(props: props) {
  return (
    <div className="text-2xl relative">
      <span className="absolute -top-3 -left-3 bg-red-600 rounded-full flex justify-center items-center text-sm text-white w-6 h-6">
        {props.number}
      </span>
      <i className={`${props.icon} flex items-center`}></i>
    </div>
  );
}
