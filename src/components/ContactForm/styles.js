import styled from 'styled-components'

export const ContactUsForm = styled.div`
    .flex-col {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    }

    .contact {
        &-name {
            display: flex;
            justify-content: space-between;
            p {
                width: calc(50% - 20px);
            }
        }

        &-submit {
            padding: 12px 24px;
            background: #F47C48;
            border: 1px solid #F47C48;
            box-sizing: border-box;
            border-radius: 16px;
            color: #fff;
        }
    }

    label {
        margin-bottom: 8px;
    }

    input, textarea {
        border-radius: 8px;
        border: solid 1px black;
    }

    .error-msg {
        color: #DB2D1C;
    }

`;
