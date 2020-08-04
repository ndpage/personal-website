
// Need to add real data to projects array
var projects = [
  {
      "name": "Test Stand Control System",
      "img": "https://images.unsplash.com/photo-1551336787-1f3038699084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2855&q=80",
      "description": "Built a test stand control and data acquisition system."
  },
  {
    "name": "Project 2",
    "img": "https://images.unsplash.com/photo-1551336787-1f3038699084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2855&q=80",
    "description": "Built a test stand control and data acquisition system."
  },
  {
    "name": "Test Stand Control System",
    "img": "https://images.unsplash.com/photo-1551336787-1f3038699084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2855&q=80",
    "description": "Built a test stand control and data acquisition system."
  }
]

var i;
for (i = 0; i < projects.length; i++) {
  document.getElementById('projects-list').innerHTML += `<div class="project-group">
                                                          <h3 class="project-title">${projects[i].name}</h3>
                                                          <p class="project-text">${projects[i].description}</p>
                                                          <img class="project-img" src="${projects[i].img}" alt="project 3">
                                                        </div>`;
}
