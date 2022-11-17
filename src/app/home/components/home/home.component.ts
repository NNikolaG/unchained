import { BlockchainService } from './../../../services/blockchain.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public accountAddress!: any;

  constructor(private blockchain: BlockchainService) { }

  //Connect Wallet to app
  enableMetamask() {
    this.blockchain.connectWallet();
  }

  profileIdenticon() {
  }

  ngOnInit(): void {
    //Get Account
    this.blockchain.getAccount();
    this.accountAddress = this.blockchain.accountStatus$
  }
}
