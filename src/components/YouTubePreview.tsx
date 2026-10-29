import { useState } from 'react'
import { PlayIcon } from './icons'
import './YouTubePreview.css'

type YouTubePreviewProps = {
  id: string
  /** Seconds into the video to begin playback. */
  start?: number
  title: string
}

/**
 * Shows the video's thumbnail and only swaps in YouTube's player once clicked,
 * so the hero doesn't load two iframes (and YouTube's scripts) up front.
 */
export function YouTubePreview({ id, start, title }: YouTubePreviewProps) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    const params = new URLSearchParams({ autoplay: '1' })
    if (start) params.set('start', String(start))
    return (
      <iframe
        className="yt-preview"
        src={`https://www.youtube-nocookie.com/embed/${id}?${params}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return (
    <button
      type="button"
      className="yt-preview"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
    >
      <img
        className="yt-preview-thumb"
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
      />
      <span className="yt-preview-play" aria-hidden="true">
        <PlayIcon size={16} />
      </span>
    </button>
  )
}
