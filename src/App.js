import "core-js";
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class App extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.ChordDiagram);

    chart.data = [
      { from: "Food", to: "Catalan", value: 0 },
      { from: "Food", to: "English (NA)", value: 3.4 },
      { from: "Food", to: "German", value: 4.65 },
      { from: "Food", to: "French", value: 6.98 },
      { from: "Food", to: "Tagalog", value: 14.47 },
      { from: "Food", to: "Spanish", value: 0 },
      { from: "Food", to: "English (Aus)", value: 27.5 },
      { from: "History and Politics", to: "Catalan", value: 21.33 },
      { from: "History and Politics", to: "English (NA)", value: 6.8 },
      { from: "History and Politics", to: "German", value: 0 },
      { from: "History and Politics", to: "French", value: 2.33 },
      { from: "History and Politics", to: "Tagalog", value: 1.32 },
      { from: "History and Politics", to: "Spanish", value: 3.59 },
      { from: "History and Politics", to: "English (Aus)", value: 0 },
      { from: "Student/Work Life", to: "Catalan", value: 28 },
      { from: "Student/Work Life", to: "English (NA)", value: 3.4 },
      { from: "Student/Work Life", to: "German", value: 6.98 },
      { from: "Student/Work Life", to: "French", value: 3.54 },
      { from: "Student/Work Life", to: "Tagalog", value: 10.53 },
      { from: "Student/Work Life", to: "Spanish", value: 15.9 },
      { from: "Student/Work Life", to: "English (Aus)", value: 16 },
      { from: "Social Groups", to: "Catalan", value: 1.33 },
      { from: "Social Groups", to: "English (NA)", value: 5.1 },
      { from: "Social Groups", to: "German", value: 6.98 },
      { from: "Social Groups", to: "French", value: 9.3 },
      { from: "Social Groups", to: "Tagalog", value: 9.12 },
      { from: "Social Groups", to: "Spanish", value: 6.15 },
      { from: "Social Groups", to: "English (Aus)", value: 0.5 },
      { from: "Pop Culture", to: "Catalan", value: 24 },
      { from: "Pop Culture", to: "English (NA)", value: 16.2 },
      { from: "Pop Culture", to: "German", value: 6.98 },
      { from: "Pop Culture", to: "French", value: 9.3 },
      { from: "Pop Culture", to: "Tagalog", value: 0 },
      { from: "Pop Culture", to: "Spanish", value: 21.03 },
      { from: "Pop Culture", to: "English (Aus)", value: 30 },
      { from: "Youth Culture", to: "English (NA)", value: 20.5 },
      { from: "Youth Culture", to: "Catalan", value: 2.67 },
      { from: "Youth Culture", to: "Spanish", value: 12.82 },
      { from: "Youth Culture", to: "German", value: 37.2 },
      { from: "Youth Culture", to: "French", value: 40.7 },
      { from: "Youth Culture", to: "Tagalog", value: 2.63 },
      { from: "Youth Culture", to: "English (Aus)", value: 4.5 },
      { from: "Daily Life", to: "English (NA)", value: 16.2 },
      { from: "Daily Life", to: "Catalan", value: 24 },
      { from: "Daily Life", to: "Spanish", value: 21.03 },
      { from: "Daily Life", to: "German", value: 32.56 },
      { from: "Daily Life", to: "French", value: 12.791 },
      { from: "Daily Life", to: "Tagalog", value: 44.74 },
      { from: "Daily Life", to: "English (Aus)", value: 30 },
      { from: "Intergenerational", to: "English (NA)", value: 12 },
      { from: "Intergenerational", to: "Catalan", value: 8 },
      { from: "Intergenerational", to: "Spanish", value: 10.77 },
      { from: "Intergenerational", to: "German", value: 4.65 },
      { from: "Intergenerational", to: "French", value: 12.79 },
      { from: "Intergenerational", to: "Tagalog", value: 17.11 },
      { from: "Intergenerational", to: "English (Aus)", value: 2 },
      { from: "Animals", to: "English (NA)", value: 6.8 },
      { from: "Animals", to: "Catalan", value: 0 },
      { from: "Animals", to: "Spanish", value:  2.05},
      { from: "Animals", to: "German", value: 0 },
      { from: "Animals", to: "French", value: 23.91 },
      { from: "Animals", to: "Tagalog", value: 0 },
      { from: "Animals", to: "English (Aus)", value: 7 },
      { from: "Absurd", to: "English (NA)", value: 9.4 },
      { from: "Absurd", to: "Catalan", value: 5.33 },
      { from: "Absurd", to: "Spanish", value:  22.56 },
      { from: "Absurd", to: "German", value: 0 },
      { from: "Absurd", to: "French", value: 0 },
      { from: "Absurd", to: "Tagalog", value: 0 },
      { from: "Absurd", to: "English (Aus)", value: 0 },


    ];

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";

    let nodeTemplate = chart.nodes.template;
    nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
    nodeTemplate.showSystemTooltip = true;

    let label = chart.nodes.template.label;
    label.fontSize = 10;

    let nodeLink = chart.links.template;
    let bullet = nodeLink.bullets.push(new am4charts.CircleBullet());
    bullet.fillOpacity = 1;
    bullet.circle.radius = 2;
    bullet.locationX = 0.5;

    // create animations
    chart.events.on("ready", function() {
      for (var i = 0; i < chart.links.length; i++) {
        let link = chart.links.getIndex(i);
        let bullet = link.bullets.getIndex(0);

        animateBullet(bullet);
      }
    })

    function animateBullet(bullet) {
      let duration = 3000 * Math.random() + 2000;
      let animation = bullet.animate([{ property: "locationX", from: 0, to: 1 }], duration)
      animation.events.on("animationended", function(event) {
        animateBullet(event.target.object);
      })
    }


    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
  }
}


export default App;
