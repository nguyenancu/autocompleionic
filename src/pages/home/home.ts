import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	items: any;
	filtereditems:any;
	searchTerm: string = '';
	constructor(public navCtrl: NavController) {

		this.items = [
		{country: 'Viet Nam'},
		{country: 'Thai Lan'},
		{country: 'Lao'},
		{country: 'Cambodia'},
		{country: 'Singapore'},
		{country: 'Korea'}
		];
		this.filtereditems=[];
  }
  
	filterItems(){
		console.log(this.searchTerm);
		this.filtereditems=this.items.filter((item) => {
			return item.country.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
		});    
	}

}