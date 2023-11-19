import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, LandingPage, Registration, ProtectedRoute } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

export const metadata = {
  metadataBase: new URL("https://jobtrackierjobs.netlify.app"),
  title:
    "Jobtrackier - Your Job, Your Dream | #1 Software Product for Tracking Jobs Applied for",
  description:
    "We help you keep track of jobs applied for with their corresponding job status without stress",
  applicationName: "Cuesoft",
  keywords: [
    "Job",
    "Trackier",
    "Tracker",
    "Founder",
    "CEO",
    "Jobtrackier",
    "Jobtracker",
    "Software",
    "Development",
    "Company",
    "Engineering",
    "OpenSource",
    "Product",
    "MVP",
    "Global",
    "Remote",
    "Innovative",
    "Business",
    "Research",
    "R&D",
    "Status",
    "Interviews",
    "Decline",
    "Schedule",
    "Applications",
    "Pending",
    "Notice",
  ],
  icons: [
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon-16x16.png",
      sizes: "16x16",
    },
    { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1a3866" },
  ],
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "https://jobtrackierjobs.netlify.app",
    title:
      "Jobtrackier - Your Job, Your Dream | #1 Software Product for Tracking Jobs Applied for",
    description:
      "We help you keep track of jobs applied for with their corresponding job status without stress.",
    siteName: "Jobtrackier",
    images: [
      {
        url: "/jobtrackier.jpeg",
        width: 279,
        height: 279,
      },
    ],
  },
  twitter: {
    site: "@jPanel",
    creator: "@jobtrackier",
  },
  appleWebApp: {
    title: "Jobtrackier",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <meta name="msapplication-TileColor" content="#325ea6" />
        <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet" />

        {/* Add SEO metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(",")} />

        {/* Add other SEO meta tags as needed */}

        {/* Add base URL */}
        <base href={metadata.metadataBase.toString()} />

        {/* Add icons */}
        {metadata.icons.map((icon, index) => (
          <link
            key={index}
            rel={icon.rel}
            type={icon.type}
            href={icon.url}
            sizes={icon.sizes}
          />
        ))}

        {/* Add manifest */}
        <link rel="manifest" href={metadata.manifest} />

        {/* Add OpenGraph meta tags */}
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />

        {/* Add OpenGraph images */}
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}
      </Helmet>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<Registration />} />

        {/* Protect the dashboard */}
        <Route path="dashboard/*" element={<ProtectedRoute />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
