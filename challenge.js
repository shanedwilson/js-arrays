let elizabethSanger = {
    congressionalDistrict: 5,
    statements: [
      {statement: "Pie for everyone.", category: "Jobs"},
      {statement: "No taxes on pie.", category: "Taxes"},
      {statement: "No working on friday.", category: "Jobs"}
    ],
    donationFormUrl: 'www.google.com',
    events: [
      {date: '08/27/2018', title:"Zoe's birthday", description:"eat all the pie at the party"},
      {date: '08/28/2018', title:"Arrays", description:"all the looping"},
      {date: '09/4/2018', title:"Some important event", description:"SUPER important"},
      {date: '09/4/2018', title:"Running", description:"from the police"},
      {date: '03/14/2019', title:"Pi Day", description:"Eat it all???"}
    ],
    volunteers: [
      {
        name: 'Callan',
        address: '500 interstate blvd S',
        email: 'callan@yomamma.com',
        phone: '1234567890',
        availability: '9-5',
        activities: 'phone calls only'
      },
      {
        name: 'Lauren',
        address: '1 main street',
        email: 'lauren@comcast.net',
        phone: '1134567890',
        availability: 'never',
        activities: 'collecting money'
      },
      {
        name: 'Bernard',
        address: '1 Bernard Way',
        email: 'Bernard@thebear.net',
        phone: '1134567890',
        availability: 'all day',
        activities: 'everything'
      }
    ],
    biography: "I'm so cool!  please elect me",
    images: [
      {
        imageUrl: "http://catsatthestudios.com/wp-content/uploads/2017/12/12920541_1345368955489850_5587934409579916708_n-2-960x410.jpg",
        description: "The Crew",
        type: "constituents"
      },
      {
        imageUrl: "https://imgix.bustle.com/uploads/image/2018/4/18/5f312113-eaa8-4e71-9360-871e51084f4f-fotolia_125402501_subscription_monthly_m.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
        description: "Elizabeth at the fair",
        type: "headshot"
      },
      {
        imageUrl: "http://los40cl00.epimg.net/los40/imagenes/2018/08/13/actualidad/1534185434_207658_1534185597_noticia_normal.jpg",
        description: "Elizabeth and her homies",
        type: "constituents"
      },
      {
        imageUrl: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3658031.jpg",
        description: "All the people of district 5",
        type: "constituents"
      },
    ],
    missionStatement: "Do good stuff",
    voterRegistrationUrl: 'www.google.com'
  };

  const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
  };

  const congressionalDistrictStringBuilder = () => {
      const newString = `<h2>Congressional District: ${elizabethSanger.congressionalDistrict}</h2>`;
      printToDom(newString, 'congressionalDistrict');
  }

  const voterRegistrationStringBuilder = () => {
    const newString = `<a href="https://${elizabethSanger.voterRegistrationUrl}" target="_blank">Register To Vote Here</a>`;
    printToDom(newString, 'voterRegistration');
  };

  const donationFormStringBuilder = () => {
      const newString = `<a href="https://${elizabethSanger.donationFormUrl}" target="_blank">Click To Donate</a>`;
      printToDom(newString, 'donationForm');
  };

  const statementsStringBuilder = () => {
      let newString = ''
      for (let i = 0; i < elizabethSanger.statements.length; i++) {
        newString += `<div class="statementContainer">`
          newString += `<div class="statement">`
          newString += `<h4>${elizabethSanger.statements[i].category}:</h4>`
          newString += `<h3>"${elizabethSanger.statements[i].statement}"</h3>`
          newString += `</div>`;
        newString += `</div>`;       
      }
      printToDom(newString, 'statements');
  };

  const eventsStringBuilder = () => {
    let newString = ''
    for (let i = 0; i < elizabethSanger.events.length; i++) {
      newString += `<div class="event">`
      newString += `<h3>When: ${elizabethSanger.events[i].date}</h3>`
      newString += `<h4>What: ${elizabethSanger.events[i].title}</h4>`
      newString += `<p>${elizabethSanger.events[i].description}</p>`
      newString += `</div>`;
    }
    printToDom(newString, 'events');
};

const volunteersStringBuilder = () => {
    let newString = ''
    for (let i = 0; i < elizabethSanger.volunteers.length; i++) {
      newString += `<div class="volunteer">`
      newString += `<h3>Name: ${elizabethSanger.volunteers[i].name}</h3>`
      newString += `<p>Address: ${elizabethSanger.volunteers[i].address}</p>`
      newString += `<p>Email: ${elizabethSanger.volunteers[i].email}</p>`
      newString += `<p>Phone: ${elizabethSanger.volunteers[i].phone}</p>`
      newString += `<p>Availability: ${elizabethSanger.volunteers[i].availability}</p>`
      newString += `<p>Activites: ${elizabethSanger.volunteers[i].activities}</p>`
      newString += `</div>`;
    }
    printToDom(newString, 'volunteers');
};

const biographyStringBuilder = () => {
    const newString = `<p class="bio">${elizabethSanger.biography}</p>`;
    printToDom(newString, 'biography');
};

const imagesStringBuilder = () => {
    let newString = ''
    for (let i = 0; i < elizabethSanger.images.length; i++) {
      newString += `<div class="imageCard">`
        newString += `<img class ="image" src=${elizabethSanger.images[i].imageUrl}></img>`
        newString += `<div class="imageInfo">`
        newString += `<p>Description: ${elizabethSanger.images[i].description}</p>`
        newString += `<p>Type: ${elizabethSanger.images[i].type}</p>`
        newString += `</div>`;
      newString += `</div>`  
    }
    printToDom(newString, 'images');
};

const missionStatementStringBuilder = () => {
  const newString = `<p class="bio">${elizabethSanger.missionStatement}</p>`;
  printToDom(newString, 'missionStatement');
};


  congressionalDistrictStringBuilder();
  voterRegistrationStringBuilder();
  donationFormStringBuilder();
  statementsStringBuilder();
  eventsStringBuilder();
  volunteersStringBuilder();
  biographyStringBuilder();
  imagesStringBuilder();
  missionStatementStringBuilder(); 

  const updateCongressionalDistrict = (newDistrict) => {
    elizabethSanger.congressionalDistrict = newDistrict;
    congressionalDistrictStringBuilder();
  };

  const updateStatements = (newStatement) => {
    elizabethSanger.statements.push(newStatement);
    statementsStringBuilder();
  };

  const updateVoterRegistration = (newUrl) => {
    elizabethSanger.voterRegistrationUrl = newUrl;
    voterRegistrationStringBuilder();
  };

  const updateEvents = (newEvent) => {
    elizabethSanger.events.push(newEvent);
    eventsStringBuilder();
  };

  const updateVolunteers = (newVolunteer) => {
    elizabethSanger.volunteers.push(newVolunteer);
    volunteersStringBuilder();
  };

  const updateDonationForm = (newUrl) => {
    elizabethSanger.donationFormUrl = newUrl;
    donationFormStringBuilder();
  };

  const updateBiography = (newBio) => {
    elizabethSanger.biography = newBio;
    biographyStringBuilder();
  };

  const updateImages = (newImage) => {
    elizabethSanger.images.push(newImage);
    imagesStringBuilder();
  };

  const updateMissionStatement = (newStatement) => {
    elizabethSanger.missionStatement = newStatement;
    missionStatementStringBuilder();
  }

  updateVoterRegistration('www.shanedwilson.com');
  updateDonationForm('www.avid.com');
  updateCongressionalDistrict(6);
  updateStatements({statement: "Pie for some?", category: "Jobs"});
  updateEvents({date: "8/30/18", title: "Updating Arrays", description: "Shane MIGHT be figuring this shit out"});
  updateVolunteers({name: 'Joe Blow', address: 'Your Moms House', email: 'yourmom@comcast.net', phone: '615-you-rmom', availabilty: 'you know it', activities: 'door knocking'});
  updateBiography('Elizabeth longed for life on two wheels. Riding the open road. For Freedom.');
  updateImages({imageUrl: 'https://thumbs.dreamstime.com/b/brown-grey-white-wire-haired-terrier-face-black-sitting-down-facing-camera-stripe-down-chest-66247743.jpg', description: 'My true constituents', type: 'constituents'});
  updateMissionStatement("All the weed. All the time!");