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
  
  const [ data, setData ] = useState<IProduct[]>([]);
  const [ cart, setCart ] = useState<IProduct[]>([]);

  useEffect(() =>{
    api.get('').then(
      response => {
        setData(response.data);
      }
    )
  }, [])

  const handleCart = (index: number) => {
    let push: any = [...cart, cart.push(data[index])];
    setCart(push);
    const productStore = JSON.stringify(cart)
    localStorage.setItem("@cart", productStore)    
  }

  return (
    <Container>
      <div className="nav">
        <div className="logo">
          <img src="https://image.flaticon.com/icons/png/512/4277/4277125.png" alt="logo" width="140px" height="auto" />
          <h1>Best Books</h1>
        </div>
        <div>
          <img className="cart" src="https://image.flaticon.com/icons/png/512/709/709640.png" alt="cart" width="35px" height="auto"></img>
          <span>{cart.length} - Itens </span>
        </div>
      </div>

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