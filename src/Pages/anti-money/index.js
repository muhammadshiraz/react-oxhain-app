import React from "react";
import OxhainBanner from "../../Components/Banner/Banner04";

const AntiMoney = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full anti-money-control-section font-prompt my-20">
            <OxhainBanner  
                className="xsm:mb-5 lg:mb-8 xl:mb-8 2xl:mb-12"
                titleclassname="mt-5"
                breadcrumblink01="/risk"
                breadcrumb01="Legal"
                breadcrumblink02="/risk"
                breadcrumb02="AML &#38; CFT"
                title="Anti-Money Laundering/Counter the Financing"
                halftitle="of Terrorism (AML/CFT) Policy"
                content="Last revised: 12 July 2022"
            />
            <div className="flex flex-col container mx-auto xsm:px-5 lg:px-2 xl:px-2 2xl:px-2 xsm:mb-5 lg:mb-5 xl:mb-5 2xl:mb-8 text-left">
                <p className="font-normal xsm:text-sm lg:text-sm xl:text-base 2xl:text-lg text4 xsm:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5">
                Before trading or transacting using our Services, it is important to understand the risks. We have included below, in more detail, the potential risks in trading or 
                transacting using our Services. You should note that the risks described below are not intended to be exhaustive and are not intended to be presented in any 
                assumed order of priority. We ask you to take time to carefully read them through and to consider whether such trading and transacting on KuCoin is appropriate 
                in your particular circumstances.</p>
                <p className="font-normal xsm:text-sm lg:text-sm xl:text-base 2xl:text-lg text4 xsm:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5">You should seek independent professional advice if you do not fully understand the risks of using our Services.</p>
                <p className="font-normal xsm:text-sm lg:text-sm xl:text-base 2xl:text-lg text4 xsm:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5">Capitalised terms used herein have the meaning set out in Terms of Use, unless the context requires otherwise.</p>
                <p className="font-normal xsm:text-sm lg:text-sm xl:text-base 2xl:text-lg text4 xsm:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5">1. Trading risks. You acknowledge and agree that you shall access and use the Services at your own risk. The risk of loss in trading Digital Token pairs can be 
                substantial. You should, therefore, carefully consider whether such trading is suitable for you in light of your circumstances, objectives and financial resources. You 
                should be aware of the following points:</p>
                <p className="font-normal xsm:text-sm lg:text-sm xl:text-base 2xl:text-lg text4 xsm:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5">You may sustain a total loss of the Funds transferred to, and of all Funds in, your KuCoin Account. The traded price of Digital Tokens can fluctuate greatly within a 
                short period of time. The traded price of a Digital Token also may decrease due to various factors including discovery of wrongful conduct, market manipulation, 
                changes to properties of the Digital Token, Attacks (as defined in paragraph 4 below), suspension or cessation of support for a Digital Token by KuCoin or 
                External Account providers or other service providers, and other factors outside the control of KuCoin.
                Under certain market conditions, you may find it difficult or impossible to buy or sell a Digital Token. This can occur, for example, if there is insufficient liquidity in 
                the market. We are not and shall not be responsible or liable for the transferability, liquidity and/or availability of any Digital Tokens.
                KuCoin may suspend trading in or cease to offer Services in respect of any of the Digital Tokens at any time at KuCoin’s sole discretion. You may be unable to 
                withdraw Digital Tokens prior to KuCoin’s ceasing to offer Services in respect of any such Digital Tokens, resulting in the loss of any such Digital Tokens remaining 
                in your KuCoin Account.</p>
                <p className="font-normal xsm:text-sm lg:text-sm xl:text-base 2xl:text-lg text4 xsm:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5">This brief statement cannot, of course, disclose all the risks and other aspects associated with these trades. You are solely responsible for ensuring that you 
                understand and accept all risks connected with transacting and trading in Digital Tokens, and are able and willing to accept and bear for your own account all 
                possible losses that may arise from such transactions and trading in Digital Tokens.</p>
                <p className="font-normal xsm:text-sm lg:text-sm xl:text-base 2xl:text-lg text4 xsm:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5">2. Internet transmission risks and error correction. You acknowledge that there are risks associated with utilizing an Internet-based trading system including, but 
                not limited to, the failure of hardware, software, and Internet connections. You acknowledge that KuCoin shall not be responsible for any communication failures, 
                disruptions, errors, distortions or delays you may experience when trading via the Services, howsoever caused.</p>
                <p className="font-normal xsm:text-sm lg:text-sm xl:text-base 2xl:text-lg text4 xsm:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5">If an order, trade or transfer is based on a Manifest Error (as defined in Section 7.7 of the Terms of Use) (regardless of whether you or we or any other user gains 
                from the error) and/or executed and/or settled on the basis of Manifest Error, KuCoin may (but is not obliged to), at its option and sole discretion, act reasonably 
                and in good faith to: (a) correct, reverse or cancel any order, trade or transfer; (b) void a trade as if it had never taken place; and/or (b) amend a trade so that its 
                terms are the same as the trade which would have been executed if there had been no Manifest Error. There is a risk that you may be prejudiced by any action 
                or omission of KuCoin in this regard, and you accept that you have no recourse whatsoever against KuCoin.</p>
                <p className="font-normal xsm:text-sm lg:text-sm xl:text-base 2xl:text-lg text4 xsm:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5">3. Risks associated with attacks on the Services or the KuCoin Accounts. The Services and/or the KuCoin Accounts and the Funds held therein may be subject to 
                attacks on their security, integrity or operation, and you acknowledge and agree that KuCoin shall not be responsible or liable for any losses resulting therefrom.</p>
                <p className="font-normal xsm:text-sm lg:text-sm xl:text-base 2xl:text-lg text4 xsm:mb-3 lg:mb-5 xl:mb-5 2xl:mb-5">4. Risks arising from properties of Digital Tokens.</p>
            </div>
        </div>
    );
};

export default AntiMoney;