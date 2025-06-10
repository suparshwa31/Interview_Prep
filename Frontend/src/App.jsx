import ClerkProviderWithRoutes from './auth/ClerkProviderWithRoutes'
import {Routes, Route} from "react-router-dom"
import { Layout } from './Layout/Layout'
import { History } from './History/History'
import { ChallengeGenerater } from './Challenge/ChallengeGenerater'
import { Authentication } from './auth/Authentication'

import './App.css'


function App() {
  return <ClerkProviderWithRoutes>
    <Routes>
      <Route path="/sign-in/*" element={<Authentication />} />
      <Route path="/sign-up" element={<Authentication />} />
      <Route element={<Layout />}>
        <Route path="/" element={<ChallengeGenerater />}/>
        <Route path="/history" element={<History />}/>
      </Route>

    </Routes>
    </ClerkProviderWithRoutes>
}

export default App
