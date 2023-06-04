import React, { useState } from 'react';
import { Web3Button } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import styles from "../styles/Home.module.css";
import { NETWORK } from "../const/contractAddresses";
import { ERC721_AIRDROP_CONTRACT } from "../const/contractAddresses";

const sdk = new ThirdwebSDK(NETWORK);

const Airdrop721 = () => {
    const [tokenAddress, setTokenAddress] = useState("");
    const [tokenOwner, setTokenOwner] = useState("");
    const [recipient, setRecipient] = useState("");
    const [tokenId, setTokenId] = useState("");

    const handleAirdrop = (contract) => {
        let recipients, amounts, tokenIds;
        try {
            recipients = JSON.parse(recipient);
            tokenIds = JSON.parse(tokenId);
            if (!Array.isArray(recipients) || !Array.isArray(amounts) || !Array.isArray(tokenIds)) throw new Error();
        } catch {
            alert("Invalid input. Please input in JSON format like ['0x...']");
            return;
        }
        contract.call("airdrop", [
            tokenAddress,
            tokenOwner,
            recipients,
            tokenIds
        ]);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2 className={styles.title}>ERC721 Airdrop</h2>
                        <h3>
                            <label htmlFor="tokenAddress">Token Address:</label>
                        </h3>
                        <input type="text" id="tokenAddress" value={tokenAddress} onChange={(e) => setTokenAddress(e.target.value)} placeholder="Enter token address" className={styles.inputStyle} />
                        <h3>
                            <label htmlFor="tokenOwner">Token Owner:</label>
                        </h3>
                        <input type="text" id="tokenOwner" value={tokenOwner} onChange={(e) => setTokenOwner(e.target.value)} placeholder="Enter token owner" className={styles.inputStyle} />
                        <h3>
                            <label htmlFor="recipient">Recipients:</label>
                        </h3>
                        <input type="text" id="recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} placeholder='Enter recipients in JSON format like ["0x..."]' className={styles.inputStyle} />
                        <h3>
                            <label htmlFor="tokenId">Token IDs:</label>
                        </h3>
                        <input type="text" id="tokenId" value={tokenId} onChange={(e) => setTokenId(e.target.value)} placeholder='Enter token IDs in JSON format like ["1", "2", "3"]' className={styles.inputStyle} />
                        <br />
                        <div className={styles.button}>
                            <Web3Button
                                contractAddress={ERC721_AIRDROP_CONTRACT}
                                action={handleAirdrop}
                            >
                                Airdrop NFTs
                            </Web3Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Airdrop721;
