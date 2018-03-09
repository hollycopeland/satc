document.addEventListener( 'DOMContentLoaded', function() {
  SATC.init();
} );

var SATC = {
  
  SATCdata: [],
  yourCloset: [],
  sheetUrl: 'https://docs.google.com/spreadsheets/d/18GUQnDV9AX32KPacE9q8xEZtrOqJ6qjTV1C8eQfAdoE/edit?usp=sharing',
  
  init: function() {
    this.seasonEl = document.getElementById('season');
    this.episodeEl = document.getElementById('episode');
    this.titleEl = document.getElementById('title');

    Tabletop.init( { key: this.sheetUrl, callback: this.showInfo.bind( this ) } );
  },

  showInfo: function( data, tabletop ) {
    this.SATCdata = tabletop.sheets('Base List').all();
    this.yourCloset = tabletop.sheets('Your Closet').all();
    let epSuggestion = this.getRandomEp( this.SATCdata );

    this.seasonEl.innerText = epSuggestion.season;
    this.episodeEl.innerText = epSuggestion.episode;
    this.titleEl.innerText = epSuggestion.title;
  },

  getRandomEp( data ) {
    var maxEp = data.length;
    var epIndex = Math.floor( Math.random() * maxEp );

    return data[ epIndex ];
  },

}

