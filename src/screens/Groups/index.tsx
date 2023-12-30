import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { HighLight } from "@components/HighLight";
import { GroupCard } from "@components/GroupCard";


export function Groups() {
    return (
        <Container>
            <Header />

            <HighLight title="Turmas" subtitle="Jogue com a sua turma" />

            <GroupCard title="Galera da Corps"  />
        </Container>
    )
}