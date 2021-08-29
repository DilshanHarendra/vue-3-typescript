import axios from "axios";


const instence =axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers:{
        'Content-Type':'application/json',
    }
})

export default instence
