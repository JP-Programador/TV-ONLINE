import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Player from "./pages/players";
import NotFound from "./pages/notFound";

export default function Routess() {
    return(
        <Router>
            <Routes>
                <Route path="/" exact={true} element={<Home />} />
                <Route path="/Player/:canal" exact={true} element={ <Player />} />
                <Route path= '*' exact={true} element={ <NotFound />} />

            </Routes>

        </Router>
    );
}