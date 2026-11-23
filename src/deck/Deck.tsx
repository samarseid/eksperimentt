import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize, Printer } from 'lucide-react'

import { SLIDES } from './slides'
import './deck.css'

const W = 1600
const H = 900

function readHash() {
  if (typeof window === 'undefined') return 0
  const n = parseInt(window.location.hash.replace('#', ''), 10)
  return Number.isFinite(n) ? Math.min(Math.max(n - 1, 0), SLIDES.length - 1) : 0
}

export function Deck() {
  const [index, setIndex] = useState(0)
  const [scale, setScale] = useState(0)
  const [idle, setIdle] = useState(false)
  const idleTimer = useRef<number | undefined>(undefined)
  const touchX = useRef<number | null>(null)

  const go = useCallback((next: number) => {
    setIndex((cur) => {
      const n = Math.min(Math.max(next, 0), SLIDES.length - 1)
      if (n !== cur) window.history.replaceState(null, '', `#${n + 1}`)
      return n
    })
  }, [])

  // fit the 1600×900 stage into the window
  useEffect(() => {
    const fit = () =>
      setScale(Math.min(window.innerWidth / W, window.innerHeight / H))
    fit()
    setIndex(readHash())
    window.addEventListener('resize', fit)
    const onHash = () => setIndex(readHash())
    window.addEventListener('hashchange', onHash)
    return () => {
      window.removeEventListener('resize', fit)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
        case 'Enter':
          e.preventDefault()
          go(index + 1)
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
        case 'Backspace':
          e.preventDefault()
          go(index - 1)
          break
        case 'Home':
          go(0)
          break
        case 'End':
          go(SLIDES.length - 1)
          break
        case 'f':
        case 'F':
          toggleFullscreen()
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, go])

  // hide controls while presenting
  useEffect(() => {
    const wake = () => {
      setIdle(false)
      window.clearTimeout(idleTimer.current)
      idleTimer.current = window.setTimeout(() => setIdle(true), 2600)
    }
    wake()
    window.addEventListener('mousemove', wake)
    window.addEventListener('keydown', wake)
    return () => {
      window.removeEventListener('mousemove', wake)
      window.removeEventListener('keydown', wake)
      window.clearTimeout(idleTimer.current)
    }
  }, [])

  return (
    <div
      className="deck-viewport"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1))
        touchX.current = null
      }}
    >
      <div
        className="deck-stage"
        style={{
          transform: `translate(-50%, -50%) scale(${scale || 1})`,
          opacity: scale ? 1 : 0,
        }}
        onClick={(e) => {
          const target = e.target as HTMLElement
          if (target.closest('a,button')) return
          const rect = e.currentTarget.getBoundingClientRect()
          go(index + (e.clientX - rect.left > rect.width * 0.3 ? 1 : -1))
        }}
      >
        {SLIDES.map((S, i) => (
          <S
            key={i}
            active={i === index}
            n={i + 1}
            total={SLIDES.length}
          />
        ))}
      </div>

      <div
        className="deck-progress"
        style={{ width: `${((index + 1) / SLIDES.length) * 100}%` }}
      />
      <div className={`deck-hint ${idle ? 'idle' : ''}`}>
        ← → varaqlash · F to‘liq ekran
      </div>
      <nav
        className={`deck-ui ${idle ? 'idle' : ''}`}
        aria-label="Taqdimotni boshqarish"
      >
        <button onClick={() => go(index - 1)} aria-label="Oldingi slayd">
          <ChevronLeft size={16} />
        </button>
        <span className="count">
          {String(index + 1).padStart(2, '0')} /{' '}
          {String(SLIDES.length).padStart(2, '0')}
        </span>
        <button onClick={() => go(index + 1)} aria-label="Keyingi slayd">
          <ChevronRight size={16} />
        </button>
        <button onClick={toggleFullscreen} aria-label="To‘liq ekran">
          <Maximize size={15} />
        </button>
        <button onClick={() => window.print()} aria-label="PDF sifatida saqlash">
          <Printer size={15} /> PDF
        </button>
      </nav>
    </div>
  )
}

function toggleFullscreen() {
  if (document.fullscreenElement) void document.exitFullscreen()
  else void document.documentElement.requestFullscreen?.()
}
