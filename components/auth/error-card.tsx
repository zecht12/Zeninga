import { Header } from "./header"
import { BackButton } from "./back-button"
import { Card, CardFooter, CardHeader } from "../ui/card"

const ErrorCard = () => {
    return (
        <Card color="white" variant="rounded" className="w-[400px] shadow-md ">
            <CardHeader>
                <Header label="Terjadi Kesalahan!!!"/>
            </CardHeader>
            <CardFooter>
                <BackButton label="Back to login" href="/auth" />
            </CardFooter>
        </Card>
    )
}

export default ErrorCard