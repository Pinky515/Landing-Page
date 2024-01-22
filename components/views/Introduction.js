import html from "html-literal";

export default () => html`
  <section id="promo-video">
    <div class="title-text">
      <h1>Hater Be-Gone</h1>
      <h4>We know what it's like to be hated on. We can help you overcome.</h4>
    </div>
    <iframe
      id="video"
      allow="autoplay;"
      allowfullscreen
      style="border:none"
      src="https://clipchamp.com/watch/M8ILQaAVTUD/embed"
      width="640"
      height="360"
    ></iframe>
  </section>
`;
