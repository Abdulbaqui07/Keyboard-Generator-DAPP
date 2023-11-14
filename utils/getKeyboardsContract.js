import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0xBbAd5EBF845E9DFa857fAc3077ABEBf65a4d4145';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
    if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        return new ethers.Contract(contractAddress, contractABI, signer);
    } else {
        return undefined;
    }
}