import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import Form from "./Form";
import Categories from "./Categories";
import ActionArea from "./ActionArea";
import Video from "./Video";
import Lazy from "./Lazy";
import { Footer } from "./Footer";
const Carousel = lazy(() => import("./Carousel"));

function Login() {
  return (
    <>
      <Container>
        <Nav>
          <a className="logo" href="/">
            <img src="/images/login-logo.svg" alt="linkedin" />
          </a>
          <div>
            <Join>Join now</Join>
            <SignIn>Sign In</SignIn>
          </div>
        </Nav>
        <Section>
          <h1>Welcome to your professional community</h1>
          <Hero>
            <Form />
            <img src="/images/img-hero.svg" alt="hero" className="hero" />
          </Hero>
        </Section>
      </Container>
      <Categories />
      <Suspense fallback={<Lazy />}>
        <Carousel />
      </Suspense>
      <ActionArea />
      //Have to implement lazy loading here
      <Video></Video>
      <Footer />
    </>
  );
}

const Container = styled.div`
  padding: 0px;
  width: 100%;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  // max-width means any screen size below 768px, do the following
  .logo {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0px 5px;
      width: 90px;
      margin-top: 15px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }

  @media (max-width: 768px) {
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 6px 17px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  // border: 2px solid red;
  align-content: start;
  min-height: 500px;
  padding-top: 40px;
  position: relative;
  flex-wrap: wrap;
  // width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: rgba(143, 88, 73, 1);
    font-weight: 200;
    // line-height: 70px;

    @media (max-width: 768px) {
      text-align: left;
      font-size: 2.3rem;
      width: 100%;
      // line-height: 2;
    }
  @media (max-width: 768px) {
    margin: auto;
    width: 100%;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  }

  .hero {
    width: 600px;
    height: 500px;
    position: absolute;
    right: -50px;
    top: 20px;


    @media (max-width: 768px) {
      //the three properties below is what make it possible to center the image
      position: relative;
      display: block;
      margin: auto;
      width: 280px;
      height: initial;
      right: 0;
    }
  }

  @media(max-width:768px){
    position: relative;
  }
`;

export default Login;
