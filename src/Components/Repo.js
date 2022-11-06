import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Helmet } from 'react-helmet-async';

function Repos() {
    const [Repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageNumber, setNumber] = useState(0)
    const repoPerpage = 5
    const pagesViewed = pageNumber * repoPerpage
    useEffect(() => {
        axios.get(`https://api.github.com/users/judeokeleke/repos`).then((response) => {
            setRepos(response.data)
            setLoading(true)
        })
    },[])
    const pageCount = Math.ceil(Repos.length / repoPerpage)
    function Changepage({selected}) {
        setNumber(selected)
    }
  return (
    <div>
      <Helmet>
        <title>Repo</title>
        <meta name='description' content='This is my Repo Page.' />
        <meta name='keywords' content='Repositories, Link, Altschool.' />

      </Helmet>
      {
        loading ? Repos
        .slice(pagesViewed, pagesViewed + repoPerpage)
        .map((Repo) => {
            return (
                <Link to={`/repos/${Repo.name}`}><h1>{Repo.name}</h1></Link>
            )
        }) : <p>Please wait...</p>
      }
      <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={Changepage}
      containerClassName={"paginationBtns"}
      previousLinkClassName={"previousBtn"}
      nextLinkClassName={"nextBtn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
    </div>
  )
}
export default Repos