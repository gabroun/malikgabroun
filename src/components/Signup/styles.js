import styled from 'styled-components';

export const Form = styled.form`
    border-top: solid 3px #f47c48;
    box-shadow: 0 8px 16px 0 rgb(34 50 84 / 6%), inset 0 0 0 1px rgb(112 123 140 / 15%);
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
    max-width: 800px;
    margin: 40px auto;
    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }

    .col {
        padding: 30px;
    }

    .left {
        background-color: #f9fafb;
    }

    .right {
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 20px;
    }

    p {
        font-size: 15px;
    }

    input {
        border-radius: 8px;
        border: solid 1px black;
        margin-bottom: 15px;
        padding: 12px;
        &::-webkit-input-placeholder {
            color: #848585;
        }
    }

    button {
        padding: 12px 24px;
        background: #f47c48;
        border: 1px solid #f47c48;
        box-sizing: border-box;
        border-radius: 16px;
        color: #fff;
    }

    .success {
        color: #28a745;
    }

    .error {
        color: #dc3545;
    }





.spinner {
  animation: rotator 1.4s linear infinite;
}

@keyframes rotator {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
}

.path {
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation:
    dash 1.4s ease-in-out infinite, 
    colors 5.6s ease-in-out infinite;
}

@keyframes colors {
	0% { stroke: #4285F4; }
	25% { stroke: #DE3E35; }
	50% { stroke: #F7C223; }
	75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
}
`;