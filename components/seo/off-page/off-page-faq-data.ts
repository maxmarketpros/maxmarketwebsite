export type OffPageFaq = { q: string; a: string }

export const offPageFaqs: OffPageFaq[] = [
  {
    q: "What is off-page SEO and how does it differ from on-page and technical SEO?",
    a: "Off-page SEO is everything Google learns about your site from sources that aren't your site — backlinks from other domains, brand mentions in the press, citations in directories, reviews, podcast guest spots, and links inside bylined articles on other publications. On-page SEO is content + HTML structure on your own URLs (titles, meta, schema, internal links). Technical SEO is plumbing (crawl, speed, indexing). Off-page SEO is the single biggest authority signal — without it, on-page and technical gains plateau because Google has no external evidence that other sites trust you.",
  },
  {
    q: "How long does off-page SEO take to improve Google rankings?",
    a: "First ranking movement usually shows 30–60 days after authority links start landing, because Google has to crawl the linking page, re-crawl your site, and re-evaluate its trust graph. Significant domain authority gains land at 90–120 days, and compounding effects — where new links rank faster because your overall DR is higher — kick in around month 6. Long-tail keywords often move in the first 30 days; competitive head terms need the full compounding cycle.",
  },
  {
    q: "What is a backlink, and what makes one 'high quality'?",
    a: "A backlink is a hyperlink from another website to yours. Quality is determined by five factors: (1) Domain Rating of the linking site, (2) topical relevance — a plumbing site linking to a plumbing site matters more than a generic site, (3) link placement — an editorial link inside body content beats a sidebar link, (4) anchor text — descriptive, non-stuffed anchors, and (5) link attribute — dofollow passes equity, nofollow is still a brand signal but passes no ranking authority. One editorial link from a DR 90 relevant publication often outperforms 100 low-quality directory citations.",
  },
  {
    q: "What is Domain Rating (DR) and does it actually matter?",
    a: "Domain Rating (Ahrefs) and Domain Authority (Moz) are third-party metrics estimating a site's link equity on a 0–100 logarithmic scale. Google doesn't publish an official equivalent, but DR correlates strongly with real ranking power — the gap from DR 40 to DR 50 is much larger than from DR 20 to DR 30. We use DR as a proxy target for link building (aim for referring domains with DR 40+) and track client DR growth monthly. DR isn't the whole story, but if competitors have DR 60 and you're at DR 20, off-page SEO is where the ranking gap lives.",
  },
  {
    q: "Do you use guest posts, PBNs, or paid link networks?",
    a: "We publish bylined guest content on relevant industry sites — that's legitimate off-page SEO and has been since Google Penguin. We do NOT use private blog networks (PBNs), paid link networks, link farms, comment spam, forum spam, or any scheme that violates Google's link spam policy. Our link building is editorial, relationship-based, and recoverable — meaning if Google ever scrutinized the profile, every link has a real editorial rationale and a real human decision behind it.",
  },
  {
    q: "How many referring domains do we need to rank?",
    a: "It depends on the query difficulty and your competitors' profiles. We benchmark your top 3 organic competitors for your target keywords and compute the referring-domain gap. For local service queries you often need 30–80 referring domains. For competitive national head terms you may need 300–500+. The absolute count matters less than the rate of quality referring-domain growth versus competitors — if you add 20 editorial referring domains per month and they add 5, you'll overtake them even from behind.",
  },
  {
    q: "What is anchor text diversity and why is it important?",
    a: "Anchor text is the clickable text of an inbound link. Diversity means your backlink profile contains a natural mix — branded ('Max Market Pros'), topical ('local SEO agency'), URL ('maxmarketpros.com'), generic ('click here'), and partial-match ('SEO for service businesses'). An over-optimized profile where 70% of anchors are exact-match keywords looks manipulative to Google's spam classifiers and can trigger a penalty. We engineer for a distribution that looks like organic editorial linking — 40–60% branded, 10–20% topical, rest a mix.",
  },
  {
    q: "How does digital PR fit into an off-page SEO program?",
    a: "Digital PR is how we earn the highest-tier off-page SEO wins. We develop newsworthy angles (proprietary data, industry trend reports, expert commentary), package them as press pitches, and place them with journalists at Forbes, Inc., Entrepreneur, and industry flagships through established relationships + cold outreach. One Forbes placement with a dofollow editorial link can move rankings more than a quarter of lower-tier link building. We also run HARO (Help a Reporter Out) answering cycles to earn quote-based mentions in ongoing news coverage.",
  },
]
