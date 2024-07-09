import React from 'react';
import CardItem from './CardItem';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Rentals() {
  return (
    <div className='my-4'>
       <div className="cards mt-4 flex gap-y-4 justify-center items-center flex-col lg:flex-row md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-4 lg:place-items-center">
          <CardItem image="../assets/Mask group (1).png" price="2.25 Cr" cal="LIFETIME" title="Luxury villa in Rego Park" authorImg="../assets/Ellipse 38.png" authorName="Anne Liza" authorDesc="Property Seller" bedrooms="3" bathrooms="2" size="2500 sq.ft"/>

          <CardItem image="../assets/Mask group (4).png" price="2.00 Cr" cal="LIFETIME" title="Keya Around The Life" authorImg="../assets/p1.jpg" authorName="Annie" authorDesc="Property Seller" bedrooms="3" bathrooms="2" size="2300 sq.ft"/>

          <CardItem  image="../assets/image1.jpg" price="15 K" cal="MONTH" title="Mana Dalla" authorImg="../assets/p2.jpg" authorName="Theresa" authorDesc="Landlord" bedrooms="2" bathrooms="1" size="2000 sq.ft"/>

          <CardItem image="../assets/image2.jpg" price="89.00 Lac" cal="YEAR" title="Platinum East Woods" authorImg="../assets/p1.jpg" authorName="Annie" authorDesc="Property Seller" bedrooms="3" bathrooms="2" size="2100 sq.ft"/>

          <CardItem image="../assets/image3.jpg" price="1.61 - 1.68 Cr" cal="2 YEAR" title="Windsor Troika" authorImg="../assets/p2.jpg" authorName="Theresa" authorDesc="Landlord" bedrooms="3" bathrooms="3" size="1814 sq.ft"/>

          <CardItem image="../assets/image4.jpg" price="68.94 Lac" cal="YEAR" title="Trifecta Vanto" authorImg="../assets/p4.png" authorName="Steven" authorDesc="Landlord" bedrooms="1" bathrooms="2" size="1754 sq.ft"/>

          <CardItem image="../assets/image5.jpg" price="1.48 Cr" cal="2 YEAR" title="Concorde Mayfair" authorImg="../assets/p2.jpg" authorName="Theresa" authorDesc="Landlord" bedrooms="2" bathrooms="2" size="1956 sq.ft"/>

          <CardItem image="../assets/image6.jpg" price="Price On Request" cal="YEAR" title="Candeur Novo Gardenia" authorImg="../assets/p4.png" authorName="Steven" authorDesc="Landlord" bedrooms="2" bathrooms="2" size="1576 sq.ft"/>

          <CardItem image="../assets/image7.jpg" price="Price On Request" cal="YEAR" title="Army Welfare Cooperative Society" authorImg="../assets/p3.jpg" authorName="John" authorDesc="Property Seller" bedrooms="2" bathrooms="2" size="1276 sq.ft"/>

          <CardItem image="../assets/image8.jpg" price="Price On Request" cal="YEAR" title="Godrej Greens" authorImg="../assets/p2.jpg" authorName="Theresa" authorDesc="Landlord" bedrooms="2" bathrooms="1" size="1136 sq.ft"/>

          <CardItem image="../assets/image9.jpg" price="Price On Request" cal="YEAR" title="RIVERDALE UNITY" authorImg="../assets/p1.jpg" authorName="Annie" authorDesc="Property Seller" bedrooms="2" bathrooms="1" size="1216 sq.ft"/>
        </div>
    </div>
  )
}
