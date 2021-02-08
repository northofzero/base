import styled from "@emotion/styled";
import { mobile, tabletDown } from "../utils/mediaQuery";

const colorTransition = "0.4s";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
  justify-content: center;
  display: flex;

  ${tabletDown} {
    height: 80%;
    flex-direction: column;
  }
`;

export const Description = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  z-index: 3;

  ${tabletDown} {
    width: 100%;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const Content = styled.p`
  width: 32rem;
  color: ${(props) => (props.active ? "#39FF14" : "#A6A6A6")};
  transition: color ${colorTransition};
  font-size: 1.1rem;

  ${tabletDown} {
    font-size: 0.9rem;
  }

  ${mobile} {
    width: 20rem;
  }
`;

export const Icon = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  ${tabletDown} {
    align-items: flex-start;
  }
`;

export const Brand = styled.p`
  width: calc(22rem + 15px);
  height: 8.5rem;
  font-family: Barcode;
  font-size: 100px;
  color: ${(props) => (props.active ? "#39FF14" : "#000000")};
  transition: color ${colorTransition};

  ${tabletDown} {
    width: calc(18rem + 15px);
    height: 7.5rem;
  }
`;

export const ContactContainer = styled.div`
  width: 100%;
  height: 5rem;
  position: absolute;
  z-index: 2;
  align-self: flex-end;
  margin-bottom: 1.5rem;

  p {
    margin: 0;
    padding: 0;
    margin-left: 2.5rem;
    line-height: 21px;
    color: #a6a6a6;
  }

  a {
    margin: 0;
    padding: 0;
    margin-left: 2.5rem;
    line-height: 21px;
    text-decoration: none;
    color: #a6a6a6;
  }
`;

export const ContentLink = styled.p`
  color: ${(props) => (props.active ? "#39FF14" : "#a6a6a6")} !important;
  transition: color ${colorTransition};

  cursor: pointer;
`;
