function generateTeamHTML(data) {
  const manager = data.manager;
  const managerCard = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <h4 class="card-text">${manager.getRole()}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Email: ${manager.getEmail()}</li>
      <li class="list-group-item">Office number:${manager.getOfficeNumber()} </li>
  </ul>
</div>`;
  const teamMembers = data.team; 
  console.log('MANAGER=>',manager)
  console.log("EMPLOYEES=>", teamMembers);
  const teamMemberCards = teamMembers.map((teamMember,i) => {
      console.log('team member=>',teamMember)
    return `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${teamMember.getName()}</h5>
          <h4 class="card-text">${teamMember.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${teamMember.getId()}</li>
          <li class="list-group-item">Email: ${teamMember.getEmail()}</li>
          <li class="list-group-item">${teamMember.hasOwnProperty('getGithub()') ? 'GitHub: '+teamMember.getGithub() : 'School: ' +teamMember.getSchool()}</li>
        </ul>
      </div>`;
  });
  const listItemsToAppend = [managerCard, ...teamMemberCards];
  let fragment = `
    <!DOCTYPE html>
<html lang="en">
<Head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Profiles</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>
    <div class = "page-header text-center bg-info text-white">
        <h1>
           MY TEAM  
        </h1>
     </div>
<!--TODO://Add in Cards in a card container get from bootstrap-->`;
  fragment += listItemsToAppend.join('') + `</body>
</html>


<!-- JS, Popper.js, and jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>  


  `
  return fragment;
  ;
}

module.exports = generateTeamHTML;
