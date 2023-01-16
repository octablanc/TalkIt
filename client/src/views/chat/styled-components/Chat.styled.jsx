import styled from "styled-components";

export const ChatS = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const Contacts = styled.div`
    grid-column: 1 / 2;
    border-right: 1px solid #cbcef7;
`;

export const ChatContainer = styled.div`
    grid-column: 2 / 4;
`;