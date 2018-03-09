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
    this.carrieEl = document.getElementById('carrieUpdate');
    this.mirandaEl = document.getElementById('mirandaUpdate');
    this.charlotteEl = document.getElementById('charlotteUpdate');
    this.samanthaEl = document.getElementById('samanthaUpdate');


    Tabletop.init( { key: this.sheetUrl, callback: this.showInfo.bind( this ) } );
  },

  showInfo: function( data, tabletop ) {
    this.SATCdata = tabletop.sheets('Base List').all();
    this.yourCloset = tabletop.sheets('Your Closet').all();
    let epSuggestion = this.getRandomEp( this.SATCdata );

    console.log(epSuggestion);
    this.seasonEl.innerText = epSuggestion.season;
    this.episodeEl.innerText = epSuggestion.episode;
    this.titleEl.innerText = epSuggestion.title;
    this.carrieEl.innerText = epSuggestion.carrieUpdate;
    this.mirandaEl.innerText = epSuggestion.mirandaUpdate;
    this.charlotteEl.innerText = epSuggestion.charlotteUpdate;
    this.samanthaEl.innerText = epSuggestion.samanthaUpdate;
  },

  getRandomEp( data ) {
    var maxEp = data.length;
    var epIndex = Math.floor( Math.random() * maxEp );

    return data[ epIndex ];
  },

}

