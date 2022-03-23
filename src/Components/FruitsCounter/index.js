import "./index.css";
import Item from "./item.js";

import Card from "react-bootstrap/Card";
const fruitsList = [
    {
        id:0,
        fruitName:"Mango"
    },
    {
        id:1,
        fruitName:"Banana"
    },
    {
        id:2,
        fruitName:"Watermelon"
    },
]
const FruitsCounter = () => {
  return (
    <div className="d-flex flex-row text-center">
    <Card style={{ width: '25rem' }}>
        <Card.Body>
    
    {fruitsList.map((eachFruit)=>
    (<Card>
        <Card.Body> 
    <Item fruitName={eachFruit.fruitName} key={eachFruit.id} />
    </Card.Body> 
    </Card>
    )
    )}
  </Card.Body>
  </Card>
    </div>
  );
};

export default FruitsCounter;
