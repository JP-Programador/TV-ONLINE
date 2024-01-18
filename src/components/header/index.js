import './index.css'
import logo from './logo.png';
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <div className="containerHeader">
        <Link to={"/"}>   <img src={logo} width={"350"} height={"200"} alt="" /> </Link>
        </div>
)}