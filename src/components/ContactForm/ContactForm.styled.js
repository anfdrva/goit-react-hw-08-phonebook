import styled from 'styled-components';
import { Form as FormikForm, Field, ErrorMessage as FormikErrorMessage } from 'formik';

export const FormContact = styled(FormikForm)`
  padding: 15px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #EBEBEB;
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;

`;

export const ErrorText = styled(FormikErrorMessage)`
  color: tomato;
`;

export const Label = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
  color: black; 
`;

export const Input = styled(Field)`
  all: unset;
  display: flex;
  border: 2px solid black;
  margin: 10px 0;
  padding: 15px;
  font-size: 18px;
  color: black; 

  &:focus-visible {
    border-radius: 4px;
    border: 3px solid #B345FE;
  }
`;

export const Button = styled.button`
  background-color: white;
  border-radius: 4px;
  border: 2px solid black;
  display: inline-block;
  cursor: pointer;
  color: black;
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