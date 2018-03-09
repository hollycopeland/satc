document.addEventListener( 'DOMContentLoaded', function() {
  SATC.init();
} );

var SATC = {
  
  SATCdata: [],
  yourCloset: [],
  sheetUrl: 'https://docs.google.com/spreadsheets/d/18GUQnDV9AX32KPacE9q8xEZtrOqJ6qjTV1C8eQfAdoE/edit?usp=sharing',
  elements: [
              'season',
              'episode',
              'title',
              'year',
              'carrieUpdate',
              'mirandaUpdate',
              'charlotteUpdate',
              'samanthaUpdate'
            ],

  init: function() {
    let scope = this;

    this.elements.forEach( function( el ) { 
      scope[el] = document.getElementById(el);
    } );

    Tabletop.init( { key: this.sheetUrl, callback: this.showInfo.bind( this ) } );
  },

  showInfo: function( data, tabletop ) {
    let scope = this;
    this.SATCdata = tabletop.sheets('Base List').all();
    this.yourCloset = tabletop.sheets('Your Closet').all();
    let epSuggestion = this.getRandomEp( this.SATCdata );

    console.log(epSuggestion);

    this.elements.forEach( function( el ) { 
      scope[el].innerText = epSuggestion[el];
    } );

  },

  getRandomEp( data ) {
    var maxEp = data.length;
    var epIndex = Math.floor( Math.random() * maxEp );

    return data[ epIndex ];
  },

}

