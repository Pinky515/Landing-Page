import html from "html-literal";

export default () => html`
<section id="join">
<h2>If you're not a Hater, Join the Crew</h2>

<form action="https://www.freecodecamp.com/email-submit" id="form">
  <input type="email" name="email" id="email" placeholder="Enter Your Email">
  <input type="submit" id="submit" action="https://www.freecodecamp.com/email-submit">
</form>
<div class="borders">
  <div class="border left"></div>
<div id="contact-us">
  <h3>
    Want to collaborate?
  </h3>
  <div class="decor-and-links">

  <div class="decor"></div>
  <ul>
    <li>
      <a href="http://facebook.com/madeupname" target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
    </li>
    <li>
      <a href="http://instagram.com/madeupname" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
    </li>
    <li>
      <a href="http://Twitter.com/madeupname" target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
    </li>
    <li>
      <a href="http://LinkedIn.com/madeupname" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </li>
  </div>
</div>

  <div class="border right"></div>
</div>
</section>`;
