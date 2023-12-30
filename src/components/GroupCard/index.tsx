import { TouchableOpacityProps } from "react-native";
import { Container, IconUsers, Title } from "./styles";

interface GroupCardProps extends TouchableOpacityProps {
    title: string;
}

export function GroupCard({title}:GroupCardProps){
    return(
        <Container>
            <IconUsers/>
            <Title>{title}</Title>
        </Container>
    )
}