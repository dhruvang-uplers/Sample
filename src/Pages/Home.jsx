import { QueryClient, QueryClientProvider } from "react-query";
import Counter from "../Components/Counter";
import Members from "../Components/Members";
import { connect } from "react-redux";

const queryClient = new QueryClient();

function Home() {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <Counter />
                {/* <Members /> */}
            </QueryClientProvider>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isLoggingOut: state.AuthReducer.isLoggingOut,
        logoutError: state.AuthReducer.logoutError
    };
}


export default connect(mapStateToProps)(Home)