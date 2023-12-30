import { BackButton, BackLogo, Container, Logo } from "./styles";
import logoHeader from '@assets/logoHeader.png'

interface HeaderProps {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
    return (
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackLogo />
                </BackButton>
            }
            <Logo source={logoHeader} />
        </Container>
    )
}