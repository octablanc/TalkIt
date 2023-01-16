import styled from "styled-components";

export const NavbarS = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: calc(10vh - 20px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    z-index: 999;
    background-color: #ffffff;
    justify-content: space-between;
    transition: 0.1s;

    h2 {
        cursor: pointer;
        user-select: none;

        :hover {
            color: #3d3d3d;
        }
    }
`;