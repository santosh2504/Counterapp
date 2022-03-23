import './numberCounter.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { Component } from 'react'

class NumberCounter extends Component{
    state = {counter:0}

    incrementCounter = () => {
        this.setState ((prevState)=>({counter:prevState.counter+1}))
    }

    decrementCounter = () => {
        this.setState ((prevState)=>({counter:prevState.counter-1}))
    }

    render(){
        const {counter} = this.state
        return(
        <div className='text-center'>
        <Card style={{ width: '25rem' }}>
            <Card.Body>
            <h3 className='my-3'>{counter}</h3>
            <div className='my-3'>
                <Button variant="primary" className="mx-2" onClick={this.incrementCounter}>Increment Number</Button>
                <Button variant="primary" className="mx-2" onClick={this.decrementCounter}>Decrement Number</Button>
            </div>
            </Card.Body>
        </Card>
        </div>
    )}
}

export default NumberCounter