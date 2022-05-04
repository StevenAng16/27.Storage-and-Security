import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import './Home.module.css';
import Header from "./Components/Header";
import LoginInput from "./Components/LoginInput"
import ListLogin from "./Components/ListItem";
// import { useCookies } from "react-cookie";

const initialValue = [
    {
        id: uuidv4(),
        username: "user@gmail.com",
        completed: true
    },
    {
        id: uuidv4(),
        username: "John Stamford",
        completed: false
    },
]

function NameForm () {

    // const [cookies, setCookie] = useCookies(['name']);
    const [data, setData] = useState(initialValue)
  
    const hapusLogin = id => {
        setData((oldData) => oldData.filter(item => {
            return item.id !== id;
        }))
    };

    // function onChange (newName) {
    //     setCookie ('name', newName, {path: '/'});
    // }

    const tambahLogin = newUser => {
        const newData = {
            id : uuidv4(),
            ...newUser
        };
        setData((oldData) => [...oldData, newData])
    };

    return(
        <div className="Home">
            <div>
            {/* <div>
            <NameForm name={cookies.name} onChange={onChange} />
            {cookies.name && <h1>Hello {cookies.name}! </h1>}
            </div> */}
            <Header/>
                {/* <!-- CSS only --> */}
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                {/* <!-- JavaScript Bundle with Popper --> */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"/>
            <LoginInput
                tambahLogin = {tambahLogin}
            />
            <ListLogin
                data = {data}
                hapusLogin = {hapusLogin}
            />
            </div>
        </div>
    );
}

export default NameForm