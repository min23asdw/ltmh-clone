import Image from "next/image";

interface porp {
  index: number;
  height: string;
}
export default function ItemCard(props: porp) {
  const { index, height } = props;
  return (
    // <div>
    <div
      key={index}
      className="bg-white w-full rounded-default  inline-block  my-3 "
      style={{ height: height }}
    >
      {/* <Image
        src={`https://picsum.photos/200/100/?blur=2&random=${index}`}
        width={200}
        height={100}
        alt="Picture of the author"
      /> */}
      content {index} {height}
    </div>
  );
}
