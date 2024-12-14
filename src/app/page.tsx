import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <p
          className="text-6xl max-w-60 font-bold italic absolute top-40 left-20 m-4 lg:top-20 lg:left-40 md:top-40 md:left-40"
          style={{
            fontFamily: "Twinkle_Star",
            fontSize: "4rem",
          }}
        >
          Service Page
        </p>
        <Image
          src="/Service.png"
          alt="Service Image"
          style={{ maxWidth: "40%", maxHeight: "40%", position: "relative" }}
        ></Image>
      </div>
    </>
  );
}
