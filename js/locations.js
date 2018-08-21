'use strict';
var locations = [
  {
    name: 'Univeristy of Washington',
    imgpath: 'img/uw.jpg',
    address: '022 Odegaard, Seattle, WA',
    geo: '47.655, -122.308',
    website: 'https://www.washington.edu/',
    shortDesc:
      'The university\'s 703-acre main Seattle campus is situated in the University District above the Montlake Cut, within the urban Puget Sound region of the Pacific Northwest. The university has two additional campuses in Tacoma and Bothell. Overall, UW encompasses over 500 buildings and over 20 million gross square footage of space, including one of the largest library systems in the world with over 26 university libraries, as well as the UW Tower, lecture halls, art centers, museums, laboratories, stadiums, and conference centers. The university offers bachelor\'s, master\'s and doctoral degrees through 140 departments in various colleges and schools, sees about 46,000 in total student enrollment every year, and functions on a quarter system.'
  },
  {
    name: 'Space Needle',
    imgpath: 'img/space-needle.jpg',
    address: '400 Broad Street Seattle, Washington',
    geo: '47.6204, -122.3491',
    website: 'http://www.spaceneedle.com/',
    shortDesc:
      'The Space Needle is an observation tower in Seattle, Washington, a landmark of the Pacific Northwest, and an icon of Seattle. It was built in the Seattle Center for the 1962 World\'s Fair, which drew over 2.3 million visitors, when nearly 20,000 people a day used its elevators. In August 2018, it unveiled its latest addition: the world\'s first and only revolving glass floor, known as "The Loupe." Standing 500 feet -- or 50 stories -- above street level, the observation deck\'s new see-through floor offers 360-degree views of the large city. The floor is powered by 12 motors and is constructed of 10 layers of tightly bonded glass to ensure safety.'
  },
  {
    name: 'Museum of Pop Culture',
    imgpath: 'img/pop-co-museum.jpg',
    address: '325 5th Avenue N Seattle, Washington',
    geo: '47.6215, -122.3486',
    website: 'http://www.mopop.org/',
    shortDesc:
      'The Museum of Pop Culture, or MoPOP (earlier called EMP Museum) is a nonprofit museum dedicated to contemporary popular culture. It was founded by Microsoft co-founder Paul Allen in 2000 as the Experience Music Project. Since that time MoPOP has organized dozens of exhibits, 17 of which have toured across the US and internationally. The structure itself was designed by Frank Gehry and resembles many of his firm\'s other works in its sheet-metal construction.'
  },
  {
    name: 'Fremont Troll',
    imgpath: 'img/troll.jpg',
    address: 'N. 36th Street Seattle Washington',
    geo: '47.650955, -122.34728',
    website: '',
    shortDesc:
      'The Fremont Troll (also known as The Troll, or the Troll Under the Bridge) is a public sculpture in the Fremont neighborhood of Seattle, Washington in the United States. The Troll is a mixed media colossal statue, located on N. 36th Street at Troll Avenue N., under the north end of the George Washington Memorial Bridge (also known as the Aurora Bridge). It is clutching an actual Volkswagen Beetle, as if it had just swiped it from the roadway above. The vehicle has a California license plate. The Troll is 5.5 m (18 ft) high, weighs 6,000 kg (13,000 lb), and is made of steel rebar, wire, and concrete.[2] He is interactive—visitors are encouraged to clamber on him or try to poke out his one good eye (a hubcap). The idea of a troll living under a bridge is derived from the Scandinavian (Norwegian) folklore.'
  },
  {
    name: 'Chihuly Garden and Glass',
    imgpath: 'img/chihuly-glass.jpg',
    address: '305 Harrison Street Seattle, Washington, U.S.',
    geo: '47.62062,-122.35007',
    website: 'https://www.chihulygardenandglass.com/',
    shortDesc:
      'he project includes three primary components: the Garden, the Glasshouse, and the Interior Exhibits. The installation inside of the Glasshouse is an expansive 100-foot long sculpture and is one of Chihuly’s largest suspended sculptures.'
  },
  {
    name: 'Pike Place Market',
    imgpath: 'img/pike-place-market.jpg',
    address: '86 Pike Place, Seattle, Washington, United States of America',
    geo: '47.609425, -122.3417',
    website: 'http://pikeplacefish.com',
    shortDesc:
      'The Pike Place Fish Market, founded in 1930, is an open air fish market located in Seattle, Washington\'s Pike Place Market, at the corner of Pike Street and Pike Place. It is known for their tradition of fishmongers throwing fish that customers have purchased, before they are wrapped.[1] After nearing bankruptcy in 1986, the fish market owner and employees decided to become "world famous", changing their way of doing business by introducing their flying fish, games, and customer performances. Four years later, they were featured repeatedly in the national media and television shows.[2] The store is now a popular tourist destination in Seattle, attracting up to 10,000 daily visitors, and is often billed as world-famous.'
  },
  {
    name: 'Seattle Great Wheel',
    imgpath: 'img/ferris-wheel.jpg',
    address: '1301 Alaskan Way, Seattle, USA',
    websitesite: 'http://seattlegreatwheel.com',
    geo: '47.6061,-122.3425',
    shortDesc:
      'The Seattle Great Wheel is a giant Ferris wheel at Pier 57 on Elliott Bay in Seattle, Washington. With an overall height of 175 feet (53.3 m), it was the tallest Ferris wheel on the West Coast of the United States when it opened on June 29, 2012.'
  },
  {
    name: 'Museum of Flight',
    imgpath: 'img/flight.jpg',
    address: '9404 E. Marginal Way Seattle, Washington, U.S.',
    geo: '47.519,-122.3',
    website: 'https://museumofflight.org',
    shortDesc:
      'The Museum of Flight is a private non-profit air and space museum in the northwest United States. It is located at the southern end of King County International Airport (Boeing Field), in the city of Tukwila, just south of Seattle. It was established in 1965 and is fully accredited by the American Alliance of Museums. As the largest private air and space museum in the world, it also hosts the largest K-12 educational programs in the world. The museum attracts over 500,000 visitors every year. The museum serves more than 140,000 students yearly through both its onsite programs: a Challenger Learning Center, an Aviation Learning Center, and a summer camp (ACE), as well as outreach programs that travel throughout Washington and Oregon.'
  },
  {
    name: 'Woodland Zoo',
    imgpath: 'img/zoo.jpg',
    address: 'Woodland Park, Seattle, Washington',
    geo: '47.66834, -122.34984',
    website: 'https://www.zoo.org/',
    shortDesc:
      'The zoo began as a small menagerie on the estate of Guy C. Phinney, a Canadian-born lumber mill owner and real estate developer. As of the summer of 2010, the zoo includes 92 acres (37 ha) of exhibits and public spaces. It is open to the public daily, and received 1.05 million visitors in 2006.'
  },
  {
    name: 'Lake Union',
    imgpath: 'img/lake-union.jpg',
    address: 'Lake Union, Seattle, Washington',
    geo: '47.6392, -122.3337',
    website: '',
    shortDesc:
      'Lake Union\'s proximity to and scenic views of Seattle make it a popular recreational spot. Seaplanes operated by Kenmore Air and Seattle Seaplanes land and take off from the lake throughout the day. Pleasure boats from Lake Washington pass through on their way to Puget Sound. The Center for Wooden Boats holds a yearly wooden boat festival. The world-famous Duck Dodge sailboat races are run on Lake Union each Tuesday during the summer. Rowers in sweep and sculling boats use the lake year-round. Paddle boarding and kayaking are also popular on this lake.'
  }
];
