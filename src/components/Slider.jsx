import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from "styled-components";

const Container = styled.div`
 width: 100%;
 height: 100vh;
 display:flex;
 position:relative;
 overflow:hidden;
`;
const Arrow = styled.div`
    width: 50px;
    height:50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px;"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
`;
const Wrapper = styled.div`
    display:flex;
`;

const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color:#${props=>props.bg}
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
height:80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
   
`;
const Title = styled.h1`
    font-size:78px;
`;
const Desc = styled.p`
    margin:50px 0px;
    font-size: 20px;
    font-weight:500;
    letter-spacing:3px;
`;
const Button = styled.button`
    padding:10px;
    font-size:20px;
    background-color:transparent;
    cursor: pointer;
    &: hover {
        background-color: pink;
        color:#fff;
    }
`;

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide bg="fcf1ed">
                    <ImgContainer>
                        <Image src="https://cdn.pixabay.com/photo/2017/02/27/02/32/pretty-girl-2101980_960_720.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src="https://cdn.pixabay.com/photo/2016/11/14/09/14/cat-1822979_960_720.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>WINTER SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImgContainer>
                        <Image src="https://cdn.pixabay.com/photo/2021/12/05/21/39/christmas-balls-6848782_960_720.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>POPULAR SALE</Title>
                        <Desc>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>

                
               
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider

