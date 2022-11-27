import {GithubUser} from "./GithubUser"
import {useParams} from "react-router-dom"

const ShowGithubUser = () => {
    const {username} = useParams()


    return ( <div>
        
        <GithubUser username="cristophergaziano" />
        </div> );
}
 
export default ShowGithubUser;