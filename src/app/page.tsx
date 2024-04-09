/* eslint-disable @next/next/no-img-element */
'use client';

// Edit video to play here
import Head from 'next/head';
import { useCallback, useEffect, useRef, useState } from 'react';
import If from './If';
import {
  faArtstation,
  faDeviantart,
  faDiscord,
  faGithub,
  faInstagram,
  faSteam,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faVolumeHigh,
  faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { formatDuration, intervalToDuration } from 'date-fns';

const videoToPlay = 'rebirth.mp4';
// Edit the artist and song title here
const videoTitleArtist = 'DESOLATE - REBIRTH';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [muted, setMuted] = useState(true);

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

  const muteClick = useCallback((mute: boolean) => {
    console.log('muteClick', mute);
    const video = videoRef.current;

    if (video) {
      video.muted = mute;
      setMuted(mute);
    }
  }, []);

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

      <div className="relative flex h-screen items-center justify-center text-base">
        <div className="-translate-y-1/3[-14px] max-w-screen gradient-mask-b-0 top-1/5 absolute z-50 m-4 h-[600px] rounded-xl border border-gray-800/50 bg-black md:left-1/2 md:top-1/3 md:m-0 md:h-[450px] md:max-w-[330px] md:-translate-x-1/2">
          <div className="noisy pointer-events-none absolute inset-0 z-10 opacity-30" />
          <div className="relative">
            <div className="absolute right-0 top-0 mr-1.5 mt-1.5 h-6 w-6 rounded-full  bg-[#020A12]/50 hover:bg-[#020A12]/80 transition-colors ease-in">
              <If
                condition={muted}
                fallback={
                  <FontAwesomeIcon
                    onClick={() => muteClick(true)}
                    className="ml-0 mt-0.5 cursor-pointer p-1 text-white"
                    size="xs"
                    icon={faVolumeHigh}
                  />
                }
              >
                <FontAwesomeIcon
                  onClick={() => muteClick(false)}
                  className="ml-0 mt-0.5 cursor-pointer p-1 text-white"
                  size="xs"
                  icon={faVolumeXmark}
                />
              </If>
            </div>

            <img
              className="select-none rounded-t-xl object-cover"
              src="1500x500.jpg"
              alt="Banner"
            />
            <div className="absolute h-[1px] w-full bg-gray-800/50 shadow-xl" />
            <div
              className="absolute h-[1px] bg-[#C07A89] shadow-xl"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
            <img
              className="absolute left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-700 bg-gray-800"
              src="https://cdn.discordapp.com/avatars/981972199265140777/654f26d4ae3b53a2b5a672ca806c03eb?size=1024"
              alt="Profile Picture"
            />
            <div className="relative bottom-0 left-1/2 mb-6 mt-14 -translate-x-1/2 text-center tracking-[.60em] text-white">
              DEADCELL
            </div>
            <div className="z-30 mx-24 grid grid-cols-4 gap-4 rounded-xl border border-gray-900/50 bg-gray-900/25 p-2 px-3 text-white backdrop-blur-lg">
              <div className="transition-colors ease-in hover:text-[#C07A89]">
                <a target="_blank" href="https://github.com/EternityX">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <div className="transition-colors ease-in hover:text-[#C07A89]">
                <a
                  target="_blank"
                  href="https://discord.com/users/981972199265140777"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </div>
              <div className="transition-colors ease-in hover:text-[#C07A89]">
                <a target="_blank" href="https://twitter.com/_jeramiedavis">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
              <div className="transition-colors ease-in hover:text-[#C07A89]">
                <a href="mailto:admin@deadcell.software">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
            <a
              href="https://resivpn.com/"
              className="absolute left-1/2 mt-3.5 w-[136px] -translate-x-1/2 rounded-xl border border-gray-900/50 bg-gray-900/25 backdrop-blur-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 hover:border-blue-500/50 hover:bg-gradient-to-b hover:from-gray-900 hover:to-blue-700/50"
            >
              <img
                className="p-4 grayscale   hover:grayscale-0"
                src="https://resivpn.com/assets/images/logo/resi8.png"
                alt="Profile Picture"
              />
            </a>
          </div>
          <div className="absolute bottom-0 left-1/2 mb-4 -translate-x-1/2 pb-1 font-mono text-xs text-white">
            DESOLATE // REBIRTH
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-1 font-mono text-xs text-white">
            2016-2024 DEADCELL
          </div>
          {/* <div className="grid grid-cols-4 gap-4 text-white lg:text-lg">
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
          </div> */}
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

        <div className="h-full w-full">
          <video
            ref={videoRef}
            id="video"
            autoPlay={true}
            loop={true}
            onTimeUpdate={(e) => {
              // @ts-ignore
              setDuration(e.target.duration);
              // @ts-ignore
              setCurrentTime(e.target.currentTime);
            }}
            className={clsx('h-full w-full object-cover brightness-[0.25]')}
          >
            <source src={'/video/' + videoToPlay} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
