import Image from "next/image";
import styles from "./LandingPage.module.scss";

// --- Icon Components (as SVGs) ---
const ArrowRightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.16669 9.99996H15.8334M15.8334 9.99996L10 4.16663M15.8334 9.99996L10 15.8333"
      stroke="#111827"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UserCircleIcon = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="32" fill="#111827" />
    <path
      d="M40 44V41.3333C40 39.4783 39.2625 37.7043 37.9497 36.3915C36.637 35.0787 34.863 34.3333 33 34.3333H23C21.137 34.3333 19.363 35.0787 18.0503 36.3915C16.7375 37.7043 16 39.4783 16 41.3333V44M28 29C30.7614 29 33 26.7614 33 24C33 21.2386 30.7614 19 28 19C25.2386 19 23 21.2386 23 24C23 26.7614 25.2386 29 28 29Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const SearchIcon = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="32" fill="#111827" />
    <path
      d="M30 38C35.5228 38 40 33.5228 40 28C40 22.4772 35.5228 18 30 18C24.4772 18 20 22.4772 20 28C20 33.5228 24.4772 38 30 38ZM35.8571 42.8571L44 46"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const HeartIcon = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="64" height="64" rx="32" fill="#111827" />
    <path
      d="M35.0355 20.3033C33.2747 18.5425 30.4578 18.5425 28.6971 20.3033C26.9363 22.064 26.9363 24.8809 28.6971 26.6417L31.8663 29.8108L35.0355 26.6417C36.7963 24.8809 36.7963 22.064 35.0355 20.3033ZM31.8663 36.1494L22 46H41.7326L31.8663 36.1494Z"
      fill="white"
    />
    <path
      d="M31.8663 36.1494L28.6971 32.9802M31.8663 36.1494L35.0355 32.9802M28.6971 26.6417L31.8663 29.8108L35.0355 26.6417L31.8663 23.4725L28.6971 26.6417Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 7.5V7.501"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const TikTokIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 3H16.01M16 7.25V14.5C16 16.9853 13.9853 19 11.5 19C9.01472 19 7 16.9853 7 14.5C7 12.0147 9.01472 10 11.5 10H14.5V3H16ZM11.5 15.75C11.5 16.1642 11.1642 16.5 10.75 16.5C10.3358 16.5 10 16.1642 10 15.75C10 15.3358 10.3358 15 10.75 15C11.1642 15 11.5 15.3358 11.5 15.75Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const QuestionMarkIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke="white"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.125 9.00004C10.3412 8.16912 11.0827 7.56156 11.9378 7.50505C12.7928 7.44855 13.6062 7.95544 13.9785 8.75004C14.7352 10.364 12.0022 11.9962 12 12.75V13.5M12 16.5V16.501"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Data Arrays ---
const stories = [
  {
    author: "Maya",
    location: "Seoul, Korea",
    title: "Moving to Seoul as a Queer Latina",
    description:
      "Finding my community in Seoul wasn't easy, but these places and people made all the difference...",
    tags: ["LGBTQ+", "Seoul", "Expat Life"],
    avatar: "/user-maya.png", // Replace with your image path
  },
  {
    author: "Amara",
    location: "Lisbon, Portugal",
    title: "Solo Black Woman in Lisbon",
    description:
      "The neighborhoods where I felt most welcomed, the cafes where I could work safely, and the community I found...",
    tags: ["Black", "Solo Travel", "Lisbon"],
    avatar: "/user-amara.png", // Replace with your image path
  },
  {
    author: "Yuki & Sam",
    location: "Tokyo, Japan",
    title: "Queer Couple's Tokyo Guide",
    description:
      "The hidden gems, LGBTQ+ friendly spots, and local connections that made our Tokyo experience unforgettable...",
    tags: ["LGBTQ+", "Couple Travel", "Tokyo"],
    avatar: "/user-yuki-sam.png", // Replace with your image path
  },
];

const testimonials = [
  {
    quote: '"I finally found a travel app that centers us."',
    author: "Aisha",
    details: "Black • Visited Berlin",
    avatar: "/user-aisha.png", // Replace with your image path
  },
  {
    quote:
      "\"I don't want just restaurants — I want to know where I'll feel safe.\"",
    author: "Jordan",
    details: "LGBTQ+ • Visited Amsterdam",
    avatar: "/user-jordan.png", // Replace with your image path
  },
  {
    quote: '"No more digging through Facebook groups!"',
    author: "Priya",
    details: "Solo Traveler • Visited Bali",
    avatar: "/user-priya.png", // Replace with your image path
  },
];

const howItWorksSteps = [
  {
    icon: <UserCircleIcon />,
    title: "Set Up Your Profile",
    description:
      "Add identity tags, travel interests, and places you've visited.",
  },
  {
    icon: <SearchIcon />,
    title: "Find Places That Get You",
    description:
      "Filter by cities, safety scores, and real community experiences.",
  },
  {
    icon: <HeartIcon />,
    title: "Share Your Own Story",
    description: "Inspire others by telling your travel truths.",
  },
];

// --- Main Page Component ---
export default function LandingPage() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>Homii</div>
        <nav className={styles.nav}>
          <a href="#">How it works</a>
          <a href="#">Community</a>
          <a href="#">Destinations</a>
        </nav>
        <div className={styles.authButtons}>
          <a href="#" className={styles.signIn}>
            Sign In
          </a>
          <button className={styles.joinNow}>Join Now</button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>Find your people. Wherever you go.</h1>
          <p>Community-sourced travel info from people who get you.</p>
          <div className={styles.heroButtons}>
            <button className={`${styles.button} ${styles.buttonPrimary}`}>
              Start Exploring <ArrowRightIcon />
            </button>
            <button className={`${styles.button} ${styles.buttonSecondary}`}>
              See how it works
            </button>
          </div>
        </section>

        {/* Try it out Section */}
        <section className={styles.tryItOut}>
          <h2>Try it out</h2>
          <div className={styles.filterBox}>
            <input
              type="text"
              placeholder="Where are you going?"
              className={styles.searchInput}
            />
            <div className={styles.filterGroup}>
              <p className={styles.filterTitle}>Filter by identity:</p>
              <div className={styles.tags}>
                {[
                  "Black",
                  "Asian",
                  "Latin/Hispanic",
                  "LGBTQ+",
                  "Plus-size",
                  "Solo Female",
                  "Mature (40+)",
                ].map((tag) => (
                  <button key={tag} className={styles.tag}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.filterGroup}>
              <p className={styles.filterTitle}>Travel style:</p>
              <div className={styles.tags}>
                {[
                  "Solo Travel",
                  "Digital Nomad",
                  "Family Travel",
                  "First-time Abroad",
                  "Sabbatical",
                  "Expat Move",
                ].map((tag) => (
                  <button key={tag} className={styles.tag}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.filterGroup}>
              <p className={styles.filterTitle}>Vibe:</p>
              <div className={styles.tags}>
                {["Chill", "Urban", "Safe Alone"].map((tag) => (
                  <button key={tag} className={styles.tag}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <button className={`${styles.button} ${styles.buttonDark}`}>
              See What Travelers Say
            </button>
          </div>
        </section>

        {/* Real Stories Section */}
        <section className={styles.stories}>
          <h2>Real stories from our community</h2>
          <div className={styles.storiesGrid}>
            {stories.map((story) => (
              <div key={story.title} className={styles.storyCard}>
                <div className={styles.storyImage}>
                  <span>Story Image</span>
                </div>
                <div className={styles.storyContent}>
                  <div className={styles.storyAuthor}>
                    <Image
                      src={story.avatar}
                      alt={`Avatar of ${story.author}`}
                      width={40}
                      height={40}
                      className={styles.avatar}
                    />
                    <div>
                      <p className={styles.authorName}>{story.author}</p>
                      <p className={styles.authorLocation}>{story.location}</p>
                    </div>
                  </div>
                  <h3>{story.title}</h3>
                  <div className={styles.tags}>
                    {story.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className={styles.storyDescription}>{story.description}</p>
                  <a href="#" className={styles.readMore}>
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className={styles.howItWorks}>
          <h2>How Homii Works</h2>
          <div className={styles.stepsGrid}>
            {howItWorksSteps.map((step) => (
              <div key={step.title} className={styles.step}>
                {step.icon}
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <button className={`${styles.button} ${styles.buttonDark}`}>
            Join the Movement <ArrowRightIcon />
          </button>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <h2>What our community says</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.author} className={styles.testimonialCard}>
                <p className={styles.quote}>{testimonial.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <Image
                    src={testimonial.avatar}
                    alt={`Avatar of ${testimonial.author}`}
                    width={40}
                    height={40}
                    className={styles.avatar}
                  />
                  <div>
                    <p className={styles.authorName}>{testimonial.author}</p>
                    <p className={styles.authorDetails}>
                      {testimonial.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3 className={styles.logo}>Homii</h3>
            <p>Find your people. Wherever you go.</p>
          </div>
          <div className={styles.footerLinks}>
            <div>
              <h4>Company</h4>
              <a href="#">About Homii</a>
              <a href="#">Press Kit</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
            <div>
              <h4>Follow Us</h4>
              <div className={styles.socialIcons}>
                <a href="#">
                  <InstagramIcon />
                </a>
                <a href="#">
                  <TikTokIcon />
                </a>
                <a href="#">
                  <QuestionMarkIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          <p>© 2025 Homii. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
