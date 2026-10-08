# Raza Software Brand Voice Guidelines

## Document Info
- Version: 5 (reorganized by topic on 2026-10-08; no rules removed)
- Replaces: v4 (`brand-voice-guidelines-2026-10-08-v4.md`). Earlier snapshots: v3 (`...-2026-10-08-v3.md`), v2 (`...-2026-10-07-v2.md`), v1 (`...-2026-10-07.md`)
- Sources: the website copy in this repo, and direct founder input throughout October 2026 (intent, audience, architecture, pricing, security behavior, product facts)
- Overall confidence: High for voice, messaging and facts about the products; Medium-Low for contexts beyond the website (social, outreach, App Store), which are inferred

How to use this file: Part 1 says who we write for and how we sound. Part 2 is what we say and never say. Part 3 is the facts register: the single place for what is true. Part 4 is tone by context and terminology. Part 5 is the working notes for the site and what is still open.

---

# Part 1. Who we are writing for, and how we sound

## At a glance
Raza Software presents software the way its maker would explain it to anyone: plainly, honestly, and without talking down to the reader. The voice emerged naturally and is not a positioning exercise. The brand does not ask for trust. It earns it by explaining how things work and inviting people to check.

The central claim is that your library never goes to any server of ours or anyone else's, and it is backed by architecture, not adjectives. The Mac is the server and the single source of truth. Clients are deliberately thin. Files are streamed, never copied or synced. Every page names its own tradeoffs.

Honesty is not enough on its own. If readers don't understand or connect with the product, the explanation was wasted. Copy is clear, curious and persuasive, and may stretch for a hook, as long as the body pays it off truthfully.

**Ten rules that decide most cases**
1. Say "Raza Photos" and "Raza Songs", spelled out. Never "Raza" alone. "Raza Software" is the company.
2. Never say "sync" for what the apps do. They stream.
3. "Library sharing" is the server feature. "Sending photos to other people" is the share-sheet feature. Never plain "sharing".
4. Claims must be literally true. No unscoped absolutes ("ever", "forever", "unlimited").
5. Start from what a reasonable person expects, then say what actually happens. Never guess at motives.
6. Name the tradeoff where it applies: the Mac must be on, backups are yours, anyone on your Wi-Fi can browse.
7. Plain voice first, technical detail intact beneath it. Never dumb it down for engineers.
8. Cite Apple's or Microsoft's own page for claims about their products.
9. Never mention the removed trust/pairing experiment.
10. Version requirements (macOS 26, iOS 26) are said up front, with the reason.

## Audience

**Two readers, one site.**
- **Ordinary households:** people who bought a Mac mini, put their photos and songs on it, and want to see and play them on every device at home, without making it their job. Mothers, fathers, families at the dinner table.
- **Technical households:** parents who are engineers, such as a cybersecurity engineer who wants privacy and no cloud but leaves the Linux box at work. This is the precise market, not a side audience. They search for exactly what is read from and written to photo metadata.

**Not for, on purpose:** self-hosters and tinkerers who want a Linux box, containers, config files or open source. The apps are closed source, Apple-only (Mac, iPhone, iPad) and don't run on Linux or Windows. Say so plainly, once, so those readers self-select out.

**How to say it:** calm and unapologetic, never sneering. "There are excellent open-source projects made for exactly that, and they're a better fit." No "script kiddie", no ideology, no jabs at the self-hosting community. Naming a specific project (e.g. Immich) is optional; the default is to describe the category.

**Why neither end works for households (founder's experience):** the founder tried the cloud, and it kept frustrating in small ways. The founder also tried self-hosting, and found it more trouble than the cloud. The product is the version in between: a server without the server work. This is the real reason behind "No Linux box". If it is ever stated on the site, say it in the plural "we" voice and without disparaging either option, for example: "We tried the cloud, and we tried running our own server. Neither was simple." It is told in full, in first person, on `who-we-are.html`.

**Layer, don't dilute.** Every technical page opens with a plain "In short" box (two sentences, no cute analogies), with the full detail intact beneath it. Home page and guides are plain; metadata, formats, discovery, security and remote-access pages carry the detail (EXIF/IPTC/XMP, MakerNote, priority orders, API names). Never condescend: technical readers see through dumbed-down copy.

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
| **Expectation-first**: we start from what a reasonable person expects, then show what actually happens | **Adversarial**: blaming companies, guessing at motives, or venting |

### Attribute detail

**Plainspoken.** Technical subjects in everyday terms: the mechanism is named, jargon is unpacked. Short sentences and fragments, home analogies ("the same way music plays on every HomePod"). Avoid buzzword stacks and over-explaining the obvious.

**Honest about limits.** Every benefit is paired with its cost: "The honest tradeoff", "The honest caveat". Plain admissions followed by practical help. *Accuracy without pedantry:* claims must be literally true, but we don't "well, actually" the reader. Mention an exception once, briefly, where it applies (Photos' map view loads Apple Maps tiles: one short line, no lecture), then move on. Prefer claims about what matters, such as "your library never goes to any server."

**Provable (trust is earned).** "Privacy is architectural, not a promise." Invite verification (Little Snitch, App Privacy Report, unplugging the router). Never "we value your privacy" without a mechanism, and never a claim the reader can't test.

**Respectful of ownership.** The user owns the library; the app is a window onto it. "Your files, in open formats, always." Tenant vs owner framing. The server is the source of truth and clients stream from it; edits write back to the original files in open standards.

**Credible and human.** "We" in marketing, privacy and explainer copy gives an editorial tone. Support replies come from the developer directly. Never "our team of experts" or anything that overstates scale. If a sentence would be false with one person behind it, rewrite it. **Pronoun rule (2026-10-08):** "I" is for `who-we-are.html` and for support replies. "We" is the editorial voice everywhere else, and the Who we are page declares it openly: "That's me, writing the way a publication does. There is no team and no company."

**Calm, confident, persuasive.** Concrete contrasts (✗/✓), dated facts ("In 2011… In 2020…"), a curiosity hook up front ("Because we have none."). Lead with the benefit; end pages with a clear next step. No fear appeals, no exclamation marks, no naming competitors without a factual basis.

**Expectation-first.** Begin with what a reasonable person expects, then say plainly what happens instead. "Cloud storage, which most people expect to mean 'move it off my device', ends up meaning 'keep a copy on every device that has room.'" "Most of us expect files that are on our phone to show up in the app that plays music." The frustration is real and shared, and the page names it without raising its voice.

**Curiosity rule.** It is fine to step over the line occasionally, such as a provocative headline, if (1) the claim is literally true, (2) the page explains it right away, and (3) nothing contradicts the honesty pillar.

## Personality
- **Archetype:** The Honest Maker, with a streak of curiosity. A competent engineer-neighbour who built it for their own household, explains it plainly including where it falls short, and occasionally teases an idea to make you lean in.
- **If our brand were a person:** quietly confident, a bit dry, allergic to hype, glad to explain, and aware that nobody cares about a good explanation they never read.
- **Values expressed in voice:** earned trust, privacy by architecture, user ownership, open formats, thin clients and a single source of truth, no wasted disk space, honest tradeoffs, simplicity.
- **Origin (now told on `who-we-are.html`):** the apps exist because the founder was tired of the same small frustrations everyone has (photos that fill a phone, music the Music app won't play from a folder, files in OneDrive the iPhone can't use) and had tried both the cloud and self-hosting. It is told in first person on the Who we are page, and in the plural "we" elsewhere.
- The voice is not claimed as a market advantage.

---

# Part 2. What we say, and what we never say

## Value proposition and headline
**Primary value proposition:** Your Mac is the server. Raza Photos and Raza Songs turn the folders on your Mac into a library every iPhone and iPad at home can browse and play. Nothing is copied or synced, and there is no cloud, no account, and no subscription tracking you.

**Home page headline (approved 2026-10-08):** "Your photos and music, on every Apple device at home. Nothing to set up." Household language first. "A server without the server work." is the explanation one scroll down. It sells the outcome and stays true because it admits a server exists.
- Rejected: "Your Mac is the server. That's the whole idea." (mechanism, not benefit) and "Your home network is enough." (a belief, but a plain home network isn't enough in 2026; the app does the heavy lifting).
- "The home network should be enough" is argued on `local-first.html`, not on the home page.
- "No Linux box" is a signature line. Build on it: "No Linux box, no containers, no config files, no terminal, no accounts, no subscription."
- Don't claim "everything the cloud does". The cloud also provides offsite backup and anywhere-access by default, which the apps don't. Say "the conveniences you'd expect from a cloud service, without the cloud, the account or the monthly bill", and keep the honest tradeoff line.

## Message pillars
1. **Local-first: the server is the source of truth.** Files stay in your folders on the Mac. Clients are thin and stream. We never copy and never sync, which protects trust and avoids duplicate libraries. *"Your phone doesn't keep a copy. It streams from your Mac, so there's one library and one source of truth."*
2. **Privacy is architectural.** No telemetry, no accounts, nothing to leak. *"There is no server for your data to reach."*
3. **You own it: open formats, no lock-in.** Edits write back to the original files (XMP/EXIF/IPTC, audio tags). You can leave any time. *"Raza Photos could disappear tomorrow and your files would be completely unaffected."*
4. **Honest tradeoffs.** Name the costs (backup is your job, anyone on your Wi-Fi can browse) and show how to handle them. *"The honest tradeoff: backup is your responsibility."*
5. **Seamless for the whole household (proven, not claimed).** Zero configuration, automatic discovery, no passwords for family, per-device read-only controls. Always attach it to the mechanism.

## Writing about clouds and frustration
- **The core argument:** to most people "cloud storage" means *offload*: put it there so it isn't on my device. Sync services tend to mean *mirror*: a copy on every device that has room, with offloading as the fallback. A phone's storage can't be added to after you buy it. Streaming from one source of truth is offloading in its simplest form.
- **The pattern for guides and explainers:** (1) state the expectation, (2) state what actually happens, with a source (Apple's or Microsoft's own page), (3) say what we do instead, (4) say honestly where the other approach is the better tool.
- **Never:** guess at motives (especially revenue), accuse a company, or turn a personal anecdote into a stated fact. An anecdote is a reason to look something up, not a claim. If Apple or Microsoft documents it, cite that.
- **Keep it fair:** the cloud's real benefits (offsite backup, access from anywhere with no setup) get named every time we compare. The model line: "None of that is sinister. It's how a cloud business works."
- **Comparison-page rule:** say plainly where the other product wins (offsite backup and anywhere-access for iCloud Photos; discovery and a catalog for Apple Music).

## Competitive positioning
- vs. cloud photo/music services (iCloud, Google Photos, Spotify): one library on your own hardware, no ongoing dependency, no tenant relationship to your own memories.
- vs. sync-based approaches: no per-device copies. One source of truth, no duplicated storage, nothing to reconcile.
- vs. status quo: files in open formats, always yours.
- vs. self-hosted server apps: a different audience, deliberately. We say what we are and point tinkerers elsewhere.

## Pricing language
- **The facts (founder, 2026-10-08):** the apps are free. There is **no price and no company**. The founder is a private individual. The idea of creating a company and charging once the apps gain real traction (around 1,000 users) is an internal possibility, not a commitment, and it may never happen. It would be irresponsible to build a business around a product that hasn't earned one.
- **Public message:** "Free. If that ever changes, it will be a one-time purchase, never a subscription." The no-subscription promise stays, as a statement about the form any future price would take.
- **"Raza Software"** is the name published under, and the name a future company would use. The Who we are page says so plainly: "there is no company behind it today. If the apps ever grow enough to need one, that is what it will be called."
- **Never:** state a price (the old "$20" is gone), a date, or the 1,000-user figure; say "free for now", "later", "pay once" or "limited time"; imply a company exists; promise that a price is coming. Don't say "sold as" or "buy".
- **Where it appears:** the Pricing section on both app pages ("Free. No account, no subscription."), the FAQ ("Are they open source?"), the press kit, the Who we are page ("Why it's free"), and the Cost rows in the comparison tables.
- **When this changes** (a company is formed and a price is set): update the Pricing sections, the "Download Free" buttons, the FAQ, the press kit, the comparison rows, the Who we are page, and the App Store listing together.

## Security and privacy wording
- Connections between devices are **always** encrypted with **TLS 1.3** (founder-confirmed, not a setting). Always pair the claim with its limit: **encrypted in transit, but not password-protected.** Encryption stops people watching the network from reading the traffic; it does not decide who may connect, because anyone on the main Wi-Fi with the app can still browse (the security page's honest caveat).
- The network boundary is a property of the protocol: Bonjour is multicast DNS (mDNS, RFC 6762), link-local by definition, so routers don't forward it by default. It is not a setting of ours. No port forwarding is ever required, with or without remote access.
- Don't describe security as authentication, pairing or device trust. The "trust this peer?" prompt was an experiment that was removed. It must not be mentioned anywhere.
- Never claim "no outbound requests", "works offline" or "cannot be accessed remotely" as absolutes. Optional Tailscale connects your own devices directly, and Photos uses Apple Maps. Use: "Your library never goes to any server, ours or anyone's." / "Songs talks only to your own devices."
- Always say "secure" with a scope ("Not reachable from the internet").

## Version requirements
The apps need macOS 26 and iOS 26 or later, because they use APIs Apple only made available in those versions. Say it near download buttons, explain why once, plainly, and tell people how to check their version. Never leave it for the App Store to reveal.

## Release notes (What's new pages)
- **Source and rewrite:** the founder keeps developer notes tied to commit tags. They are never published as written. Each entry is rewritten for users: plain sentences, no internal terms ("peer", "push channel", "identity"), and the same terminology as the rest of the site.
- **What stays:** real fixes, stated plainly, including repeated attempts ("a first attempt at fixing…", "another fix for…"). That honesty is the brand.
- **What never appears:** experiments and reverted features, and anything about pairing or trust.
- **Obvious features get a line, not a page:** slideshow, metadata inspector and photo rotation exist, but are table stakes in a photo app, so they appear in the notes only.
- **Maintenance on each release:** add the entry to `photos/whats-new.html` or `music/whats-new.html`, update `softwareVersion` in the app page's structured data, and update the "current version" line in the page's hero. Release dates live in the App Store's version history, not on the site.

---

# Part 3. Facts register (the single place for what is true)

## About the products (founder-confirmed)
- **Naming:** Raza Songs was called Raza Music until version 2.1. Both apps are at 3.4. Both apps act the same way unless stated.
- **Library sharing:** the Mac's Sharing tab has a switch, "Publish this library to your home network", plus a library name and icon (changes take effect after a restart). With sharing on, closing the window doesn't stop it: the app keeps running in the menu bar. Launch at login is optional and not the default.
- **Sending photos to other people:** Raza Photos only, on macOS and iOS, through the standard share sheet, up to 50 photos at a time, original files (so any stored location goes with them). Songs cannot share songs.
- **Transfer (Photos):** sends photos from an iPhone or iPad to a Mac library over Wi-Fi, including photos from the Apple Photos library. "Allow incoming transfers" is a Photos-only setting that stays off until turned on.
- **Raza Songs boundary:** the iPhone and iPad apps have no browser or import. They play only what a Mac serves. Music stored only on the phone, or in a cloud app's folder on the phone, will not play.
- **Cloud folders:** on a Mac, both apps can import a folder from OneDrive, Dropbox or any cloud storage folder like any other folder. OneDrive's online-only files are a OneDrive matter, not tested in every case; suggest "Always Keep on This Device".
- **Photo of the Day widget:** Mac, iPhone and iPad. **Songs daily selection:** 20 songs (it was 10 until Songs 1.4). Raza Photos is available in five languages (English, French, German, Spanish, Italian); Raza Songs' languages are not yet confirmed.
- **Privacy details:** the Photos map view and place-name lookups use Apple Maps (MapKit), so those coordinates go to Apple under Apple's policy. Face detection runs on the device. The website uses no cookies, analytics or third-party scripts; it is hosted on GitHub Pages, which may keep standard server logs that we don't receive or use.
- **Remote access:** Tailscale, optional and off by default, appears in the apps as "Share over Tailscale". No open port, no port forwarding.

## About the maker (founder-confirmed 2026-10-08)
- Raza Software is one person: **Radu Zaharia**, a private individual and solo developer in the EU. There is **no company or commercial entity, and no price**: the apps are free. "Raza Software" is the name published under, and the name a future company would use if one is ever formed.
- **App Store alignment (founder-confirmed 2026-10-08):** both apps are listed on the App Store directly under Radu Zaharia's own name, as free, with no mention of trading, prices or companies. The website's "Raza Software" name exists so a move to a paid company model, if it ever happens, is easy. The site must therefore always match the listing: free, no company, the individual named.
- Public record: the technical blog at https://blog.raduzaharia.com (writing about leaving the cloud and running your own infrastructure, plus self-hosting journeys) and GitHub at https://github.com/raduzaharia-medium, whose README says it hosts the examples from the blog. Both are under the founder's own name, so linking them discloses it.
- Automated tools can't read the blog or its Medium address (they return 403). Don't describe specific posts on the site until the founder supplies titles and URLs.
- Structured data on the home page and Who we are page names the founder with links to both profiles, which also helps separate "Raza Software" from the many unrelated uses of "Raza".

## About Apple and Microsoft (verified from their own pages, re-check after each OS release)
- **iCloud Photos:** a device keeps full-resolution originals (Download Originals) or smaller versions with originals fetched from iCloud when needed (Optimize Storage), optimizing only when space runs low, starting with the least-used photos. We make no claim about which setting is the default.
- **iCloud+ downgrade or cancel:** the change takes effect when the billing period ends; if content exceeds the new plan, iCloud stops syncing and updating and backups won't complete; cancelling returns you to the free 5 GB. On iOS 18.4 or later: Settings → [name] → Subscriptions → iCloud+. On macOS 26: System Settings → Apple Account → iCloud → Manage Plan.
- **Finder photo sync:** for people who don't use iCloud Photos; only the System Photo Library; the iPhone is updated to match the Mac; Live Photos lose their effect if synced back; turning sync off removes what was synced.
- **Finder music sync:** works only with Sync Library off (an Apple Music subscription manages the library through iCloud Music Library instead) and makes the phone match the Mac.
- **iPhone Music app:** no add-a-folder option, can't import from the Files app, can't play files inside another app's folder (OneDrive, Dropbox).
- **OneDrive on a Mac:** appears in Finder's sidebar under Locations; Microsoft's options are "Always Keep on This Device" and "Free up space".
- **App Privacy Report:** Settings → Privacy & Security → App Privacy Report, iOS 15.2 or later, lists domains an app contacted over the past seven days.

---

# Part 4. Tone by context and terminology

## Tone-by-context matrix
Voice is constant. Tone flexes by context. Website contexts are evidenced; others are **inferred**.

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

**Product & marketing pages.** Confident, plain, with a hook; selling is allowed and expected. Open with a short declarative claim, then a one-line elaboration. Name the mechanism, use ✗/✓ contrasts, end with a clear call to action. No unproven superlatives, fake urgency, or a hook the page doesn't pay off.

**Privacy & security.** Calm, precise, transparent. Say what the page is not, then state the fact. List what the app does not do, explain each permission, offer a way to verify. No euphemism, "we take your privacy seriously", or unscoped "100% secure". Model: "Your home network is already a trusted perimeter. Our apps treat it as one, rather than adding a second perimeter on top of it."

**Support & FAQ.** Helpful, direct, human; first person is fine. Diagnose the likely cause first, offer the fix and the reason, invite an email to the developer. Never blame the user or deflect to a generic "contact support".

## Terminology

Spelling: **US English** ("organization", "color"). Applied across the site.

### Must use
| Term | Usage | Instead of |
|------|-------|-----------|
| Raza Photos / Raza Songs | Official product names. Always spelled out. "Raza Software" is the company. If more apps arrive, revisit (e.g. "Raza apps") | "Raza" alone, "Raza Music", "the Raza app" |
| home network | Where the library lives and is served | "the cloud", "our servers" |
| your Mac is the server | The core mental model | "host", "backend" |
| stream | How clients get files | "sync", "download", "copy" |
| source of truth | The server holds the one real library | "master copy", "primary replica" |
| offload | What most people expect "cloud storage" to mean | "sync" used loosely |
| mirror | What sync does: a copy on every device that has room | "backup" |
| library | The user's collection | "content", "assets" |
| library sharing | The server feature (the app's switch says "Publish this library to your home network") | "sharing" alone, "sync" |
| sending photos to other people | The Photos share-sheet feature; kept separate from library sharing | "sharing" alone |
| local-first | Principle name | "offline-only" |
| open formats (XMP/EXIF/IPTC, audio tags) | Portability claim | "standard metadata" alone |

### Preferred
thin client (technical contexts; elsewhere "your iPhone doesn't keep a copy") · Bonjour (name the mechanism when explaining) · the triplet "no account, no subscription, no telemetry" · read-only (family controls) · Tailscale (only for remote access, always optional and invite-only) · "free today" (see Pricing; never "free for now" or "currently free", which imply a price is coming).
**Seamless rule:** "seamless" is welcome only when the next sentence shows what makes it so.

### Avoid
"we value your privacy" (pledge language) · "revolutionary", "best-in-class", "effortless" (unproven) · "secure" without scope · "never makes an outbound request", "no internet connection", "works offline" as absolutes · "cannot be accessed remotely" · "no server" for the product (say "no server to run", since the Mac is the server) · "limited time" · "Three steps. Then you're done forever." (use "Then you're done.")

### Never use
- "sync", "syncing" for what our apps do. Sync means local copies reconciled across devices. We keep one source of truth and stream. We avoid it by design, to save disk space and keep the server authoritative, not because we can't. *(Naming the thing we replace is fine: "without syncing", "Finder sync vs streaming".)*
- "cloud" as a feature, "our servers" (we have no infrastructure)
- "unlimited", "forever free", "free forever"

## Content examples

**Excellent (from the site)**

> "Privacy is architectural, not a promise. Your library only ever goes to your own devices, never to our servers or anyone else's, and the apps have no telemetry. There is no server for your data to reach." (`index.html`)

Why it works: short, concrete, a mechanism instead of a pledge.

> "The honest tradeoff: backup is your responsibility. … We think it is worth being honest about it rather than pretending it does not exist." (`local-first.html`)

Why it works: names the cost up front, then helps the reader solve it.

> "None of that is sinister. It's how a cloud business works, and for many people it's a fair deal. But it means a simple thing, seeing your own library on your own devices in your own house, has quietly turned into a service you rent." (`local-first.html`)

Why it works: fair to the other side, calm, and still makes the point.

**Illustrative (written for this document, not from the site)**

On-brand, with a curiosity hook:
> "Why doesn't your phone keep a copy of your photos? Because it doesn't need one. Your Mac is the source of truth, and your iPhone streams from it. One library, no duplicates, no sync to babysit."

Why it works: opens with a question, pays it off immediately, uses the approved terms (stream, source of truth), and states a benefit.

Off-brand:
> "Experience the future of seamless, secure photo sync with enterprise-grade protection!"

Why it fails: "sync" is wrong, "seamless" has no proof, "secure" and "enterprise-grade" are unscoped boasts, and the exclamation mark adds hype. Better: "Browse your Mac's photo library on any iPhone at home. No cloud, no account, nothing copied."

---

# Part 5. Working notes and what is open

## What the site has (added 2026-10-08)
Pages built for discoverability, because search results for the household questions are mostly forum threads and a well-made guide can win them: `getting-started`, `faq` (one page for both apps), `iphone-cant-find-mac`, `backup-your-library`, `finder-sync-vs-streaming` (Finder sync, iCloud and streaming), `verify-privacy`, `press`, `photos/cancel-icloud-storage`, `photos/vs-icloud-photos`, `music/vs-apple-music`, `music/play-onedrive-music-on-iphone`, a reworked `music/iphone-without-subscription`, and `photos/whats-new` and `music/whats-new`. People type "sync" in their searches, so titles name the thing we replace even though the apps don't sync.

**Rules for the OneDrive guide:** short and honest. The point is that the folder imports on the Mac and plays on the iPhone. OneDrive's own setup is Microsoft's part (link to their page, don't re-explain it).

## Open items
- **Who we are:** built (2026-10-08), full name and links. Waiting on the founder's review.
- **Legal identification:** an earlier note assumed the apps are sold. They are free and there is no business, so the founder may be a non-trader, and Apple's EU trader declaration may not apply. That changes the legal picture, so confirm with an accountant what, if anything, must be published (a name and contact are already on the Who we are page). Not legal advice. Also decide whether the footer's "© 2026 Raza Software" should read as the individual instead.
- **Blog cross-links:** link the best two or three posts on leaving the cloud from the matching guides (leaving iCloud, cancel iCloud storage, finder sync vs streaming), once the founder supplies titles and URLs. The blog could link back to the apps, with the relationship disclosed.
- **An optional line for `local-first.html`'s "Why this exists":** "We tried the cloud, and we tried running our own server. Neither was simple." Now consistent with the Who we are page; add on the founder's approval.
- **Search Console:** export Queries and Pages once the new pages have had a week or two, to find the position-16 query and compare it with what the new pages target.
- **Translations:** the apps have five languages and the site has one. German first, then French.
- **App Store listing copy:** draft after the site wording settles, and check that price and wording match the site.
- **Raza Songs languages:** not yet confirmed (the press kit lists Photos only).
- **Pricing:** settled (2026-10-08). See Pricing language.
- **Inferred contexts:** App Store text, social posts and outreach drafts would replace the inferred tone rows with evidence.
- **Not covered:** customer conversations (support emails, reviews) and visual identity.

## Appendix: sources
The website copy (home, app pages, local-first, privacy, security, support, and every page added since), and founder input given in conversation on 2026-10-07 and 2026-10-08: intent, "we" voice, sync rationale, pricing, spelling, audience, release history, security behavior, cloud and Music app experience, and the removed trust experiment.
