
'use client'
import { useRouter } from "next/navigation"

const App = () => {

  const { push } = useRouter()


  return (
    <div>
      {push("/home")}
    </div >
  )
}
export default App