var imageData = [
  {
    title: 'Brown Trout',
    url: 'http://fishandboat.com/pafish/brontrtm.jpg',
    rating: 0
  },
  {
    title: 'Rainbow Trout',
    url: 'http://www.brokenbowlakeguide.com/rainbow-trout-1.jpg',
    rating: 0
  },
  {
    title: 'Brook Trout',
    url: 'http://dnr2.maryland.gov/fisheries/fishfacts/brook_trout.gif',
    rating: 0
  },
  {
    title: 'Golden Trout',
    url: 'http://www.hookhack.com/img/golden-trout.jpg',
    rating: 0
  }
];

ReactDOM.render(
  <Library imageData={imageData} />,
  document.getElementById('app')
);
