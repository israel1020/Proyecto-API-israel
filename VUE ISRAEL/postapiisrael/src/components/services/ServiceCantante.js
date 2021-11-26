import Global from "./../Global";
import axios from 'axios'
export default class ServiceCantantes {
    getCantantes(){
        return new Promise (function(resolve){
            var request = "/api/cantantes";
            var url = Global.urlcanatante + request;
            console.log(url);
            axios.get(url).then(res=>{
                var cantantes = res.data;
                resolve(cantantes);
            })
        })
    }
}