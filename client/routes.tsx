import { createRoutesFromElements, Route } from 'react-router'

import App from './components/App.tsx'
import Home from './pages/Home.tsx'
import SelectServer from './pages/SelectServer.tsx'
import CreateServer from './pages/CreateServer.tsx'

export default createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Home />} />
    <Route path="select-server" element={<SelectServer />} />
    <Route path="create-server" element={<CreateServer />} />
  </Route>,
)
