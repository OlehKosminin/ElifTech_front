import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export const Item = styled.li`
  display: flex;

  width: 96%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 auto 5px auto;
  padding: 10px;

  overflow-y: auto;
`;

export const ProductItem = styled.div`
  display: flex;

  border: 1px solid black;
  border-radius: 5px;
  margin: 0 auto 0 auto;
  padding: 5px;

  height: fit-content;
`;

export const ProductInfoWraper = styled.div`
  margin: 0 auto 0 auto;
`;

export const Form = styled.form`
  border: 1px solid black;
  border-radius: 5px;
`;

export const Photo = styled.div`
  background-color: silver;
  width: 200px;
  height: 120px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const InfoContainer = styled.div`
  border-radius: 5px;
`;
