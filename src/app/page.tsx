import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1
          className="text-6xl max-w-60 font-bold italic text-center"
          style={{
            fontFamily: "Twinkle_Star",
            fontSize: "6rem",
          }}
        >
          Service Page
        </h1>
        <Image
          src="/Service.png"
          alt="Service Image"
          style={{ maxWidth: "40%", maxHeight: "40%", position: "relative" }}
        ></Image>
      </div>
    </>
  );
}
