import { useEffect, useState } from 'react'

const logo = '/assets/sweeora-logo-icon-cool.jpg'
const icon = '/assets/sweeora-instagram-profile-icon.jpg'

const colors = {
  cream: '#FFF8F3',
  blush: '#F6D6DE',
  blushDeep: '#E8B7C4',
  lilac: '#E7D8F0',
  cocoa: '#3A2F2C',
  cocoaSoft: '#5C4E4A',
  gold: '#D4B483',
  goldSoft: '#E6D0A8',
  white: '#FFFCFA',
  line: 'rgba(58, 47, 44, 0.12)',
}

const fonts = {
  display: '"Fraunces", "Times New Roman", serif',
  body: '"Plus Jakarta Sans", "Segoe UI", sans-serif',
}

const packages = [
  {
    name: 'Glow',
    price: '₹2,999',
    time: '5 to 7 days',
    blurb: 'Best if you just need a clean first page people can open on their phone.',
    bestFor: 'New brands going online',
    includes: 'Design + WhatsApp button',
    points: [
      '1 to 3 clear pages',
      'Mobile-friendly layout',
      'WhatsApp chat button',
      'Simple contact form',
      'Basic Google setup help',
      '2 free small revisions',
    ],
  },
  {
    name: 'Aura',
    price: '₹5,999',
    time: '7 to 12 days',
    blurb: 'Best if you want a pretty page plus AI that answers common questions.',
    bestFor: 'Brands that get daily questions',
    includes: 'Glow + AI assistant',
    points: [
      'Everything in Glow',
      'AI chat for timing, price, place',
      'Leads go to your WhatsApp',
      'Services, menu, or photo gallery',
      'FAQ training from your details',
      '3 free small revisions',
    ],
    featured: true,
  },
  {
    name: 'Luxe',
    price: '₹9,999',
    time: '10 to 15 days',
    blurb: 'Best if you want booking flow, smarter AI, and help after launch.',
    bestFor: 'Busy brands that need support',
    includes: 'Aura + booking + care',
    points: [
      'Everything in Aura',
      'Easy booking or appointment flow',
      'Smarter AI with more replies',
      'Offer highlights / catalog blocks',
      '30 days free small updates',
      'Priority WhatsApp support',
    ],
  },
]

const packageNotes = [
  { title: 'Pay after preview', text: 'You see a first look before final payment for most projects.' },
  { title: 'Your content', text: 'You send photos, open hours, prices, and WhatsApp number.' },
  { title: 'One language first', text: 'English or local language for the first version. Extra language on request.' },
]

const aboutStory = {
  eyebrow: 'About the studio',
  title: 'A soft studio for local brands.',
  lead:
    'Wee-ora is a small digital studio by Sweedal. We help cafes, boutiques, salons, and local businesses look pretty online — with calm pages and quiet AI that hands real enquiries to WhatsApp.',
  quote:
    'Pretty should feel easy. Your page should look soft, load fast, and make the next WhatsApp hello feel natural.',
  quoteBy: 'Sweedal, founder',
  status: 'Open for 2 new brands this month',
  hours: 'Mon–Sat · 10:00–19:00 IST',
  languages: 'English first · Local language on request',
  points: [
    {
      title: 'Built by one focused maker',
      text: 'You talk directly with Sweedal. No long agency chain. Faster replies, clearer decisions, and work that stays soft end to end.',
      cue: 'Direct',
      detail: 'Avg reply ~2 hours',
    },
    {
      title: 'Design + AI in one place',
      text: 'Pretty pages, WhatsApp buttons, and FAQ replies are set up together so the whole flow feels calm — not stitched from three vendors.',
      cue: 'Joined',
      detail: 'One soft system',
    },
    {
      title: 'Made for real local work',
      text: 'We keep copy simple, mobile-first, and practical — so your page helps enquiries land, not just look nice on a laptop.',
      cue: 'Local',
      detail: 'Phone-first layouts',
    },
  ],
  facts: [
    { label: 'Based in', value: 'India', note: 'Remote-friendly across cities' },
    { label: 'Typical launch', value: '5–15 days', note: 'Glow faster · Luxe fuller' },
    { label: 'Start from', value: '₹2,999', note: 'Glow for a clean first page' },
    { label: 'Reply window', value: '~2 hrs', note: 'Daytime WhatsApp replies' },
  ],
  values: [
    ['Pretty', 'Clean layouts people trust on first glance.'],
    ['Clear', 'Simple words. Easy buttons. No confusion.'],
    ['Warm', 'AI and WhatsApp that feel human, not robotic.'],
  ],
  timeline: [
    { step: '01', title: 'Share details', text: 'Name, 5–10 photos, hours, prices, WhatsApp number.', time: 'Day 1' },
    { step: '02', title: 'First look', text: 'Soft layout preview before final payment on most projects.', time: 'Day 2–4' },
    { step: '03', title: 'Polish + AI', text: 'Copy, buttons, FAQ replies, and a full mobile check.', time: 'Day 5–12' },
    { step: '04', title: 'Go live', text: 'Launch, short handoff notes, and WhatsApp care.', time: 'Day 5–15' },
  ],
  pulse: [
    { value: '3', label: 'Core packages', sub: 'Glow · Aura · Luxe' },
    { value: '12+', label: 'Brand styles', sub: 'Boutique, cafe, salon & more' },
    { value: '98%', label: 'Mobile first', sub: 'Built for phone thumbs' },
    { value: '1', label: 'Maker studio', sub: 'You work with Sweedal' },
  ],
  fits: [
    'Boutiques',
    'Cafes',
    'Salons',
    'Florists',
    'Bakeries',
    'Home brands',
    'Studios',
    'Clinics',
  ],
  care: [
    { title: 'Pay after preview', text: 'Most projects show a first look before final payment.' },
    { title: 'Your content stays yours', text: 'Photos, prices, and chats stay with your brand.' },
    { title: 'Small updates included', text: 'Glow & Aura revisions · Luxe gets 30 days care.' },
  ],
}

const samples = [
  {
    title: 'Bloom Atelier',
    type: 'Boutique',
    plan: 'Aura',
    city: 'Soft wear brand',
    note: 'A clothing page with product photos, size notes, and WhatsApp enquiry for available pieces.',
    highlights: ['Product gallery', 'AI size / timing replies', 'WhatsApp enquiry'],
    result: 'Enquiries go straight to WhatsApp',
    preview: ['Silk Sets', 'Scarves', 'Gift Edit'],
    accent: `linear-gradient(165deg, ${colors.blush} 0%, #F9E8ED 48%, ${colors.cream} 100%)`,
  },
  {
    title: 'Cafe Lumen',
    type: 'Cafe',
    plan: 'Aura',
    city: 'Neighborhood cafe',
    note: "A calm cafe page with menu highlights, open hours, and AI answers for table timing and today's specials.",
    highlights: ['Menu blocks', 'Open hours AI', 'One-tap WhatsApp'],
    result: 'Fewer repeated “Are you open?” chats',
    preview: ['Brunch', 'Coffee', 'Today'],
    accent: `linear-gradient(165deg, ${colors.lilac} 0%, #F4ECF9 48%, ${colors.cream} 100%)`,
  },
  {
    title: 'Studio Mira',
    type: 'Salon',
    plan: 'Luxe',
    city: 'Beauty studio',
    note: 'A beauty studio page with service list, style photos, and a simple booking flow for appointments.',
    highlights: ['Service list', 'Booking flow', '30-day polish'],
    result: 'People can request a slot faster',
    preview: ['Cut', 'Color', 'Book'],
    accent: `linear-gradient(165deg, ${colors.goldSoft} 0%, #F6EDDC 48%, ${colors.cream} 100%)`,
  },
]

const pillars = [
  {
    step: '01',
    label: 'Presence',
    title: 'Look pretty online',
    text: 'We design a clean page for your brand with your photos, timing, and services. It opens fast on phones and feels easy to trust.',
    cue: 'Soft pages',
    details: [
      'Home, about, services or menu, and contact',
      'Fits phones, tablets, and laptops',
      'Your real photos and brand colors',
      'Usually ready in 5 to 7 days',
    ],
    accent: `linear-gradient(160deg, ${colors.blush} 0%, #F8E8EE 55%, ${colors.cream} 100%)`,
  },
  {
    step: '02',
    label: 'Intelligence',
    title: 'Reply even when busy',
    text: 'We train a soft AI helper on your real FAQs — open hours, prices, location, and common asks — so people still get answers when you are offline.',
    cue: 'Quiet AI',
    details: [
      'Built from your real questions',
      'Answers timing, price, and place',
      'Uses simple words that feel human',
      'You can change replies later',
    ],
    accent: `linear-gradient(160deg, ${colors.lilac} 0%, #F1E8F7 55%, ${colors.cream} 100%)`,
  },
  {
    step: '03',
    label: 'Enquiries',
    title: 'Get real enquiries',
    text: 'When someone wants to buy or book, the chat moves to your WhatsApp. You see the message and reply like normal.',
    cue: 'Warm hellos',
    details: [
      'One-tap WhatsApp button',
      'Enquiry form sends to your phone',
      'You keep the full conversation',
      'No new app for you to learn',
    ],
    accent: `linear-gradient(160deg, ${colors.goldSoft} 0%, #F5EBDA 55%, ${colors.cream} 100%)`,
  },
]

const aboutFacts = [
  { title: '5–7 days', text: 'Average time to launch a Glow page after we get your details.' },
  { title: 'You send', text: 'Business name, 5–10 photos, open hours, prices, and WhatsApp number.' },
  { title: 'We build', text: 'Page design, mobile check, AI replies, and enquiry buttons.' },
  { title: 'You keep', text: 'Your WhatsApp chats. We only help the first hello look pretty.' },
]

const whatsappNumber = '917619556110'
const whatsappDisplay = '+91 76195 56110'
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  'Hi Wee-ora! I want a pretty page for my brand.',
)}`

const contactStory = {
  eyebrow: 'Contact',
  title: 'Say hello on WhatsApp.',
  lead: 'Tell us your brand type and we will help you pick Glow, Aura, or Luxe. Daytime replies usually within ~2 hours.',
  status: 'Replies in ~2 hours',
  hours: 'Mon–Sat · 10:00–19:00 IST',
  phone: whatsappDisplay,
  starters: [
    'Hi! I run a boutique and want Aura.',
    'Need a cafe page with menu + WhatsApp.',
    'Salon booking — is Luxe right for us?',
  ],
  brief: ['Brand name', '5–10 photos', 'Hours & place', 'Prices / services', 'WhatsApp number'],
  promises: [
    { value: '~2 hrs', label: 'Daytime reply' },
    { value: '5–15d', label: 'Typical launch' },
    { value: '₹2,999', label: 'Starts from' },
  ],
  chat: [
    { from: 'you', text: 'Hi! We need a pretty cafe page.' },
    { from: 'swee', text: 'Aura fits well — menu, hours AI, and WhatsApp enquiries.' },
  ],
}

const footerStory = {
  tagline: 'Pretty presence. Smart growth.',
  blurb: 'Soft pages and quiet AI for local brands — cafes, boutiques, salons, and more.',
  location: 'India · Remote-friendly',
  hours: 'Mon–Sat · 10:00–19:00 IST',
  explore: [
    ['#process', 'What we do'],
    ['#about', 'About'],
    ['#work', 'Selected work'],
    ['#contact', 'Contact'],
  ],
  packages: [
    ['#packages', 'Glow — ₹2,999'],
    ['#packages', 'Aura — ₹5,999'],
    ['#packages', 'Luxe — ₹9,999'],
  ],
}

function useReveal(resetKey) {
  const [visible, setVisible] = useState({})

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((node) => {
      observer.observe(node)
      const rect = node.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.9 && rect.bottom > 40) {
        setVisible((prev) => ({ ...prev, [node.id]: true }))
      }
    })

    return () => observer.disconnect()
  }, [resetKey])

  return visible
}

function HoverLink({ href, style, children, target, rel }) {
  const [hover, setHover] = useState(false)

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...style,
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        opacity: hover && style?.background === 'transparent' ? 0.85 : 1,
      }}
    >
      {children}
    </a>
  )
}

function AboutPointCard({ item, index, visible }) {
  const [hover, setHover] = useState(false)
  const accents = [
    `linear-gradient(145deg, ${colors.blush} 0%, #F8E8EE 55%, ${colors.cream} 100%)`,
    `linear-gradient(145deg, ${colors.lilac} 0%, #F1E8F7 55%, ${colors.cream} 100%)`,
    `linear-gradient(145deg, ${colors.goldSoft} 0%, #F5EBDA 55%, ${colors.cream} 100%)`,
  ]

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 26,
        border: `1px solid ${hover ? 'rgba(212,180,131,0.6)' : colors.line}`,
        background: colors.white,
        padding: '1.65rem 1.5rem 1.55rem',
        boxShadow: hover
          ? '0 30px 58px rgba(58, 47, 44, 0.14)'
          : '0 14px 32px rgba(58, 47, 44, 0.05)',
        transform: visible
          ? `translateY(${hover ? -10 : 0}px) scale(${hover ? 1.015 : 1})`
          : 'translateY(28px)',
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${0.18 + index * 0.1}s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: accents[index % accents.length],
          opacity: hover ? 0.62 : 0.3,
          transition: 'opacity 0.35s ease',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 90,
          height: 90,
          borderRadius: '50%',
          border: `1px solid ${colors.gold}55`,
          right: hover ? 12 : -10,
          top: hover ? 10 : -16,
          opacity: hover ? 0.85 : 0.35,
          animation: 'sweeSpin 20s linear infinite',
          transition: 'right 0.4s ease, top 0.4s ease, opacity 0.35s ease',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.15rem' }}>
          <span
            style={{
              fontSize: '0.88rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: colors.cocoaSoft,
              fontWeight: 500,
              padding: '0.4rem 0.75rem',
              borderRadius: 999,
              background: 'rgba(255,252,250,0.9)',
              border: `1px solid ${colors.line}`,
              transform: hover ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'transform 0.3s ease',
            }}
          >
            {item.cue}
          </span>
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: 3,
              background: colors.gold,
              animation: 'sweePulse 1.9s ease-in-out infinite',
              animationDelay: `${index * 0.2}s`,
            }}
          />
        </div>
        <h3
          style={{
            fontFamily: fonts.display,
            fontSize: 'clamp(1.85rem, 2.4vw, 2.25rem)',
            margin: '0 0 0.8rem',
            fontWeight: 500,
            lineHeight: 1.12,
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            margin: '0 0 1.2rem',
            color: colors.cocoaSoft,
            lineHeight: 1.7,
            fontSize: '1.18rem',
            fontWeight: 300,
            flex: 1,
          }}
        >
          {item.text}
        </p>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.55rem',
            alignSelf: 'flex-start',
            padding: '0.5rem 0.85rem',
            borderRadius: 12,
            background: 'rgba(255,252,250,0.92)',
            border: `1px solid ${colors.line}`,
            fontSize: '1.02rem',
            fontWeight: 500,
            color: colors.cocoa,
            transform: hover ? 'translateX(4px)' : 'translateX(0)',
            transition: 'transform 0.35s ease',
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: colors.blushDeep,
              animation: 'sweePulse 1.6s ease-in-out infinite',
            }}
          />
          {item.detail}
        </div>
      </div>
    </article>
  )
}

function AboutPulseCard({ item, index, visible }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '1.45rem 1.1rem 1.35rem',
        borderRadius: 22,
        border: `1px solid ${hover ? 'rgba(212,180,131,0.55)' : colors.line}`,
        background: hover ? colors.white : 'rgba(255,252,250,0.9)',
        textAlign: 'center',
        boxShadow: hover ? '0 22px 44px rgba(58, 47, 44, 0.1)' : 'none',
        opacity: visible ? 1 : 0,
        transform: visible
          ? `translateY(${hover ? -8 : 0}px)`
          : 'translateY(20px)',
        transition: `opacity 0.6s ease ${0.2 + index * 0.08}s, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 'auto -20% -45% -20%',
          height: '70%',
          background: `radial-gradient(circle at 50% 0%, ${colors.blush}55 0%, transparent 70%)`,
          opacity: hover ? 1 : 0.45,
          transition: 'opacity 0.35s ease',
        }}
      />
      <p
        style={{
          margin: '0 0 0.45rem',
          fontFamily: fonts.display,
          fontSize: 'clamp(2.4rem, 3.2vw, 3rem)',
          fontWeight: 500,
          lineHeight: 1,
          background: `linear-gradient(120deg, ${colors.cocoa}, ${colors.blushDeep})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          position: 'relative',
          animation: visible ? 'sweeCountPop 0.7s cubic-bezier(0.22, 1, 0.36, 1) both' : 'none',
          animationDelay: `${0.25 + index * 0.08}s`,
        }}
      >
        {item.value}
      </p>
      <p style={{ margin: '0 0 0.3rem', fontWeight: 500, fontSize: '1.12rem', position: 'relative' }}>
        {item.label}
      </p>
      <p style={{ margin: 0, color: colors.cocoaSoft, fontSize: '0.95rem', lineHeight: 1.4, position: 'relative' }}>
        {item.sub}
      </p>
    </div>
  )
}

function AboutTimelineCard({ item, index, visible }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '1.55rem 1.4rem',
        borderRadius: 24,
        border: `1px solid ${hover ? 'rgba(212,180,131,0.55)' : colors.line}`,
        background: hover ? colors.white : 'rgba(255,252,250,0.86)',
        boxShadow: hover ? '0 24px 48px rgba(58, 47, 44, 0.1)' : 'none',
        position: 'relative',
        opacity: visible ? 1 : 0,
        transform: visible
          ? `translateY(${hover ? -8 : 0}px)`
          : 'translateY(18px)',
        transition: `opacity 0.6s ease ${0.42 + index * 0.1}s, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease`,
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          background: `linear-gradient(180deg, ${colors.gold}, ${colors.blushDeep})`,
          transform: hover ? 'scaleY(1)' : 'scaleY(0.35)',
          transformOrigin: 'top',
          transition: 'transform 0.4s ease',
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.9rem' }}>
        <span
          style={{
            fontFamily: fonts.display,
            fontSize: '1.85rem',
            color: colors.cocoa,
            opacity: hover ? 0.7 : 0.4,
            lineHeight: 1,
            transition: 'opacity 0.3s ease',
          }}
        >
          {item.step}
        </span>
        <span
          style={{
            flex: 1,
            height: 1.5,
            background: `linear-gradient(90deg, ${colors.gold}99, transparent)`,
            transformOrigin: 'left',
            transform: visible ? 'scaleX(1)' : 'scaleX(0)',
            transition: `transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${0.55 + index * 0.12}s`,
          }}
        />
        <span
          style={{
            fontSize: '0.88rem',
            letterSpacing: '0.04em',
            color: colors.gold,
            fontWeight: 500,
            whiteSpace: 'nowrap',
          }}
        >
          {item.time}
        </span>
      </div>
      <p
        style={{
          margin: '0 0 0.5rem',
          fontFamily: fonts.display,
          fontSize: '1.7rem',
          fontWeight: 500,
        }}
      >
        {item.title}
      </p>
      <p style={{ margin: 0, color: colors.cocoaSoft, lineHeight: 1.6, fontSize: '1.14rem' }}>
        {item.text}
      </p>
    </div>
  )
}

function AboutPillarCard({ item, index, visible, iconSrc }) {
  const [hover, setHover] = useState(false)
  const lifted = index === 1 ? -18 : 0

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 30,
        background: colors.white,
        border: `1px solid ${hover ? 'rgba(212,180,131,0.55)' : colors.line}`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: hover
          ? '0 32px 64px rgba(58, 47, 44, 0.14)'
          : index === 1
            ? '0 28px 60px rgba(58, 47, 44, 0.1)'
            : '0 16px 40px rgba(58, 47, 44, 0.05)',
        transform: visible
          ? `translateY(${lifted + (hover ? -10 : 0)}px) scale(${hover ? 1.015 : 1})`
          : 'translateY(34px)',
        opacity: visible ? 1 : 0,
        transition: `opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1) ${0.12 * index}s, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.35s ease`,
      }}
    >
      <div
        style={{
          minHeight: 168,
          background: item.accent,
          padding: '1.35rem 1.4rem',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: hover ? -8 : -22,
            top: hover ? -12 : -28,
            width: 130,
            height: 130,
            borderRadius: '42% 58% 50% 50%',
            background: 'rgba(255,252,250,0.38)',
            animation: 'sweeMorph 9s ease-in-out infinite',
            transition: 'right 0.4s ease, top 0.4s ease',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '35%',
            bottom: '-30%',
            width: 90,
            height: 90,
            borderRadius: '50%',
            border: `1px solid ${colors.gold}55`,
            animation: 'sweeSpin 18s linear infinite',
            opacity: hover ? 0.9 : 0.45,
            transition: 'opacity 0.35s ease',
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
          <span
            style={{
              fontSize: '0.86rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: colors.cocoaSoft,
              padding: '0.4rem 0.7rem',
              borderRadius: 10,
              background: 'rgba(255,252,250,0.82)',
              border: `1px solid ${colors.line}`,
              fontWeight: 500,
              transform: hover ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'transform 0.3s ease',
            }}
          >
            {item.label}
          </span>
          <span
            style={{
              fontFamily: fonts.display,
              fontSize: '2.4rem',
              lineHeight: 1,
              color: colors.cocoa,
              opacity: hover ? 0.45 : 0.28,
              transition: 'opacity 0.3s ease',
            }}
          >
            {item.step}
          </span>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.55rem',
            alignSelf: 'flex-start',
            padding: '0.45rem 0.75rem 0.45rem 0.45rem',
            borderRadius: 14,
            background: 'rgba(255,252,250,0.9)',
            border: `1px solid ${colors.line}`,
            position: 'relative',
            zIndex: 1,
            transform: hover ? 'translateY(-3px)' : 'translateY(0)',
            transition: 'transform 0.35s ease',
          }}
        >
          <img src={iconSrc} alt="" style={{ width: 28, height: 28, borderRadius: 8, objectFit: 'cover' }} />
          <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{item.cue}</span>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: 2,
              background: colors.gold,
              animation: 'sweePulse 1.8s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <div style={{ padding: '1.65rem 1.5rem 1.6rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontFamily: fonts.display,
            fontSize: '2.15rem',
            margin: '0 0 0.85rem',
            fontWeight: 500,
            lineHeight: 1.12,
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            margin: '0 0 1.2rem',
            color: colors.cocoaSoft,
            lineHeight: 1.7,
            fontWeight: 300,
            fontSize: '1.12rem',
          }}
        >
          {item.text}
        </p>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, flex: 1 }}>
          {item.details.map((detail, detailIndex) => (
            <li
              key={detail}
              style={{
                display: 'flex',
                gap: '0.65rem',
                alignItems: 'flex-start',
                padding: '0.55rem 0',
                borderTop: `1px solid ${colors.line}`,
                fontSize: '1.02rem',
                color: colors.cocoaSoft,
                lineHeight: 1.5,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(12px)',
                transition: `opacity 0.5s ease ${0.28 + index * 0.1 + detailIndex * 0.08}s, transform 0.5s ease ${0.28 + index * 0.1 + detailIndex * 0.08}s`,
              }}
            >
              <span
                style={{
                  color: colors.gold,
                  fontSize: '1rem',
                  lineHeight: 1.4,
                  transform: hover ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 0.25s ease',
                }}
              >
                ✓
              </span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function WorkCard({ sample, index, visible, iconSrc }) {
  const [hover, setHover] = useState(false)

  return (
    <article
      className="work-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        minHeight: 520,
        borderRadius: 30,
        overflow: 'hidden',
        border: `1px solid ${hover ? 'rgba(212,180,131,0.75)' : colors.line}`,
        display: 'flex',
        flexDirection: 'column',
        background: colors.white,
        boxShadow: hover
          ? '0 34px 70px rgba(58, 47, 44, 0.14)'
          : index === 1
            ? '0 24px 54px rgba(58, 47, 44, 0.1)'
            : '0 16px 40px rgba(58, 47, 44, 0.05)',
        transform: visible
          ? `translateY(${hover ? -14 : index === 1 ? -12 : 0}px) scale(${hover ? 1.02 : 1})`
          : 'translateY(30px)',
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${0.1 * index}s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.3s ease`,
      }}
    >
      <div
        style={{
          background: sample.accent,
          padding: '1.2rem 1.2rem 1.35rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 'auto -20% -35% 35%',
            height: 180,
            borderRadius: '50%',
            background: 'rgba(255,252,250,0.28)',
            animation: 'sweeMorph 10s ease-in-out infinite',
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '0.88rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: colors.cocoaSoft,
                background: 'rgba(255,252,250,0.88)',
                border: `1px solid ${colors.line}`,
                borderRadius: 10,
                padding: '0.4rem 0.65rem',
                fontWeight: 500,
              }}
            >
              {sample.type}
            </span>
            <span
              style={{
                fontSize: '0.88rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: colors.cocoa,
                background: colors.goldSoft,
                borderRadius: 10,
                padding: '0.4rem 0.65rem',
                fontWeight: 600,
              }}
            >
              {sample.plan}
            </span>
          </div>
          <img
            src={iconSrc}
            alt=""
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              objectFit: 'cover',
              border: `1px solid ${colors.line}`,
              transform: hover ? 'translateY(-4px) scale(1.06)' : 'translateY(0)',
              transition: 'transform 0.35s ease',
            }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            borderRadius: 18,
            overflow: 'hidden',
            background: 'rgba(255,252,250,0.72)',
            border: `1px solid rgba(255,255,255,0.7)`,
            boxShadow: '0 12px 28px rgba(58,47,44,0.08)',
            transform: hover ? 'translateY(-4px)' : 'translateY(0)',
            transition: 'transform 0.35s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '0.65rem 0.8rem',
              borderBottom: `1px solid ${colors.line}`,
              background: 'rgba(255,248,243,0.9)',
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 2, background: '#E8B7C4' }} />
            <span style={{ width: 7, height: 7, borderRadius: 2, background: '#E6D0A8' }} />
            <span style={{ width: 7, height: 7, borderRadius: 2, background: '#C9B8D4' }} />
            <span style={{ marginLeft: 6, fontSize: '0.78rem', color: colors.cocoaSoft }}>
              {sample.title.toLowerCase().replace(/\s+/g, '')}.weeora
            </span>
          </div>
          <div style={{ padding: '0.95rem 0.9rem 1rem' }}>
            <p style={{ margin: '0 0 0.25rem', fontSize: '0.9rem', color: colors.cocoaSoft }}>{sample.city}</p>
            <h3
              style={{
                fontFamily: fonts.display,
                fontSize: '2.05rem',
                margin: '0 0 0.85rem',
                fontWeight: 500,
                lineHeight: 1.05,
              }}
            >
              {sample.title}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.45rem' }}>
              {sample.preview.map((block, i) => (
                <div
                  key={block}
                  style={{
                    borderRadius: 12,
                    padding: '0.7rem 0.55rem',
                    background: colors.white,
                    border: `1px solid ${colors.line}`,
                    minHeight: 62,
                    display: 'flex',
                    alignItems: 'flex-end',
                    fontFamily: fonts.display,
                    fontSize: '1.05rem',
                    transform: hover ? 'translateY(0)' : 'translateY(2px)',
                    opacity: visible ? 1 : 0,
                    transition: `opacity 0.45s ease ${0.2 + index * 0.08 + i * 0.06}s, transform 0.35s ease`,
                  }}
                >
                  {block}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '1.5rem 1.45rem 1.55rem', background: colors.cream, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p
          style={{
            margin: '0 0 1.1rem',
            color: colors.cocoaSoft,
            lineHeight: 1.7,
            fontWeight: 300,
            fontSize: '1.12rem',
          }}
        >
          {sample.note}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.15rem' }}>
          {sample.highlights.map((item, i) => (
            <span
              key={item}
              style={{
                fontSize: '0.95rem',
                padding: '0.4rem 0.65rem',
                borderRadius: 10,
                border: `1px solid ${colors.line}`,
                background: colors.white,
                color: colors.cocoaSoft,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
                transition: `opacity 0.45s ease ${0.28 + index * 0.08 + i * 0.07}s, transform 0.45s ease ${0.28 + index * 0.08 + i * 0.07}s`,
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <div
          style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            borderTop: `1px solid ${colors.line}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
        >
          <p style={{ margin: 0, fontSize: '1.05rem', color: colors.cocoa, fontWeight: 500, lineHeight: 1.4 }}>
            {sample.result}
          </p>
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: 11,
              border: `1px solid ${colors.line}`,
              background: hover ? colors.cocoa : colors.white,
              color: hover ? colors.cream : colors.gold,
              display: 'grid',
              placeItems: 'center',
              transition: 'background 0.3s ease, color 0.3s ease',
              flexShrink: 0,
            }}
          >
            →
          </span>
        </div>
      </div>
    </article>
  )
}

function PackageCard({ pkg, index, visible, whatsappHref }) {
  const [hover, setHover] = useState(false)
  const featured = !!pkg.featured
  const baseLift = featured ? -16 : 0

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: featured ? colors.cocoa : colors.white,
        color: featured ? colors.cream : colors.cocoa,
        border: `1px solid ${
          hover
            ? featured
              ? colors.goldSoft
              : 'rgba(212,180,131,0.7)'
            : featured
              ? colors.cocoa
              : colors.line
        }`,
        borderRadius: 28,
        padding: '2rem 1.7rem 1.7rem',
        display: 'flex',
        flexDirection: 'column',
        minHeight: 600,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: hover
          ? featured
            ? '0 34px 70px rgba(58, 47, 44, 0.28)'
            : '0 28px 58px rgba(58, 47, 44, 0.12)'
          : featured
            ? '0 28px 60px rgba(58, 47, 44, 0.18)'
            : '0 14px 36px rgba(58, 47, 44, 0.05)',
        transform: visible
          ? `translateY(${baseLift + (hover ? -10 : 0)}px) scale(${hover ? 1.02 : 1})`
          : 'translateY(32px)',
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${0.1 * index}s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease, border-color 0.3s ease`,
      }}
      className="pkg-card"
    >
      {featured && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: -40,
            top: -50,
            width: 160,
            height: 160,
            borderRadius: '46% 54% 48% 52%',
            background: `radial-gradient(circle, ${colors.goldSoft}33, transparent 70%)`,
            animation: 'sweeMorph 10s ease-in-out infinite',
          }}
        />
      )}

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', position: 'relative', zIndex: 1 }}>
        <div>
          <p
            style={{
              margin: '0 0 0.45rem',
              fontSize: '0.95rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: featured ? colors.goldSoft : colors.gold,
              fontWeight: 500,
            }}
          >
            {pkg.includes}
          </p>
          <h3
            style={{
              fontFamily: fonts.display,
              fontSize: '2.75rem',
              margin: 0,
              fontWeight: 500,
              lineHeight: 1,
            }}
          >
            {pkg.name}
          </h3>
        </div>
        {featured && (
          <span
            style={{
              alignSelf: 'flex-start',
              fontSize: '0.9rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: colors.cocoa,
              background: colors.goldSoft,
              padding: '0.45rem 0.7rem',
              borderRadius: 10,
              fontWeight: 600,
              animation: 'sweePulse 2.4s ease-in-out infinite',
            }}
          >
            Most chosen
          </span>
        )}
      </div>

      <div style={{ marginTop: '1.25rem', position: 'relative', zIndex: 1 }}>
        <p
          style={{
            margin: 0,
            fontSize: '3rem',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            color: featured ? colors.goldSoft : colors.cocoa,
            lineHeight: 1,
          }}
        >
          {pkg.price}
        </p>
        <p
          style={{
            margin: '0.55rem 0 0',
            fontSize: '1.12rem',
            color: featured ? 'rgba(255,248,243,0.7)' : colors.cocoaSoft,
          }}
        >
          One-time setup · Ready in {pkg.time}
        </p>
      </div>

      <p
        style={{
          margin: '1.15rem 0 0.9rem',
          lineHeight: 1.65,
          fontSize: '1.2rem',
          color: featured ? 'rgba(255,248,243,0.84)' : colors.cocoaSoft,
          fontWeight: 300,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {pkg.blurb}
      </p>

      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          alignSelf: 'flex-start',
          marginBottom: '1.1rem',
          padding: '0.45rem 0.8rem',
          borderRadius: 10,
          border: `1px solid ${featured ? 'rgba(255,248,243,0.16)' : colors.line}`,
          background: featured ? 'rgba(255,248,243,0.06)' : colors.cream,
          fontSize: '1.02rem',
          color: featured ? colors.goldSoft : colors.cocoaSoft,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: 2,
            background: featured ? colors.goldSoft : colors.gold,
            animation: 'sweePulse 2s ease-in-out infinite',
          }}
        />
        Best for: {pkg.bestFor}
      </div>

      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.6rem', flex: 1, position: 'relative', zIndex: 1 }}>
        {pkg.points.map((point, pointIndex) => (
          <li
            key={point}
            style={{
              padding: '0.6rem 0',
              borderTop: `1px solid ${featured ? 'rgba(255,248,243,0.12)' : colors.line}`,
              fontSize: '1.12rem',
              lineHeight: 1.5,
              display: 'flex',
              gap: '0.6rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(12px)',
              transition: `opacity 0.45s ease ${0.25 + index * 0.08 + pointIndex * 0.06}s, transform 0.45s ease ${0.25 + index * 0.08 + pointIndex * 0.06}s`,
            }}
          >
            <span style={{ color: featured ? colors.goldSoft : colors.gold }}>✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <HoverLink
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        style={{
          ...ctaStyle,
          width: '100%',
          textAlign: 'center',
          boxSizing: 'border-box',
          padding: '1.1rem 1.25rem',
          fontSize: '1.15rem',
          background: featured ? colors.goldSoft : colors.cocoa,
          color: featured ? colors.cocoa : colors.cream,
          position: 'relative',
          zIndex: 1,
        }}
      >
        Choose {pkg.name}
      </HoverLink>
    </div>
  )
}

function NavTextLink({ href, children, onClick }) {
  const [hover, setHover] = useState(false)

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        textDecoration: 'none',
        color: hover ? colors.cocoa : colors.cocoaSoft,
        fontSize: '1.05rem',
        fontWeight: 500,
        letterSpacing: '0.02em',
        padding: '0.4rem 0',
        transition: 'color 0.2s ease',
      }}
    >
      {children}
      <span
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 1.5,
          background: colors.gold,
          transform: hover ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left center',
          transition: 'transform 0.25s ease',
        }}
      />
    </a>
  )
}

function FooterLink({ href, children, external }) {
  const [hover, setHover] = useState(false)

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'inline-block',
        textDecoration: 'none',
        color: hover ? colors.cocoa : colors.cocoaSoft,
        fontSize: '1.12rem',
        fontWeight: 400,
        lineHeight: 1.35,
        padding: '0.2rem 0',
        transition: 'color 0.22s ease',
      }}
    >
      {children}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: 1,
          background: colors.gold,
          transform: hover ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left center',
          transition: 'transform 0.25s ease',
        }}
      />
    </a>
  )
}

function heroFade(heroIn, delay) {
  return {
    opacity: heroIn ? 1 : 0,
    transform: heroIn ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  }
}

export default function App() {
  const [heroIn, setHeroIn] = useState(false)
  const [navSolid, setNavSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const [page, setPage] = useState(() =>
    typeof window !== 'undefined' && window.location.hash === '#about' ? 'about' : 'home',
  )
  const visible = useReveal(page)

  useEffect(() => {
    document.body.style.margin = '0'
    document.body.style.background = colors.cream
    document.body.style.color = colors.cocoa
    document.body.style.fontFamily = fonts.body
    document.documentElement.style.scrollBehavior = 'smooth'

    const timer = setTimeout(() => setHeroIn(true), 60)
    const onScroll = () => setNavSolid(window.scrollY > 18)
    window.addEventListener('scroll', onScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash
      if (hash === '#about') {
        setPage('about')
        setMenuOpen(false)
        window.scrollTo({ top: 0, behavior: 'auto' })
      } else {
        setPage('home')
        setMenuOpen(false)
      }
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  useEffect(() => {
    if (page !== 'home') return undefined
    const hash = window.location.hash
    if (!hash || hash === '#about' || hash === '#top') return undefined
    const timer = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
    return () => clearTimeout(timer)
  }, [page])

  const goHome = (e) => {
    if (e) e.preventDefault()
    setPage('home')
    setMenuOpen(false)
    if (window.location.hash === '#about' || window.location.hash === '') {
      window.history.pushState(null, '', `${window.location.pathname}${window.location.search}`)
    } else {
      window.location.hash = ''
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const revealStyle = (id, delay = 0) => ({
    opacity: visible[id] ? 1 : 0,
    transform: visible[id] ? 'translateY(0)' : 'translateY(26px)',
    transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
  })

  return (
    <div id="top" style={{ background: colors.cream, minHeight: '100vh', overflowX: 'hidden' }}>
      {/* 1. NAVBAR */}
      <nav
        className="nav-shell"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          boxSizing: 'border-box',
          padding: navSolid ? '0.75rem 1.8vw' : '1.05rem 1.8vw',
          transition: 'padding 0.3s ease',
        }}
      >
        <div
          className="nav-inner"
          style={{
            boxSizing: 'border-box',
            maxWidth: 1840,
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            padding: navSolid ? '0.9rem 2.1rem' : '1.05rem 2.3rem',
            borderRadius: 18,
            background: navSolid ? 'rgba(255, 252, 250, 0.92)' : 'rgba(255, 252, 250, 0.55)',
            border: `1px solid ${navSolid ? colors.line : 'rgba(58, 47, 44, 0.08)'}`,
            backdropFilter: 'blur(16px)',
            boxShadow: navSolid ? '0 10px 30px rgba(58, 47, 44, 0.06)' : '0 4px 18px rgba(58, 47, 44, 0.03)',
            transition: 'padding 0.3s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <a
            href="#top"
            onClick={goHome}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              textDecoration: 'none',
              minWidth: 0,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 15,
                padding: 2,
                background: `linear-gradient(145deg, ${colors.blush}, ${colors.goldSoft})`,
                flexShrink: 0,
              }}
            >
              <img
                src={icon}
                alt="wee-ora"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 13,
                  display: 'block',
                  background: colors.white,
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.12, minWidth: 0 }}>
              <span
                style={{
                  fontFamily: fonts.display,
                  fontSize: '1.85rem',
                  color: colors.cocoa,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                wee-ora
              </span>
              <span
                className="nav-tagline"
                style={{
                  fontSize: '0.86rem',
                  color: colors.cocoaSoft,
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: 280,
                }}
              >
                Pretty presence. Smart growth.
              </span>
            </div>
          </a>

          <div
            className="nav-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.25rem',
              borderRadius: 14,
              background: 'rgba(255, 248, 243, 0.65)',
              border: `1px solid ${colors.line}`,
            }}
          >
            {[
              ['#about', 'About'],
              ['#packages', 'Packages'],
              ['#work', 'Work'],
              ['#contact', 'Contact'],
            ].map(([href, label]) => (
              <div key={href} style={{ padding: '0.35rem 0.85rem' }}>
                <NavTextLink href={href}>{label}</NavTextLink>
              </div>
            ))}
          </div>

          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <HoverLink
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={{
                ...ctaStyle,
                padding: '0.85rem 1.4rem',
                fontSize: '1.02rem',
                borderRadius: 12,
                background: colors.cocoa,
                boxShadow: '0 8px 18px rgba(58, 47, 44, 0.12)',
              }}
            >
              Say hello
            </HoverLink>
          </div>

          <button
            className="nav-burger"
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              display: 'none',
              border: `1px solid ${colors.line}`,
              background: colors.white,
              borderRadius: 12,
              padding: '0.6rem 0.85rem',
              cursor: 'pointer',
              color: colors.cocoa,
              fontFamily: fonts.body,
              fontSize: '0.88rem',
              fontWeight: 500,
            }}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {menuOpen && (
          <div
            className="nav-mobile-panel"
            style={{
              maxWidth: 1840,
              width: '100%',
              margin: '0.75rem auto 0',
              padding: '1.1rem 2rem',
              borderRadius: 18,
              background: 'rgba(255, 252, 250, 0.96)',
              border: `1px solid ${colors.line}`,
              backdropFilter: 'blur(16px)',
              display: 'grid',
              gap: '0.35rem',
              boxShadow: '0 12px 28px rgba(58, 47, 44, 0.08)',
            }}
          >
            {[
              ['#about', 'About'],
              ['#packages', 'Packages'],
              ['#work', 'Work'],
              ['#contact', 'Contact'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  ...navLinkStyle,
                  fontSize: '1rem',
                  padding: '0.7rem 0.55rem',
                  borderBottom: `1px solid ${colors.line}`,
                }}
              >
                {label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{ ...ctaStyle, textAlign: 'center', marginTop: '0.55rem' }}
            >
              Say hello
            </a>
          </div>
        )}
      </nav>

      {page === 'home' && (
      <>
      {/* 2. HERO */}
      <header
        className="hero"
        onMouseMove={(e) => {
          if (window.matchMedia('(max-width: 900px), (pointer: coarse)').matches) {
            if (pointer.x !== 0 || pointer.y !== 0) setPointer({ x: 0, y: 0 })
            return
          }
          const rect = e.currentTarget.getBoundingClientRect()
          setPointer({
            x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
            y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
          })
        }}
        style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.9fr)',
          alignItems: 'center',
          gap: 0,
          padding: '8.5rem 2.5vw 5.5rem 4vw',
          background: `
            radial-gradient(ellipse 70% 55% at 6% 16%, ${colors.blush} 0%, transparent 58%),
            radial-gradient(ellipse 48% 52% at 48% 48%, ${colors.blush}55 0%, transparent 68%),
            radial-gradient(ellipse 55% 50% at 94% 82%, ${colors.lilac} 0%, transparent 52%),
            radial-gradient(ellipse 42% 38% at 72% 14%, ${colors.goldSoft}66 0%, transparent 62%),
            linear-gradient(165deg, ${colors.cream} 0%, #FFF1EA 40%, #F8EBEF 72%, ${colors.cream} 100%)
          `,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(58,47,44,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(58,47,44,0.025) 1px, transparent 1px)
            `,
            backgroundSize: '72px 72px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 40% 40%, black 20%, transparent 75%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '100%', paddingRight: 0 }}>
          <div style={heroFade(heroIn, 0.05)}>
            <p
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                margin: '0 0 1.35rem',
                padding: '0.5rem 0.95rem',
                borderRadius: 10,
                border: `1px solid ${colors.line}`,
                background: 'rgba(255,252,250,0.78)',
                color: colors.cocoaSoft,
                fontSize: '0.95rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  background: colors.gold,
                  animation: 'sweePulse 2.4s ease-in-out infinite',
                  flexShrink: 0,
                }}
              />
              Where little brands get noticed
            </p>
          </div>

          <div style={heroFade(heroIn, 0.14)}>
            <p
              className="hero-brand"
              style={{
                fontFamily: fonts.display,
                fontSize: 'clamp(3.2rem, 8vw, 7rem)',
                lineHeight: 0.9,
                margin: '0 0 0.55rem',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                color: colors.cocoa,
              }}
            >
              wee-ora
            </p>
            <div
              style={{
                width: heroIn ? 96 : 0,
                height: 2,
                background: `linear-gradient(90deg, ${colors.gold}, ${colors.blushDeep})`,
                margin: '0 0 1.15rem',
                borderRadius: 2,
                transition: 'width 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.35s',
              }}
            />
          </div>

          <div style={heroFade(heroIn, 0.24)}>
            <h1
              className="hero-title"
              style={{
                fontFamily: fonts.display,
                fontSize: 'clamp(1.85rem, 3.6vw, 3.1rem)',
                fontWeight: 500,
                fontStyle: 'italic',
                lineHeight: 1.18,
                margin: '0 0 1.05rem',
                color: colors.cocoa,
                maxWidth: '100%',
              }}
            >
              Pretty presence. Smart growth.
            </h1>
          </div>

          <div style={heroFade(heroIn, 0.34)}>
            <p
              className="hero-copy"
              style={{
                margin: '0 0 2rem',
                fontSize: 'clamp(1.05rem, 2vw, 1.28rem)',
                lineHeight: 1.72,
                color: colors.cocoaSoft,
                maxWidth: '92%',
                fontWeight: 300,
              }}
            >
              Turn your brand into a presence people remember — calm, pretty, and ready when they ask.
            </p>
          </div>

          <div
            className="hero-actions"
            style={{
              display: 'flex',
              gap: '0.9rem',
              flexWrap: 'wrap',
              marginBottom: '2.1rem',
              ...heroFade(heroIn, 0.44),
            }}
          >
            <HoverLink
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={{
                ...ctaStyle,
                padding: '1.05rem 1.55rem',
                fontSize: '1.12rem',
                boxShadow: '0 12px 28px rgba(58, 47, 44, 0.14)',
              }}
            >
              Start for ₹2,999 →
            </HoverLink>
            <HoverLink
              href="#packages"
              style={{
                ...ctaStyle,
                background: 'rgba(255,252,250,0.55)',
                color: colors.cocoa,
                border: `1px solid ${colors.cocoa}`,
                padding: '1.05rem 1.55rem',
                fontSize: '1.12rem',
                backdropFilter: 'blur(8px)',
              }}
            >
              See plans
            </HoverLink>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              width: 'fit-content',
              maxWidth: '100%',
              padding: '0.9rem 1.15rem 0.9rem 0.9rem',
              borderRadius: 18,
              border: `1px solid ${colors.line}`,
              background: 'rgba(255,252,250,0.62)',
              backdropFilter: 'blur(8px)',
              ...heroFade(heroIn, 0.54),
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                overflow: 'hidden',
                border: `1px solid ${colors.line}`,
                flexShrink: 0,
              }}
            >
              <img src={icon} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              <p style={{ margin: 0, fontSize: '1.12rem', color: colors.cocoa, fontWeight: 500 }}>
                Soft pages. Quiet AI. Warm first hellos.
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['Presence', 'Intelligence', 'Enquiries'].map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: '0.88rem',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: colors.cocoaSoft,
                      padding: '0.35rem 0.65rem',
                      borderRadius: 8,
                      border: `1px solid ${colors.line}`,
                      background: colors.white,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="hero-visual"
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'stretch',
            alignItems: 'center',
            minHeight: 640,
            width: '100%',
            marginLeft: '-1vw',
            marginRight: 0,
            marginTop: 72,
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? 'translateY(0)' : 'translateY(36px)',
            transition: 'opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s, transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
          }}
        >
          {/* Soft stage glow */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              width: '100%',
              height: '82%',
              right: '-4%',
              borderRadius: '42% 58% 48% 52%',
              background: `radial-gradient(circle at 55% 42%, ${colors.blush}aa, ${colors.lilac}88 45%, ${colors.goldSoft}66 75%, transparent 78%)`,
              filter: 'blur(22px)',
              transform: `translate(${pointer.x * -10}px, ${pointer.y * -8}px)`,
              transition: 'transform 0.35s ease-out',
              animation: 'sweeMorph 12s ease-in-out infinite',
            }}
          />

          {/* Orbit ring */}
          <div
            className="hero-orbit"
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '2%',
              width: 'min(640px, 98%)',
              height: 'min(640px, 98%)',
              borderRadius: '50%',
              border: `1px dashed ${colors.gold}66`,
              animation: 'sweeSpin 28s linear infinite',
            }}
          >
            {['Pretty', 'Smart', 'Warm', 'Ready'].map((word, i) => (
              <span
                key={word}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 64,
                  marginLeft: -32,
                  marginTop: -14,
                  textAlign: 'center',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: colors.cocoaSoft,
                  background: 'rgba(255,252,250,0.85)',
                  border: `1px solid ${colors.line}`,
                  borderRadius: 10,
                  padding: '0.35rem 0.2rem',
                  transform: `rotate(${i * 90}deg) translateY(-285px) rotate(-${i * 90}deg)`,
                }}
              >
                {word}
              </span>
            ))}
          </div>

          <div className="hero-stage-frame">
          <div
            className="hero-stage"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '100%',
              height: 600,
              marginLeft: 0,
              transform: `translate(${pointer.x * 7}px, ${pointer.y * 5}px)`,
              transition: 'transform 0.35s ease-out',
            }}
          >
            {/* Depth cards behind */}
            <div
              className="hero-depth"
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '8% 10% 12% 6%',
                borderRadius: 32,
                background: colors.lilac,
                opacity: 0.35,
                transform: 'rotate(-6deg) scale(0.96)',
              }}
            />
            <div
              className="hero-depth"
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '6% 8% 10% 8%',
                borderRadius: 32,
                background: colors.blush,
                opacity: 0.4,
                transform: 'rotate(4deg) scale(0.98)',
              }}
            />

            {/* Main wide desktop preview */}
            <div
              className="hero-preview"
              style={{
                position: 'absolute',
                left: '0%',
                top: '5%',
                width: '82%',
                borderRadius: 30,
                overflow: 'hidden',
                background: colors.white,
                border: `1px solid ${colors.line}`,
                boxShadow: '0 30px 70px rgba(58, 47, 44, 0.14)',
                animation: 'sweeRise 8s ease-in-out infinite',
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '0.95rem 1.1rem',
                  borderBottom: `1px solid ${colors.line}`,
                  background: `linear-gradient(90deg, ${colors.cream}, #FFF5F0)`,
                }}
              >
                <span style={{ width: 9, height: 9, borderRadius: 3, background: '#E8B7C4' }} />
                <span style={{ width: 9, height: 9, borderRadius: 3, background: '#E6D0A8' }} />
                <span style={{ width: 9, height: 9, borderRadius: 3, background: '#C9B8D4' }} />
                <div
                  style={{
                    marginLeft: 10,
                    flex: 1,
                    height: 30,
                    borderRadius: 9,
                    background: colors.white,
                    border: `1px solid ${colors.line}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 0.8rem',
                    fontSize: '0.78rem',
                    color: colors.cocoaSoft,
                  }}
                >
                  <span>bloomatelier.weeora</span>
                  <span style={{ color: colors.gold, fontWeight: 500 }}>Live</span>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.15fr 0.85fr',
                  minHeight: 280,
                }}
              >
                <div
                  style={{
                    background: `linear-gradient(165deg, ${colors.blush} 0%, ${colors.lilac} 55%, ${colors.goldSoft} 100%)`,
                    padding: '1.4rem 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <p style={{ margin: 0, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: colors.cocoaSoft }}>
                      Soft launch
                    </p>
                    <p
                      style={{
                        margin: '0.55rem 0 0',
                        fontFamily: fonts.display,
                        fontSize: '2.15rem',
                        lineHeight: 0.95,
                        color: colors.cocoa,
                      }}
                    >
                      Bloom Atelier
                    </p>
                    <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: colors.cocoaSoft, maxWidth: 200 }}>
                      A calm online presence with a warm first hello.
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      alignSelf: 'flex-start',
                      padding: '0.4rem 0.75rem 0.4rem 0.4rem',
                      borderRadius: 14,
                      background: 'rgba(255, 252, 250, 0.82)',
                      border: `1px solid rgba(255,255,255,0.7)`,
                      color: colors.cocoa,
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      backdropFilter: 'blur(8px)',
                      boxShadow: '0 8px 20px rgba(58, 47, 44, 0.08)',
                    }}
                  >
                    <span
                      style={{
                        position: 'relative',
                        width: 28,
                        height: 28,
                        borderRadius: 9,
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={icon}
                        alt=""
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          right: 2,
                          bottom: 2,
                          width: 7,
                          height: 7,
                          borderRadius: 2,
                          background: colors.gold,
                          border: `1.5px solid ${colors.white}`,
                          animation: 'sweePulse 1.8s ease-in-out infinite',
                        }}
                      />
                    </span>
                    <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                      <span style={{ fontSize: '0.72rem', color: colors.cocoaSoft, fontWeight: 400 }}>
                        Always on
                      </span>
                      <span>AI soft assistant</span>
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1rem', background: colors.cream, display: 'grid', gap: '0.65rem' }}>
                  {[
                    ['Silk Sets', 'Featured'],
                    ['Scarves', 'New in'],
                    ['Gift Edit', 'Soft pick'],
                  ].map(([title, tag], i) => (
                    <div
                      key={title}
                      style={{
                        borderRadius: 14,
                        padding: '0.7rem 0.75rem',
                        background: colors.white,
                        border: `1px solid ${colors.line}`,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transform: heroIn ? 'translateX(0)' : 'translateX(18px)',
                        opacity: heroIn ? 1 : 0,
                        transition: `opacity 0.6s ease ${0.45 + i * 0.12}s, transform 0.6s ease ${0.45 + i * 0.12}s`,
                      }}
                    >
                      <div>
                        <p style={{ margin: 0, fontSize: '0.7rem', color: colors.cocoaSoft }}>{tag}</p>
                        <p style={{ margin: '0.15rem 0 0', fontFamily: fonts.display, fontSize: '1.15rem' }}>{title}</p>
                      </div>
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: 10,
                          background:
                            i === 0
                              ? colors.blush
                              : i === 1
                                ? colors.lilac
                                : colors.goldSoft,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone layer */}
            <div
              className="hero-phone"
              style={{
                position: 'absolute',
                right: '1%',
                bottom: '1%',
                width: 210,
                borderRadius: 28,
                background: colors.white,
                border: `1px solid ${colors.line}`,
                boxShadow: '0 22px 50px rgba(58, 47, 44, 0.16)',
                overflow: 'hidden',
                zIndex: 4,
                transform: `translate(${pointer.x * -5}px, ${pointer.y * -4}px)`,
                transition: 'transform 0.35s ease-out',
                animation: 'sweeFloat 6.8s ease-in-out infinite',
              }}
            >
              <div style={{ height: 18, background: colors.cream, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 4 }}>
                <div style={{ width: 48, height: 5, borderRadius: 4, background: colors.line }} />
              </div>
              <div style={{ padding: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.7rem' }}>
                  <img src={icon} alt="" style={{ width: 26, height: 26, borderRadius: 8 }} />
                  <div>
                    <p style={{ margin: 0, fontSize: '0.78rem', fontWeight: 500 }}>Soft assistant</p>
                    <p style={{ margin: 0, fontSize: '0.66rem', color: colors.gold }}>Typing</p>
                  </div>
                </div>
                <div
                  style={{
                    padding: '0.65rem 0.7rem',
                    borderRadius: 12,
                    background: colors.cream,
                    fontSize: '0.74rem',
                    lineHeight: 1.45,
                    color: colors.cocoaSoft,
                    marginBottom: '0.55rem',
                  }}
                >
                  We open at 10. Want today's silk details?
                </div>
                <div style={{ display: 'flex', gap: 5, padding: '0.2rem 0.35rem 0.55rem' }}>
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 2,
                        background: colors.gold,
                        animation: `sweeTypeDot 1.2s ease-in-out ${dot * 0.18}s infinite`,
                      }}
                    />
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  {['Timing', 'Price'].map((chip) => (
                    <span
                      key={chip}
                      style={{
                        fontSize: '0.66rem',
                        padding: '0.28rem 0.45rem',
                        borderRadius: 8,
                        border: `1px solid ${colors.line}`,
                        color: colors.cocoaSoft,
                      }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Enquiry toast */}
            <div
              className="hero-toast"
              style={{
                position: 'absolute',
                left: '-2%',
                top: '-10%',
                width: 220,
                borderRadius: 18,
                padding: '0.85rem 0.95rem',
                background: colors.cocoa,
                color: colors.cream,
                boxShadow: '0 16px 34px rgba(58, 47, 44, 0.2)',
                zIndex: 5,
                transform: `translate(${pointer.x * 6}px, ${pointer.y * 4}px)`,
                transition: 'transform 0.35s ease-out',
                animation: 'sweeFloat 7.2s ease-in-out infinite reverse',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ margin: 0, fontSize: '0.68rem', opacity: 0.7 }}>New enquiry</p>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 2,
                    background: colors.goldSoft,
                    animation: 'sweePulse 1.6s ease-in-out infinite',
                  }}
                />
              </div>
              <p style={{ margin: '0.35rem 0 0', fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.35 }}>
                “Is the beige set available today?”
              </p>
            </div>

            {/* Growth spark card */}
            <div
              className="hero-spark"
              style={{
                position: 'absolute',
                right: '8%',
                top: '8%',
                width: 148,
                borderRadius: 18,
                padding: '0.8rem',
                background: 'rgba(255,252,250,0.92)',
                border: `1px solid ${colors.line}`,
                boxShadow: '0 14px 30px rgba(58, 47, 44, 0.1)',
                zIndex: 5,
                backdropFilter: 'blur(10px)',
                animation: 'sweeFloat 5.8s ease-in-out infinite',
              }}
            >
              <p style={{ margin: 0, fontSize: '0.68rem', color: colors.cocoaSoft }}>This week</p>
              <p style={{ margin: '0.2rem 0 0.55rem', fontFamily: fonts.display, fontSize: '1.55rem' }}>+38%</p>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 34 }}>
                {[40, 55, 48, 70, 62, 88, 76].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: 3,
                      background: i === 5 ? colors.gold : colors.blushDeep,
                      animation: `sweeBar 2.4s ease-in-out ${i * 0.08}s infinite alternate`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>

        <a
          href="#process"
          className="hero-scroll"
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '1.4rem',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.55rem',
            textDecoration: 'none',
            color: colors.cocoa,
            opacity: heroIn ? 1 : 0,
            transition: 'opacity 0.8s ease 1s',
            zIndex: 3,
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              padding: '0.55rem 0.95rem',
              borderRadius: 14,
              border: `1px solid ${colors.line}`,
              background: 'rgba(255,252,250,0.78)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 8px 22px rgba(58, 47, 44, 0.06)',
            }}
          >
            <span
              style={{
                width: 18,
                height: 28,
                borderRadius: 10,
                border: `1.5px solid ${colors.gold}`,
                position: 'relative',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: 5,
                  width: 3,
                  height: 6,
                  borderRadius: 2,
                  background: colors.gold,
                  transform: 'translateX(-50%)',
                  animation: 'sweeScrollDot 1.6s ease-in-out infinite',
                }}
              />
            </span>
            <span
              style={{
                fontFamily: fonts.display,
                fontSize: '1.15rem',
                fontStyle: 'italic',
                letterSpacing: '0.04em',
                lineHeight: 1,
              }}
            >
              Softly down
            </span>
          </span>
          <span
            style={{
              width: 1,
              height: 34,
              background: `linear-gradient(${colors.gold}, transparent)`,
              animation: 'sweeScrollLine 1.8s ease-in-out infinite',
            }}
          />
        </a>
      </header>

      {/* 3. WHAT WE DO */}
      <section
        id="process"
        className="section"
        data-reveal
        style={{
          padding: '7.5rem 5vw',
          background: `
            radial-gradient(ellipse 55% 48% at 0% 0%, ${colors.blush}55 0%, transparent 58%),
            radial-gradient(ellipse 45% 42% at 100% 100%, ${colors.lilac}44 0%, transparent 55%),
            linear-gradient(180deg, ${colors.white} 0%, ${colors.cream} 100%)
          `,
          position: 'relative',
          overflow: 'hidden',
          ...revealStyle('process'),
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '3rem',
            alignItems: 'end',
            marginBottom: '3.6rem',
          }}
          className="about-head"
        >
          <div
            style={{
              opacity: visible.process ? 1 : 0,
              transform: visible.process ? 'translateY(0)' : 'translateY(22px)',
              transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <p
              style={{
                ...eyebrowStyle,
                marginBottom: '1rem',
                fontSize: '0.92rem',
              }}
            >
              What we do
            </p>
            <h2
              style={{
                ...sectionTitleStyle,
                marginBottom: '1rem',
                fontSize: 'clamp(2.6rem, 5vw, 4rem)',
                maxWidth: 640,
              }}
            >
              Three soft steps. One pretty presence.
            </h2>
            <div
              style={{
                width: visible.process ? 110 : 0,
                height: 2.5,
                borderRadius: 2,
                background: `linear-gradient(90deg, ${colors.gold}, ${colors.blushDeep})`,
                transition: 'width 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.2s',
                animation: visible.process ? 'sweeShimmer 2.8s ease-in-out infinite' : 'none',
                backgroundSize: '200% 100%',
              }}
            />
          </div>
          <p
            style={{
              margin: 0,
              color: colors.cocoaSoft,
              lineHeight: 1.75,
              fontSize: '1.22rem',
              fontWeight: 300,
              opacity: visible.process ? 1 : 0,
              transform: visible.process ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.75s ease 0.12s, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.12s',
            }}
          >
            First we make your page look calm and clear. Then we add AI for common questions. When someone is ready, they message you on WhatsApp.
          </p>
        </div>

        <div
          className="three-col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1.4rem',
            alignItems: 'stretch',
          }}
        >
          {pillars.map((item, index) => (
            <AboutPillarCard
              key={item.title}
              item={item}
              index={index}
              visible={!!visible.process}
              iconSrc={icon}
            />
          ))}
        </div>

        <div
          className="about-facts"
          style={{
            marginTop: '2.4rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            borderRadius: 24,
            border: `1px solid ${colors.line}`,
            background: colors.white,
            overflow: 'hidden',
          }}
        >
          {aboutFacts.map((fact, i) => (
            <div
              key={fact.title}
              style={{
                padding: '1.5rem 1.4rem',
                borderLeft: i === 0 ? 'none' : `1px solid ${colors.line}`,
                opacity: visible.process ? 1 : 0,
                transform: visible.process ? 'translateY(0)' : 'translateY(18px)',
                transition: `opacity 0.55s ease ${0.4 + i * 0.1}s, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${0.4 + i * 0.1}s`,
              }}
            >
              <p
                style={{
                  margin: '0 0 0.55rem',
                  fontFamily: fonts.display,
                  fontSize: '1.55rem',
                  fontWeight: 500,
                  lineHeight: 1.15,
                }}
              >
                {fact.title}
              </p>
              <p style={{ margin: 0, color: colors.cocoaSoft, lineHeight: 1.6, fontSize: '1.02rem' }}>
                {fact.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            padding: '1.25rem 1.4rem',
            borderRadius: 20,
            background: colors.cocoa,
            color: colors.cream,
            opacity: visible.process ? 1 : 0,
            transform: visible.process ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease 0.55s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.55s',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '1.15rem',
              fontWeight: 300,
              animation: visible.process ? 'sweeFadeSlide 3.2s ease-in-out infinite' : 'none',
            }}
          >
            Look pretty → Reply when busy → Get enquiries
          </p>
          <HoverLink
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{
              ...ctaStyle,
              padding: '0.9rem 1.3rem',
              fontSize: '1.05rem',
              background: colors.goldSoft,
              color: colors.cocoa,
            }}
          >
            Start your glow
          </HoverLink>
        </div>
      </section>

      {/* 4. PACKAGES */}
      <section
        id="packages"
        className="section"
        data-reveal
        style={{
          padding: '7.5rem 5vw',
          background: `
            radial-gradient(ellipse 50% 40% at 10% 10%, ${colors.blush}55 0%, transparent 60%),
            radial-gradient(ellipse 45% 40% at 90% 90%, ${colors.lilac}44 0%, transparent 55%),
            linear-gradient(180deg, ${colors.cream} 0%, #F7EAEF 48%, ${colors.cream} 100%)
          `,
          position: 'relative',
          overflow: 'hidden',
          ...revealStyle('packages'),
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '2.5rem',
            alignItems: 'end',
            marginBottom: '3.2rem',
          }}
          className="about-head"
        >
          <div
            style={{
              opacity: visible.packages ? 1 : 0,
              transform: visible.packages ? 'translateY(0)' : 'translateY(22px)',
              transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <p style={{ ...eyebrowStyle, fontSize: '1.02rem', marginBottom: '1rem' }}>Packages</p>
            <h2
              style={{
                ...sectionTitleStyle,
                marginBottom: '1rem',
                fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
                maxWidth: 680,
              }}
            >
              Clear plans. Real deliverables.
            </h2>
            <div
              style={{
                width: visible.packages ? 110 : 0,
                height: 2.5,
                borderRadius: 2,
                background: `linear-gradient(90deg, ${colors.gold}, ${colors.blushDeep})`,
                transition: 'width 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
                animation: visible.packages ? 'sweeShimmer 2.8s ease-in-out infinite' : 'none',
                backgroundSize: '200% 100%',
              }}
            />
          </div>
          <p
            style={{
              margin: 0,
              color: colors.cocoaSoft,
              lineHeight: 1.75,
              fontSize: '1.32rem',
              fontWeight: 300,
              opacity: visible.packages ? 1 : 0,
              transform: visible.packages ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.75s ease 0.1s, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
            }}
          >
            Pick Glow for a simple start, Aura if you want AI help, or Luxe when you need booking and extra care after launch.
          </p>
        </div>

        <div
          className="three-col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1.3rem',
            alignItems: 'stretch',
          }}
        >
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.name}
              pkg={pkg}
              index={index}
              visible={!!visible.packages}
              whatsappHref={whatsappLink}
            />
          ))}
        </div>

        <div
          className="package-notes"
          style={{
            marginTop: '2.2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1rem',
          }}
        >
          {packageNotes.map((note, i) => (
            <div
              key={note.title}
              style={{
                padding: '1.35rem 1.3rem',
                borderRadius: 20,
                border: `1px solid ${colors.line}`,
                background: 'rgba(255,252,250,0.78)',
                opacity: visible.packages ? 1 : 0,
                transform: visible.packages ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.55s ease ${0.35 + i * 0.1}s, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${0.35 + i * 0.1}s`,
              }}
            >
              <p
                style={{
                  margin: '0 0 0.45rem',
                  fontFamily: fonts.display,
                  fontSize: '1.65rem',
                  fontWeight: 500,
                }}
              >
                {note.title}
              </p>
              <p style={{ margin: 0, color: colors.cocoaSoft, lineHeight: 1.6, fontSize: '1.12rem' }}>
                {note.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: '1.4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            padding: '1.2rem 1.35rem',
            borderRadius: 18,
            border: `1px solid ${colors.line}`,
            background: colors.white,
            opacity: visible.packages ? 1 : 0,
            transform: visible.packages ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.65s ease 0.5s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.5s',
          }}
        >
          <p style={{ margin: 0, color: colors.cocoaSoft, fontSize: '1.18rem' }}>
            Not sure which plan fits? Message us with your business type. We will suggest one.
          </p>
          <HoverLink
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{
              ...ctaStyle,
              padding: '0.95rem 1.35rem',
              fontSize: '1.1rem',
            }}
          >
            Ask on WhatsApp
          </HoverLink>
        </div>
      </section>

      {/* 5. SELECTED WORK */}
      <section
        id="work"
        className="section"
        data-reveal
        style={{
          padding: '7.5rem 5vw',
          background: `
            radial-gradient(ellipse 45% 40% at 5% 15%, ${colors.blush}44 0%, transparent 60%),
            radial-gradient(ellipse 40% 35% at 95% 85%, ${colors.goldSoft}33 0%, transparent 55%),
            linear-gradient(180deg, ${colors.white} 0%, ${colors.cream} 100%)
          `,
          position: 'relative',
          overflow: 'hidden',
          ...revealStyle('work'),
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '2rem',
            alignItems: 'end',
            marginBottom: '3.2rem',
          }}
          className="about-head"
        >
          <div
            style={{
              opacity: visible.work ? 1 : 0,
              transform: visible.work ? 'translateY(0)' : 'translateY(22px)',
              transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <p style={{ ...eyebrowStyle, fontSize: '1.02rem', marginBottom: '1rem' }}>Selected work</p>
            <h2
              style={{
                ...sectionTitleStyle,
                marginBottom: '1rem',
                fontSize: 'clamp(2.6rem, 5vw, 4rem)',
                maxWidth: 720,
              }}
            >
              Soft brand pages, made to convert.
            </h2>
            <div
              style={{
                width: visible.work ? 110 : 0,
                height: 2.5,
                borderRadius: 2,
                background: `linear-gradient(90deg, ${colors.gold}, ${colors.blushDeep})`,
                transition: 'width 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
                animation: visible.work ? 'sweeShimmer 2.8s ease-in-out infinite' : 'none',
                backgroundSize: '200% 100%',
              }}
            />
          </div>
          <div
            style={{
              opacity: visible.work ? 1 : 0,
              transform: visible.work ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.75s ease 0.1s, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
            }}
          >
            <p
              style={{
                margin: '0 0 1.1rem',
                color: colors.cocoaSoft,
                lineHeight: 1.7,
                fontSize: '1.2rem',
                fontWeight: 300,
              }}
            >
              See how a boutique, cafe, or salon can feel with Wee-ora. Your brand can follow the same soft style.
            </p>
            <HoverLink
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={{
                ...ctaStyle,
                padding: '0.95rem 1.3rem',
                fontSize: '1.08rem',
              }}
            >
              Want one like this?
            </HoverLink>
          </div>
        </div>

        <div
          className="three-col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1.35rem',
          }}
        >
          {samples.map((sample, index) => (
            <WorkCard
              key={sample.title}
              sample={sample}
              index={index}
              visible={!!visible.work}
              iconSrc={icon}
            />
          ))}
        </div>

        <div
          className="about-facts"
          style={{
            marginTop: '2.2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            borderRadius: 24,
            border: `1px solid ${colors.line}`,
            background: colors.white,
            overflow: 'hidden',
          }}
        >
          {[
            ['Boutique fit', 'Clothes, gifts, and handmade brands.'],
            ['Cafe fit', 'Menus, hours, and daily specials.'],
            ['Salon fit', 'Services, photos, and booking requests.'],
          ].map(([title, text], i) => (
            <div
              key={title}
              style={{
                padding: '1.45rem 1.4rem',
                borderLeft: i === 0 ? 'none' : `1px solid ${colors.line}`,
                opacity: visible.work ? 1 : 0,
                transform: visible.work ? 'translateY(0)' : 'translateY(14px)',
                transition: `opacity 0.55s ease ${0.35 + i * 0.1}s, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${0.35 + i * 0.1}s`,
              }}
            >
              <p style={{ margin: '0 0 0.45rem', fontFamily: fonts.display, fontSize: '1.55rem', fontWeight: 500 }}>
                {title}
              </p>
              <p style={{ margin: 0, color: colors.cocoaSoft, lineHeight: 1.55, fontSize: '1.08rem' }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      </>
      )}

      {page === 'about' && (
      <>
      {/* 6. ABOUT */}
      <section
        id="about"
        className="section"
        data-reveal
        style={{
          padding: '8rem 5vw 5rem',
          background: `
            radial-gradient(ellipse 50% 45% at 0% 20%, ${colors.lilac}55 0%, transparent 58%),
            radial-gradient(ellipse 48% 42% at 100% 80%, ${colors.blush}50 0%, transparent 55%),
            radial-gradient(ellipse 35% 30% at 55% 0%, ${colors.goldSoft}33 0%, transparent 50%),
            linear-gradient(180deg, ${colors.cream} 0%, ${colors.white} 52%, ${colors.cream} 100%)
          `,
          position: 'relative',
          overflow: 'hidden',
          ...revealStyle('about'),
        }}
      >
        <div
          style={{
            marginBottom: '1.6rem',
            opacity: visible.about ? 1 : 0,
            transform: visible.about ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.55s ease, transform 0.55s ease',
          }}
        >
          <button
            type="button"
            onClick={goHome}
            style={{
              border: `1px solid ${colors.line}`,
              background: colors.white,
              color: colors.cocoa,
              borderRadius: 12,
              padding: '0.65rem 1rem',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: fonts.body,
            }}
          >
            ← Back to home
          </button>
        </div>
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: 320,
            height: 320,
            borderRadius: '46% 54% 50% 50% / 52% 44% 56% 48%',
            background: `linear-gradient(140deg, ${colors.blush}66, ${colors.lilac}44)`,
            top: '6%',
            right: '2%',
            filter: 'blur(2px)',
            animation: 'sweeMorph 11s ease-in-out infinite',
            opacity: 0.55,
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: 200,
            height: 200,
            borderRadius: '50%',
            border: `1px solid ${colors.gold}44`,
            bottom: '10%',
            left: '4%',
            animation: 'sweeSpin 28s linear infinite',
            opacity: 0.4,
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: 140,
            height: 140,
            borderRadius: '40% 60% 55% 45%',
            background: `${colors.goldSoft}44`,
            top: '42%',
            left: '48%',
            animation: 'sweeDrift 9s ease-in-out infinite',
            opacity: 0.45,
            pointerEvents: 'none',
            filter: 'blur(8px)',
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '2.8rem',
            alignItems: 'end',
            marginBottom: '2.4rem',
            position: 'relative',
            zIndex: 1,
          }}
          className="about-head"
        >
          <div
            style={{
              opacity: visible.about ? 1 : 0,
              transform: visible.about ? 'translateY(0)' : 'translateY(22px)',
              transition: 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '1.15rem' }}>
              <p style={{ ...eyebrowStyle, fontSize: '1.12rem', margin: 0 }}>{aboutStory.eyebrow}</p>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.45rem 0.85rem',
                  borderRadius: 999,
                  background: 'rgba(255,252,250,0.92)',
                  border: `1px solid ${colors.line}`,
                  fontSize: '0.95rem',
                  color: colors.cocoaSoft,
                  fontWeight: 500,
                  animation: visible.about ? 'sweeGlowSoft 2.8s ease-in-out infinite' : 'none',
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#6BAF8D',
                    boxShadow: '0 0 0 4px rgba(107,175,141,0.18)',
                    animation: 'sweePulse 1.7s ease-in-out infinite',
                  }}
                />
                {aboutStory.status}
              </span>
            </div>
            <h2
              style={{
                ...sectionTitleStyle,
                marginBottom: '1.1rem',
                fontSize: 'clamp(3rem, 5.8vw, 4.6rem)',
                maxWidth: 760,
                lineHeight: 1.08,
              }}
            >
              {aboutStory.title}
            </h2>
            <div
              style={{
                width: visible.about ? 128 : 0,
                height: 3,
                borderRadius: 2,
                background: `linear-gradient(90deg, ${colors.gold}, ${colors.blushDeep})`,
                transition: 'width 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
                animation: visible.about ? 'sweeShimmer 2.8s ease-in-out infinite' : 'none',
                backgroundSize: '200% 100%',
              }}
            />
          </div>
          <div
            style={{
              opacity: visible.about ? 1 : 0,
              transform: visible.about ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.75s ease 0.1s, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
            }}
          >
            <p
              style={{
                margin: '0 0 1.1rem',
                color: colors.cocoaSoft,
                lineHeight: 1.75,
                fontSize: '1.4rem',
                fontWeight: 300,
              }}
            >
              {aboutStory.lead}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {[aboutStory.hours, aboutStory.languages].map((chip) => (
                <span
                  key={chip}
                  style={{
                    padding: '0.55rem 0.9rem',
                    borderRadius: 12,
                    background: colors.white,
                    border: `1px solid ${colors.line}`,
                    color: colors.cocoaSoft,
                    fontSize: '1.02rem',
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="about-marquee-wrap"
          style={{
            marginBottom: '2.4rem',
            borderRadius: 18,
            border: `1px solid ${colors.line}`,
            background: 'rgba(255,252,250,0.72)',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
            opacity: visible.about ? 1 : 0,
            transform: visible.about ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.65s ease 0.15s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.15s',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'sweeMarquee 28s linear infinite',
              gap: '0.35rem',
              padding: '1rem 0',
            }}
          >
            {[...aboutStory.fits, ...aboutStory.fits].map((fit, i) => (
              <span
                key={`${fit}-${i}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.7rem',
                  padding: '0 1.35rem',
                  fontFamily: fonts.display,
                  fontSize: '1.55rem',
                  color: colors.cocoa,
                  whiteSpace: 'nowrap',
                }}
              >
                {fit}
                <span style={{ width: 6, height: 6, borderRadius: 2, background: colors.gold, opacity: 0.7 }} />
              </span>
            ))}
          </div>
        </div>

        <div
          className="studio-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '1.6rem',
            alignItems: 'stretch',
            marginBottom: '2.2rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <aside
            style={{
              borderRadius: 34,
              border: `1px solid ${colors.line}`,
              background: colors.white,
              overflow: 'hidden',
              boxShadow: '0 28px 60px rgba(58, 47, 44, 0.09)',
              opacity: visible.about ? 1 : 0,
              transform: visible.about ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.75s ease 0.12s, transform 0.75s cubic-bezier(0.22, 1, 0.36, 1) 0.12s',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                minHeight: 280,
                padding: '1.75rem 1.65rem',
                background: `
                  radial-gradient(circle at 80% 20%, ${colors.blush}88 0%, transparent 45%),
                  radial-gradient(circle at 15% 85%, ${colors.lilac}77 0%, transparent 50%),
                  linear-gradient(160deg, ${colors.cream} 0%, #F8EAEF 55%, ${colors.lilac}55 100%)
                `,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  width: 140,
                  height: 140,
                  borderRadius: '42% 58% 50% 50%',
                  background: 'rgba(255,252,250,0.45)',
                  right: 18,
                  top: 24,
                  animation: 'sweeMorph 9s ease-in-out infinite',
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  border: `1px solid ${colors.gold}66`,
                  left: 28,
                  bottom: 36,
                  animation: 'sweeSpin 16s linear infinite',
                  opacity: 0.55,
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                <span
                  style={{
                    fontSize: '0.92rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '0.45rem 0.8rem',
                    borderRadius: 10,
                    background: 'rgba(255,252,250,0.92)',
                    border: `1px solid ${colors.line}`,
                    color: colors.cocoaSoft,
                    fontWeight: 500,
                  }}
                >
                  Studio card
                </span>
                <span
                  style={{
                    fontFamily: fonts.display,
                    fontSize: '1.25rem',
                    color: colors.cocoaSoft,
                    opacity: 0.75,
                  }}
                >
                  est. 2025
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.1rem',
                  position: 'relative',
                  zIndex: 1,
                  animation: 'sweeRise 5.5s ease-in-out infinite',
                }}
              >
                <img
                  src={logo}
                  alt="wee-ora"
                  style={{
                    width: 104,
                    height: 104,
                    borderRadius: 26,
                    objectFit: 'cover',
                    border: `1px solid ${colors.line}`,
                    boxShadow: '0 18px 40px rgba(58, 47, 44, 0.16)',
                  }}
                />
                <div>
                  <p
                    style={{
                      margin: '0 0 0.3rem',
                      fontFamily: fonts.display,
                      fontSize: '2.35rem',
                      fontWeight: 500,
                      lineHeight: 1.05,
                    }}
                  >
                    wee-ora
                  </p>
                  <p style={{ margin: 0, color: colors.cocoaSoft, fontSize: '1.15rem' }}>
                    Pretty presence. Smart growth.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ padding: '1.75rem 1.65rem 1.8rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <p
                style={{
                  margin: '0 0 1.2rem',
                  fontFamily: fonts.display,
                  fontSize: 'clamp(1.7rem, 2.2vw, 2.05rem)',
                  fontWeight: 500,
                  lineHeight: 1.35,
                  color: colors.cocoa,
                }}
              >
                “{aboutStory.quote}”
              </p>
              <p style={{ margin: '0 0 1.45rem', color: colors.cocoaSoft, fontSize: '1.12rem' }}>
                — {aboutStory.quoteBy}
              </p>
              <div
                style={{
                  marginTop: 'auto',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.85rem',
                }}
              >
                {[
                  ['Founder', 'Sweedal'],
                  ['Focus', 'Local brands'],
                  ['Channel', 'WhatsApp'],
                  ['Tone', 'Soft + clear'],
                ].map(([k, v], i) => (
                  <div
                    key={k}
                    style={{
                      padding: '1rem 1rem',
                      borderRadius: 16,
                      background: colors.cream,
                      border: `1px solid ${colors.line}`,
                      opacity: visible.about ? 1 : 0,
                      transform: visible.about ? 'translateY(0)' : 'translateY(10px)',
                      transition: `opacity 0.5s ease ${0.35 + i * 0.08}s, transform 0.5s ease ${0.35 + i * 0.08}s`,
                    }}
                  >
                    <p
                      style={{
                        margin: '0 0 0.3rem',
                        fontSize: '0.82rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: colors.gold,
                        fontWeight: 500,
                      }}
                    >
                      {k}
                    </p>
                    <p style={{ margin: 0, fontWeight: 500, fontSize: '1.18rem' }}>{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              className="about-pulse"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                gap: '0.9rem',
              }}
            >
              {aboutStory.pulse.map((item, i) => (
                <AboutPulseCard
                  key={item.label}
                  item={item}
                  index={i}
                  visible={!!visible.about}
                />
              ))}
            </div>

            <div
              className="three-col"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '1rem',
                flex: 1,
              }}
            >
              {aboutStory.points.map((item, index) => (
                <AboutPointCard
                  key={item.title}
                  item={item}
                  index={index}
                  visible={!!visible.about}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="about-facts"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            borderRadius: 26,
            border: `1px solid ${colors.line}`,
            background: colors.white,
            overflow: 'hidden',
            marginBottom: '1.6rem',
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 18px 40px rgba(58, 47, 44, 0.05)',
          }}
        >
          {aboutStory.facts.map((fact, i) => (
            <div
              key={fact.label}
              className="about-fact-cell"
              style={{
                padding: '1.7rem 1.5rem',
                borderLeft: i === 0 ? 'none' : `1px solid ${colors.line}`,
                opacity: visible.about ? 1 : 0,
                transform: visible.about ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.55s ease ${0.35 + i * 0.09}s, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${0.35 + i * 0.09}s`,
              }}
            >
              <p
                style={{
                  margin: '0 0 0.45rem',
                  fontSize: '0.88rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: colors.gold,
                  fontWeight: 500,
                }}
              >
                {fact.label}
              </p>
              <p
                style={{
                  margin: '0 0 0.55rem',
                  fontFamily: fonts.display,
                  fontSize: 'clamp(1.9rem, 2.5vw, 2.35rem)',
                  fontWeight: 500,
                  lineHeight: 1.1,
                }}
              >
                {fact.value}
              </p>
              <p style={{ margin: 0, color: colors.cocoaSoft, fontSize: '1.12rem', lineHeight: 1.55 }}>
                {fact.note}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '1.15rem',
            position: 'relative',
            zIndex: 1,
            opacity: visible.about ? 1 : 0,
            transform: visible.about ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.55s ease 0.35s, transform 0.55s ease 0.35s',
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: fonts.display,
              fontSize: 'clamp(1.9rem, 2.6vw, 2.4rem)',
              fontWeight: 500,
            }}
          >
            How a project usually moves
          </p>
          <p style={{ margin: 0, color: colors.cocoaSoft, fontSize: '1.15rem' }}>
            Soft pace. Clear checkpoints.
          </p>
        </div>

        <div
          className="about-timeline"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '1.05rem',
            marginBottom: '1.6rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {aboutStory.timeline.map((item, i) => (
            <AboutTimelineCard
              key={item.step}
              item={item}
              index={i}
              visible={!!visible.about}
            />
          ))}
        </div>

        <div
          className="three-col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1.05rem',
            marginBottom: '1.6rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {aboutStory.values.map(([title, text], i) => (
            <div
              key={title}
              style={{
                padding: '1.65rem 1.55rem',
                borderRadius: 22,
                background: colors.cocoa,
                color: colors.cream,
                position: 'relative',
                overflow: 'hidden',
                opacity: visible.about ? 1 : 0,
                transform: visible.about ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.55s ease ${0.55 + i * 0.1}s, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${0.55 + i * 0.1}s`,
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: `${colors.gold}22`,
                  right: -24,
                  top: -28,
                  animation: 'sweeMorph 10s ease-in-out infinite',
                }}
              />
              <p
                style={{
                  margin: '0 0 0.55rem',
                  fontFamily: fonts.display,
                  fontSize: '2.05rem',
                  fontWeight: 500,
                  position: 'relative',
                  animation: visible.about ? 'sweeFadeSlide 3.4s ease-in-out infinite' : 'none',
                  animationDelay: `${i * 0.35}s`,
                }}
              >
                {title}
              </p>
              <p style={{ margin: 0, opacity: 0.9, lineHeight: 1.65, fontWeight: 300, fontSize: '1.2rem', position: 'relative' }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="three-col"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '1.05rem',
            marginBottom: '1.6rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {aboutStory.care.map((item, i) => (
            <div
              key={item.title}
              style={{
                padding: '1.55rem 1.45rem',
                borderRadius: 22,
                border: `1px solid ${colors.line}`,
                background: 'rgba(255,252,250,0.88)',
                opacity: visible.about ? 1 : 0,
                transform: visible.about ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.55s ease ${0.6 + i * 0.1}s, transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${0.6 + i * 0.1}s`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.7rem' }}>
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 3,
                    background: colors.gold,
                    animation: 'sweePulse 2s ease-in-out infinite',
                    animationDelay: `${i * 0.25}s`,
                  }}
                />
                <p
                  style={{
                    margin: 0,
                    fontFamily: fonts.display,
                    fontSize: '1.75rem',
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </p>
              </div>
              <p style={{ margin: 0, color: colors.cocoaSoft, lineHeight: 1.65, fontSize: '1.16rem' }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.2rem',
            flexWrap: 'wrap',
            padding: '1.5rem 1.6rem',
            borderRadius: 24,
            border: `1px solid ${colors.line}`,
            background: colors.white,
            position: 'relative',
            zIndex: 1,
            boxShadow: '0 18px 42px rgba(58, 47, 44, 0.06)',
            opacity: visible.about ? 1 : 0,
            transform: visible.about ? 'translateY(0)' : 'translateY(14px)',
            transition: 'opacity 0.65s ease 0.65s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.65s',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.05rem' }}>
            <div style={{ position: 'relative' }}>
              <img
                src={icon}
                alt=""
                style={{ width: 56, height: 56, borderRadius: 16, objectFit: 'cover', border: `1px solid ${colors.line}` }}
              />
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  right: -2,
                  bottom: -2,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: '#6BAF8D',
                  border: `2px solid ${colors.white}`,
                  animation: 'sweePulse 1.8s ease-in-out infinite',
                }}
              />
            </div>
            <div>
              <p style={{ margin: '0 0 0.25rem', fontFamily: fonts.display, fontSize: '1.55rem', fontWeight: 500 }}>
                Ready for a soft page?
              </p>
              <p style={{ margin: 0, color: colors.cocoaSoft, fontSize: '1.18rem', maxWidth: 560, lineHeight: 1.55 }}>
                Tell us what you sell and we will suggest Glow, Aura, or Luxe on WhatsApp.
              </p>
            </div>
          </div>
          <HoverLink
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{
              ...ctaStyle,
              padding: '1.05rem 1.5rem',
              fontSize: '1.15rem',
              boxShadow: '0 12px 28px rgba(58, 47, 44, 0.14)',
            }}
          >
            Message Sweedal
          </HoverLink>
        </div>
      </section>
      </>
      )}

      {page === 'home' && (
      <>
      {/* 7. CONTACT */}
      <section
        id="contact"
        className="section"
        data-reveal
        style={{
          padding: '5.5rem 5vw',
          background: `
            radial-gradient(ellipse 50% 50% at 92% 10%, ${colors.blush}66 0%, transparent 55%),
            radial-gradient(ellipse 40% 45% at 6% 90%, ${colors.lilac}55 0%, transparent 50%),
            ${colors.cream}
          `,
          position: 'relative',
          overflow: 'hidden',
          ...revealStyle('contact'),
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.5rem 2rem',
            alignItems: 'end',
            marginBottom: '1.75rem',
            position: 'relative',
            zIndex: 1,
          }}
          className="about-head"
        >
          <div
            style={{
              opacity: visible.contact ? 1 : 0,
              transform: visible.contact ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.65s ease, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
              <p style={{ ...eyebrowStyle, fontSize: '0.95rem', margin: 0 }}>{contactStory.eyebrow}</p>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.7rem',
                  borderRadius: 999,
                  background: colors.white,
                  border: `1px solid ${colors.line}`,
                  fontSize: '0.9rem',
                  color: colors.cocoaSoft,
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: '#6BAF8D',
                    animation: 'sweePulse 1.7s ease-in-out infinite',
                  }}
                />
                {contactStory.status}
              </span>
            </div>
            <h2
              style={{
                ...sectionTitleStyle,
                marginBottom: '0.75rem',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)',
                maxWidth: 520,
              }}
            >
              {contactStory.title}
            </h2>
            <div
              style={{
                width: visible.contact ? 96 : 0,
                height: 2.5,
                borderRadius: 2,
                background: `linear-gradient(90deg, ${colors.gold}, ${colors.blushDeep})`,
                transition: 'width 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.12s',
                animation: visible.contact ? 'sweeShimmer 2.8s ease-in-out infinite' : 'none',
                backgroundSize: '200% 100%',
              }}
            />
          </div>
          <p
            style={{
              margin: 0,
              color: colors.cocoaSoft,
              lineHeight: 1.65,
              fontSize: '1.18rem',
              fontWeight: 300,
              opacity: visible.contact ? 1 : 0,
              transform: visible.contact ? 'translateY(0)' : 'translateY(14px)',
              transition: 'opacity 0.65s ease 0.08s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.08s',
            }}
          >
            {contactStory.lead}
          </p>
        </div>

        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: '1.25rem',
            alignItems: 'stretch',
            marginBottom: '1.25rem',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              borderRadius: 26,
              border: `1px solid ${colors.line}`,
              background: colors.white,
              overflow: 'hidden',
              boxShadow: '0 16px 40px rgba(58, 47, 44, 0.06)',
              opacity: visible.contact ? 1 : 0,
              transform: visible.contact ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.65s ease 0.1s, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.1s',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                padding: '1.25rem 1.3rem 1.1rem',
                background: `
                  radial-gradient(circle at 85% 15%, ${colors.blush}66 0%, transparent 45%),
                  linear-gradient(165deg, ${colors.cream} 0%, #F8EAEF 70%, ${colors.lilac}33 100%)
                `,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={icon}
                    alt=""
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      objectFit: 'cover',
                      border: `1px solid ${colors.line}`,
                    }}
                  />
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      right: -1,
                      bottom: -1,
                      width: 12,
                      height: 12,
                      borderRadius: '50%',
                      background: '#6BAF8D',
                      border: `2px solid ${colors.white}`,
                      animation: 'sweePulse 1.8s ease-in-out infinite',
                    }}
                  />
                </div>
                <div>
                  <p style={{ margin: '0 0 0.15rem', fontFamily: fonts.display, fontSize: '1.55rem', fontWeight: 500, lineHeight: 1.1 }}>
                    Chat with Sweedal
                  </p>
                  <p style={{ margin: 0, color: colors.cocoaSoft, fontSize: '0.98rem' }}>{contactStory.hours}</p>
                </div>
              </div>

              <div
                style={{
                  borderRadius: 16,
                  background: 'rgba(255,252,250,0.9)',
                  border: `1px solid ${colors.line}`,
                  padding: '0.9rem',
                  display: 'grid',
                  gap: '0.55rem',
                }}
              >
                {contactStory.chat.map((msg, i) => (
                  <div
                    key={`${msg.from}-${i}`}
                    style={{
                      justifySelf: msg.from === 'you' ? 'end' : 'start',
                      maxWidth: '88%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: msg.from === 'you' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                      background: msg.from === 'you' ? colors.cocoa : colors.cream,
                      color: msg.from === 'you' ? colors.cream : colors.cocoa,
                      fontSize: '0.98rem',
                      lineHeight: 1.45,
                      opacity: visible.contact ? 1 : 0,
                      transform: visible.contact ? 'translateY(0)' : 'translateY(10px)',
                      transition: `opacity 0.45s ease ${0.2 + i * 0.1}s, transform 0.45s ease ${0.2 + i * 0.1}s`,
                    }}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '1.15rem 1.3rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                <HoverLink
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ ...ctaStyle, padding: '0.85rem 1.25rem', fontSize: '1.05rem' }}
                >
                  Chat on WhatsApp
                </HoverLink>
                <HoverLink
                  href="#packages"
                  style={{
                    ...ctaStyle,
                    background: 'transparent',
                    color: colors.cocoa,
                    border: `1px solid ${colors.cocoa}`,
                    padding: '0.85rem 1.25rem',
                    fontSize: '1.05rem',
                  }}
                >
                  See prices
                </HoverLink>
              </div>
              <p style={{ margin: 0, fontFamily: fonts.display, fontSize: '1.45rem', fontWeight: 500 }}>
                {contactStory.phone}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div
              className="about-pulse"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '0.7rem',
              }}
            >
              {contactStory.promises.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    padding: '1rem 0.85rem',
                    borderRadius: 16,
                    border: `1px solid ${colors.line}`,
                    background: colors.white,
                    textAlign: 'center',
                    opacity: visible.contact ? 1 : 0,
                    transform: visible.contact ? 'translateY(0)' : 'translateY(14px)',
                    transition: `opacity 0.5s ease ${0.15 + i * 0.07}s, transform 0.5s ease ${0.15 + i * 0.07}s`,
                  }}
                >
                  <p
                    style={{
                      margin: '0 0 0.25rem',
                      fontFamily: fonts.display,
                      fontSize: '1.65rem',
                      fontWeight: 500,
                      lineHeight: 1,
                    }}
                  >
                    {item.value}
                  </p>
                  <p style={{ margin: 0, color: colors.cocoaSoft, fontSize: '0.92rem' }}>{item.label}</p>
                </div>
              ))}
            </div>

            <div
              style={{
                borderRadius: 20,
                border: `1px solid ${colors.line}`,
                background: colors.white,
                padding: '1.15rem 1.2rem',
                flex: 1,
                opacity: visible.contact ? 1 : 0,
                transform: visible.contact ? 'translateY(0)' : 'translateY(14px)',
                transition: 'opacity 0.55s ease 0.25s, transform 0.55s ease 0.25s',
              }}
            >
              <p style={{ margin: '0 0 0.75rem', fontFamily: fonts.display, fontSize: '1.45rem', fontWeight: 500 }}>
                Quick starters
              </p>
              <div style={{ display: 'grid', gap: '0.55rem' }}>
                {contactStory.starters.map((starter, i) => (
                  <a
                    key={starter}
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(starter)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-starter"
                    style={{
                      textDecoration: 'none',
                      color: colors.cocoa,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.65rem',
                      padding: '0.75rem 0.9rem',
                      borderRadius: 12,
                      border: `1px solid ${colors.line}`,
                      background: colors.cream,
                      fontSize: '0.98rem',
                      lineHeight: 1.4,
                      opacity: visible.contact ? 1 : 0,
                      transform: visible.contact ? 'translateX(0)' : 'translateX(10px)',
                      transition: `opacity 0.45s ease ${0.3 + i * 0.07}s, transform 0.45s ease ${0.3 + i * 0.07}s`,
                    }}
                  >
                    <span>{starter}</span>
                    <span aria-hidden="true" style={{ color: colors.gold, flexShrink: 0 }}>
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          id="contact-brief"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem',
            flexWrap: 'wrap',
            padding: '1rem 1.2rem',
            borderRadius: 16,
            border: `1px solid ${colors.line}`,
            background: colors.white,
            position: 'relative',
            zIndex: 1,
            opacity: visible.contact ? 1 : 0,
            transform: visible.contact ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.55s ease 0.35s, transform 0.55s ease 0.35s',
          }}
        >
          <p style={{ margin: 0, fontWeight: 500, fontSize: '1.02rem', whiteSpace: 'nowrap' }}>Send us:</p>
          {contactStory.brief.map((item) => (
            <span
              key={item}
              style={{
                padding: '0.4rem 0.75rem',
                borderRadius: 999,
                background: colors.cream,
                border: `1px solid ${colors.line}`,
                color: colors.cocoaSoft,
                fontSize: '0.95rem',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>
      </>
      )}

      {/* 8. FOOTER */}
      <footer
        id="footer"
        style={{
          background: colors.white,
          borderTop: `1px solid ${colors.line}`,
          position: 'relative',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            height: 3,
            width: '100%',
            background: `linear-gradient(90deg, ${colors.gold}, ${colors.blushDeep}, ${colors.lilac})`,
            backgroundSize: '200% 100%',
            animation: 'sweeShimmer 4s ease-in-out infinite',
          }}
        />

        <div
          style={{
            padding: '3.2rem 5.5vw 1.8rem',
            maxWidth: 1840,
            margin: '0 auto',
          }}
        >
          <div
            className="footer-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 0.8fr 0.9fr 1.1fr',
              gap: '2.5rem 2rem',
              alignItems: 'start',
            }}
          >
            <div>
              <a
                href="#top"
                onClick={goHome}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  color: 'inherit',
                  marginBottom: '1rem',
                }}
              >
                <img
                  src={icon}
                  alt=""
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 11,
                    objectFit: 'cover',
                    border: `1px solid ${colors.line}`,
                  }}
                />
                <span style={{ fontFamily: fonts.display, fontSize: '1.7rem', fontWeight: 500, lineHeight: 1 }}>
                  wee-ora
                </span>
              </a>
              <p
                style={{
                  margin: '0 0 0.45rem',
                  fontFamily: fonts.display,
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  color: colors.cocoa,
                }}
              >
                {footerStory.tagline}
              </p>
              <p
                style={{
                  margin: 0,
                  color: colors.cocoaSoft,
                  fontSize: '1.08rem',
                  lineHeight: 1.65,
                  fontWeight: 300,
                  maxWidth: 340,
                }}
              >
                {footerStory.blurb}
              </p>
            </div>

            <div>
              <p
                style={{
                  margin: '0 0 1rem',
                  fontSize: '0.82rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: colors.gold,
                  fontWeight: 500,
                }}
              >
                Explore
              </p>
              <nav style={{ display: 'grid', gap: '0.7rem' }} aria-label="Footer explore">
                {footerStory.explore.map(([href, label]) => (
                  <FooterLink key={href} href={href}>
                    {label}
                  </FooterLink>
                ))}
              </nav>
            </div>

            <div>
              <p
                style={{
                  margin: '0 0 1rem',
                  fontSize: '0.82rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: colors.gold,
                  fontWeight: 500,
                }}
              >
                Packages
              </p>
              <nav style={{ display: 'grid', gap: '0.7rem' }} aria-label="Footer packages">
                {footerStory.packages.map(([href, label]) => (
                  <FooterLink key={label} href={href}>
                    {label}
                  </FooterLink>
                ))}
              </nav>
            </div>

            <div>
              <p
                style={{
                  margin: '0 0 1rem',
                  fontSize: '0.82rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: colors.gold,
                  fontWeight: 500,
                }}
              >
                Get in touch
              </p>
              <p style={{ margin: '0 0 0.25rem', color: colors.cocoaSoft, fontSize: '1.02rem' }}>WhatsApp</p>
              <p
                style={{
                  margin: '0 0 1rem',
                  fontFamily: fonts.display,
                  fontSize: '1.55rem',
                  fontWeight: 500,
                  lineHeight: 1.15,
                }}
              >
                {whatsappDisplay}
              </p>
              <HoverLink
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  ...ctaStyle,
                  padding: '0.8rem 1.2rem',
                  fontSize: '1.02rem',
                  borderRadius: 11,
                }}
              >
                Chat on WhatsApp
              </HoverLink>
              <div style={{ marginTop: '1.15rem', display: 'grid', gap: '0.35rem' }}>
                <p style={{ margin: 0, color: colors.cocoaSoft, fontSize: '1.02rem' }}>{footerStory.hours}</p>
                <p style={{ margin: 0, color: colors.cocoaSoft, fontSize: '1.02rem' }}>{footerStory.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${colors.line}`,
            padding: '1.15rem 5.5vw',
            background: colors.cream,
          }}
        >
          <div
            style={{
              maxWidth: 1840,
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <p style={{ margin: 0, color: colors.cocoaSoft, fontSize: '0.98rem' }}>
              © {new Date().getFullYear()} wee-ora. Made for local brands.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <span style={{ color: colors.cocoaSoft, fontSize: '0.98rem' }}>Glow · Aura · Luxe</span>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="footer-top-btn"
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: colors.cocoa,
                  cursor: 'pointer',
                  fontSize: '0.98rem',
                  fontWeight: 500,
                  fontFamily: fonts.body,
                  padding: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                Back to top
                <span aria-hidden="true">↑</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      <style>
        {`
          @keyframes sweeFloat {
            0%, 100% { transform: translateY(0) rotate(-2deg); }
            50% { transform: translateY(-14px) rotate(2deg); }
          }
          @keyframes sweeRise {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes sweePulse {
            0%, 100% { opacity: 0.55; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.15); }
          }
          @keyframes sweeMorph {
            0%, 100% { border-radius: 46% 54% 50% 50% / 52% 44% 56% 48%; }
            50% { border-radius: 54% 46% 48% 52% / 44% 56% 48% 52%; }
          }
          @keyframes sweeSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes sweeScrollLine {
            0% { transform: scaleY(0.35); opacity: 0.2; transform-origin: top; }
            50% { transform: scaleY(1); opacity: 0.9; transform-origin: top; }
            100% { transform: scaleY(0.35); opacity: 0.2; transform-origin: bottom; }
          }
          @keyframes sweeScrollDot {
            0% { opacity: 0.25; transform: translateX(-50%) translateY(0); }
            55% { opacity: 1; transform: translateX(-50%) translateY(8px); }
            100% { opacity: 0.25; transform: translateX(-50%) translateY(0); }
          }
          @keyframes sweeTypeDot {
            0%, 100% { opacity: 0.25; transform: translateY(0); }
            50% { opacity: 1; transform: translateY(-2px); }
          }
          @keyframes sweeBar {
            0% { transform: scaleY(0.75); transform-origin: bottom; }
            100% { transform: scaleY(1); transform-origin: bottom; }
          }
          @keyframes sweeShimmer {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes sweeFadeSlide {
            0%, 100% { opacity: 0.78; letter-spacing: 0; }
            50% { opacity: 1; letter-spacing: 0.01em; }
          }
          @keyframes sweeMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes sweeDrift {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(18px, -14px) scale(1.06); }
          }
          @keyframes sweeGlowSoft {
            0%, 100% { box-shadow: 0 0 0 0 rgba(212, 180, 131, 0); }
            50% { box-shadow: 0 0 0 6px rgba(212, 180, 131, 0.12); }
          }
          @keyframes sweeCountPop {
            0% { opacity: 0; transform: translateY(12px) scale(0.92); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          *, *::before, *::after { box-sizing: border-box; }
          a { color: inherit; }
          button { font: inherit; }
          html {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          html::-webkit-scrollbar,
          body::-webkit-scrollbar,
          *::-webkit-scrollbar {
            width: 0;
            height: 0;
            display: none;
          }
          body {
            scrollbar-width: none;
            -ms-overflow-style: none;
            overflow-y: auto;
          }
          img, svg, video { max-width: 100%; height: auto; }
          .section { width: 100%; }

          /* Large laptop */
          @media (max-width: 1280px) {
            .hero {
              padding-left: 3.5vw !important;
              padding-right: 3vw !important;
              gap: 1rem !important;
            }
            .hero-visual {
              min-height: 560px !important;
            }
            .section {
              padding-left: 4vw !important;
              padding-right: 4vw !important;
            }
          }

          /* Compact laptop / small desktop */
          @media (max-width: 1100px) {
            .three-col {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
            .about-facts,
            .about-timeline,
            .about-pulse {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
            .about-facts > div {
              border-left: none !important;
              border-top: 1px solid rgba(58, 47, 44, 0.12) !important;
            }
            .about-facts > div:nth-child(1),
            .about-facts > div:nth-child(2) {
              border-top: none !important;
            }
            .studio-grid {
              grid-template-columns: 1fr !important;
            }
            .footer-grid {
              grid-template-columns: 1fr 1fr !important;
              gap: 2rem !important;
            }
            .pkg-card,
            .work-card {
              min-height: 0 !important;
            }
          }

          /* Tablet + mobile nav */
          @media (max-width: 980px) {
            .nav-desktop { display: none !important; }
            .nav-burger { display: inline-flex !important; }
            .nav-shell { padding-left: 3vw !important; padding-right: 3vw !important; }
            .nav-inner { padding-left: 1rem !important; padding-right: 1rem !important; }
            .nav-mobile-panel { padding-left: 1.1rem !important; padding-right: 1.1rem !important; }
          }

          .hero-stage-frame {
            position: relative;
            width: 100%;
            height: 600px;
          }

          /* Tablet */
          @media (max-width: 900px) {
            .hero {
              grid-template-columns: 1fr !important;
              min-height: auto !important;
              padding: 7.2rem 5vw 3.5rem !important;
              gap: 1.5rem !important;
            }
            .hero-scroll { display: none !important; }
            .hero-visual {
              min-height: 0 !important;
              height: auto !important;
              margin-top: 0.35rem !important;
              margin-left: 0 !important;
              width: 100% !important;
              max-width: 560px !important;
              justify-content: center !important;
              align-self: center !important;
              overflow: hidden !important;
            }
            .hero-orbit { display: none !important; }
            .hero-stage-frame {
              width: 100%;
              height: 460px;
              display: flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
            }
            .hero-stage {
              width: 560px !important;
              max-width: none !important;
              height: 560px !important;
              flex-shrink: 0;
              transform: scale(0.78) !important;
              transform-origin: center center !important;
            }
            .hero-toast {
              left: 2% !important;
              top: -2% !important;
              width: 200px !important;
            }
            .hero-spark {
              right: 4% !important;
              top: 4% !important;
            }
            .hero-phone {
              width: 180px !important;
              right: 2% !important;
              bottom: 4% !important;
            }
            .hero-brand { font-size: clamp(3rem, 12vw, 4.5rem) !important; }
            .hero-title { font-size: clamp(1.7rem, 5.5vw, 2.4rem) !important; }
            .hero-copy { max-width: 100% !important; }
            .hero-actions a { flex: 1 1 auto; text-align: center; }
            .about-head,
            .contact-grid,
            .package-notes {
              grid-template-columns: 1fr !important;
            }
            .three-col {
              grid-template-columns: 1fr !important;
            }
            .section {
              padding: 4.5rem 5vw !important;
            }
            .contact-starter:hover {
              border-color: rgba(212,180,131,0.55) !important;
              background: #fff !important;
            }
          }

          /* Large phone / small tablet */
          @media (max-width: 700px) {
            .about-facts,
            .about-timeline,
            .about-pulse {
              grid-template-columns: 1fr !important;
            }
            .about-facts > div {
              border-left: none !important;
              border-top: 1px solid rgba(58, 47, 44, 0.12) !important;
            }
            .about-facts > div:first-child {
              border-top: none !important;
            }
            .footer-grid {
              grid-template-columns: 1fr !important;
            }
            .hero-visual {
              max-width: 100% !important;
            }
            .hero-stage-frame {
              height: 400px;
            }
            .hero-stage {
              transform: scale(0.68) !important;
            }
          }

          /* Phone */
          @media (max-width: 520px) {
            .nav-tagline { display: none !important; }
            .nav-shell { padding: 0.55rem 3.5vw !important; }
            .nav-inner {
              padding: 0.7rem 0.85rem !important;
              border-radius: 14px !important;
            }
            .hero {
              padding: 6.4rem 4.5vw 3rem !important;
            }
            .hero-brand {
              font-size: clamp(2.6rem, 13vw, 3.4rem) !important;
              letter-spacing: -0.02em !important;
            }
            .hero-title {
              font-size: 1.55rem !important;
              line-height: 1.25 !important;
            }
            .hero-copy {
              font-size: 1.05rem !important;
              margin-bottom: 1.4rem !important;
            }
            .hero-actions {
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 0.65rem !important;
            }
            .hero-actions a {
              width: 100%;
              text-align: center;
            }
            .hero-stage-frame {
              height: 340px;
            }
            .hero-stage {
              transform: scale(0.58) !important;
            }
            .hero-toast {
              left: 4% !important;
              top: 0% !important;
              width: 180px !important;
              padding: 0.7rem 0.8rem !important;
            }
            .hero-spark {
              width: 122px !important;
              right: 6% !important;
              top: 6% !important;
              padding: 0.65rem !important;
            }
            .hero-phone {
              width: 150px !important;
              right: 4% !important;
              bottom: 6% !important;
            }
            .hero-preview {
              border-radius: 22px !important;
            }
            .section {
              padding: 3.6rem 4.5vw !important;
            }
            .pkg-card,
            .work-card {
              min-height: 0 !important;
              border-radius: 22px !important;
            }
            #contact-brief {
              flex-direction: column !important;
              align-items: flex-start !important;
            }
          }

          /* Very small phones */
          @media (max-width: 380px) {
            .hero-brand { font-size: 2.35rem !important; }
            .hero-title { font-size: 1.4rem !important; }
            .section { padding: 3.2rem 4vw !important; }
            .hero-stage-frame {
              height: 300px;
            }
            .hero-stage {
              transform: scale(0.5) !important;
            }
            .hero-phone {
              display: none !important;
            }
            .hero-spark {
              right: 8% !important;
              top: 10% !important;
            }
          }

          /* Prefer reduced motion */
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </div>
  )
}

const navLinkStyle = {
  textDecoration: 'none',
  color: colors.cocoaSoft,
  fontSize: '0.95rem',
  fontWeight: 400,
}

const ctaStyle = {
  display: 'inline-block',
  textDecoration: 'none',
  background: colors.cocoa,
  color: colors.cream,
  padding: '0.85rem 1.35rem',
  borderRadius: 12,
  fontSize: '0.95rem',
  fontWeight: 500,
  border: '1px solid transparent',
  transition: 'transform 0.25s ease, opacity 0.25s ease',
}

const eyebrowStyle = {
  margin: '0 0 0.7rem',
  fontSize: '0.78rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: colors.gold,
  fontWeight: 500,
}

const sectionTitleStyle = {
  fontFamily: fonts.display,
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  margin: '0 0 1rem',
  fontWeight: 500,
  lineHeight: 1.15,
  color: colors.cocoa,
}

const bodyCopyStyle = {
  margin: 0,
  color: colors.cocoaSoft,
  lineHeight: 1.75,
  fontSize: '1.02rem',
  fontWeight: 300,
  maxWidth: 640,
}
