import React from 'react';
import { Container } from './style';

//https://image.flaticon.com/icons/png/512/4277/4277125.png link logo livraria

const Home: React.FC = () => {
  return (
    <Container>
      <section>
        <div className = "product-content">
          <img src="https://images-na.ssl-images-amazon.com/images/I/818fOuBHTnL.jpg" alt="jojo part 1" width="200px" height="auto"/>
          <h4>Name</h4>
          <span>descrição</span>
          <h6>price</h6>
        </div>
      </section>
    </Container>
  );
}

export default Home;