This is my personal site built with Next.js and hosted on Vercel. You can preview it by visiting https://deadcell.cc/

# Caveats

### Browser Support
It seems that only [Brave](https://brave.com/) will automatically play audio, however this seems like a bug and may be patched in the future.

Loading the page in Brave will result in the following warning which is not seen on other browsers. You can look more into it [here](https://github.com/EternityX/deadcell.cc/blob/main/src/app/page.tsx#L50-L52).

```
page.tsx:54 Unmuting failed and the element was paused instead because the user didn't interact with the document before.
eval @ page.tsx:54
```

The following browsers require clicking the video to enable audio.
- Chrome
- Firefox
- Opera

## Getting Started

Clone this repo and install all the dependencies with:

```bash
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Changing the video and artist track names

You can change the video and artist track names by opening page.tsx and modifying the two variables at the very top called `videoToPlay` and `videoTitleArtist`.

Videos are stored in `public\video`.

## Todo

- Support mobile devices
- Create a component for the icons
- Click video to pause
