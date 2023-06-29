import React from "react";
import Sellersmain from "../Assets/Sellers-main.webp";
import Char_1 from "../Assets/Char_1.png"
import Char_2 from "../Assets/Char_2.png"
import Char_3 from "../Assets/Char_3.png"
import Char_4 from "../Assets/Char_4.png"
import Char_5 from "../Assets/Char_5.png"

function Sellerdata(){
    return(
        <>
        <div className="seller-main-container">
            <div>
                <h1 className="seller-title">"Meet Our Dedicated Seller Team"</h1>
            </div>
            <div className="seller-main-image-container">
                <img className="seller-main-image" src={Sellersmain} alt="Seller-main" />
            </div>
        </div>
            <div className="all-seller">
                <div className="seller-image-container">
                    <img className="seller-image" src={Char_1} alt="Seller" />
                </div>
                <div>
                    <h1 className="seller-name">Max</h1>
                    <p className="seller-detail">With a passion for innovation and attention to detail, Max brings a creative touch to every project. Their expertise lies in crafting unique and captivating designs that leave a lasting impression on clients. They are known for their ability to think outside the box and deliver exceptional results.</p>
                </div>
            </div>
            <div className="all-seller">
                <div className="seller-image-container">
                    <img className="seller-image" src={Char_2} alt="Seller" />
                </div>
                <div>
                    <h1 className="seller-name">Lexi</h1>
                    <p className="seller-detail">Known for their exceptional organizational skills and strong project management abilities, Lexi ensures that every task is executed flawlessly. Their meticulous planning and attention to deadlines make them a reliable and efficient team member. They excel at coordinating complex projects and keeping all stakeholders informed.</p>
                </div>
            </div>
            <div className="all-seller">
                <div className="seller-image-container">
                    <img className="seller-image" src={Char_3} alt="Seller" />
                </div>
                <div>
                    <h1 className="seller-name">Beck</h1>
                    <p className="seller-detail">With a deep understanding of market trends and customer preferences, Beck possesses a keen sense of what sells. Their marketing expertise and strategic thinking help drive sales and boost brand visibility. They are skilled in analyzing market data and crafting effective campaigns that resonate with target audiences.</p>
                </div>
            </div>
            <div className="all-seller">
                <div className="seller-image-container">
                    <img className="seller-image" src={Char_4} alt="Seller" />
                </div>
                <div>
                    <h1 className="seller-name">Steve</h1>
                    <p className="seller-detail">Highly skilled in negotiation and building strong relationships, Steve is a natural at sales and client management. They have a knack for understanding customer needs and tailoring solutions to meet their requirements. Their exceptional communication skills make them a trusted advisor to clients, ensuring long-lasting partnerships.</p>
                </div>
            </div>
            <div className="all-seller">
                <div className="seller-image-container">
                    <img className="seller-image" src={Char_5} alt="Seller" />
                </div>
                <div>
                    <h1 className="seller-name">Joey</h1>
                    <p className="seller-detail">An expert in their field, Joey brings technical proficiency and problem-solving abilities to the team. They are adept at handling complex technical challenges and finding innovative solutions. With their deep knowledge and continuous learning mindset, they keep the team up-to-date with the latest industry advancements.</p>
                </div>
            </div>
        </>
    )
}


export default Sellerdata