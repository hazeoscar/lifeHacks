import { Injectable } from '@angular/core';
import { Beauty } from './beauty';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeautyHackService {

  // beauty hacks
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
      datecreated: new Date('09,06,2018')
    },
    { id:2, 
      title:'Eggs', 
      description: `While you’re making breakfast, reserve a few eggs from the carton to use for your morning beauty routine. They’re really good for your outside as well as inside!
       Here’s some egg-cellent ideas to consider:
       Been working too late? Up all night? Try eggs to combat the resultant tired-looking eyes. Just spread egg whites under your eyes, then let dry and rinse off, to remove puffy bags.
       If you have some egg whites left over, and have oily skin, an egg-white mask is a great remedy for the slicks. There are various recipes for these available into which you can incorporate other natural/healthful ingredients as well.
       Go ahead and grab a full egg (or two, if your hair is long) to make a hair mask for damaged tresses, which is great for easy hairstyles. Eggs are full of protein, which will help repair and strengthen your hair. Beat the eggs, comb through hair, leave on for 20 minutes and rinse.
       You can even make your own natural hair gel using eggs! It’s much cheaper than buying a pricey product to style and control your hairdo.`, 
      datecreated: new Date('10,06,2018')
    },
    { id:3, 
      title:'Coconut Oil', 
      description: `Coconut oil isn’t just useful as an ingredient on the Food Network…or as fragrance for a bottle of suntan lotion, either. It works just as hard outside the kitchen/beach (and you’ll retain that lovely tropical scent as well). You can purchase coconut oil everywhere from specialty stores to Walmart. If you are a fan of coconut, have a go at these ideas:
      Get ready for glowing legs! Nothing gives you silkier legs than using coconut oil to shave with.
      Deodorize your body with a rubdown of the stuff—it has antibacterial properties. It probably won’t be replacing your regular deodorant entirely, but it will keep you fresh in an emergency situation!
      Rub it into your nails and cuticles – it will strengthen them and help them grow.
      Coconut oil is a wonderful natural aide for skin issues. Try using it to soothe eczema breakouts.
      It also makes a great lipgloss–straight up from the jar. Just swipe your finger in, and rub directly on your lips.`, 
      datecreated: new Date('11,06,2018')
    }
  ];

  // method to call the hack
  getBeauty(): Observable<Beauty[]>{
    return of(this.beautyHacks);
  }

  //   //   //   //   //   //   //   //   //   //   //   //   // 
// indoor Hacks
indoorHacks: Beauty[]=[
  { id:1, 
    title:'Laptop Stand', 
    description: `Ergonomically, it's better for you to have your laptop raised and at an angle, and if you have it on your lap, you definitely want to keep that heat away 
    from your legs. But, when you don't have one of these awesome laptop stands nearby, you can make one out of just about anything, including kitchen cooling racks, 
    3-ring binders, and even cardboard. None of them are going to win any design contests, but they'll work. Of course, with a bit of extra elbow grease, you could make 
    something a bit nicer looking as well. It just takes a little more effort.`, 
    datecreated: new Date('08,05,2018')
  },
  { id:2, 
    title:' Insulate Your Home with Bubble Wrap', 
    description: `Insulating your home is one of the best ways to save money right now, but if you don't have the cash (or the time) to drop on some real storm windows, 
    a little bubble wrap will do the trick very quickly. It certainly isn't pretty, but it works remarkably well, plus you have hours of bubble-popping fun ahead of you 
    for the rest of the winter.`, 
    datecreated: new Date('10,06,2018')
  },
  { id:3, 
    title:'Organize Your Cables with Toilet Paper Tubes', 
    description: `It's amazing how quickly one can amass extra cables in this day and age, but thankfully, you can keep them organized and tangle-free with leftover toilet 
    paper tubes. Despite how ridiculous it sounds (and looks), this little organizer is actually pretty clever. After all, it's not like you're going to have it out in the 
    open for everyone to see—you just need somewhere to store those old component and mini-USB cables you don't use anymore.`, 
    datecreated: new Date('11,06,2018')
  }
];

  // method to call the hack
  getIndoor(): Observable<Beauty[]>{
    return of(this.indoorHacks);
  }


  constructor() { }
}
