import Summary from "../Summary";
import TransactionsTable from "../TransactionsTable";
import { Container } from "./style";

export default function Dashboard() {
    return (
        <>
            <Container>
                <Summary />
                <TransactionsTable />
            </Container>
        </>
    )
}