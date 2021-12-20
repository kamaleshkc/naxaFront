import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../reducers/fetchData";
import {Card} from "../components/Card"

export const Homepage = () => {
  
  const projects = useSelector((state) => state.projectAll.data);

  //if not undefined slice and ready for render
   if(projects !==undefined){
     const middle=projects.length/2;     
    var slicedArray = projects.slice(0, middle);
    var secondSlicedArray = projects.slice(-middle);
    console.log(slicedArray);
   }
  
  
   //useEffect is called when page initially renders and everytime dispatch is called 
  
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <Homepage.Container>
        <Homepage.WrapperLeft>        

        {   
            //mapping projects 
             projects?
             slicedArray.map((items) => {
                return (
                  <Card key={items.id} {...items}/>
                );
                }) :<></>
            
        }      
       
        </Homepage.WrapperLeft>
        <Homepage.Wrapper>
        {
            //mapping projects 
             projects?
              secondSlicedArray.map((items) => {
                return (
                  <Card key={items.id} {...items}/>
                );
                }) :<div>Loading data</div>
            
        }
        
        </Homepage.Wrapper>
      </Homepage.Container>
    </div>
  );
};

//Styles

Homepage.Wrapper = styled.div`
   
   padding-left: 20px;
    padding-right: 20px;    
    display:flex;    
    margin-top:7rem;
    background:#fff;
    flex-wrap:wrap;
  @media only screen and (max-width: 992px) {       
    max-width: 720px;
    

`;

Homepage.WrapperLeft = styled.div`
   padding-left: 20px;
    padding-right: 20px;    
    display:flex;    
    margin-bottom:7rem;
    background:#fff;
    flex-wrap:wrap;
    max-width:50%;
  @media only screen and (max-width: 992px) {       
    max-width: 720px;   

`;
Homepage.Container=styled.ul`
    display: flex;
    max-width: 1400px;
    @media only screen and (max-width: 992px) {       
      max-width: 720px;  
      display:inline; 

`;
