import { useEffect, useState } from "react"
import { fetchAllShows } from "../utils/sanity/showServices"
import { Link } from "react-router-dom"

export default function FrontPage(){
    const [shows, setShows] = useState(null)

    async function getShows() {
        const data = await fetchAllShows()
        setShows(data)
    }

    useEffect(() =>{
        getShows()
    }, [])

    console.log(shows)

    return (
        <>
        <h1>Frontpage</h1>
        <ul>
            {shows?.map((show, index) => <li key={index}>
                <Link to={show._id}>{show.title}</Link>
            </li>)}
        </ul>
        </>
    )
}