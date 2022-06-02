import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledButton = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  margin-bottom: 20px;
  a {
    padding: 12px 24px;
    background: #fff;
    border: 1px solid #f47c48;
    border-radius: 16px;
  }

  button {
    box-sizing: border-box;
    background: #fff;
    color: #f47c48;
    cursor: pointer;
    border: none;
  }

  a:hover {
    background: #f47c48;
    border: 1px solid #f47c48;
    transition: background 250ms, color 250ms;
    button {
      color: #fff;
      background: #f47c48;
      transition: background 250ms, color 250ms;
    }
  }
`;

interface ButtonProps {
  label: string;
  link: string;
}

const Button = ({ label, link }: ButtonProps) => {
  return (
    <StyledButton>
      <Link to={link}>
        <button>{label}</button>
      </Link>
    </StyledButton>
  );
};

export default Button;
