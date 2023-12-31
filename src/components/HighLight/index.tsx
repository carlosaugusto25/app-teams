import { Container, SubTitle, Title } from "./styles";

interface HighLightProps {
    title: string;
    subtitle: string;
}

export function HighLight({title, subtitle}:HighLightProps){
    return(
        <Container>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </Container>
    )
}