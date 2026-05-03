import { useMutation } from "@tanstack/react-query"
import { analyze } from "../api/analyze"
import { useState } from "react"

export function useAnalyze() {
  const [result, setResult] = useState(null)

  const mutation = useMutation({
    mutationFn: analyze,
    onSuccess: (data) => {
      setResult(data)
    },
  })

  return {
    ...mutation,
    result,
  }
}