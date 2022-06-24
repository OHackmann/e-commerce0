
import styled  from "styled-components"
import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from "@material-ui/icons"

const Container = styled.div`
    display: flex;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
    margin-top: -28px;
    margin-left: -5px;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>
                There are many variations of passages of Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, ad? Sequi, facilis. Exercitationem magni ab, culpa reiciendis inventore at delectus, obcaecati iure minima sint eligendi impedit. Velit nesciunt voluptate inventore.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55acee">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="e60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact Us</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path, South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +1 (908) 567-8989
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> contact@lama.dev
            </ContactItem>
            <Payment src="https://static.wixstatic.com/media/d87621_d45ad45ff643442b8126ffe5bc6b8de6~mv2.png/v1/fill/w_356,h_142,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bandeira-dos-cartoes-de-credito.png"/>
        </Right>
    </Container>
  )
}

export default Footer
