import Background from "../containers/background";
import * as S from "../styles/styles";
import icon from "../assets/noz.png";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { useState } from "react";

export default function Home() {
  const [descVisible, setDescVisible] = useState(false);
  const [active, setActive] = useState(false);
  const handleActive = () => setActive(!active);

  return (
    <S.Container>
      <Background />
      <S.IconContainer>
        <S.Icon onMouseEnter={handleActive} onMouseLeave={handleActive}>
          <Fade>
            <S.Brand active={active}>NORTH OF ZERO</S.Brand>
          </Fade>
        </S.Icon>
        <S.Description>
          <Fade when={descVisible}>
            {descVisible && (
              <div onMouseEnter={handleActive} onMouseLeave={handleActive}>
                <S.Content active={active}>
                  Growth of a product is a combination of strategies and not a
                  singular marketing function.
                </S.Content>
                <S.Content active={active}>
                  The core to this philosophy is building not for the world that
                  exists today but, the one we would love to live in the future.
                </S.Content>
                <S.Content active={active}>
                  Whether it’s something really simple or a complex unicorn
                  product we help build the brand story, technology and
                  data-driven growth stack setting your foundation.
                </S.Content>
                <S.Content active={active}>
                  We believe in crafting a scalable strategy that grows with you
                  and without us (long-term).
                </S.Content>
              </div>
            )}
          </Fade>
        </S.Description>
      </S.IconContainer>
      <S.ContactContainer>
        <S.ContentLink
          active={active}
          onMouseEnter={handleActive}
          onMouseLeave={handleActive}
          onClick={() => {
            setDescVisible(!descVisible);
          }}
        >
          A FOUNDATION FOR SCALABLE GROWTH
        </S.ContentLink>
        <a href="mailto:run@northofzero.dev">CONTACT</a>
        <p>2020 NORTH OF ZERO</p>
      </S.ContactContainer>
    </S.Container>
  );
}
