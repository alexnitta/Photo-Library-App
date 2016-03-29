var imageData = [
  {
    title: 'Brown Trout',
    url: 'http://fishandboat.com/pafish/brontrtm.jpg',
    rating: 1
  },
  {
    title: 'Rainbow Trout',
    url: 'http://www.brokenbowlakeguide.com/rainbow-trout-1.jpg',
    rating: 2
  },
  {
    title: 'Brook Trout',
    url: 'http://dnr2.maryland.gov/fisheries/fishfacts/brook_trout.gif',
    rating: 3
  },
  {
    title: 'Golden Trout',
    url: 'http://www.hookhack.com/img/golden-trout.jpg',
    rating: 5
  }
];

var app = new AppView({
  collection: new ImageCollection(imageData, {model: ImageEntry})
});
