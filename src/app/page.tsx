import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 relative">
        <p
          className="text-6xl max-w-60 font-bold italic absolute top-40 left-20 m-4 lg:top-20 lg:left-40 md:top-40 md:left-40"
          style={{
            fontFamily: "Twinkle_Star",
            fontSize: "4rem",
          }}
        >
          Big things coming soon ....
        </p>
        <Image
          src="/Service.png"
          alt="Service Image"
          style={{ maxWidth: "40%", maxHeight: "40%" }}
        ></Image>
        <p
          className="text-6xl max-w-9 font-bold italic absolute m-4 bottom-40 right-45 lg:bottom-40 lg:right-45 md:bottom-40 md:right-45"
          style={{
            fontFamily: "Twinkle_Star",
            fontSize: "4rem",
          }}
        >
          Stay excited!
        </p>
      </div>
    </>
  );
}
