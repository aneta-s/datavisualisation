// MENU
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}
function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}

// HTML ELEMENTS
//Bar chart
let myChart = document.getElementById('bar').getContext('2d');

//Global Options
Chart.defaults.global.defaultFontFamily = 'Raleway, sans-serif, Arial, Helvetica, AlvaroCondensed';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#695771';
//How to edit font type (thicker)on x/y axes or disable 90, 80, 70 ... on bar chart? Chart.defaults.global.defaultFontColor = '#F9EDF8';

let massPopChart = new Chart(myChart, {
    type: 'bar',
    data: {
        labels: ['id1', 'id2', 'id3', 'id4', 'id5', 'id6'],
        datasets: [{
            label: 'Punten',
            data: [90, 60, 40, 29, 79, 55
            ],
            backgroundColor: ['#F9EDF8', '#DDC3DA', '#BE9DBB', '#D4ADCE', '#F9EDF8', '#DDC3DA', '#BE9DBB'],
            borderWidth: 1,
            borderColor: '#A283A1',
            hoverBorderWidth: 1,
            hoverBorderColor: '#695771'

        }]
    },
    //Targeting different sections adding Title

    options: {
        legend: {
            display: false

        }
    },
    layout: {//move the chart to left, right etc
        padding: {
            left: 50,
            right: 0,
            bottom: 0,
            top: 0
        }
    },
    tooltips: {// todo: reduce size of the tooltips
        enabled: true
    }

});
//Radar chart
let myChart1 = document.getElementById('radar').getContext('2d');

//Global Options
Chart.defaults.global.defaultFontFamily = 'Raleway, sans-serif, Arial, Helvetica, AlvaroCondensed';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#695771';
let massPopChart1 = new Chart(myChart1, {
    type: 'radar',
    data: {
        labels: ['id1', 'id2', 'id3', 'id4', 'id5', 'id6'],
        datasets: [{
            label: 'Punten',
            data: [90, 60, 40, 29, 79, 55
            ],
            backgroundColor: ['#F9EDF8', '#DDC3DA', '#BE9DBB', '#D4ADCE', '#F9EDF8', '#DDC3DA', '#BE9DBB'],
            borderWidth: 1,
            borderColor: '#A283A1',
            hoverBorderWidth: 1,
            hoverBorderColor: '#695771'

        }]
    },
    //Targeting different sections adding Title

    options: {
        legend: {
            display: false

        }
    },

});

//Polar area chart
let myChart2 = document.getElementById('polarArea').getContext('2d');

//Global Options
Chart.defaults.global.defaultFontFamily = 'Raleway, sans-serif, Arial, Helvetica, AlvaroCondensed';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontColor = '#695771';
let massPopChart2 = new Chart(myChart2, {
    type: 'polarArea',
    data: {
        labels: ['id1', 'id2', 'id3', 'id4', 'id5', 'id6'],
        datasets: [{
            label: 'Punten',
            data: [90, 60, 40, 29, 79, 55
            ],
            backgroundColor: ['#F9EDF8', '#DDC3DA', '#BE9DBB', '#D4ADCE', '#F9EDF8', '#DDC3DA', '#BE9DBB'],
            borderWidth: 1,
            borderColor: '#A283A1',
            hoverBorderWidth: 1,
            hoverBorderColor: '#695771'

        }]
    },
    //Targeting different sections adding Title

    options: {
        legend: {
            display: false

        }
    },

});
// Horizonal bar
//Main chart
let myChart3 = document.getElementById('horizontalBar').getContext('2d');

//Global Options
Chart.defaults.global.defaultFontFamily = 'Raleway, sans-serif, Arial, Helvetica, AlvaroCondensed';
Chart.defaults.global.defaultFontSize = 11.2;
Chart.defaults.global.defaultFontColor = '#695771';
let massPopChart3 = new Chart(myChart3, {
    type: 'horizontalBar',
    data: {
        labels: ['id1', 'id2', 'id3', 'id4', 'id5', 'id6'],
        datasets: [{
            label: 'Punten',
            data: [90, 60, 40, 29, 79, 55
            ],
            backgroundColor: ['#F9EDF8', '#DDC3DA', '#BE9DBB', '#D4ADCE', '#F9EDF8', '#DDC3DA', '#BE9DBB'],
            borderWidth: 1,
            borderColor: '#A283A1',
            hoverBorderWidth: 1,
            hoverBorderColor: '#695771'

        }]
    },
    //Targeting different sections adding Title

    options: {
        legend: {
            display: false

        }
    },

});