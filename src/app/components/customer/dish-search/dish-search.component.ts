import {
  Component,
  OnInit,
  ViewEncapsulation,
  Testability,
} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Partner } from "src/app/models/partner";
import { Router } from "@angular/router";
import { DishTypeService } from "../../../services/dish-type.service";
import { DishType } from "../../../models/dish-type";

@Component({
  templateUrl: "./dish-search.component.html",
  styleUrls: ["./dish-search.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DishSearchComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public zoom: number;
  private debounceTimer = null;
  public partners: Partner[] = [];
  public filteredPartners: Partner[] = [];
  public search: string;

  public dishTypes: DishType[] = [];
  public dishTypeId = "";
  private coordinates: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private dishTypeService: DishTypeService
  ) {
    this.dishTypeService
      .getAll()
      .subscribe((dishTypes: DishType[]) => (this.dishTypes = dishTypes));
  }

  ngOnInit() {
    this.setCurrentLocation();
  }

  boundsChange(data: any) {
    if (this.debounceTimer !== null) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }

    this.debounceTimer = setTimeout(() => {
      this.coordinates = { ...this.coordinates, ...data };
      this.getPartnerInfo({
        ne_lat: this.coordinates.Ta.i,
        ne_lng: this.coordinates.Ya.i,
        sw_lat: this.coordinates.Ta.g,
        sw_lng: this.coordinates.Ya.g,
        dishType: this.coordinates.dishType || "",
      });
    }, 400);
  }

  dishTypeHandler() {
    this.coordinates.dishType = this.dishTypeId;
    this.boundsChange(this.coordinates);
  }

  getPartnerInfo(data: any) {
    this.httpClient
      .get<Partner[]>(
        `http://localhost:3000/dish-availability/findByLocation`,
        { params: data }
      )
      .subscribe(
        (response) => {
          this.partners = [];

          response.forEach((x) => {
            if (x.dishes.length === 0) {
              return;
            }

            let lng: string[];
            let lat: string[];
            let lt: string = "";
            let lt1: string = "";

            lng = x.longitude.toString().split("");
            lat = x.latitude.toString().split("");

            lng.forEach((x) => (lt += x));
            lat.forEach((x) => (lt1 += x));

            this.partners.push({
              _id: x._id,
              companyName: x.companyName,
              rate: x.rate,
              address: x.address,
              city: x.city,
              postalCode: x.postalCode,
              latitude: Number(lt),
              longitude: Number(lt1),
              dishes: x.dishes,
              phoneNumber: x.phoneNumber,
              email: x.email,
            });
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    this.latitude = 43.6532;
    this.longitude = -79.3832;
    this.zoom = 11;
  }

  partnerOrder(partner: Partner) {
    this.router.navigate([`/order/${partner._id}`]);
  }
}
