import { Injectable } from '@angular/core';
import { Beauty } from './beauty';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeautyHackService {

  beautyHacks: Beauty[]=[
    { id:1, 
      title:'Apple Cider Vinegar', 
      description: `Apple cider vinegar is considered a health miracle by many, 
      allegedly able to alleviate everything from arthritis to yeast infections. 
      The health claims are debatable; however, it has tons of proven beauty applications as well. 
      You may want to try some of these uses for the substance.
      Rinse your hair with it to remove shampoo buildup. Apple cider vinegar is a much less expensive alternative to pricey “clarifying” shampoos on the market, and it works just as well!
      You can also use as a detangler after your shampoo (and, ladies of color, take notice: it is especially good for delicate African-American hair).
      It’s truly a hair powerhouse. As a proven fungicide and germ killer, it prevents dandruff, too!
      Moving on to your face: Use as a skin toner to treat and prevent acne.
      You can also apply to dark spots on face to correct hyperpigmentation.
      It gets rid of warts and skin tags! Dab on, put band-aid over the area, and then repeat for a week. The growth will eventually fall off.`, 
      datecreated: new Date('12/06/2018')
    },
    { id:2, 
      title:'Eggs', 
      description: `While you’re making breakfast, reserve a few eggs from the carton to use for your morning beauty routine. They’re really good for your outside as well as inside!
       Here’s some egg-cellent ideas to consider:
       Been working too late? Up all night? Try eggs to combat the resultant tired-looking eyes. Just spread egg whites under your eyes, then let dry and rinse off, to remove puffy bags.
       If you have some egg whites left over, and have oily skin, an egg-white mask is a great remedy for the slicks. There are various recipes for these available into which you can incorporate other natural/healthful ingredients as well.
       Go ahead and grab a full egg (or two, if your hair is long) to make a hair mask for damaged tresses, which is great for easy hairstyles. Eggs are full of protein, which will help repair and strengthen your hair. Beat the eggs, comb through hair, leave on for 20 minutes and rinse.
       You can even make your own natural hair gel using eggs! It’s much cheaper than buying a pricey product to style and control your hairdo.`, 
      datecreated: new Date('12/04/2018')
    }
  ]



  constructor() { }
}
