import React from 'react';
import { Card} from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <Card className="mt-5 mx-auto" style={{ width: '38rem' }}>
                <Card.Img variant="top" src="https://i1.wp.com/www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg?fit=800%2C600&ssl=1" />
                <Card.Body>
                    <Card.Title>
                        <h1> OPPS!!!!!!!</h1>
                    </Card.Title>
                    <Card.Text>
                        <h1>404</h1>
                        <h2>UH OH! You're lost! It's wrong link.</h2>
                        <p>The page you are looking for does not exist.
                            How you got here is a mystery. But you can click the navbar button 
                            to go back to the homepage.
                        </p>
                    </Card.Text>
                   
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default NotFound;