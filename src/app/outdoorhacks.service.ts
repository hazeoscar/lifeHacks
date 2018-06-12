import { Injectable } from '@angular/core';
import { Outdoor } from './outdoor';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutdoorhacksService {
  // Oudoor hacks array
  outdoorhacks: Outdoor[] = [
      { id: 1,
          title: 'Paint the stones in your garden',
          description: 'While stones may seem like mundane garden objects, they often have smooth surfaces that are receptive to paint and color. This offers you a unique opportunity to infuse your garden space with brights shades and hues. You apply block colors or mix it up and paint intricate patterns. So long as each stone is painted as part of an overall vision and theme, you can create a colorful aesthetic that will be the envy of your neighbors.',
          datePosted: new Date('06/13/2018'),
          category: 'lifehacks'},
      { id: 2,
          title: 'Coat Planters and Plant Pots with Glow in the Dark Paint',
          description: 'Whether you are an avid gardener or not, most households have access to large planters or smaller                   scale plant pots. Furniture brand IKEA stores even sell basic plant pots for as little as $1. You can transform             these into affordable and sustainable night lights using glow-in-the-dark paint. The whole project can cost as                      little as $5 to add a definite wow factor to your garden.',
          datePosted: new Date('06/12/2018'),
          category: 'lifehacks'},
      { id: 3,
          title: 'Make a Multi-Person Swing',
          description: 'Here’s another breathtakingly simple idea. It is possible to take a pallet and some discarded rope to               create a functional, multi-purpose swing. Pallets can be sourced for free from local warehouses or supermarkets.              Brand new lengths of rope can be purchased for a nominal fee of between $5 and $15, depending on the size. You                can then secure the rope to each corner of the pallet. Remember to ensure that it is hung safely from a sturdy                  tree branch.',
          datePosted: new Date('06/11/2018'),
          category: 'lifehacks'}
  ];
  //Cooking hacks array
  cookinghacks: Outdoor[] = [
      { id: 1,
          title: ' Keep potatoes white',
          description: 'Cover shredded or diced potatoes with cold water before cooking to prevent the spuds from turning that gross grayish/brown caused by the release of a starch that makes them oxidize.\n' +
          '\n', datePosted: new Date('06/13/2018'), category: 'cokking'},
      { id: 2, title: 'Save cut fruit from browning',
          description: 'You’ve probably heard that a little squeeze of lemon juice can keep apple slices from looking unappetizing. A mixture of one part honey to two parts water works much the same to keep fruit from browning. The citric acid and vitamin C in lemon juice as well as a peptide in honey slows down the oxidation process that causes discoloring.', datePosted: new Date('06/12/2018'), category: 'cooking'},
      {id:3, title: 'De-skin potatoes without a peeler',description: 'Time to ditch the peeler again! Peel a potato in a snap by boiling it and then giving it an ice bath. The skin will separate from the potatoey center and you can pick it right off.' datePosted:'06/10/2018', category: 'cooking'}
  ];
  //method to display outdoor hacks
    getHacks(): Observable<Outdoor[]> {
        return of(this.outdoorhacks);
    }
    //method to display cooking hacks
    getCookingHacks(): Observable<Outdoor[]> {
      return of(this.cookinghacks);
    }

    constructor() { }
}
