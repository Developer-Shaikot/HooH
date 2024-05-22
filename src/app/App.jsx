import Routers from "../Routers/Routers";
import "./App.css";
import ChatContainer from "../components/chat/ChatContainer";
import { useAuth } from "../hooks/useAuth";
import { createContext } from "react";
import { Toaster } from "sonner";

export const AuthContext = createContext();

const dummyUser = {
    image: "https://scontent.fdac96-1.fna.fbcdn.net/v/t39.30808-6/399591095_2680684895412148_6469618244673973089_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHvDSWz67hCkhGuJw9HNsGE49JAKnfnEcXj0kAqd-cRxWcB6yDOSkrE98af85uLvo0Rdvh1dHJ4GrkiBZSzxTqq&_nc_ohc=DaylqEqEjdAAX-23n1i&_nc_zt=23&_nc_ht=scontent.fdac96-1.fna&oh=00_AfBtxobsx17zMU_97eUi-k6wd1T0PGrTi4wYQzhnW8rcjw&oe=65680A4C",
    name: "Shaikot Kundu Akash",
};

function App() {
    const { user, isLoading, isSuccess } = useAuth();

    return (
        <>
            <AuthContext.Provider value={{ user: user || dummyUser, isLoading, isSuccess }}>
                <Routers />
                <ChatContainer />
                <Toaster richColors />
            </AuthContext.Provider>
        </>
    );
}

export default App;
