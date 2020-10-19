import styled from 'styled-components';

export const ContactUs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 44px;
    .social {
        h1, p {
            margin-bottom: 46px;
        }

        a[aria-label='Twitter'] {
            margin-left: 0;
        }
    }
`;