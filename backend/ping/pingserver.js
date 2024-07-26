

import axios from "axios";

import dotenv from 'dotenv';
dotenv.config();


async function pingServer(){
   
    try{
        await axios.get(process.env.PING_URL);


    }catch(err){
        console.log(err);
    }

}


export {pingServer};
