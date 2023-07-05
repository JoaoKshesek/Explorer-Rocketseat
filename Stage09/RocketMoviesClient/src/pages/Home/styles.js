import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    "header"
    "brand"
    "content"
    "content";
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: brand;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1120px;
  margin: 50px auto;

  > h1 {
    font-size: 32px;
    font-weight: 400;
    color: #ffffff;
  }
`;
export const Content = styled.div`
  grid-area: content;
  margin: 0 auto;
  width: 1120px;
  > main {
    overflow-y: auto;
    max-height: 700px;
    padding-right: 8px;
  }
  main::-webkit-scrollbar {
    width: 8px; /* width of the entire scrollbar */
  }

  main::-webkit-scrollbar-track {
    background: transparent; /* color of the tracking area */
  }

  main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.COLORS.ROSE}; /* color of the scroll thumb */
    border-radius: 9999px;
    border: none; /* creates padding around scroll thumb */
  }
`;

export const NewMovie = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.ROSE};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 8px;
  padding: 0 32px;
  font-size: 16px;
  font-weight: 400;

  svg {
    margin-right: 6px;
    font-size: 22px;
  }
  a {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Section = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BROWN};
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;
  width: 100%;
  gap: 15px;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 24px;
  font-weight: bold;
`;

export const Rating = styled.div`
  display: flex;
  gap: 6px;
`;

export const Description = styled.text`
  text-align: justify;
  margin-bottom: 15px;
`;

export const Tags = styled.div``;
