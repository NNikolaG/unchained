import Web3 from "web3";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {


  private web3: any;
  public accounts!: any;
  private web3Provider: any = null;

  private accountStatusSource = new Subject<any>();
accountStatus$ = this.accountStatusSource.asObservable();

constructor() { }

//Connect Wallet
connectWallet() {
  let anyWin = window as any;
  let ethereum = anyWin['ethereum'];
  if (typeof ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  }
  if (ethereum) {
    this.web3Provider = ethereum;
    try {
      // Request account access
      ethereum.request({ method: 'eth_requestAccounts' }).then((address: any) => {
        console.log("Account connected: ", address[0]); // Account address that you had imported
      });
    } catch (error) {
      // User denied account access...
      console.error("User denied account access");
    }
  }
}

  async getAccount() {
  this.web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
  this.accounts = await this.web3.eth.getAccounts();
  this.accountStatusSource.next(this.accounts);
}

  async loadSmartContract() {

}
}
