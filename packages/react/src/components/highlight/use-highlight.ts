"use client"

import { useMemo } from "react"
import { type HighlightOptions, highlightWords } from "./highlight-words"

export interface UseHighlightProps extends HighlightOptions {}

export function useHighlight(props: UseHighlightProps) {
  const { text, query } = props

  const newQuery =
    typeof query === "string"
      ? query
      : query.sort((a, b) => b.length - a.length)

  return useMemo(() => highlightWords({ text, query: newQuery }), [text, query])
}
