import React from "react";
import {
    Col,
    Card,
    CardBody,
    CardTitle
    } from "reactstrap"
function Result({response}){
     var q = response.data
      var x = response.data['name']
      var country = q['sys']['country']
      var y = q['main']['temp']
      var humidity = q['main']['humidity']
      var z = q['weather'][0]['description']
      var deg = q['wind']['deg']
     
      //Date and time
        var d = new Date();
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
        var timeanddate = d.getHours()+":"+d.getMinutes()+","+months[d.getMonth()]+" "+d.getDate()
    return(
        <Col lg={12} className="mt-4" id="result">
            <Card id="card">
            <p className="mt-2 ml-1">{timeanddate}</p>
                    <CardTitle className="text-center">
                        <h5>CITY :{x},{country}</h5>
                    </CardTitle> 
                    <CardBody>     
                        <h6>Temp :{y}</h6>
                        <h6>Description :{z}</h6>
                        <h6>Deg :{deg}</h6>
                        <h6>Humidity :{humidity}%</h6>
                </CardBody>
            </Card> 
        </Col> 
    )
}
export default Result;