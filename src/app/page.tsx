import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 relative">
        <p
          className="text-6xl max-w-60 font-bold italic absolute top-10 left-20 m-4 lg:top-20 lg:left-40 md:top-40 md:left-60"
          style={{ fontFamily: "Twinkle_Star", fontSize: "4rem" }}
        >
          Big things coming soon ....
        </p>
        <Image
          src="/Service.png"
          alt="Service Image"
          style={{ maxWidth: "60%", maxHeight: "60%" }}
        ></Image>
        <p
          className="text-6xl font-bold italic absolute m-4 bottom-10 right-10 lg:bottom-20 lg:right-20 md:bottom-30 md:right-30"
          style={{ fontFamily: "Twinkle_Star", fontSize: "4rem" }}
        >
          Stay excited!
        </p>
      </div>
    </>
  );
}
