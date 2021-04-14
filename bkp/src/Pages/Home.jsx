import { QueryClient, QueryClientProvider } from "react-query";
import Counter from "../Components/Counter";
import Members from "../Components/Members";

const queryClient = new QueryClient();

export default function Home() {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Counter />
                <Members />
            </QueryClientProvider>
        </div>
    )
}
