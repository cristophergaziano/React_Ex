import {GithubUser} from "./GithubUser"
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"

const ShowGithubUser = () => {
    const {username} = useParams()


    return ( <div>
        
        <GithubUser username="cristophergaziano" />
        <Link to="/">Back to Home</Link>{" "}
        <Link to="/counter">Check the counter!</Link>{" "}
        </div> );
}
 
export default ShowGithubUser;