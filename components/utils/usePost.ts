import { useState, useEffect } from 'react'
import axios, { AxiosError, AxiosResponse } from 'axios'

function usePost(
  url: string,
  obj: {
  
  }
) {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<AxiosResponse>()
  const [error, setError] = useState<AxiosError>()

  useEffect(() => {
    setLoading(true)
    axios
      .post(url, obj)
      .then(res => {
        setData(res.data)
      })
      .catch(e => {
        setError(e)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url, obj])
  return { data, loading, error }
}

export default usePost
