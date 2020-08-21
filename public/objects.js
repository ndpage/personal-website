
// Need to add real data to projects array
var projects = [
  {
      "name": "Test Stand Control System",
      "img": "https://images.unsplash.com/photo-1551336787-1f3038699084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2855&q=80",
      "description": " I am currently building a test stand control and data acquisition system for a hydraulic test stand. The system uses an NI CompactRIO to control the system and take data measurements. LabVIEW is used to develop the software for the operator and the Real-Time control software running on the CompactRIO."
  },
  {
    "name": "Electric Motor Drive System Retrofit",
    "img": "https://www.boschrexroth.com/ics/cat/content/assets/Online/im/EL_HCS_PMK3181_01_17R_20170425_090840.big.jpg",
    "description": "Performed a retrofit project of a variable frequency drive system using a Bosch Rexroth IndraDrive. I was responsible for project management, configuration of new drive system, installation, and system commissioning."
  },
  {
    "name": "Semi-Autonomous Remote Controlled Bot",
    "img": "https://i.ebayimg.com/images/g/ftAAAOxyfS1R4tno/s-l300.jpg",
    "description": "For Introduction to Embedded Systems my team and I built a semi-autonomous driving robot which could perform various tasks. The first tasks was to follow a black line using IR LEDs and the second tasks was to remotely control the bot via a web interface. We fabricated a frame for the bot and soldered the motor driver components onto the board. "
  }
] 

  var i;
  for (i = 0; i < projects.length; i++) {
    document.getElementById('projects-list').innerHTML += `<div class="project-group">
                                                            <h3 class="project-title">${projects[i].name}</h3>
                                                            <p class="project-text">${projects[i].description}</p>
                                                            <img class="project-img" src="${projects[i].img}" alt="project ${i}">
                                                          </div>`;
  }
