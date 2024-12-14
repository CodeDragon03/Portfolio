import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1
          className="font-bold italic text-center"
          style={{
            fontFamily: "Twinkle_Star",
            fontSize: "6rem",
          }}
        >
          Down Time !
        </h1>
        <Image
          src="/Service.png"
          alt="Service Image"
          style={{
            maxWidth: "50%",
            maxHeight: "40%",
            position: "relative",
            marginBottom: "2rem",
          }}
        ></Image>
      </div>
    </>
  );
}
