import Background from "../Assets/Service.png";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen py-2 "
        style={{ height: "100vh", backgroundImage: `url(${Background})` }}
      >
        <h1
          className="font-bold italic text-center"
          style={{
            fontFamily: "Twinkle_Star",
            fontSize: "6rem",
            marginBottom: "2rem",
          }}
        >
          Website Under Maintanence!
        </h1>
      </div>
    </>
  );
}
