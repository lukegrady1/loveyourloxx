import type { ReactNode } from "react";
import type { FaqItem } from "@/components/Faq";

/**
 * Per-method page copy, carried over word for word from the previous
 * Love Your Loxx website (loveyourloxx.com) at Ms Manae's request.
 * Keyed by the method id in `src/data/methods.ts`.
 */
export type MethodPage = {
  /** Page heading, as it appeared on the old site. */
  heading: string;
  /** Browser/SEO title. */
  title: string;
  description: string;
  body: ReactNode;
  faqs: FaqItem[];
};

export const METHOD_PAGES: Record<string, MethodPage> = {
  "micro-bead": {
    heading: "Micro Bead Method",
    title: "Micro Bead Hair Extensions",
    description:
      "Micro bead (micro link) hair extensions in Scottsdale by Ms Manae. A strand by strand method with small copper beads, no heat and no glue. Consultations by phone or in person.",
    body: (
      <>
        <p>
          MICRO BEAD HAIR EXTENSIONS also known as MICRO LINK HAIR EXTENSIONS is a strand by strand method which involves small copper beads
          clamped onto your natural hair. A crochet hook is loaded with the beads and the bead is slid up to the root of your hair and then a hair
          extension strand is placed inside the bead and then clamped down to secure the strand in place. The result looks very natural and
          undetected to the human eye if the placement is done properly (I am a master at hiding the strands).
        </p>
        <p>
          The application process takes anywhere from 1.5-2.5 hours and can last 3-4 months. I suggest the clients come in to have them redone once
          the bead has grown an inch from the scalp. A lot of stylist do what’s called &quot;move ups/tighten ups&quot;; but, I don’t believe in
          this practice...the reason being the hair cuticle runs in a downward position and if you are opening a copper bead and sliding it up the
          cuticle (isn’t healthy for your healthy cuticle), it can cause damage to your existing hair and I am all about preserving the integrity of
          my clients hair.
        </p>
        <p>
          Another reason I don’t believe in this practice is that you should be trimming your split ends at least every three months and if you
          don’t, when you remove the extensions, you will find your hair to be thin and jagged at the bottom. When a strand of hair begins to split,
          it splits into two and then eventually snaps off. The whole reason we ladies wear hair extensions is to have longer/thicker hair and in
          hopes that our natural hair will grow longer. It is best that the old set is removed and the hair trimmed before re applying the hair. New
          beads will be need each time; but, I keep them in stock for my clients. I actually prefer the beads called &quot;EURO LOC HAIR
          EXTENSIONS&quot;; because, the hold is more secure then any beads I have used over the years. There are many beads on the market and we
          can discuss your likes/dislikes during your HAIR EXTENSION consultation.
        </p>
        <p>
          Removal of the MICRO BEAD/MICRO LINK HAIR EXTENSIONS is a very easy process that takes 20-30 minutes. If you are wanting to reuse the
          hair, we may have to re tip or re-form the hair extension strand so that it will slide back into the bead easily.
        </p>
        <p>
          Application time is 30-60 minutes and you would need 40 to 60 books for a full head of hair extensions. This method isn’t for everyone
          and should be discussed during your consultation.
        </p>
      </>
    ),
    faqs: [
      {
        q: "How do I wash my hair while wearing MICRO BEAD/MICRO LINK HAIR EXTENSIONS?",
        a: (
          <p>
            You wash your hair like normal in the shower. Washing your hair in the sink with your head upside down could cause the hair extensions
            to tangle. Some say not to get conditioner on the beads but, I disagree with that. I secure the beads in a very sturdy fashion, so
            shampoo and conditioner does not impact the hold of the beads.
          </p>
        ),
      },
      {
        q: "Can I wash my hair daily?",
        a: (
          <p>
            It is better to wash your hair every three days (twice a week is best) to insure you don&apos;t dry out your hair extensions. You want
            to keep your hair extensions as healthy as possible to ensure that you can reuse them in the future.
          </p>
        ),
      },
      {
        q: "Can I use flat irons and blow dryers while wearing MICRO BEAD/MICRO LINK HAIR EXTENSIONS?",
        a: <p>Yes you may; but, please be careful not to hit the beads with heat and don&apos;t focus the blow dryer directly onto the bead.</p>,
      },
      {
        q: "How long does my natural hair have to be to get hair extensions?",
        a: (
          <p>
            For great results it is recommended to have 6-8 inches; but, I have done hair extensions on women with 3 inches of hair and have had
            perfect results. I am very skilled in layering/blending the hair extensions so that no one will know you are wearing MICRO BEAD/MICRO
            LINK HAIR EXTENSIONS.
          </p>
        ),
      },
      {
        q: "How long does the MICRO BEAD/MICRO LINK application/process take?",
        a: (
          <p>
            This varies from client to client...reason being is that some clients require more hair applied then others to complete their desired
            looks. Most are 1.5-2 hours; but, some can take up to three hours. Thickness of the clients hair can cause it to also take longer.
            I&apos;ve been doing this a long time; so, I am very fast at applying.
          </p>
        ),
      },
      {
        q: "Once the MICRO LINK/MICRO BEADS are in, do they feel heavy?",
        a: (
          <p>
            Yes, they will feel heavier at first; but, adding anything foreign to your hair can feel heavy; but, you will get use to it over time.
            Also, the first couple nights can be uncomfortable; because, I put the extension in very tight to ensure they do not fall out during
            the three or so months you are wearing the hair extensions.
          </p>
        ),
      },
      {
        q: "Do MICRO LINK/MICRO BEADS cause damage to my hair?",
        a: (
          <>
            <p>
              I always tell my clients this...&quot;it&apos;s who puts them, who takes them out, how you take care of them and the quality of hair
              extensions that were applied to your hair. The quality of hair extensions is the most important aspect when getting hair extensions.
              If poor quality hair (or cheap hair) is applied to your hair, it will be pretty at first; but, poor quality hair has a silicone
              coating used to make the hair look shinny and pretty; but, once that silicon coating is washed off, the hair will begin to matte and
              tangle and that can cause extreme damage to you hair and harder to have the hair removed.
            </p>
            <p>
              I also tell my clients that when I remove the hair extension strand, you will see strands of your exiting hair attached to the
              removed strand; because, it is normal for our hair to shed 50-100 strands of hair daily; but, if the hair is attached to a hair
              extension strand, it is unable to collect in a brush or fall to the ground. So don&apos;t be alarmed when/if you see your hair
              attached to a removed hair extension; because, that is very normal.
            </p>
          </>
        ),
      },
      {
        q: "Can I color my hair while wearing MICRO LINK/MICRO BEAD HAIR EXTENSIONS?",
        a: <p>Yes you can, it does not affect the beads.</p>,
      },
    ],
  },

  fusion: {
    heading: "Fusion/Strand by Strand Method",
    title: "Fusion Hair Extensions",
    description:
      "Keratin fusion hair extensions in Scottsdale by Ms Manae. The original strand by strand method with a small keratin bond, no maintenance between sets and a gentle, solution-free removal.",
    body: (
      <>
        <p>
          Fusion hair extensions are the most popular technique in the hair extension industry. The fusion method is where hair extension all
          began. It is a strand by strand method attached by a small keratin protein bond that is melted and coats to your natural hair. Our hair
          is made up of keratin and protein, so the keratin glue is non damaging to your hair. The result looks very natural; because, it blends
          with your natural hair and is non detectable. All you need to do is take care of the hair extensions like you care for your own natural
          hair, but remember that the hair extensions are not attached to your own scalp, so the hair needs to be feed with moisturizing products
          (I’ll suggest products to care for your hair during the installation process)
        </p>
        <p>
          I always recommend to my clients that they do a clarifying treatment on their hair once a month and then coat their hair with raw organic
          coconut oil and sleep with it in their hair for a night. The coconut oil is so fabulous for your own hair and especially for maintaining
          the health/integrity of the hair extensions.
        </p>
        <p>
          The application process takes about 2-3 hours to apply a full head and will last 3-4 months depending on the growth of your natural hair.
          I suggest to my clients that once the extensions have grown out an inch from the scalp, it is time to do a new set.
        </p>
        <p>
          During the 3-4 months, there is no maintenance required. Just treat your extensions as if they were your own natural hair and enjoy your
          new look. My removal process is different from others; because, most stylist use a acetone based solution to soften the keratin bonds;
          but, I don’t use the solution; because, I am all about protecting the integrity of my clients hair (acetone is very drying to the hair).
          Instead of using the solution, I use pliers to chomp/break the bonds and then carefully pull them down the shaft of the hair, this insures
          the least amount of damage to your existing hair. Good quality hair can be reused if the hair extensions have been cared for properly. I
          will teach you how to care for your extensions during the application process (I’m all about educating my clients so they can have a
          positive hair extension experience), If the hair extensions have been properly cared for, I can cut off the old keratin tip and add a new
          one and reapply it as if it were a new strand. I am one of the few stylist in the area willing to offer this service, because it is so
          tedious; but, I like to save my clients as much money as possible when choosing to wear hair extensions.
        </p>
        <p>
          My removal process is free unless you’ve worn your extensions too long. If the strands have grown out more than an inch, the new growth
          hair has the potential to dread up; because, the new growth hair is much more difficult to brush. If a client has worn the extensions past
          the recommended inch of regrowth and the hair has dreaded up, I charge $50 an hour to do the removal and the removal can be much more
          difficult. A normal removal can take 30-45 minutes where a dreaded removal can take up to two hours.
        </p>
      </>
    ),
    faqs: [
      {
        q: "How do I wash my hair while wearing KERATIN HAIR EXTENSION?",
        a: (
          <p>
            You wash your hair like normal in the shower. Washing your hair in the sink with your head upside down could cause the hair extensions
            to tangle. Some say not to get conditioner on the bond; but, I disagree with that. I only use the best keratin glue bonds when doing
            KERATIN HAIR EXTENSIONS, so the glue will not break down from washing and conditioning your hair.
          </p>
        ),
      },
      {
        q: "Can I wash my hair daily?",
        a: (
          <p>
            It is better to wash your hair every three days (twice a week is best) to insure you don&apos;t dry out your hair extensions. You want
            to keep your hair extensions as healthy as possible to ensure that you can reuse them in the future.
          </p>
        ),
      },
      {
        q: "Can I use flat irons and blow dryers while wearing KERATIN FUSION HAIR EXTENSIONS?",
        a: <p>Yes you may; but, please be careful not to hit your keratin bonds with heat and don&apos;t focus the blow dryer directly onto the bond.</p>,
      },
      {
        q: "How long does my natural hair have to be to get hair extensions?",
        a: (
          <p>
            For great results it is recommended to have 6-8 inches; but, I have done hair extensions on women with 3 inches of hair and have had
            perfect results. I am very skilled in layering/blending the hair extensions so that no one will know you are wearing KERATIN FUSION
            HAIR EXTENSIONS.
          </p>
        ),
      },
      {
        q: "How long does the KERATIN FUSION HAIR EXTENSION application/process take?",
        a: (
          <p>
            This varies from client to client...reason being is that some clients require more hair applied then others to complete their desired
            looks. Most are 2-3 hours; but, some can take up to five hours. Thickness of the clients hair can cause it to also take longer.
            I&apos;ve been doing this a long time; so, I am very fast at applying
          </p>
        ),
      },
      {
        q: "Once the KERATIN FUSION HAIR EXTENSIONS are in, do they feel heavy?",
        a: (
          <p>
            Yes, they will feel heavier at first; but, adding anything foreign to your hair can feel heavy; but, you will get use to it over time.
            Also, the first couple nights can be uncomfortable; because, I put the extension in very tight to ensure they do not fall out during
            the three or so months you are wearing the hair extensions.
          </p>
        ),
      },
      {
        q: "Do KERATIN FUSION HAIR EXTENSIONS cause damage to my hair?",
        a: (
          <p>
            I always tell my clients this...&quot;it&apos;s who puts them, who takes them out, how you take care of them and the quality of hair
            extensions that were applied to your hair. The quality of hair extensions is the most important aspect when getting hair extensions. If
            poor quality hair (or cheap hair) is applied to your hair, it will be pretty at first; but, poor quality hair has a silicone coating
            used to make the hair look shinny and pretty; but, once that silicon coating is washed off, the hair will begin to matte and tangle and
            that can cause extreme damage to you hair and harder to have the hair removed. I also tell my clients that when I remove the hair
            extension strand, you will see strands of your exiting hair attached to the removed strand; because, it is normal for our hair to shed
            50-100 strands of hair daily; but, if the hair is attached to a hair extension strand, it is unable to collect in a brush or fall to
            the ground. So don&apos;t be alarmed when/if you see your hair attached to a removed hair extension; because, that is very normal.
          </p>
        ),
      },
      {
        q: "Can I color my hair while wearing KERATIN FUSION HAIR EXTENSIONS?",
        a: <p>Yes you can. If the keratin glue is of good quality, it does not affect the bond.</p>,
      },
    ],
  },

  "tape-in": {
    heading: "Tape-Ins Method",
    title: "Tape-In Hair Extensions",
    description:
      "Tape-in hair extensions in Scottsdale by Ms Manae. Pre-taped wefts applied without tools, beads or glue, re-taped at maintenance and reusable up to four times.",
    body: (
      <>
        <p>
          TAPE IN HAIR EXTENSIONS are exactly what they sound like. TAPE IN HAIR EXTENSIONS are easily applied without the use of tools, beads,
          clips or keratin glue. The pre-taped wefts of hair are sandwiched on either side of the natural hair. Adhering them will not cause any
          damage to your hair and the results are seamless. TAPE IN HAIR EXTENSIONS are considered semi-permanent and can only last up to two
          months During maintenance the TAPE IN HAIR EXTENSIONS are removed, washed and the wefts are re-taped). If the hair quality is good you
          can reuse them over and over (up to four times).
        </p>
        <p>
          Application time is 30-60 minutes and you would need 40 to 60 books for a full head of hair extensions. This method isn’t for everyone
          and should be discussed during your consultation.
        </p>
      </>
    ),
    faqs: [
      {
        q: "HOW DO I CARE FOR YOUR TAPE IN HAIR EXTENSIONS?",
        a: (
          <>
            <p>
              You have to be very careful with using conditioners or hair products because this can cause the TAPE IN HAIR EXTENSIONS to come
              loose or slip off. This is a very common issue with TAPE IN HAIR EXTENSIONS (unlike other hair extension methods). Using products
              that are oily like argon oil, coconut oil is not recommended.
            </p>
            <p>
              You can style TAPE IN HAIR EXTENSIONS any way you like. You can use flat irons, curling irons and blow dryers; but, be aware not to
              hit the tape area with any heating device.
            </p>
          </>
        ),
      },
    ],
  },

  "hand-tied": {
    heading: "Hand Tied /Braidless Weft Method",
    title: "Hand Tied Hair Extensions",
    description:
      "Hand tied, braidless weft hair extensions in Scottsdale by Ms Manae. Long wefts attached to a flat row of micro beads with no braids and no glue.",
    body: (
      <>
        <p>
          HAND TIED HAIR EXTENSIONS are long weft tracks of hair that are attached to your hair by micro beads, side by side with very small gaps in
          between. They are then clamped flat using pliers. The weft of hair is then sewn in to the track of micro beads...unlike braided weft hair
          extensions, where a cornrow is created using your own hair and then the weft is sewn in (also called weaves). The HAND TIED HAIR
          EXTENSIONS method is very kind to the clients hair but, not suited for every type of hair. This method does limit the movement of your
          hair and the ability to placing your hair in pony tails is more difficult; but, a great way to thicken your hair.
        </p>
        <p>
          The application process can take 1.5-2 hours to apply a full head and can be worn for 4-6 weeks, depending on how quickly the wefts grow
          away from your scalp.
        </p>
        <p>
          Taking care of HAND TIED HAIR EXTENSIONS is just like caring for your own natural hair. You don’t have to worry about shampoos,
          conditioners, argon oil damaging the attachment origin.
        </p>
      </>
    ),
    faqs: [],
  },
};
