"use client";

import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import { useEffect } from "react";

export default function Deck() {
  useEffect(() => {
    let deck = new Reveal({
      plugins: [Markdown],
    });
    deck.initialize();
  }, []);

  return (
    <main id="root" className="reveal">
      <div className="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
      </div>
    </main>
  );
}
