import React from "react";
import styled from "styled-components";
export const Card = (items) => {  
  //displays items ,taking items as props.
  return (
    <Card.WrapperWrap >
    <Card.Wrapper>
      <Card.Content>
        <Card.ContentHeading>
          {items.category_title}
        </Card.ContentHeading>
        <Card.ContentDescription>
         {items.category_description}
        </Card.ContentDescription>
      </Card.Content>
      <Card.BottomContent>
        <Card.ClientWrap>
          <Card.TitleText>Clients</Card.TitleText>
          <Card.SubTitle>{items.clients}</Card.SubTitle>
        </Card.ClientWrap>

        <Card.TimeWrap>
          <Card.TitleText>Duration</Card.TitleText>
          <Card.SubTitle>{items.start_date+ items.end_date}</Card.SubTitle>
        </Card.TimeWrap>
      </Card.BottomContent>
     
    </Card.Wrapper>
    <Card.ImageContent>
        <img src={items.photo}
          alt="pictures of projects"
          width={"100%"}
          height={"100%"}
          
        />
      </Card.ImageContent>
    </Card.WrapperWrap>
  )
}

Card.Wrapper = styled.div`
    background-color: #124af4;
    color: white;
    padding: 20px;
    font-weight: 600px;
    font-size: 14px;
    color: #ffdc1c; 
    
    
  `;
   Card.WrapperWrap = styled.li`
   background-color: #124af4;
   color: white;
   padding:0px;
   margin-top:20px;
   font-weight: 600px;
   font-size: 14px;
   color: #ffdc1c;    
    margin-bottom:20px;    
   
   @media only screen and (max-width: 992px) {
      max-width: 100%;
      
    }
 `;


  Card.ClientWrap = styled.div`
    background-color: #124af4;
    color: white;
    padding: 20px;
    font-weight: 600px;
    font-size: 14px;
    color: #ffdc1c;
    flex: 50%;
    
  `;
  Card.TimeWrap = styled.div`
    background-color: #124af4;
    color: white;
    padding: 20px;
    font-weight: 600px;
    font-size: 14px;
    color: #ffdc1c;
    flex: 50%;    
    justify-content: flex-end;
    @media only screen and (max-width: 992px) {       
      justify-content: flex-start;  

    
  `;
  Card.ContentHeading = styled.div`
    background-color: #124af4;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 600px;
    font-size: 1rem;
  `;
  Card.ContentDescription = styled.p`
    background-color: #124af4;
    color: white;
    margin-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    font-weight: 600px;
    font-size: 1rem;
  `;
  Card.Content = styled.div`
    background-color: #124af4;
    color: white;
  `;
  Card.BottomContent = styled.div`
    display: flex;
    background-color: #124af4;
    color: white;
    font-weight: 600px;
    font-size: 14px;
    color: #ffdc1c;
    @media only screen and (max-width: 992px) {       
      flex-direction:column;
      

  `;
  Card.ImageContent = styled.div`
      width:100%;
      @media only screen and (max-width: 992px) {       
      padding:0;
    
  `;

  Card.TitleText = styled.p`
    color: #ffdc1c;
    font-weight: 700px;
    font-size: 1rem;
  `;
  Card.SubTitle = styled.p`
    color: #fffff;
    font-weight: 700px;
    font-size: 1rem;
  `;

