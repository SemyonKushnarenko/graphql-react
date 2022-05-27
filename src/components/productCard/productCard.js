import styled from 'styled-components'
import { Component } from 'react'
import img from './img.jpg';
import cartImg from './cart.svg';

const ProductCardDiv = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all .3s ease;
    &:hover{
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
    padding: 16px;
`
const Img = styled.div`
    width: 354px;
    height: 330px;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 24px;
    position: relative;
`
const Cart = styled.div`
    width: 52px;
    height: 52px;
    background-color: #5ece7b;
    border-radius: 50%;
    position: absolute;
    right: 15px;
    bottom: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .3s ease;
    visibility: hidden;
    opacity: 0;
    ${ProductCardDiv}:hover & {
        visibility: visible;
        bottom: -26px;
        opacity: 1;
    }
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        filter: brightness(110%);
    }

`
const Detail = styled.p` 
    font-family: 'Raleway', sans-serif;        
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;     
    &.price{
        font-weight: 500;
    }
`



export default class ProductCard extends Component {

    render() {
        return (
            <ProductCardDiv>
                <Img>
                    <Cart>
                        <img src={cartImg} alt=""/>
                    </Cart>
                </Img>
                <Detail>Apollo Running Short</Detail>
                <Detail className='price'>$50.00</Detail>
            </ProductCardDiv>
        )
    }
}