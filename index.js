'use strict';
function handleMenu() {
  $('.nav-menu').on('click', function() {
    console.log('menu clicked');
    $(this).next('ul').css('display', 'flex');
    closeMenu();
  });
}

function closeMenu() {
  $('.nav-menu').on('click', function() {
    console.log('close menu');
    $('ul').toggle();
  });
}

function generateAbout() {
  $('.js-about').on('click', function() {
    console.log('About clicked');
    renderAbout();
    closeMenu();
  });
}

function renderAbout() {
  $('.container').html(`
  <section role="region" class="about">
    <h1>About</h1>
      <p>Hi, my name is Eugene</p>
      <p>I am a full-stack developer and an aspiring UI/UX designer.</p>
      <p>I am currently a student in Thinkful's Full Stack Flex Bootcamp. I've always had a passion for design and while working with HTML, CSS, Javascript, and jQuery, I can see my idea's come to life.
          When I'm not coding I love to play video games, watch and talk about sports.</p>
  </section>` );
  console.log('About generated');
}


function generatePortfolio() {
  $('.js-portfolio').on('click', function() {
    console.log('portfolio clicked');
    renderPortfolio();
    closeMenu();
  });
}

function renderPortfolio() {
  $('.container').html(`
  <section role="region" class="portfolio">
    <h2>Portfolio</h2>
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
    <p>The NBA Quiz App is a simple quiz app that tests your knowledge on random facts in the NBA. The app uses HTML, CSS, Javascript and jQuery.</p>
    <div class="project-buttons">
        <a class="code-link" href="https://github.com/yougene42193/quiz-app" target="_blank"><button type="button" class="btn-code">Code</button></a>
        <a class="live-link" href="https://yougene42193.github.io/quiz-app/" target="_blank"><button type="button" class="btn-live">Live</button></a>
    </div>
    <div class='gameplay-section'>
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
      <p>Gameplay Search allows the user to search for any game and will return results with an image of the game and an overview of the game with the GiantBomb API, gameplay videos with the Youtube API and live streams with the Twitch API. The app uses HTML, CSS, Javascript and jQuery/Ajax.</p>
      <div class="project-buttons">
        <a class="code-link" href="https://github.com/yougene42193/Gameplay-Search" target="_blank"><button type="button" class="btn-code">Code</button></a>
        <a class="live-link" href="https://yougene42193.github.io/Gameplay-Search/" target="_blank"><button type="button" class="btn-live">Live</button></a>
      </div>
    </div>
    <div class='squad-finder-section'>
      <h3>Squad Finder</h3>
      <div class='squad-hero'>
        <img src="Screenshots/squad-desktop-1.JPG" class="squad-finder main-img" />
      </div>
      <div class='sf-thumbnails'>
        <a class="sf-thumbnail"><img src="Screenshots/squad-desktop-1.JPG" alt="squad-finder-desktop-view-1" /></a>
        <a class="sf-thumbnail"><img src="Screenshots/squad-desktop-2.JPG" alt="squad-finder-desktop-view-2" /></a>
        <a class="sf-thumbnail"><img src="Screenshots/squad-desktop-3.JPG" alt="squad-finder-desktop-view-3" /></a>
        <a class="sf-thumbnail"><img src="Screenshots/squad-desktop-4.JPG" alt="squad-finder-desktop-view-4" /></a>
        <a class="sf-thumbnail"><img src="Screenshots/squad-desktop-5.JPG" alt="squad-finder-desktop-view-5" /></a>
        <a class="sf-thumbnail"><img src="Screenshots/squad-mobile-1.JPG" alt="squad-finder-mobile-view-1" /></a>
        <a class="sf-thumbnail"><img src="Screenshots/squad-mobile-2.JPG" alt="squad-finder-mobile-view-2" /></a>
        <a class="sf-thumbnail"><img src="Screenshots/squad-mobile-3.JPG" alt="squad-finder-mobile-view-3" /></a>
        <a class="sf-thumbnail"><img src="Screenshots/squad-mobile-4.JPG" alt="squad-finder-mobile-view-4" /></a>
        <a class="sf-thumbnail"><img src="Screenshots/squad-mobile-5.JPG" alt="squad-finder-mobile-view-5" /></a>
      </div>
      <p>Squad Finder helps battle royal players to find other players to group with. Users can create an account so they can put their profile into the list of other players. User can view the list and can filter out which games they play, platform and region to make it easier to find the right player for them.</p>
      <p>Built with: ReactJS, CSS, NodeJS
      <div class="project-buttons">
        <a class="code-link" href="https://github.com/yougene42193/squad-finder" target="_blank"><button type="button" class="btn-code">Code</button></a>
        <a class="live-link" href="https://squad-finder.yougene42193.now.sh/" target="_blank"><button type="button" class="btn-live">Live</button></a>
      </div>
    </div>
  </section>`);
  handleQuizThumbnailChange();
  handleGPSearchThumbnailChange();
  handleSquadThumbnailChange();
  console.log('portfolio generated');
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
              <p><a class="email-link" href="mailto: yougene42193@gmail.com"><i class="fa fa-envelope" style="font-size:20px"><span> yougene42193@gmail.com</span></i></a></p>
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

function createPortfolio() {
  handleMenu();
  renderAbout();
  generateAbout();
  generatePortfolio();
  generateContact();
  scrollTop();
}

$(createPortfolio);