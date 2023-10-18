import clsx from 'clsx'
import Head from 'next/head'
import { useCallback, useEffect, useRef, useState } from 'react'

export default function Home() {
  const videoRef = useRef(null)

  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (video) {
      video.volume = 0.4

      // play() returns a promise which gets rejected if there is an autoplay policy
      // in place, which is enabled by default in pretty much every browser, one
      // exception is if the video is muted beforehand
      video.play().catch(() => {
        video.muted = true

        video.play().then(() => {
          setMuted(true)

          // for some reason brave doesn't require user interaction for you
          // to call play() and unmute the video programmatically, so what we're
          // doing here is effectively "autoplaying" the video with sound
          navigator.brave?.isBrave().then(() => {
            video.muted = false
            setMuted(false)
          })
        })
      })
    }
  }, [])

  const unmute = useCallback(() => {
    if (!muted) {
      return
    }

    const video = videoRef.current

    if (video) {
      video.muted = false
      setMuted(false)
    }
  }, [muted])

  return (
    <>
      <Head>
        <title>DEADCELL</title>
        <meta name="description" content="" />
      </Head>

      <div className="relative flex h-screen items-center justify-center">
        {muted && (
          <>
            <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
              <span className="font-mono font-medium text-indigo-500 [text-shadow:_1px_2px_6px_rgb(0_0_0_/_100%)]">
                「click to unmute」
              </span>
            </div>
          </>
        )}

        <div className="-translate-y-1/3[-14px] pointer-events-none absolute left-1/2 top-1/3 mt-6 -translate-x-1/2 rounded-sm bg-gray-500/30 px-4 py-2.5 shadow-xl backdrop-blur">
          <span className="font-mono font-medium text-white">
            github.com/eternityx
          </span>
        </div>

        <a
          href="https://github.com/EternityX"
          onClick={(e) => muted && e.preventDefault()}
          className="h-full w-full"
        >
          <video
            ref={videoRef}
            id="video"
            autoPlay={true}
            loop={true}
            onClick={() => unmute()}
            className={clsx(
              'h-full w-full object-cover',
              muted && 'cursor-pointer',
            )}
          >
            <source src="/video/desolate.mp4" type="video/mp4" />
          </video>
        </a>
      </div>
    </>
  )
}
