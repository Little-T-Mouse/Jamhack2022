
let api = 'https://disease.sh/v3/covid-19/nyt/usa';

fetch(api)
    .then(response => response.json())
    .then(data => {
        plotData(data);
    });


function plotData(data) {
    let keys = data.map(a => a.date);
    let nums = data.map(a => a.cases);
    //console.log(keys); console.log(nums);
    keys.unshift("dates");
    nums.unshift("cases");

    var chart = bb.generate({
        bindto: "#covid-all-us-cases",
        data: {
            x: "dates",
            type: "area-spline",
            columns: [ keys,
                       nums ]
        },

        axis: {
            x: {
                type: "category",
                tick: {
                    count: 29
                }
            }
        },

        padding: {right: 50}
    });
}
