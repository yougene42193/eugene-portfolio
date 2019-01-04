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
    <h1>Hi, my name is Eugene</h1>
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
    <div class="hero">
        <img src="https://i.imgur.com/Q4HZ3hr.jpg" class="quiz-app main-img" />
    </div>
    <div class="quiz-thumbnails">
        <a class="quiz-thumbnail"><img src="https://i.imgur.com/Q4HZ3hr.jpg" alt="mobile-view-1" /></a>
        <a class="quiz-thumbnail"><img src="https://i.imgur.com/UoLMm9S.jpg" alt="mobile-view-2" /></a>
        <a class="quiz-thumbnail"><img src="https://i.imgur.com/THB8zfl.jpg" alt="desktop-view-1" /></a>
        <a class="quiz-thumbnail"><img src="https://i.imgur.com/q61o7kL.jpg" alt="desktop-view-2" /></a>
    </div>
    <p>The NBA Quiz App is a simple quiz app that tests your knowledge on random facts in the NBA. The app uses HTML, CSS, Javascript and jQuery.</p>
    <div class="project-buttons">
        <a class="code-link" href="https://github.com/yougene42193/quiz-app" target="_blank"><button type="button" class="btn-code">Code</button></a>
        <a class="live-link" href="https://yougene42193.github.io/quiz-app/" target="_blank"><button type="button" class="btn-live">Live</button></a>
    </div>
  </section>`);
  handleThumbnailChange();
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

function handleThumbnailChange() {
  $('.quiz-thumbnail').on('click', function() {
    console.log('thumbnail clicked');
    const imgSrc = $(this).find('img').attr('src');

    $('.hero img').attr('src', imgSrc);
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