"use client"

import { useEffect, useState, type RefObject } from "react"


export function useRevealInit(ref: RefObject<HTMLDivElement>) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadReveal = async (revealModule?: any) => {
      const { default: Reveal } = revealModule ?? await import("reveal.js")

      if (isLoaded || typeof window === "undefined" || !ref.current) {
        return
      }

      const deck = new Reveal(ref.current, {
        controls: true,
        progress: true,
        center: true,
        hash: false,
      })
      await deck.initialize()

      // TODO: Fix issue where in print mode the speaker note renders twice
      deck.configure({ showNotes: false })

      setIsLoaded(true)
    }

    if (window.Reveal) {
      loadReveal(window.Reveal)
    } else {
      loadReveal();
      window.addEventListener("load", loadReveal)
      return () => window.removeEventListener("load", loadReveal)
    }
  }, [ref])

  return isLoaded
}

