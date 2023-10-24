import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  line-height: 1.15;
  padding: 10px 0;
  letter-spacing: 0.05em;

`;

export const Button = styled.button`
  background-color: #EBEBEB;
  border-radius: 4px;
  border: 2px solid black;
  display: inline-block;
  cursor: pointer;
  color: black;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 16px 16px;
  text-decoration: none;

  &:hover {
    background-color: #B345FE;
    color: #ffffff;
  }
`;