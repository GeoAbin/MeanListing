import { Component, OnInit } from '@angular/core';
import { Listing } from '../model/listing';
import { ListingService } from '../service/listing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.css']
})
export class AllListingComponent implements OnInit {

  listings$:Observable<Listing[]>

  constructor(private listingService:ListingService) { }

  ngOnInit(): void {
    this.listings$ = this.listingService.getListings();
  }

}
