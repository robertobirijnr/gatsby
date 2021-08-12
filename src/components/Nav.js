import { Link, navigate } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Logo from './Logo';


const NavStyle = styled.nav`
    --red:red;
   margin-bottom:3rem;
   .logo{
       transform:translateY(-25%);
   }
   ul{
       margin:0;
       padding:0;
       display:grid;
       grid-template-columns:1fr 1fr auto 1fr 1fr;
       grid-gap:2rem;
       text-align: center;
       list-style:none;
       align-items:center;
   }

   li{
       --rotate:-2deg;
       transform:rotate(var(--rotate));
       order:1;
       &:nth(1){
           --rotate:1deg;
       }
       &:nth(2){
           --rotate:-2.5deg;
       }
       &:nth(4){
           --rotate:2.5deg;
       }
       &:hover{
           --rotate:3deg;
       }
   }

   a{
       font-size:3rem;
       text-decoration:none;
       &:hover{
           color:var(--red);
       }
   }
`;


export default function Nav(){
    return (
        <NavStyle>
            <ul>
                <li><Link to="/">Hot Now</Link></li>
                <li><Link to="/pizzas/">Pizza Menu</Link></li>
               <li><Link to="/"> <Logo/> </Link></li>
               <li><Link to="/slicemasters">Slice Masters</Link></li>
               <li><Link to="/orders">Orders</Link></li>
            </ul>
        </NavStyle>
    )
}