import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
function NestedRoute() {
    const [Repo, setRepo] = useState({})
    const [loading, setLoading] = useState(false)
    const params = useParams()
    useEffect(() => {
     axios.get(`https://api.github.com/repos/judeokeleke/${params.reponame}`).then((response) => {
        setRepo(response.data)
        setLoading(true)
     })
    },[params])
  return (
    <div className='ProfileCard'>
      {
        loading ? <div>
            <p>name: {Repo.name}</p>
            <p>id: {Repo.id}</p>
            <p>description: {Repo.description}</p>
            <p>fullname: {Repo.full_name}</p>
            <p>visibility: {Repo.visibility}</p>
        </div> : <p>Loading...</p>
      }
    </div>
  )
}
export default NestedRoute