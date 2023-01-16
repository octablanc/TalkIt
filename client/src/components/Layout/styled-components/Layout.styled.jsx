import styled from 'styled-components';

export const LayoutS = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderS = styled.div`
    width: 100vw;
`;

export const MainS = styled.div`
    margin-top: 100px;
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    min-height: 70vh;
    width: 70vw;
    display: grid;
`;

export const FooterS = styled.div`
    background-color: black;
    height: 15vh;
    width: 100%;
`;