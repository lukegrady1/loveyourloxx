import type { FaqItem } from "@/components/Faq";

export const GENERAL_FAQ: FaqItem[] = [
  {
    q: "Who wears hair extensions?",
    a: (
      <>
        <p>
          Women of all ages, lifestyles and professions. I work with clients who want dramatic length for prom or a wedding, everyday women looking
          to vamp up their style, and women who have always struggled with fine or thin hair. My clients range from college students to women in
          retirement.
        </p>
        <p>
          Odds are you already know someone wearing extensions without realizing it. The best extensions aren’t seen or noticed. They blend
          seamlessly and simply enhance your look.
        </p>
      </>
    ),
  },
  {
    q: "Can extensions add volume, or only length?",
    a: (
      <p>
        Most people think extensions are only for length, but the majority of my clients wear them for fullness and volume. Length is absolutely
        possible too. My goal is to give you hair that gets you compliments. The last thing I want is for you to get compliments on your{" "}
        <em>extensions</em>.
      </p>
    ),
  },
  {
    q: "Which method is best for my hair?",
    a: (
      <>
        <p>That depends on a few things, and the only way to know for sure is a free consultation. We’ll look at:</p>
        <ul>
          <li>
            <strong>Your natural hair type and density.</strong> This is the most important factor, so you wear a system your hair can support
            without damage.
          </li>
          <li>
            <strong>Your lifestyle.</strong> How often do you work out, wash your hair or swim? Each system suits a different kind of woman.
          </li>
          <li>
            <strong>Your styling habits.</strong> Adding hair adds styling time. For some that’s a turn-off; for others it’s the chance to finally
            have hair that holds a curl.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "Will extensions damage my own hair?",
    a: (
      <>
        <p>Damage only happens when one of three things goes wrong:</p>
        <ol>
          <li>
            <strong>The wrong type of extension is applied.</strong> Something too heavy, or with too strong an attachment for your hair. This is
            why I insist on a consultation first.
          </li>
          <li>
            <strong>Not using proper care products.</strong>
          </li>
          <li>
            <strong>Skipping maintenance.</strong> Every method has a recommended timeline for maintenance or reapplication. Following it keeps
            your hair healthy.
          </li>
        </ol>
        <p>I would never do anything that could damage a client’s hair. If a method isn’t right for you, I’ll tell you.</p>
      </>
    ),
  },
  {
    q: "How long does my natural hair need to be?",
    a: (
      <p>
        For the best results I recommend 6 to 8 inches, but I have done beautiful, undetectable sets on women with as little as 3 inches of hair.
        Layering and blending is where my experience really shows.
      </p>
    ),
  },
  {
    q: "How do I wash my hair with extensions?",
    a: (
      <>
        <p>
          Wash like normal, standing in the shower. Avoid washing upside down in the sink, which can tangle the extensions. Some stylists say to
          keep conditioner off the bonds or beads; I disagree. I secure every attachment so well that shampoo and conditioner won’t affect the
          hold.
        </p>
        <p>Wash every two to three days (twice a week is ideal) so the extension hair doesn’t dry out. Healthy extension hair can be reused for your next set.</p>
      </>
    ),
  },
  {
    q: "Can I use heat tools?",
    a: <p>Yes. Flat irons, curling irons and blow dryers are all fine. Just don’t direct heat straight onto the beads, bonds or tape.</p>,
  },
  {
    q: "Will they feel heavy?",
    a: (
      <p>
        A little, at first. Anything new on your hair feels heavy for a day or two, and the first couple of nights can feel tight because I apply
        extensions securely so they stay put for the full three or so months. You’ll stop noticing them quickly.
      </p>
    ),
  },
  {
    q: "Can I color my hair while wearing extensions?",
    a: (
      <p>
        Yes. Coloring your natural hair does not affect quality beads or keratin bonds. Tape-ins are the exception, since oils and some products
        can loosen the tape. We’ll talk through your routine at the consultation.
      </p>
    ),
  },
  {
    q: "Why do I see my own hair on a removed strand?",
    a: (
      <p>
        It’s normal to shed 50 to 100 hairs a day. When your hair is attached to an extension strand, that shed hair can’t fall into your brush or
        onto the floor, so it collects on the strand instead. Seeing it at removal is completely normal and not a sign of damage.
      </p>
    ),
  },
  {
    q: "What does quality hair have to do with it?",
    a: (
      <p>
        Everything. Cheap hair is coated in silicone to look shiny in the package. Once that coating washes off, the hair mattes and tangles, which
        is hard on your natural hair and makes removal difficult. I supply only high-quality hair that can be reused set after set when cared for
        properly.
      </p>
    ),
  },
];

export const METHOD_FAQ: Record<string, FaqItem[]> = {
  "micro-bead": [
    {
      q: "How do I wash my hair with micro beads?",
      a: (
        <p>
          Like normal, in the shower. Avoid washing upside down in the sink, which can tangle the extensions. Shampoo and conditioner on the beads
          is fine; I secure them so well it won’t affect the hold. Wash every two to three days to keep the extension hair from drying out.
        </p>
      ),
    },
    { q: "Can I use flat irons and blow dryers?", a: <p>Yes, just be careful not to hit the beads with heat or point the blow dryer directly at them.</p> },
    {
      q: "How long does the application take?",
      a: (
        <p>
          Most clients are 1.5 to 2 hours; some take up to three depending on how much hair is needed and how thick your natural hair is. I’ve been
          doing this a long time, so I’m fast.
        </p>
      ),
    },
    {
      q: "Do micro beads damage hair?",
      a: (
        <p>
          Damage comes down to who puts them in, who takes them out, how you care for them, and the quality of hair applied. I handle the first two
          and teach you the third. The fourth is why I only supply premium hair.
        </p>
      ),
    },
    { q: "Can I color my hair while wearing them?", a: <p>Yes. Color does not affect the beads.</p> },
  ],
  fusion: [
    {
      q: "How do I wash my hair with keratin bonds?",
      a: (
        <p>
          Like normal, in the shower. Conditioner on the bonds is fine; I use only the best keratin so the bond won’t break down from washing. Wash
          every two to three days (twice a week is ideal).
        </p>
      ),
    },
    { q: "Can I use heat tools?", a: <p>Yes. Just don’t direct heat straight onto the bonds.</p> },
    {
      q: "How long does the application take?",
      a: <p>Usually 2 to 3 hours. Clients who need more hair or have very thick natural hair can take up to five.</p>,
    },
    {
      q: "What if I keep my extensions in too long?",
      a: (
        <p>
          If the bonds grow out more than an inch, the new growth can mat or “dread up” because it’s hard to brush. Those removals can take up to
          two hours and are charged at $50 per hour. Coming in on schedule keeps removal free and easy.
        </p>
      ),
    },
    { q: "Can I color my hair with fusion extensions?", a: <p>Yes. Color does not affect quality keratin bonds.</p> },
  ],
  "tape-in": [
    {
      q: "How do I care for tape-in extensions?",
      a: (
        <p>
          Keep oily products and heavy conditioner away from the tape itself. Wash and style as normal otherwise, and come in for maintenance around
          the two-month mark.
        </p>
      ),
    },
    {
      q: "Can I style tape-ins with heat?",
      a: <p>Yes. Flat irons, curling irons and blow dryers are all fine. Avoid touching the tape area with any heated tool.</p>,
    },
    {
      q: "Are tape-ins good for fine hair?",
      a: (
        <p>
          They can be. The wefts are lightweight and lie flat, which suits finer hair well, but density and lifestyle matter. We’ll decide together
          at your consultation.
        </p>
      ),
    },
  ],
  "hand-tied": [
    {
      q: "Is hand tied the same as a weave?",
      a: (
        <p>
          No. A weave uses a cornrow braid of your own hair as the base, which can pull on the scalp. Hand tied wefts are sewn onto a flat row of
          micro beads instead, with no braiding.
        </p>
      ),
    },
    {
      q: "Can I wear my hair up?",
      a: (
        <p>
          Low and loose styles are fine. High, tight ponytails are harder with wefts because the track can show. If you live in a ponytail, I may
          suggest a strand-by-strand method instead.
        </p>
      ),
    },
    { q: "How often do I come in?", a: <p>Every 4 to 6 weeks, to move the wefts back up to the scalp.</p> },
  ],
};
