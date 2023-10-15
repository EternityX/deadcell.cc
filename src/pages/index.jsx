import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <Head>
        <title>DEADCELL</title>
        <meta name="description" content="" />
      </Head>
      <a href="https://github.com/EternityX">
      <header className="relative flex items-center justify-center h-screen overflow-hidden">
        <video className="absolute w-auto min-w-full min-h-full max-w-none" autoPlay loop id="video" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} muted={!hovering}>
          <source src="/video/video.mp4" type="video/mp4"/>
        </video>
      </header>
      </a>
    </>
  )
}