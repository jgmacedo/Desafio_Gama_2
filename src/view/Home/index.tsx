import React, { useState, useEffect } from 'react';
import { Container } from './style';
import api from '../../services/api';

interface IProduct{
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
};

//https://image.flaticon.com/icons/png/512/4277/4277125.png link logo livraria

const Home: React.FC = () => {
  
  const [ data , setData ] = useState<IProduct[]>([]);
  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data);
      }
    )
  }, [])

  const handleCart = ( index: number ) =>{
    const productStore = JSON.stringify(data[index])
    localStorage.setItem(`@Produto-${index}`, productStore)
  }

  return (
    <Container>
      <section>
        { data.map ((prod, index) =>(        
          <div className = "product-content" key = {prod.id}>
            <img src={prod.photo} alt="jojo part 1" width="200px" height="auto"/>
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>{prod.price}</h6>
            <button onClick={ ()=> handleCart(index)} type="submit" >Adicionar ao carrinho</button>
          </div>
        ))}
      </section>
    </Container>
  );
}


export default Home;