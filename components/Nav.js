import html from "html-literal";
() =>
  html`
    HTML template literal
  `;

export default links => html`
  <header id="header">
    <nav id="nav-bar">
      <i class="fa-solid fa-bars nav1"></i>
      <ul class="hidden--mobile nav-links">
        ${links
    .map(
      // eslint-disable-next-line prettier/prettier
      link =>
        // eslint-disable-next-line prettier/prettier
        `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
    )
    // eslint-disable-next-line prettier/prettier
    // eslint-disable-next-line prettier/prettier
    .join("")}
      </ul>
      <!--
      Original Nav
      <ul class="hidden--mobile">
        <li class="nav2">
          <a href="#promo-video" class="nav-link">Introduction </a>
        </li>
        <li class="nav3">
          <a href="#reviews" class="nav-link">Reviews</a>
        </li>
        <li class="nav4">
          <a href="#join" class="nav-link">Join the Crew</a>
        </li>
      </ul> -->
    </nav>
    <img
      src="https://i.ibb.co/pR9QDQD/The-dust.png"
      alt="hater-be-gone logo"
      id="header-img"
    />
  </header>
`;
