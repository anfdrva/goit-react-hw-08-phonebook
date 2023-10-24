import styled from 'styled-components';

export const Form = styled.form`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
`;

export const Input = styled.input`
  all: unset;
  display: flex;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px 0;
  padding: 15px;
  font-size: 20px;
  color: black;

  &:focus-visible {
    border-radius: 4px;
    border: 3px solid #B345FE;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  background-color: #ECD2FF;
  border-radius: 4px;
  border: 2px solid #B345FE;
  display: inline-block;
  cursor: pointer;
  color: #212121;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 16px 37px;
  text-decoration: none;
  margin: 10px 0;

  &:hover {
    background-color: #B345FE;
    color: #ffffff;
  }
`;