import axios from "axios"
import { useEffect } from "react"

function App() {
  const getResult = async () => {
    const { data } = await axios.get("/api")
    console.log(data)
  }
  useEffect(() => {
    getResult()
  }, [])
  return (
    <>
      <div>App Page</div>
    </>
  )
}

export default App
