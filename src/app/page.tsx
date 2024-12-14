import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 relative">
        <p
          className="text-6xl max-w-60 font-bold italic absolute top-40 left-60 m-4"
          style={{ fontFamily: "Twinkle_Star", fontSize: "4rem" }}
        >
          Big things coming soon ....
        </p>
        <Image
          src="/Service.png"
          alt="Service Image"
          width={700}
          height={700}
        ></Image>
        <p
          className="text-6xl font-bold italic absolute bottom-40 right-60 m-4"
          style={{ fontFamily: "Twinkle_Star", fontSize: "4rem" }}
        >
          Stay excited!
        </p>
      </div>
    </>
  );
}
