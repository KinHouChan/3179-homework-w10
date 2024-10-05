var vg_1 = "map_dv1.json";
vegaEmbed("#map_death", vg_1).then(function(result) {
// Access the Vega view instance
// (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "bumpchart.json";
vegaEmbed("#bumpchart", vg_2).then(function(result) {
// Access the Vega view instance
// (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);