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
   //console.log(response)
     var q = response.data
      var x = response.data['name']
      var y = q['main']['temp']
      var z = q['weather'][0]['description']
      var deg = q['wind']['deg']

    return(
        <Col lg={12} className="mt-4" id="result">
            <Card>
                <CardBody className="text-center">
                    <CardTitle>
                        <h3>CITY :{x}</h3>
                        <h6>TEMP :{y}</h6>
                        <h6>DESCRIPTION :{z}</h6>
                        <h6>DEG :{deg}</h6>
                    </CardTitle>  
                </CardBody>
            </Card> 
        </Col> 
    )
}
export default Result;