'use strict';
function handleMenu() {
  $('.nav-menu').on('click', function() {
    $(this).next('ul').css('display', 'flex');
    closeMenu();
  });
}

function closeMenu() {
  $('.nav-menu').on('click', function() {  
    $('ul').toggle();
  });
}

function generateAbout() {
  $('.js-about').on('click', function() {
    renderAbout();
    closeMenu();
  });
}

function renderHome() {
  $('.container').html(`
    <section role='region' class='home'>
      <h1>Welcome to my portfolio</h1>
    </section>
  `)
}

function generateHome() {
  $('.js-home').on('click', function() {
    renderHome();
    closeMenu();
  })
}

function renderAbout() {
  $('.container').html(`
  <section role="region" class="about">
    <h2>About</h2>
      <p>Hi, my name is Eugene.</p>
      <img src="https://imgur.com/Jrlz7h4.png" alt="my picture" class="my-picture">
      <p>I am a frontend developer and a web developer.</p>
      <p>I have completed Thinkful's Full Stack Flex web development program. I've always had a passion for design and while working with HTML, CSS, Javascript, and jQuery, I can see my idea's come to life.
          When I'm not coding I love to play video games, watch and talk about sports.</p>
  </section>` );
  console.log('About generated');
}


function generatePortfolio() {
  $('.js-projects').on('click', function() {
    console.log('projects clicked');
    renderPortfolio();
    generateNbaQuiz();
    generateGameplaySearch();
    generateSquadFinder();
    generateKickRelease();
    closeMenu();
  });
}

function generateNbaQuiz() {
  $('.js-nba-quiz').on('click', function() {
    console.log('quiz clicked');
    renderNbaQuiz();
    generatePortfolio()
    closeMenu();
  });
}

function generateGameplaySearch() {
  $('.js-gameplay').on('click', function() {
    console.log('gameplay clicked');
    renderGameplaySearch();
    closeMenu();
  })
}

function generateSquadFinder() {
  $('.js-squad-finder').on('click', function() {
    console.log('squad clicked');
    renderSquadFinder();
    closeMenu();
  })
}

function generateKickRelease() {
  $('.js-kick-release').on('click', function() {
    console.log('kick release clicked');
    renderKickRelease();
    closeMenu();
  })
}

function renderNbaQuiz() {
  $('.container').html(`
  <section role="region" class="projects">
    <div class='quiz-section'>
    <button id="back-btn" class="js-projects back-btn"  style='font-size:24px'><i class='fa fa-angle-double-left'></i> Back</button>
      <h3>NBA Quiz App</h3>
      <div class="quiz-hero">
        <img src="https://i.imgur.com/Q4HZ3hr.jpg" class="quiz-app main-img" />
      </div>
      <div class="quiz-thumbnails">
        <a class="quiz-thumbnail"><img src="https://i.imgur.com/Q4HZ3hr.jpg" alt="quiz-mobile-view-1" /></a>
        <a class="quiz-thumbnail"><img src="https://i.imgur.com/UoLMm9S.jpg" alt="quiz-mobile-view-2" /></a>
        <a class="quiz-thumbnail"><img src="https://i.imgur.com/THB8zfl.jpg" alt="quiz-desktop-view-1" /></a>
        <a class="quiz-thumbnail"><img src="https://i.imgur.com/q61o7kL.jpg" alt="quiz-desktop-view-2" /></a>
      </div>
      <p>The NBA Quiz App is a simple quiz app that tests your knowledge on random facts in the NBA.</p>
      <p>Built with: HTML, CSS, Javascript and jQuery.</p>
      <div class="project-buttons">
        <a class="code-link" href="https://github.com/yougene42193/quiz-app" target="_blank"><button type="button" class="btn-code">Code</button></a>
        <a class="live-link" href="https://yougene42193.github.io/quiz-app/" target="_blank"><button type="button" class="btn-live">Live</button></a>
      </div>
    </div>
  </section>
  `);
  generatePortfolio();
  handleQuizThumbnailChange();
}

function renderGameplaySearch() {
  $('.container').html(`
    <section role="region" class="projects">
      <div class='gameplay-section'>
      <button id="back-btn" class="js-projects back-btn"  style='font-size:24px'><i class='fa fa-angle-double-left'></i> Back</button>
        <h3>Gameplay Search</h3>
        <div class="GP-Search-hero">
          <img src="Screenshots/Landing-Page-Screenshot.JPG" class="gp-search main-img" />
        </div>
        <div class="gp-thumbnails">
          <a class="gp-thumbnail"><img src="Screenshots/Landing-Page-Screenshot.JPG" alt="gameplay-search-desktop-view-1" /></a>
          <a class="gp-thumbnail"><img src="Screenshots/Results-Page-Screenshot-1.JPG" alt="gameplay-search-desktop-view-2" /></a>
          <a class="gp-thumbnail"><img src="Screenshots/Results-Page-Screenshot-2.JPG" alt="gameplay-search-desktop-view-3" /></a>
          <a class="gp-thumbnail"><img src="Screenshots/gpsearch-mobile1.JPG" alt="gameplay-search-mobile-view-1" /></a>
          <a class="gp-thumbnail"><img src="Screenshots/gpsearch-mobile2.JPG" alt="gameplay-search-mobile-view-2" /></a>
          <a class="gp-thumbnail"><img src="Screenshots/gpsearch-mobile3.JPG" alt="gameplay-search-mobile-view-3" /></a>
        </div>
        <p>Gameplay Search allows the user to search for any game and will return results with an image of the game and an overview of the game with the GiantBomb API, gameplay videos with the Youtube API and live streams with the Twitch API.</p>
        <p>Built with: HTML, CSS, Javascript and jQuery/Ajax.</p>
        <div class="project-buttons">
          <a class="code-link" href="https://github.com/yougene42193/Gameplay-Search" target="_blank"><button type="button" class="btn-code">Code</button></a>
          <a class="live-link" href="https://yougene42193.github.io/Gameplay-Search/" target="_blank"><button type="button" class="btn-live">Live</button></a>
        </div>
      </div>
    </section>
  `);
  generatePortfolio();
  handleGPSearchThumbnailChange();
}

function renderSquadFinder() {
  $('.container').html(`
    <section role="region" class="projects">
    <div class='squad-finder-section'>
    <button id="back-btn" class="js-projects back-btn"  style='font-size:24px'><i class='fa fa-angle-double-left'></i> Back</button>
    <h3>Squad Finder</h3>
    <div class='squad-hero'>
      <img src="https://i.imgur.com/xeL0m0kg.jpg" class="squad-finder main-img" />
    </div>
    <div class='sf-thumbnails'>
      <a class="sf-thumbnail"><img src="https://i.imgur.com/xeL0m0kg.jpg" alt="squad-finder-desktop-view-1" /></a>
      <a class="sf-thumbnail"><img src="https://i.imgur.com/mSF6QGPg.jpg" alt="squad-finder-desktop-view-2" /></a>
      <a class="sf-thumbnail"><img src="https://i.imgur.com/l8G1bU6g.jpg" alt="squad-finder-desktop-view-3" /></a>
      <a class="sf-thumbnail"><img src="https://i.imgur.com/t7AToiSg.jpg" alt="squad-finder-desktop-view-4" /></a>
      <a class="sf-thumbnail"><img src="https://i.imgur.com/HCRdPXpg.jpg" alt="squad-finder-desktop-view-5" /></a>
      <a class="sf-thumbnail"><img src="https://i.imgur.com/GLuA21qg.jpg" alt="squad-finder-mobile-view-1" /></a>
      <a class="sf-thumbnail"><img src="https://i.imgur.com/cYCOoN9g.jpg" alt="squad-finder-mobile-view-2" /></a>
      <a class="sf-thumbnail"><img src="https://i.imgur.com/wRl8bzOg.jpg" alt="squad-finder-mobile-view-3" /></a>
      <a class="sf-thumbnail"><img src="https://i.imgur.com/v6oiSjQg.jpg" alt="squad-finder-mobile-view-4" /></a>
      <a class="sf-thumbnail"><img src="https://i.imgur.com/ec9Gesdg.jpg" alt="squad-finder-mobile-view-5" /></a>
    </div>
    <p>Squad Finder helps battle royal players to find other players to group with. Users can create an account so they can put their profile into the list of other players. User can view the list and can filter out which games they play, platform and region to make it easier to find the right player for them.</p>
    <p>Built with: ReactJS, CSS, NodeJS</p>
    <div class="project-buttons">
      <a class="code-link" href="https://github.com/yougene42193/squad-finder" target="_blank"><button type="button" class="btn-code">Code</button></a>
      <a class="live-link" href="https://squad-finder.yougene42193.now.sh/" target="_blank"><button type="button" class="btn-live">Live</button></a>
    </div>
  </div>
    </section>
  `);
  generatePortfolio();
  handleSquadThumbnailChange();
}

function renderKickRelease() {
  $('.container').html(`
    <section role="region" class="projects">
      <div class='kick-release-section'>
      <button id="back-btn" class="js-projects back-btn"  style='font-size:24px'><i class='fa fa-angle-double-left'></i> Back</button>
        <h3>Kick Release</h3>
        <div class='kick-hero'>
          <img src='https://i.imgur.com/6RvKKhD.jpg' class='kick-release main-img' />
        </div>
        <div class='kr-thumbnails'>
          <a class='kr-thumbnail'><img src='https://i.imgur.com/6RvKKhD.jpg' alt='kick-release-desktop-1' /></a>
          <a class='kr-thumbnail'><img src='https://i.imgur.com/gkhjQ1jg.jpg' alt='kick-release-desktop-2' /></a>
          <a class='kr-thumbnail'><img src='https://i.imgur.com/1zWXeCMg.jpg' alt='kick-release-desktop-3' /></a>
          <a class='kr-thumbnail'><img src='https://i.imgur.com/5SxPGiFg.jpg' alt='kick-release-desktop-4' /></a>
          <a class='kr-thumbnail'><img src='https://i.imgur.com/D9Pcfy9g.jpg' alt='kick-release-desktop-5' /></a>
          <a class='kr-thumbnail'><img src='https://i.imgur.com/8s5Fluhg.jpg' alt='kick-release-desktop-6' /></a>
          <a class='kr-thumbnail'><img src='https://i.imgur.com/SocADWCg.jpg' alt='kick-release-mobile-1' /></a>
          <a class='kr-thumbnail'><img src='https://i.imgur.com/YMxR3Zkg.jpg' alt='kick-release-mobile-2' /></a>
          <a class='kr-thumbnail'><img src='https://i.imgur.com/6dBwkKKg.jpg' alt='kick-release-mobile-3' /></a>
          <a class='kr-thumbnail'><img src='https://i.imgur.com/HrZfGGTg.jpg' alt='kick-release-mobile-4' /></a>
          <a class='kr-thumbnail'><img src='https://i.imgur.com/BS5fDRgg.jpg' alt='kick-release-mobile-5' /></a>
          <a class='kr-thumbnail'><img src='https://i.imgur.com/bjctk2Sg.jpg' alt='kick-release-mobile-6' /></a>
        </div>
        <p>I created Kick Release for easy access to when popular shoes are going to be released. Users can sign up to view the list of releases as well as post new releases. They can also go into each post to comment on the shoes that they are excited for.</p>
        <p>Built with: ReactJS, CSS, NodeJS</p>
        <div class='project-buttons'>
          <a class="code-link" href="https://github.com/yougene42193/kick-release" target="_blank"><button type="button" class="btn-code">Code</button></a>
          <a class="live-link" href="https://kick-release.yougene42193.now.sh/" target="_blank"><button type="button" class="btn-live">Live</button></a>
        </div>
      </div>
    </section>
  `);
  generatePortfolio();
  handleKickThumbnailChange();
}

function renderPortfolio() {
  $('.container').html(`
    <section role="region" class="projects-list">
      <h2>Projects</h2>
      <div class="project-list">
        <div class="squad-list">
          <a class="js-squad-finder"><h3>Squad Finder</h3>
          <img src="https://i.imgur.com/kGyN2ci.png" class="project-list-img" /></a>
        </div>
        <div class="kick-list">
          <a class="js-kick-release"><h3>Kick Release</h3>
          <img src='https://i.imgur.com/j0vhPMk.png' class='project-list-img' /></a>
        </div>
        <div class="gameplay-list">
          <a class="js-gameplay"><h3>Gameplay Search</h3>
          <img src="https://i.imgur.com/1ziRXOm.png" class="project-list-img" /></a>
        </div>
        <div class="nba-quiz-list">
          <a class="js-nba-quiz"><h3>NBA Quiz</h3>
          <img src="https://i.imgur.com/vwPPeFf.png" class="project-list-img" /></a>
        </div>  
      </div>
    </section>
  `);
}

function generateContact() {
  $('.js-contact').on('click', function() {
    console.log('contact clicked');
    renderContact(); 
  });
}

function renderContact() {
  $('.container').html(`
  <section role="region" class="contact">
          <h2>Contact</h2>
          <div class="link-icons">
              <p><a class="gh-link" href="https://github.com/yougene42193" target="_blank"><i class="fa fa-github" style="font-size:24px"><span> Github</span></i></a></p>
              <p><a class="in-link" href="https://www.linkedin.com/in/eugene-song-760071178" target="_blank"><i class="fa fa-linkedin-square" style="font-size:24px"><span> Linkedin</span></i></a></p>
              <p><a class="email-link" href="mailto: songeugene21@gmail.com"><i class="fa fa-envelope" style="font-size:20px"><span> songeugene21@gmail.com</span></i></a></p>
          </div>
      </section>`);
  console.log('contact generated');
}
/*
function scrollContact() {
  $('.js-contact').on('click', function() {
    console.log('contact clicked');
    $('html, body').animate({
      scrollTop: $('.contact').offset().top+$('.contact').height()
    },
    1000);
  });
}*/

function scrollTop() {
  $(document).ready(function() {
    console.log('page refreshed');
    $('body').scrollTop(0);
  });
}

function handleQuizThumbnailChange() {
  $('.quiz-thumbnail').on('click', function() {
    console.log('quiz thumbnail clicked');
    const imgSrc = $(this).find('img').attr('src');

    $('.quiz-hero img').attr('src', imgSrc);
  });
}

function handleGPSearchThumbnailChange() {
  $('.gp-thumbnail').on('click', function() {
    console.log('search thumbnail clicked');
    const imgSrc = $(this).find('img').attr('src');

    $('.GP-Search-hero img').attr('src', imgSrc);
  });
}

function handleSquadThumbnailChange() {
  $('.sf-thumbnail').on('click', function() {
    const imgSrc = $(this).find('img').attr('src');

    $('.squad-finder').attr('src', imgSrc);
  });
}

function handleKickThumbnailChange() {
  $('.kr-thumbnail').on('click', function() {
    const imgSrc = $(this).find('img').attr('src');
    
    $('.kick-release').attr('src', imgSrc);
  })
}

function createPortfolio() {
  handleMenu();
  renderHome();
  generateHome();
  generateAbout();
  generatePortfolio();
  generateContact();
  generateNbaQuiz()
  generateGameplaySearch();
  scrollTop();
}

$(createPortfolio);
