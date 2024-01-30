'use client';

// Edit video to play here
const videoToPlay = 'rebirth.mp4';
// Edit the artist and song title here
const videoTitleArtist = 'DESOLATE - REBIRTH'

// Imports
import Head from 'next/head';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  faArtstation,
  faInstagram,
  faDeviantart,
  faDiscord,
  faGithub,
  faSteam,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { formatDuration, intervalToDuration } from 'date-fns';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [muted, setMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Handle sound playback
  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.volume = 0.37;

      // play() returns a promise which gets rejected if there is an autoplay policy
      // in place, which is enabled by default in pretty much every browser, one
      // exception is if the video is muted beforehand
      video.play().catch(() => {
        video.muted = true;

        video.play().then(() => {
          setMuted(true);
        });
      });
    }
  }, []);

  const unmute = useCallback(() => {
    if (!muted) {
      return;
    }

    const video = videoRef.current;

    if (video) {
      video.muted = false;
      setMuted(false);
    }
  }, [muted]);

  const convertSecondsToTimestamp = useCallback((seconds: number) => {
    if (isNaN(seconds)) {
      return;
    }

    const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

    const formatted = formatDuration(duration, {
      format: ['minutes', 'seconds'],
      zero: true,
      delimiter: ':',
      locale: {
        formatDistance: (_token, count) => String(count).padStart(2, '0'),
      },
    });

    return formatted;
  }, []);

  const handleIconMouseEnter = (event: any, icon: string) => {
    // @ts-ignore
    setHoveredIcon(icon);
  };

  const handleIconMouseLeave = () => {
    setHoveredIcon(null);
  };

  // @ts-ignore
  return (
    <>
      <Head>
        <title>DEADCELL</title>
        <meta name="description" content="" />
      </Head>

      <div className="absolute z-50 h-2 w-full bg-black/25 shadow-xl backdrop-blur">
        <div
          className="absolute h-2 bg-[#C07A89] shadow-xl"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>

      <div className="relative flex h-screen items-center justify-center text-xl lg:text-base">
        {muted && (
          <>
            <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
              <span className="font-mono font-medium text-white [text-shadow:_1px_2px_6px_rgb(0_0_0_/_100%)]">
                「 click to unmute 」
              </span>
            </div>
          </>
        )}

        <div className="-translate-y-1/3[-14px] animate-gradient-y animate-gradient-x absolute left-1/2 top-1/3 z-50 mt-4 -translate-x-1/2 rounded bg-gradient-to-b from-[#C07A89]/50 via-[#C07A89]/50 to-pink-500/50 px-4 py-3.5 shadow-xl backdrop-blur">
          <div className="grid grid-cols-4 gap-4 text-white lg:text-lg">
            <div
              className="transition-colors ease-in hover:text-[#C07A89]"
              onMouseEnter={(event) => handleIconMouseEnter(event, 'GitHub')}
              onMouseLeave={handleIconMouseLeave}
            >
              <a target="_blank" href="https://github.com/EternityX">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div
              className="transition-colors ease-in hover:text-[#1DA1F2]"
              onMouseEnter={(event) => handleIconMouseEnter(event, '@braindamaged_ai')}
              onMouseLeave={handleIconMouseLeave}
            >
              <a target="_blank" href="https://twitter.com/braindamaged_ai">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
            <div
              className="transition-colors ease-in hover:text-[#5865F2]"
              style={{ cursor: 'pointer' }}
              onMouseEnter={(event) =>
                handleIconMouseEnter(event, 'jeramiedavis')
              }
              onMouseLeave={handleIconMouseLeave}
            >
              <FontAwesomeIcon icon={faDiscord} />
            </div>
            <div
              className="transition-colors ease-in hover:text-[#E03D9E]"
              onMouseEnter={(event) => handleIconMouseEnter(event, 'Instagram')}
              onMouseLeave={handleIconMouseLeave}
            >
              <a target="_blank" href="https://instagram.com/mybrainisdamaged_ai/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
            <div
              onMouseEnter={(event) =>
                handleIconMouseEnter(event, 'jeramie@pm.me')
              }
              onMouseLeave={handleIconMouseLeave}
            >
              <a
                className="transition-colors ease-in hover:text-[#C07A89]"
                href="mailto:jeramie@pm.me"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <div
              className="transition-colors ease-in hover:text-[#00E59B]"
              onMouseEnter={(event) =>
                handleIconMouseEnter(event, 'DeviantArt')
              }
              onMouseLeave={handleIconMouseLeave}
            >
              <a
                target="_blank"
                href="https://deviantart.com/mybrainisdamaged"
              >
                <FontAwesomeIcon icon={faDeviantart} />
              </a>
            </div>
            <div
              className="transition-colors ease-in hover:text-[#13AFF0]"
              onMouseEnter={(event) =>
                handleIconMouseEnter(event, 'ArtStation')
              }
              onMouseLeave={handleIconMouseLeave}
            >
              <a target="_blank" href="https://artstation.com/jeramiedavis">
                <FontAwesomeIcon icon={faArtstation} />
              </a>
            </div>
            <div
              className="transition-colors ease-in hover:text-[#569DFB]"
              onMouseEnter={(event) => handleIconMouseEnter(event, 'Steam')}
              onMouseLeave={handleIconMouseLeave}
            >
              <a target="_blank" href="https://steamcommunity.com/id/atoix/">
                <FontAwesomeIcon icon={faSteam} />
              </a>
            </div>
          </div>
        </div>

        {hoveredIcon && (
          <>
            <div className="pointer-events-none absolute left-1/2 top-1/3 mt-36 -translate-x-1/2 -translate-y-1/2 rounded bg-slate-500/50 px-4 shadow-xl backdrop-blur">
              <span className="font-mono font-medium text-white [text-shadow:_1px_2px_6px_rgb(0_0_0_/_100%)]">
                {hoveredIcon}
              </span>
            </div>
          </>
        )}

        <div className="pointer-events-none absolute left-1/2 top-0 mt-6 -translate-x-1/2 -translate-y-1/3">
          <span className="font-mono text-white [text-shadow:_1px_2px_6px_rgb(0_0_0_/_100%)]">
            {convertSecondsToTimestamp(currentTime) +
              ' / ' +
              convertSecondsToTimestamp(duration)}
          </span>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-0 mt-12 -translate-x-1/2 -translate-y-1/3">
          <span className="font-mono text-white [text-shadow:_1px_2px_6px_rgb(0_0_0_/_100%)]">
            {videoTitleArtist}
          </span>
        </div>

        <div
          onClick={(e) => muted && e.preventDefault()}
          className="h-full w-full"
        >
          <video
            ref={videoRef}
            id="video"
            autoPlay={true}
            loop={true}
            onClick={() => unmute()}
            onTimeUpdate={(e) => {
              // @ts-ignore
              setDuration(e.target.duration);
              // @ts-ignore
              setCurrentTime(e.target.currentTime);
            }}
            className={clsx('h-full w-full object-cover')}
          >
            <source src={'/video/' + videoToPlay} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
