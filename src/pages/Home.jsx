import HomeItem from "../components/Home/HomeItem"
import { useAuth } from "../context/AuthContext"

export default function Home() {

  const {user}=useAuth()


  return (
    <>
    { user  ?  <HomeItem/> : <p className="Warning">Please Login!</p> }
    </>
  )
}
