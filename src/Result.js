import React from "react";
import {Container,
    Row,
    Col,
    Card,
    CardBody,
    CardText,
    CardTitle
    } from "reactstrap"
function Result({response}){
     var q = response.data
      var x = response.data['name']
      var country = q['sys']['country']
      var y = q['main']['temp']
      var z = q['weather'][0]['description']
      var deg = q['wind']['deg']
     
      //Date and time
      var d = new Date();
        var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
        var timeanddate = d.getHours()+":"+d.getMinutes()+","+months[d.getMonth()]+" "+d.getDate()
    return(
        <Col lg={12} className="mt-4" id="result">
            <Card>
            <p>{timeanddate}</p>
                    <CardTitle className="text-center">
                        <h5>CITY :{x},{country}</h5>
                    </CardTitle> 
                    <CardBody>     
                        <h6>TEMP :{y}</h6>
                        <h6>DESCRIPTION :{z}</h6>
                        <h6>DEG :{deg}</h6>
                </CardBody>
            </Card> 
        </Col> 
    )
}
export default Result;