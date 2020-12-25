import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Container,Row,Col,
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  InputGroupAddon} from "reactstrap"
import './App.css';
import Axios from "axios";
import Result from "./Result";

function App() 
{
    const GetCity = async() => {
      var a = document.getElementById("city").value;
       
      if(a == ""){
        alert("Enter City")
      }

      const response = await Axios.get('http://api.openweathermap.org/data/2.5/weather?q='+a+'&appid=69089d672da4c29c1c959cbaf82acdf2')
      
      document.getElementById("result").innerHTML =
      ReactDOMServer.renderToString(<Result response={response}/>);
    }
     
  return (
    <Container fluid className="p-4">
      <Row >
          <Col md={4} className="offset-md-4 mt-2 pt-5">
            <h2>WEATHER APPLICATION</h2>
              <h4 className="mt-5 ml-5">ENTER CITY :</h4>
              <Input
                type="text"
                id="city"
                placeholder="Enter City"
              />
              <Button 
                className="mt-5 button"
                color="danger"
                size="md" block
                onClick={GetCity}>
                SUBMIT
              </Button> 
              <h3 id="result"></h3>     
        </Col>
      </Row>
    </Container>             
  );
}

export default App;
