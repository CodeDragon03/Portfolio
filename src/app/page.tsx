export default function Home() {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen py-2"
        style={{
          height: "100vh",
          backgroundImage: `url(./assets/Service.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          className="font-bold italic text-center"
          style={{
            fontFamily: "Twinkle_Star",
            fontSize: "6rem",
            marginBottom: "2rem",
          }}
        >
          Website Under Maintenance!
        </h1>
      </div>
    </>
  );
}
