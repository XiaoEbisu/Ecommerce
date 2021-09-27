import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-Color: #006d77;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500px;
`;

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Orders Over 30€ 
        </Container>
    )
}

export default Announcement
