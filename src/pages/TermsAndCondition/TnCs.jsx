import React from 'react'

import './Tncs.css';
import Ellipse2 from "../../assets/Ellipse 2.png";
import MiddleEllipse from "../../assets/Ellipse 3.png";
import BottomEllipse from "../../assets/Ellipse 4.png";
import Navbar from '../../components/common/Nav/Navbar';
import Footer from '../../components/common/Footer/Footer';

const TnCs = () => {
  return (
    <>
    <Navbar />
        <div className='tncs section__padding'>
            <div className="top-ellipse-service">
				<img src={Ellipse2} alt="" />
			</div>
            <div className='tncs-landing'>
                <h1>Terms<span className="span"> and </span>Conditions</h1>
            </div>
            <div className="tncs-detail">
                <h2>Note to Investors Transacting Online</h2>
                <p>Using Crest Holdings’ website to manage investor accounts involves the electronic transmission of personal financial information. Using Crest Holdings’ online account transaction feature is your consent to the transmission of such information. Once you have accessed your account by entering your username and password, your consent becomes effective and remains effective at all times when using this site. Thus, to enhance the protection of your personal financial information and minimize your security risk, Crest Holdings strongly recommends that you exit your browser upon completion of online account transactions. Crest Holdings may only be liable for losses resulting from unauthorized transactions if it does not follow reasonable security procedures for verifying the identity of a user. Crest Holdings recommends that you verify the accuracy of your confirmation statements immediately after you receive them. Crest Holdings supports the use of 256-bit browser encryption technology that also minimizes your security risk.</p>
                <span><strong>NOTE: ACCESSING OR REQUESTING ACCOUNT INFORMATION OR TRANSACTIONS THROUGH THIS SITE CONSTITUTES AND SHALL BE DEEMED TO BE AN ACCEPTANCE OF THE FOLLOWING TERMS AND CONDITIONS.</strong></span>
                <p>The accuracy, completeness, and timeliness of all mutual fund information provided is the sole responsibility of the fund which provides the information. No party which provides a connection between this website and a mutual fund or its transfer agency system can verify or ensure the receipt of any information transmitted to or from a mutual fund or its transfer agent, or the acceptance by, or completion of any transaction with, a mutual fund.</p>
                <p>The online acknowledgments or other messages which appear on your screen for transactions entered do not mean that the transactions have been received, accepted, or rejected by Crest Holdings. These acknowledgments are only an indication that the transactional information entered by you has either been transmitted to Crest Holdings, or that it cannot be transmitted. It is the responsibility of Crest Holdings to confirm to you that it has received the information and accepted or rejected a transaction. No transactions shall be deemed accepted until you receive a written confirmation.</p>
                <p>You are responsible for reviewing all account statements received by you in order to verify the accuracy of all Crest Holdings account information provided in the statement and all transactions entered through this site. You are also responsible for promptly notifying Crest Holdings of any errors or inaccuracies relating to information contained in, or omitted from your Crest Holdings account statements, including errors or inaccuracies arising from the transactions conducted through this site.</p>
                <h2>Note to Prospective Investors</h2>
                <p>Investors should consider carefully the investment objectives, risks, and charges before investing. Expenses charged by investments, (e.g., funds and managed accounts) and commissions, interest charges, or other expenses for transactions apply.</p>
                <h2>Eligible Investors</h2>
                <p>The information provided on this website is intended only for those persons who are eligible, or acting on behalf of an investor who is eligible, to purchase shares of U.S. registered investment companies or to invest in the products offered by Crest Holdings. Nothing on this website shall be considered a solicitation to buy or an offer to sell a security to any person in any jurisdiction where such offer, solicitation, purchase, or sale would be unlawful under the securities laws of such jurisdiction.</p>
                <h3>*No Warranties *</h3>
                <p>The material on this site may include technical inaccuracies or typographical errors. Crest Holdings may make changes or improvements at any time.</p>
                <h2>Copyright</h2>
                <p>The content of Crest Holdings’ website, including text and graphics, software code, or user interface design or logos, is protected by applicable copyright laws, ©️2023 Crest Holdings, LTD. Crest Holdings hereby authorizes you to download, copy and display the content herein, but only for your personal, informational, non-commercial use. Modification or use of the content for any other purpose violates Crest Holdings’ intellectual property. The material on this site is provided for lawful purposes only. You may not download, copy, display or distribute to third parties for commercial purposes any portion of the content without the prior written permission of Crest Holdings.</p>
                <h2>Trademarks</h2>
                <p>The Crest Holdings name, the Crest Holdings logo, the names Crest Holdings and Crest Holdings Traders, the phrases “Making The Future Golden,” “The Patient Investor,” “Patience Wins,” “Money Brave,” and “Black Golden Investor” are all registered trademarks or service marks of Crest Holdings. All other trademarks and service marks appearing on this site are the property of their respective owners.</p>
                <span><em>Investing involves risk, including risk of loss.</em></span>
            </div>
            <div className="middle-ellipse-service">
                <img src={MiddleEllipse} alt="" />
            </div>
            <div className="bottom-ellipse-service">
				<img src={BottomEllipse} alt="" />
			</div>
        </div>
    <Footer />
    </>
  )
}

export default TnCs;