import Routers from "../Routers/Routers";

import { Toaster } from "sonner";
import "./App.css";

function App() {
    return (
        <>
            <Routers />
            <Toaster richColors />
        </>
    );
}

export default App;
