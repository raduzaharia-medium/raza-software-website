# Raza Software Brand Voice Guidelines

## Generation Metadata
- Created: 2026-10-07
- Version: 1
- Replaces: n/a (first version)
- Sources: Website copy in this repo: `index.html`, `local-first.html`, `privacy.html`, `security.html`, `support.html`
- Documents processed: 5 (published web pages; no internal brand documents)
- Conversations analyzed: 0
- Discovery report used: No (no document platforms were connected; `/brand-voice:discover-brand` could not run)
- Overall confidence: Medium. The voice is very consistent across all five pages, but every source is the same author and channel (the website). There is no guidance for sales, social, or email contexts.

---

## Executive Summary

Raza Software sounds like a developer who built the thing and is explaining it plainly to a neighbour. The voice is calm, direct, and technically honest. It makes one big claim, that your data never leaves your home network, and backs it with architecture rather than adjectives. It never oversells: every page includes the tradeoff, the caveat, or the limit ("The honest tradeoff", "The honest caveat").

Content should feel like reading a well-written README by someone who respects you. Sentences are short and declarative. Claims are concrete and verifiable ("you can run Little Snitch and see for yourself"). The brand sets itself against subscription, cloud, and lock-in culture, but it argues by explaining, not by sneering.

---

## We Are / We Are Not

| We Are | We Are Not |
|--------|------------|
| **Plainspoken**: short declarative sentences, everyday words | **Marketing-y**: buzzwords, superlatives, "revolutionary", "seamless" |
| **Honest about limits**: we state the tradeoff before the reader finds it | **Spin-y**: hiding caveats or burying them in fine print |
| **Verifiable**: claims rest on architecture the reader can check | **Promise-based**: "trust us" or policy language that softens bad news |
| **Respectful of ownership**: your files, your Mac, your formats | **Paternalistic or extractive**: nudging toward accounts, tiers, or lock-in |
| **Personal**: a real developer answers, not a queue | **Corporate**: faceless, committee voice |
| **Calm and confident**: firm conviction, no hype | **Alarmist or preachy**: fear-mongering about the cloud, moralising |

### Voice Attributes Detail

#### Plainspoken
- **What it means**: Technical subjects explained in everyday terms, with the mechanism named but jargon unpacked.
- **How it shows up**: Short sentences and fragments for emphasis. "Your Mac is the server. That's the whole idea." Analogies from home life ("the same way music plays on every HomePod").
- **What to avoid**: Buzzwords, stacked adjectives, enterprise phrasing.
- **Evidence**: `index.html` hero: "Apps that live on your home network. Not in the cloud." / `security.html`: "The network itself is the boundary."
- **Confidence**: High

#### Honest about limits
- **What it means**: Every benefit is paired with its cost. Honesty is a feature, not a disclaimer.
- **How it shows up**: Dedicated sections named "The honest tradeoff" and "The honest caveat". Plain admissions: "If your Mac's hard drive fails and you have no backup, you could lose your library." Then practical help (3-2-1 backups, guest Wi-Fi).
- **What to avoid**: Omitting the downside, or hedging with legalese.
- **Evidence**: `local-first.html` ("We think it is worth being honest about it rather than pretending it does not exist."); `security.html` ("anyone on your main network can see your library").
- **Confidence**: High

#### Verifiable
- **What it means**: Privacy and security claims are structural facts, not pledges.
- **How it shows up**: "Privacy is architectural, not a promise." "There is no server to send your photos or music to." Invites the reader to check with Charles Proxy or Little Snitch, or to unplug the router.
- **What to avoid**: Words like "we value your privacy" without mechanism.
- **Evidence**: `privacy.html`: "This is not a legal disclaimer softening bad news. It is a description of how Raza Photos and Raza Songs actually work."
- **Confidence**: High

#### Respectful of ownership
- **What it means**: The user owns the library; the app is a window onto it.
- **How it shows up**: "Your files, in open formats, always." Tenant vs owner framing. Open XMP/EXIF/tags so the user can leave at any time.
- **What to avoid**: Language implying our service holds, manages, or gates their data.
- **Evidence**: `local-first.html` ("When your library is on your own drive, you are the owner."); `index.html` ("nothing is locked in and you can leave any time").
- **Confidence**: High

#### Personal
- **What it means**: A small, named-by-role maker, not a company hiding behind a form.
- **How it shows up**: "You'll hear back from the developer directly, not a support queue." First-person plural used sparingly and humbly ("We find that arrangement difficult to justify").
- **What to avoid**: "Our team of experts", ticket-system language.
- **Evidence**: `support.html` hero; contact cards.
- **Confidence**: Medium (support page only plus tone hints elsewhere)

#### Calm and confident
- **What it means**: Strong stance, even temper. The contrast with cloud services is explained with facts and one dated example, not insults.
- **How it shows up**: Checklist contrasts (✗/✓), precise history ("In 2011, Google said… In 2020, they changed their mind."), "That is not a bug. That is the system working exactly as designed."
- **What to avoid**: Naming and shaming competitors by brand without a factual, dated basis; exclamation marks; fear appeals.
- **Evidence**: `local-first.html`.
- **Confidence**: Medium-High

---

## Brand Personality

- **Archetype**: The Honest Maker. A competent engineer-neighbour who built something for their own household and tells you exactly how it works, including where it falls short.
- **If our brand were a person**: Quietly confident, a bit dry, allergic to hype, happy to explain. Would rather show you the network monitor than ask for your trust.
- **Core values expressed in voice**: Privacy by architecture, user ownership, open formats, honesty about tradeoffs, simplicity, no recurring dependency.

---

## Messaging Framework

### Primary Value Proposition
Your Mac is the server: Raza Photos and Raza Songs turn the folders on your Mac into a library every iPhone and iPad at home can browse, with no cloud, no account, and no subscription.

Variations observed:
- "Apps that live on your home network. Not in the cloud." (Source: `index.html`)
- "Your library doesn't go through our infrastructure. Because we have none." (Source: `local-first.html`)
- "We collect nothing. We record nothing. We transmit nothing." (Source: `privacy.html`)
- "Designed for trusted home networks" (Source: `security.html`)

### Key Message Pillars

1. **Local-first, no cloud**
   - Core idea: Files stay in your folders; devices talk Mac-to-phone over home Wi-Fi.
   - When to use: Homepage, app pages, any comparison with iCloud/Google/Spotify.
   - Example phrasing: "Your devices find the Mac automatically over Bonjour, and your files never move."

2. **Privacy is architectural**
   - Core idea: No outbound requests, no telemetry, no accounts, so there is nothing to leak.
   - When to use: Privacy, security, trust-building, App Store copy.
   - Example phrasing: "There is no server for your data to reach."

3. **You own it: open formats, no lock-in**
   - Core idea: Edits write back to the original files as XMP/EXIF/IPTC and audio tags; you can leave any time.
   - When to use: Metadata and editing pages, migration ("leaving iCloud") content.
   - Example phrasing: "Raza Photos could disappear tomorrow and your files would be completely unaffected."

4. **Honest tradeoffs**
   - Core idea: We name the costs (backup is your job, anyone on your Wi-Fi can browse) and show how to handle them.
   - When to use: Anywhere a limitation exists; this is a trust-builder, not a confession.
   - Example phrasing: "The honest tradeoff: backup is your responsibility."

5. **Simple for the whole household**
   - Core idea: Zero setup, automatic discovery, per-device read-only controls, no passwords for family.
   - When to use: Feature pages, support, family-oriented content.
   - Example phrasing: "One toggle, no reconfiguration."

### Competitive Positioning
- vs. cloud photo/music services (iCloud, Google Photos, Spotify): you pay once and own your library; they charge to keep access to your own memories and can change terms (Source: `local-first.html`).
- vs. Status Quo: A one-time purchase with files in open formats replaces recurring subscriptions and proprietary databases.
- Specific competitor apps (non-cloud alternatives such as Plex or Jellyfin) are not addressed in the sources. See Open Questions.

---

## Tone-by-Context Matrix

Voice is constant. Tone flexes by context. Only website contexts are evidenced; other rows are **inferred** and marked.

| Context | Formality | Energy | Technical Depth | Key Principle |
|---------|-----------|--------|-----------------|---------------|
| Homepage / product pages | Medium | Medium | Low-Medium | Lead with the idea, then the mechanism |
| Privacy & security pages | Medium-High | Low (calm) | Medium-High | State facts precisely; invite verification |
| Support / FAQ | Low-Medium | Warm | Medium | Answer the question, then the why |
| Comparison / local-first explainers | Medium | Medium | Medium | Contrast with facts, include the downside |
| App Store description *(inferred)* | Medium | Medium | Low | Same promises, shorter; no hype |
| Social media *(inferred)* | Low | Medium | Low | One concrete claim per post; no exclamation spam |
| Cold outreach *(inferred)* | Medium | Low-Medium | Low | Short, specific, no pressure; name the benefit |
| Proposals / press *(inferred)* | Medium-High | Low | Medium-High | Architecture-first facts |

### Context-Specific Guidelines

#### Product & Marketing Pages
- **Overall tone**: Confident and plain, never breathless.
- **Opening approach**: A short declarative claim, then a one-line elaboration ("Your Mac is the server. That's the whole idea.").
- **Do's**: Name the mechanism (Bonjour, XMP/EXIF). Pair every claim with how it works. Use contrasts (✗/✓ lists).
- **Don'ts**: Superlatives, "best-in-class", fake urgency.
- **Example**: "Browse your Mac photo library on any iPhone, iPad, or Mac in the house. No cloud, no server, no setup."

#### Privacy & Security
- **Overall tone**: Calm, precise, transparent.
- **Opening approach**: Say what the page is not ("not a legal disclaimer softening bad news"), then state the fact.
- **Do's**: List what the app does *not* do. Explain what each permission is for. Give the reader a way to verify.
- **Don'ts**: Euphemism, "we take your privacy seriously", unqualified "100% secure".
- **Example**: "Your home network is already a trusted perimeter. Our apps treat it as one, rather than adding a second perimeter on top of it."

#### Support & FAQ
- **Overall tone**: Helpful, direct, human.
- **Opening approach**: Diagnose the likely cause first.
- **Do's**: Offer the fix and the reason. Invite the reader to email the developer if it isn't solved.
- **Don'ts**: Blame the user; generic "contact support" deflection.
- **Example**: "This is expected. Both apps work entirely on your local home network, so there is nothing to connect to when you leave your home Wi-Fi."

---

## Terminology Guide

### Must-Use Terms
| Term | Usage | Instead Of | Example |
|------|-------|------------|---------|
| Raza Photos / Raza Songs | Official product names (capitalised) | "the app", "Raza Music" in public copy | "Raza Songs plays audio using Apple's native framework." |
| home network | Where the library lives and is served | "the cloud", "our servers" | "Apps that live on your home network." |
| your Mac is the server | Core mental model | "host", "backend" | "Your Mac is the server. That's the whole idea." |
| library | The user's collection | "content", "assets" | "Browse your library on any iPhone or iPad." |
| local-first | Principle name | "offline-only" | "Local-first isn't a limitation. It's the point." |
| open formats (XMP/EXIF/IPTC, audio tags) | Portability claim | "standard metadata" alone | "We deliberately use open metadata standards." |

### Preferred Terms
| Term | Usage | Example |
|------|-------|---------|
| Bonjour | Name the discovery mechanism when explaining | "Your devices find the Mac automatically over Bonjour." |
| no account, no subscription, no telemetry | The recurring triplet | "No cloud, no account, no subscription." |
| one-time purchase | Pricing model vs subscription | "One-time purchase, no subscription." |
| read-only | Family access controls | "Set a specific iPhone to read-only mode." |
| Tailscale (optional remote access) | Only when discussing remote access, always as optional and invite-only | "Remote access is optional, through encrypted, invite-only Tailscale." |

### Avoid These Terms
| Term | Reason | Alternative |
|------|--------|-------------|
| "we value your privacy" | Promise language; our claim is architectural | "There is no server for your data to reach." |
| "seamless", "effortless", "revolutionary" | Marketing filler | Describe the actual step: "no setup" |
| "sync" (for cloud-style syncing) | Implies a cloud service; we serve files from the Mac | "browse", "serve", "play from your Mac" |
| "secure" without scope | Overclaims; the apps are open within the home network by design | "Not reachable from the internet" |

### Never-Use Terms
| Term | Reason |
|------|--------|
| "cloud" as a feature or "our servers" | Contradicts the core claim (we have no infrastructure) |
| "unlimited", "forever free" | Contradicts the honesty pillar and the paid, one-time model (see Open Questions on pricing language) |

---

## Content Examples

### Excellent Examples

> "Privacy is architectural, not a promise. The apps make no outbound requests and have no telemetry, so there is no server for your data to reach."
> (Source: `index.html`)

Why it works: short, concrete, a mechanism instead of a pledge.

> "The honest tradeoff: backup is your responsibility. … We think it is worth being honest about it rather than pretending it does not exist."
> (Source: `local-first.html`)

Why it works: names the cost up front, then helps the reader solve it.

### Examples to Avoid

> "Experience the future of seamless, secure photo sync with enterprise-grade protection!"

Off-brand: hype, "sync" (we don't), unsupported superlative, exclamation mark, no mechanism. Better: "Browse your Mac's photo library on any iPhone at home. No cloud, no account."

(This counter-example is illustrative, written for this document; it is not from the sources.)

---

## Confidence Scores

| Section | Confidence | Basis | Sources |
|---------|------------|-------|---------|
| Voice Attributes | High | Strong, repeated patterns across all pages | 5 pages (1 channel) |
| Messaging Framework | High | Consistent pillars and phrasing | 5 pages |
| Tone Matrix | Medium-Low | Only web contexts evidenced; other rows inferred | 5 pages |
| Terminology | Medium | Derived from usage patterns; no explicit style guide | 5 pages |
| Brand Personality | Medium | Inferred synthesis | 5 pages |
| Competitive Positioning | Low | Only generic cloud-service contrast; no named non-cloud competitors | 1 page |

---

## Open Questions for Team Discussion

### High Priority (blocks guideline completion)
1. **Is there an existing brand document?**
   - What was found: No internal brand guide, logo/visual guidance, or messaging doc was accessible; all findings come from website copy.
   - Agent recommendation: Treat these guidelines as v1 derived from public copy; share any existing docs and re-run generation to raise confidence.
   - Need from you: Point me to any brand notes, App Store copy, or launch posts, or confirm none exist.

### Medium Priority (improves quality)
2. **Who is the voice: "I" or "we"?**
   - What was found: Copy uses "we" and "the developer" while the business appears to be a solo maker.
   - Agent recommendation: Keep "we" in marketing and privacy copy; use first-person "I" only in support replies and release notes if you want it more personal.
   - Need from you: Confirm preference.
3. **How should competitors be named?**
   - What was found: iCloud, Google Photos, and Spotify are named as cloud examples; non-cloud alternatives are not mentioned.
   - Agent recommendation: Keep naming only for factual, dated contrasts; avoid naming small independent competitors.
   - Need from you: Confirm, and say whether Plex/Jellyfin/Synology-type alternatives should ever be addressed.
4. **Pricing language.**
   - What was found: Pages say "Download Free" while also saying "One-time purchase, no subscription."
   - Agent recommendation: Define the model (free download with a one-time unlock?) and use one consistent phrase everywhere.
   - Need from you: State the actual pricing model.

### Low Priority (nice to have)
5. **Emoji and exclamation policy.** The site uses ✉️ in contact cards and ✓/✗ marks, but no exclamation marks. Recommendation: keep ✓/✗ for comparisons, no exclamation marks, emoji only in UI icons.
6. **Spelling variant.** Copy mixes "organisational" and "organisation" (British) with otherwise neutral wording. Recommendation: standardise on British spelling (EU-based), or on US if the App Store audience is mainly US.

---

## Data Gaps & Recommendations

- [ ] Sales, outreach, and social content: none evidenced. Provide examples (or authorise discovery on connected platforms) to replace the inferred tone rows.
- [ ] Customer conversations: support emails or reviews would show how the developer actually talks one-to-one.
- [ ] Visual identity: not covered here (logos, color, typography live in `style.css`/assets, not in a guide).
- [ ] Authorise Notion, Google Drive, or similar and re-run `/brand-voice:discover-brand raza software` if brand documents exist there.

---

## Appendix: Sources

| # | Source | Platform | Type | Date | Key Sections Used | Confidence |
|---|--------|----------|------|------|-------------------|------------|
| 1 | `index.html` | Local repo (website) | OPERATIONAL (published copy) | 2026 | Value prop, pillars, tone | H |
| 2 | `local-first.html` | Local repo (website) | OPERATIONAL | 2026 | Voice, honesty, ownership, competitive framing | H |
| 3 | `privacy.html` | Local repo (website) | OPERATIONAL | Updated July 2026 | Verifiable attribute, privacy tone | H |
| 4 | `security.html` | Local repo (website) | OPERATIONAL | 2026 | Honest caveats, security tone | H |
| 5 | `support.html` | Local repo (website) | OPERATIONAL | 2026 | Personal voice, support tone | M |
