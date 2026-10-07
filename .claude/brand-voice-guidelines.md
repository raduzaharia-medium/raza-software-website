# Raza Software Brand Voice Guidelines

## Generation Metadata
- Created: 2026-10-07
- Version: 3 (incorporates founder feedback and the site fixes made on 2026-10-07)
- Replaces: v2 (archived as `brand-voice-guidelines-2026-10-07-v2.md`; v1 is `brand-voice-guidelines-2026-10-07.md`)
- Sources: Website copy in this repo (`index.html`, `local-first.html`, `privacy.html`, `security.html`, `support.html`) plus direct founder input on intent, "we" voice, architecture rationale, pricing language, and spelling
- Documents processed: 5 (published web pages)
- Conversations analyzed: 0
- Discovery report used: No
- Overall confidence: Medium-High for voice and messaging; Medium-Low for contexts beyond the website

---

## Executive Summary

Raza Software presents software the way its maker would explain it to anyone: plainly, honestly, and without talking down to the reader. This voice emerged naturally. It is not a positioning exercise, and it is not assumed to be a market edge or an SEO asset. The brand does not ask for trust. It tries to earn it by explaining how things work and by inviting people to verify the claims.

The central claim is that your data never leaves your home network, and it is backed by architecture, not adjectives. The Mac is the server and the single source of truth. Clients are deliberately thin. Files are streamed, never copied or synced. Every page also names its own tradeoffs.

Honesty is not enough on its own. If readers don't understand or connect with the product, the explanation was wasted. Copy should therefore be clear, curious, and persuasive. It may stretch for a hook, as long as the body pays it off truthfully.

---

## We Are / We Are Not

Voice is constant across all content.

| We Are | We Are Not |
|--------|------------|
| **Plainspoken**: short declarative sentences, everyday words, never patronizing | **Marketing-y or condescending**: buzzword filler, or explaining down to the reader |
| **Honest about limits**: we state the tradeoff before the reader finds it | **Spin-y**: hiding caveats or burying them in fine print |
| **Provable**: claims rest on architecture the reader can check; trust is earned, not requested | **Pledge-based**: "trust us" or policy language that softens bad news |
| **Respectful of ownership**: your files, your Mac, your formats | **Extractive**: nudging toward accounts, tiers, or lock-in |
| **Credible and human**: an article-like "we", backed by a developer who actually answers | **Corporate or inflated**: faceless committee voice, or implying a bigger company than exists |
| **Calm, confident, and persuasive**: clear benefit, a hook that makes people curious | **Alarmist, preachy, or so understated the benefit is lost** |

### Voice Attributes Detail

#### Plainspoken
- **What it means**: Technical subjects in everyday terms. The mechanism is named, jargon is unpacked, the reader is never talked down to.
- **How it shows up**: Short sentences and fragments. "Your Mac is the server. That's the whole idea." Home analogies ("the same way music plays on every HomePod").
- **What to avoid**: Buzzword stacks, enterprise phrasing, over-explaining the obvious.
- **Evidence**: `index.html` hero; `security.html` ("The network itself is the boundary.").
- **Confidence**: High

#### Honest about limits
- **What it means**: Every benefit is paired with its cost. Honesty is a feature.
- **How it shows up**: Sections like "The honest tradeoff" and "The honest caveat". Plain admissions ("If your Mac's hard drive fails and you have no backup, you could lose your library."), followed by practical help.
- **What to avoid**: Omitting the downside, or hedging with legalese.
- **Accuracy without pedantry**: claims must be literally true, but we don't "well, actually" the reader. Mention an exception once, briefly, where it applies, and move on (e.g. the Photos map view loads Apple Maps tiles: one short line, no lecture). Don't state absolutes the product can't back ("never makes an outbound request. Ever."). Prefer claims about what matters, such as "your library never goes to any server."
- **Evidence**: `local-first.html`, `security.html`.
- **Confidence**: High

#### Provable (trust is earned)
- **What it means**: The brand never asks for trust. It supplies the means to check.
- **How it shows up**: "Privacy is architectural, not a promise." Invites verification with Little Snitch or Charles Proxy, or by unplugging the router.
- **What to avoid**: "We value your privacy" without a mechanism. Any claim the reader can't test.
- **Evidence**: `privacy.html` ("Can you verify this? Yes.").
- **Confidence**: High

#### Respectful of ownership
- **What it means**: The user owns the library. The app is a window onto it.
- **How it shows up**: "Your files, in open formats, always." Tenant vs owner framing. Files are never copied: the server is the source of truth and clients stream from it. Edits write back to the original files in open standards.
- **What to avoid**: Language implying we hold, manage, or gate their data.
- **Evidence**: `local-first.html`, `index.html`.
- **Confidence**: High

#### Credible and human
- **What it means**: A small maker who is accountable, with the weight of an article-style "we".
- **How it shows up**: "We" in marketing, privacy, and explainer copy gives an editorial, considered tone. Support replies come from the developer directly ("you'll hear back from the developer, not a support queue").
- **What to avoid**: "Our team of experts", "our dedicated engineers", or anything that overstates scale. If a sentence would be false with one person behind it, rewrite it.
- **Evidence**: `support.html`; "we" throughout the explainer pages.
- **Confidence**: Medium

#### Calm, confident, and persuasive
- **What it means**: Strong conviction and even temper, with copy that is meant to land with the reader.
- **How it shows up**: Concrete contrasts (✗/✓ lists), dated facts ("In 2011… In 2020…"), a curiosity hook up front ("Because we have none."). Always lead with the benefit to the reader. End pages with a clear next step.
- **What to avoid**: Fear appeals, exclamation marks, naming competitors without a dated factual basis, and calm so flat the product never sells itself.
- **Evidence**: `local-first.html`, `index.html`.
- **Confidence**: Medium-High

**Curiosity rule:** it is fine to step over the line occasionally, such as a provocative headline or a surprising framing, if (1) the claim is literally true, (2) the page explains it right away, and (3) nothing in it contradicts the honesty pillar.

---

## Brand Personality

- **Archetype**: The Honest Maker, with a streak of curiosity. A competent engineer-neighbour who built it for their own household and explains it plainly, including where it falls short, and who occasionally teases an idea to make you lean in.
- **If our brand were a person**: Quietly confident, a bit dry, allergic to hype, glad to explain, and aware that nobody cares about a good explanation they never read.
- **Core values expressed in voice**: Earned trust, privacy by architecture, user ownership, open formats, thin clients and a single source of truth, no wasted disk space, honest tradeoffs, simplicity.
- **Note**: The voice emerged naturally from how the founder presents software. It is not claimed as a market advantage.

---

## Messaging Framework

### Primary Value Proposition
Your Mac is the server: Raza Photos and Raza Songs turn the folders on your Mac into a library every iPhone and iPad at home can browse and play. Nothing is copied or synced, and there is no cloud, no account, and no subscription tracking you.

Variations observed:
- "Apps that live on your home network. Not in the cloud." (`index.html`)
- "Your library doesn't go through our infrastructure. Because we have none." (`local-first.html`)
- "We collect nothing. We record nothing. We transmit nothing." (`privacy.html`)
- "Designed for trusted home networks" (`security.html`)

### Key Message Pillars

1. **Local-first: the server is the source of truth**
   - Core idea: Files stay in your folders on the Mac. Clients are thin and stream directly from the server. We never copy and never sync, which protects trust and also avoids wasting disk space on duplicate libraries.
   - When to use: Homepage, app pages, comparisons with iCloud/Google/Spotify, any "why not sync?" question.
   - Example phrasing: "Your phone doesn't keep a copy. It streams from your Mac, so there's one library and one source of truth."

2. **Privacy is architectural**
   - Core idea: No outbound requests, no telemetry, no accounts, so there is nothing to leak.
   - When to use: Privacy, security, App Store copy.
   - Example phrasing: "There is no server for your data to reach."

3. **You own it: open formats, no lock-in**
   - Core idea: Edits write back to the original files (XMP/EXIF/IPTC, audio tags). You can leave any time.
   - When to use: Metadata, editing, and "leaving iCloud" content.
   - Example phrasing: "Raza Photos could disappear tomorrow and your files would be completely unaffected."

4. **Honest tradeoffs**
   - Core idea: We name the costs (backup is your job, anyone on your Wi-Fi can browse) and show how to handle them.
   - When to use: Wherever a limitation exists. It builds trust.
   - Example phrasing: "The honest tradeoff: backup is your responsibility."

5. **Seamless for the whole household (proven, not claimed)**
   - Core idea: Zero configuration. Automatic discovery, no passwords for family, per-device read-only controls.
   - When to use: Feature pages, support, family content, always attached to the specific mechanism.
   - Example phrasing: "Open the app on your iPhone and your library is there within a second or two. Nothing to set up."

### Competitive Positioning
- vs. cloud photo/music services (iCloud, Google Photos, Spotify): one library on your own hardware, no ongoing dependency, and no tenant relationship to your own memories (`local-first.html`).
- vs. sync-based approaches: we don't maintain per-device copies. One source of truth, no duplicated storage, nothing to reconcile.
- vs. Status Quo: files in open formats, always yours.
- Self-hosted alternatives (e.g. Plex/Jellyfin): not addressed in sources. Open question below.

---

## Tone-by-Context Matrix

Voice is constant. Tone flexes by context. Website contexts are evidenced. Others are **inferred**.

| Context | Formality | Energy | Technical Depth | Key Principle |
|---------|-----------|--------|-----------------|---------------|
| Homepage / product pages | Medium | Medium-High | Low-Medium | Hook, then mechanism, then next step |
| Privacy & security pages | Medium-High | Low (calm) | Medium-High | State facts precisely; invite verification |
| Support / FAQ | Low-Medium | Warm | Medium | Diagnose, fix, explain why; sign as the developer |
| Comparison / local-first explainers | Medium | Medium | Medium | Contrast with facts; include the downside |
| App Store description *(inferred)* | Medium | Medium | Low | Same promises, shorter; lead with benefit |
| Social media *(inferred)* | Low | Medium-High | Low | One concrete claim and a curiosity hook |
| Cold outreach *(inferred)* | Medium | Medium | Low | Short, specific benefit; no pressure |
| Proposals / press *(inferred)* | Medium-High | Low-Medium | Medium-High | Architecture-first facts |

### Context-Specific Guidelines

#### Product & Marketing Pages
- **Overall tone**: Confident, plain, with a hook. Selling is allowed and expected.
- **Opening approach**: A short declarative claim or a curiosity hook, then a one-line elaboration.
- **Do's**: Name the mechanism. Pair claims with how they work. Use ✗/✓ contrasts. End with a clear call to action.
- **Don'ts**: Unproven superlatives, fake urgency, or a hook the page doesn't pay off.
- **Example**: "Browse your Mac photo library on any iPhone, iPad, or Mac in the house. No cloud, no server, no setup."

#### Privacy & Security
- **Overall tone**: Calm, precise, transparent.
- **Opening approach**: Say what the page is not, then state the fact.
- **Do's**: List what the app does not do. Explain each permission. Offer a way to verify.
- **Don'ts**: Euphemism, "we take your privacy seriously", unscoped "100% secure".
- **Example**: "Your home network is already a trusted perimeter. Our apps treat it as one, rather than adding a second perimeter on top of it."

#### Support & FAQ
- **Overall tone**: Helpful, direct, human. First person is fine here.
- **Opening approach**: Diagnose the likely cause first.
- **Do's**: Offer the fix and the reason. Invite an email to the developer.
- **Don'ts**: Blame the user, or deflect to a generic "contact support".
- **Example**: "This is expected. Both apps work entirely on your local home network, so there is nothing to connect to when you leave your home Wi-Fi."

---

## Terminology Guide

Spelling: **US English** (e.g. "organization", "organize", "color"). Note: current site copy still has some British forms (e.g. "organisation", "organisational"). See Data Gaps.

### Must-Use Terms
| Term | Usage | Instead Of | Example |
|------|-------|------------|---------|
| Raza Photos / Raza Songs | Official product names | "the app", "Raza Music" in public copy | "Raza Songs plays audio using Apple's native framework." |
| home network | Where the library lives and is served | "the cloud", "our servers" | "Apps that live on your home network." |
| your Mac is the server | Core mental model | "host", "backend" | "Your Mac is the server. That's the whole idea." |
| stream | How clients get files | "sync", "download", "copy" | "Your iPhone streams from your Mac." |
| source of truth | The server holds the one real library | "master copy", "primary replica" | "The Mac is the source of truth." |
| library | The user's collection | "content", "assets" | "Browse your library on any iPhone." |
| library sharing | The server feature: the Mac makes the library available to your own devices at home (the app's switch says "Publish this library to your home network"). Never plain "sharing" | "sharing" alone, "sync" | "Library sharing is off, so the app is a viewer on your Mac." |
| sending photos to other people | The Raza Photos share-sheet feature (up to 50 photos at a time, original files, on macOS and iOS; Photos only, no song sharing). Keep it separate from library sharing | "sharing" alone | "Select a photo and send it to WhatsApp with the share sheet." |
| local-first | Principle name | "offline-only" | "Local-first isn't a limitation. It's the point." |
| open formats (XMP/EXIF/IPTC, audio tags) | Portability claim | "standard metadata" alone | "We deliberately use open metadata standards." |

### Preferred Terms
| Term | Usage | Example |
|------|-------|---------|
| thin client | Fine in technical contexts; elsewhere say "your iPhone doesn't keep a copy" | "Clients are thin by design: no copies, no wasted space." |
| seamless | Allowed, but only attached to a proven specific (see rule below) | "Discovery is seamless: open the app and the library appears." |
| Bonjour | Name the discovery mechanism when explaining | "Your devices find the Mac automatically over Bonjour." |
| no account, no subscription, no telemetry | The recurring triplet | "No cloud, no account, no subscription." |
| read-only | Family access controls | "Set a specific iPhone to read-only mode." |
| Tailscale (optional remote access) | Only for remote access, always as optional and invite-only | "Remote access is optional, through encrypted, invite-only Tailscale." |
| currently free | Pricing statement (see Pricing Language) | "Raza Photos is currently free while we grow our user base." |

**Seamless rule:** "seamless" is welcome when the next sentence shows what makes it so. Without proof it is empty boasting.

### Avoid These Terms
| Term | Reason | Alternative |
|------|--------|-------------|
| "we value your privacy" | Pledge language; our claim is architectural | "There is no server for your data to reach." |
| "revolutionary", "best-in-class", "effortless" (unproven) | Empty boasting | State the concrete result |
| "secure" without scope | Overclaims; the apps are open within the home network by design | "Not reachable from the internet" |
| "never makes an outbound request", "no internet connection", "works offline" (as absolutes) | Not literally true: optional Tailscale remote access connects your own devices directly, and the Photos map view fetches Apple Maps tiles | "Your library never goes to any server, ours or anyone's." / "Songs talks only to your own devices." |
| "cannot be accessed remotely" | Optional remote access exists | "By default, not reachable from outside your home." |

### Never-Use Terms
| Term | Reason |
|------|--------|
| "sync", "syncing" (for what our apps do) | Wrong model. Sync means local copies reconciled across devices. We keep one source of truth and stream. We avoid it by design, to save disk space and keep the server authoritative, not because we can't. |
| "cloud" as a feature, "our servers" | Contradicts the core claim: we have no infrastructure |
| "unlimited", "forever free", "free forever" | Nothing is unlimited, and the current free period is not a permanent promise |

---

## Pricing Language

- **Internal fact (do not publish)**: The apps are free until they reach critical mass (about 1,000 users). The threshold and plan stay internal.
- **Decided public message (founder, 2026-10-07)**: make clear it will be a **one-time purchase**, and that **for now it's free**.
- **Approved phrasing**: "Free for now. It will be a one-time purchase, never a subscription." / "Currently free while we build our user base; later a one-time purchase."
- **Keep consistent with**: the "one-time purchase, no subscription" lines on `local-first.html`.
- **Never**: state the 1,000-user figure, promise "free forever", or hint at a subscription.
- **Confidence**: High (founder-stated)

---

## Content Examples

### Excellent Examples

> "Privacy is architectural, not a promise. The apps make no outbound requests and have no telemetry, so there is no server for your data to reach." (`index.html`)

Why it works: short, concrete, a mechanism instead of a pledge.

> "The honest tradeoff: backup is your responsibility. … We think it is worth being honest about it rather than pretending it does not exist." (`local-first.html`)

Why it works: names the cost up front, then helps the reader solve it.

### Illustrative (written for this document, not from sources)

**On-brand, with a curiosity hook:**
> "Why doesn't your phone keep a copy of your photos? Because it doesn't need one. Your Mac is the source of truth, and your iPhone streams from it. One library, no duplicates, no sync to babysit."

Why it works: opens with a question, pays it off immediately, uses the approved terms (stream, source of truth), and states a benefit.

**Off-brand:**
> "Experience the future of seamless, secure photo sync with enterprise-grade protection!"

Off-brand: "sync" is wrong, "seamless" has no proof, "secure" and "enterprise-grade" are unscoped boasts, and the exclamation mark adds hype. Better: "Browse your Mac's photo library on any iPhone at home. No cloud, no account, nothing copied."

---

## Confidence Scores

| Section | Confidence | Basis | Sources |
|---------|------------|-------|---------|
| Voice Attributes | High | Strong repeated patterns plus founder confirmation | 5 pages + founder |
| Messaging Framework | High | Consistent pillars; architecture rationale confirmed by founder | 5 pages + founder |
| Tone Matrix | Medium-Low | Only web contexts evidenced; others inferred | 5 pages |
| Terminology | High | Founder directly confirmed seamless, sync, unlimited, spelling | Founder + 5 pages |
| Pricing Language | High | Founder-stated | Founder |
| Brand Personality | Medium | Synthesis plus founder confirmation | 5 pages + founder |
| Competitive Positioning | Low | Only cloud contrast; no self-hosted alternatives | 1 page + founder |

---

## Open Questions for Team Discussion

### High Priority
1. **"Who we are" page: how much to disclose?**
   - What was found: The site says only "based in the European Union". The founder wants to stay private but not at the expense of the apps' credibility.
   - Agent recommendation: a short page with what Raza Software is, that it is one independent developer in the EU, why the apps exist, the principles (no ads, no tracking, no data sales, one-time purchase), and the contact route. A name or photo is optional. Draft three disclosure levels on request.
   - Need from you: the list of what is public and what stays private.
2. **What's new pages.**
   - Plan: `photos/whats-new.html` and `music/whats-new.html`, newest first, version + date + plain-language summary, linked from each app's footer column and app page. Optional Atom feed.
   - Need from you: release history (version, date, changes) for each app.

### Medium Priority
2. **Self-hosted competitors.** Should Plex, Jellyfin, or NAS vendor apps ever be named? Recommendation: address them by category ("server apps that keep their own database and copies") rather than by name, and only where the thin-client / single-source-of-truth contrast is the point.
3. **Hook budget.** How far is "stepping over the edge" for curiosity? Recommendation: use the three-part curiosity rule above and check it per piece; I can flag borderline lines when drafting.
4. **Non-website contexts.** Provide App Store text, social posts, or outreach drafts (even rough ones) so the inferred tone rows can be replaced with evidence.

### Resolved in v3 (site changes made 2026-10-07, uncommitted at time of writing)
- Outbound/Tailscale wording: corrected on the homepage, both app pages, `privacy.html` and `security.html`; new "Remote access (optional)" section on the privacy page linking to `remote-access.html`. Mechanism, per the founder: the Mac shares its Tailscale address with the peer over Bonjour at home; away from home, Bonjour fails and the iPhone connects directly to that address.
- Apple Maps: the Photos map view fetches Apple Maps tiles. Stated once, lightly, on the Photos page and privacy page. No lecture.
- Website privacy: privacy page now states no cookies, analytics, tracking, or third-party scripts, plus GitHub Pages host logs (not received or used by us). Site code audit confirmed no external requests except links to the App Store and the site's own domain.
- Spelling: **US English** applied across the site (organization, prioritized, recognize, behavior).
- Pricing: free for now, one-time purchase later; see Pricing Language.

### Resolved in v2
- "We" voice: **keep "we"** for marketing/privacy/explainer copy; first person ("I") for support replies, with the no-inflation guardrail.
- Seamless: **allowed when proven**. Sync: **never**. Unlimited: **never**.
- Honest Maker archetype: **confirmed**, with a curiosity streak.

---

## Data Gaps & Recommendations

- [x] US spelling applied across the site.
- [x] Outbound/Tailscale, site-privacy, and Apple Maps wording corrected.
- [ ] Add the "Who we are" page and What's new pages (see Open Questions 1 and 2).
- [x] Pricing sections on both app pages reworded (2026-10-07): the price is shown as $20, "One-time purchase", bullet "Updates included", and the free period lives on the button ("Download on the App Store, free for now"). Founder decisions: updates are included for everyone; the price is the real price and "free" is a temporary offer. Avoid "limited time" (the free period ends at a user count, not a date, and the brand avoids pressure language). Open: whether to state that people who download while free keep it for good.
- [ ] Check the App Store listing price and description match this wording (not in this repo). When the app turns paid, change the "Download Free" buttons and the Pricing section.
- [ ] Add an explicit "why we don't sync" explainer. The thin-client and single-source-of-truth rationale is a strong pillar that the site only implies today. A short page or section would also help SEO and curiosity, though the founder does not claim it as an edge.
- [ ] Sales, outreach, social content: none evidenced.
- [ ] Customer conversations: support emails or reviews would show how the developer talks one-to-one.
- [ ] Visual identity: not covered (lives in `style.css`/assets).

---

## Appendix: Sources

| # | Source | Platform | Type | Date | Key Sections Used | Confidence |
|---|--------|----------|------|------|-------------------|------------|
| 1 | `index.html` | Local repo (website) | OPERATIONAL | 2026 | Value prop, pillars | H |
| 2 | `local-first.html` | Local repo (website) | OPERATIONAL | 2026 | Voice, honesty, ownership | H |
| 3 | `privacy.html` | Local repo (website) | OPERATIONAL | Updated July 2026 | Provable attribute | H |
| 4 | `security.html` | Local repo (website) | OPERATIONAL | 2026 | Caveats, security tone | H |
| 5 | `support.html` | Local repo (website) | OPERATIONAL | 2026 | Personal voice, support tone | M |
| 6 | Founder feedback (chat) | Direct input | AUTHORITATIVE | 2026-10-07 | Intent, "we", sync rationale, pricing, spelling | H |
