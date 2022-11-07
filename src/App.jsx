import { useEffect, useState } from 'react';
import styled from 'styled-components';

import heroImage from './assets/hero-image.svg';
import video from './assets/video.mp4';

function App() {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <Wrapper>
      <Header scroll={scrollNav}>
        <div>
          <h1>Header</h1>
        </div>
      </Header>

      <HeroSection>
        <div className="title">
          <h1>La nueva forma de manejar tu contraseña</h1>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Hero Image" />
        </div>
      </HeroSection>
      <Diagonal className="diagonal"></Diagonal>

      <Video className="video">
        <div className="title">
          <h2>Como Funciona</h2>
          <p>Ver video explicativo</p>
        </div>

        <div className="content-video">
          <video width="100%" controls>
            <source src={video} />
          </video>
        </div>
      </Video>

      <DowloadContainer>
        <div className="title">
          <h2>Como Funciona</h2>
          <p>Ver video explicativo</p>
        </div>

        <div className="dowload">
          <div></div>
        </div>
      </DowloadContainer>

      <TutorialSection>
        <div className="title">
          <h2>Como Funciona</h2>
          <p>Ver video explicativo</p>
        </div>
      </TutorialSection>

      <Footer>
        <h1>footer</h1>
      </Footer>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  margin: 0;
`;

const Header = styled.header`
  background: transparent;
  height: 8rem;
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;

  backdrop-filter: blur(10px);
  background-color: ${(props) => (props.scroll ? 'rgba(0, 0, 0, 0.093)' : 'transparent')};
  width: 100%;
  padding: 2rem;
  color: #fff;
  color: #7b0f0f;
`;

const HeroSection = styled.main`
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;

  height: 100%;

  text-align: center;

  margin-top: -5rem;

  .title {
    width: 50%;
    margin-top: 5rem;
    h1 {
      font-size: 10rem;
      font-weight: 700;
      line-height: 1;
      color: #000;

      letter-spacing: -5px;
    }
  }

  .hero-image {
    width: 50%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    /* margin-bottom: 5rem; */

    img {
      margin-top: -9rem;
      width: 50rem;
    }
  }
`;

const Diagonal = styled.div`
  background-color: #fff;
  color: #fff;
  border: none;
  clip-path: polygon(0 0%, 100% 0, 100% 100%, 0 30%);
  padding: 5rem;
`;

const Video = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  text-align: center;
  color: #fff;

  .title {
    h2 {
      font-size: 5rem;
      font-weight: 800;
      margin-bottom: -2rem;
    }

    p {
      font-size: 3rem;
    }
  }

  video {
    margin-bottom: 5rem;
    height: 80rem;
  }
`;

const DowloadContainer = styled.div`
  width: 100%;
  height: 65rem;
  display: flex;
  flex-direction: column;
  margin: 0;
  text-align: center;
  background-color: #fff;

  .title {
    h2 {
      font-size: 5rem;
      font-weight: 800;
      margin-bottom: -2rem;
    }

    p {
      font-size: 3rem;
    }
  }
`;

const TutorialSection = styled.div`
  width: 100%;
  height: 65rem;
  display: flex;
  flex-direction: column;
  margin: 0;
  text-align: center;
  color: #fff;

  .title {
    h2 {
      font-size: 5rem;
      font-weight: 800;
      margin-bottom: -2rem;
    }

    p {
      font-size: 3rem;
    }
  }
`;

const Footer = styled.footer`
  background-color: transparent;
  color: #fff;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: linear-gradient(112.1deg, rgb(4, 6, 13) 11.4%, rgb(5, 14, 43) 70.2%);
  border: 1px solid #1a1a1a;
`;
