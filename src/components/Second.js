import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Image from './Image'
import Description from './Description'
import Price from './Price'
import Name from './Name'



const Second = () => {
  return (
    <div style={{display:'flex',justifyContent:'center'}}><Card style={{ width: '18rem' }}>
    <Image />
    <Card.Body>
    <Card.Title><Name /></Card.Title>
    <Card.Text>
    <Description />
    </Card.Text>
    <Price />
    <Button  variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card></div>
  )
}

export default Second