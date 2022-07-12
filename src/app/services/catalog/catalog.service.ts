import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  readonly products: Product[] = [
    {
      id: "string",
      imageUrl: "https://th.bing.com/th/id/R.7375b4db5dda042b18d550e5ef350f00?rik=pYTIkIOXq6QAoA&pid=ImgRaw&r=0",
      name: "headphones",
      price: 35.0
    },
    {
      id: "string",
      imageUrl: "https://cdn-bnpod.nitrocdn.com/WGEALtaJKgzVLITXvJASRSDRtFJaREtx/assets/static/source/wp-content/uploads/2020/03/59ab861ffd5390bcfa42cd18c56393bf.Are-60-Keyboards-Good-for-Gaming-geargaminghub.com_.jpeg",
      name: "keyboard gamer",
      price: 45.0
    },
    {
      id: "string",
      imageUrl: "https://th.bing.com/th/id/OIP.rBM8IKxnQBnbN375amnGfgHaFj?pid=ImgDet&rs=1",
      name: "mouse gamer",
      price: 20.0
    },
    {
      id: "string",
      imageUrl: "https://th.bing.com/th/id/OIP.tDwbgXZzrCPZYn320yq4twHaDt?pid=ImgDet&rs=1",
      name: "screen",
      price: 1200.0
    },
    {
      id: "string",
      imageUrl: "https://th.bing.com/th/id/R.774ee6b260f0f7c60f4f61c61cd53163?rik=Ci0VCYF33%2bqhgw&riu=http%3a%2f%2fcdn3.bigcommerce.com%2fs-7x8bo4i%2fproducts%2f622%2fimages%2f4422%2fcscitf3blackred_1__13000.1500474567.1280.1280.jpg%3fc%3d2&ehk=QIw1XE4gpwXVsanjLS996jsRB3qA9dEpkEAhH7Dci6Q%3d&risl=&pid=ImgRaw&r=0",
      name: "tower",
      price: 1200.0
    }
  ];

  constructor() { }
  
}
