import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes.jsx"
import {Routes, Route} from "react-router-dom"
import {Layout} from "./Layout/Layout.jsx"
import {ChallengeGenerator} from "./Challenge/ChallengeGenerater.jsx";
import {History} from "./History/History.jsx";
import {AuthenticationPage} from "./auth/Authentication.jsx";
import './App.css'

function App() {
    return <ClerkProviderWithRoutes>
        <Routes>
            <Route path="/sign-in/*" element={<AuthenticationPage />} />
            <Route path="/sign-up" element={<AuthenticationPage />} />
            <Route element={<Layout />}>
                <Route path="/" element={<ChallengeGenerator />}/>
                <Route path="/history" element={<History />}/>
            </Route>
        </Routes>
    </ClerkProviderWithRoutes>
}

export default App