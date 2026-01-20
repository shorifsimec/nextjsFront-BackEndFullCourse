import Image from "next/image"

const Home = () => {
  return (
    <>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
      />
      Hello World
    </>
  )
}

export default Home