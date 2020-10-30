import styled from 'styled-components';

export const ContactUsForm = styled.div`
  .flex-col {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  }

  .success-msg {
    background-color: #d4edda;
    color: #155724;
    padding: 12px 20px;
    border-radius: 8px;
    margin-bottom: 24px;
    display: block;
    p {
      margin: 0;
    }
  }

  .hide {
    display: none;
  }

  .contact {
    &-name {
      display: flex;
      justify-content: space-between;
      @media (max-width: 767px) {
        flex-direction: column;
      }
      p {
        width: calc(50% - 20px);
        @media (max-width: 767px) {
          width: 100%;
        }
      }
    }

    &-submit {
      padding: 12px 24px;
      background: #f47c48;
      border: 1px solid #f47c48;
      box-sizing: border-box;
      border-radius: 16px;
      color: #fff;
    }
  }

  label {
    margin-bottom: 8px;
  }

  input,
  textarea {
    border-radius: 8px;
    border: solid 1px black;
  }

  .error-msg {
    color: #db2d1c;
  }
`;
