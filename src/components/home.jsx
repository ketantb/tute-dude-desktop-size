//https://tutedude-yash.vercel.app/
import { RxArrowLeft } from "react-icons/rx";
import { FaRupeeSign } from "react-icons/fa";
import Cards from "./cards"
import Header from "./header";
import "./styles/home.css"
import CardBlock from "./card-block";

const Home = () => {
    return (
        <>
            <Header />
            <div className="home-body">
                <div className="path" className="font-m-16">
        UI/UX > Refer & Earn > Friends Referred
                </div>
                <div className="go-back-block">
                    <div>
                        <RxArrowLeft className="go-back-arrow" />
                    </div>
                    <div id="go-back-text" className="font-m-16">
                        go back
                    </div>
                </div>
                <div className="refcode-wallbal">
                    <div className="ref-code font-m-17">
                        Your Referral Code
                        <div className="code">E D C H 5 4</div>
                    </div>
                    <div className="wallet-bal font-m-16">
                        Wallet Balance
                        <div className="bal font-m-17">₹ 500</div>
                    </div>
                </div>
                <div className="cards-block">
                    <CardBlock />
                </div>
                <div className="footer font-m-18">
                Terms & Conditions
                </div>
            </div>
        </>
    )
}

export default Home;