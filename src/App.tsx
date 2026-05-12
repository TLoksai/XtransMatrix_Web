import React, { Suspense, lazy, Component, ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./shared/components/ScrollToTop";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 40, color: "#fff", background: "#06080E", minHeight: "100vh", fontFamily: "monospace" }}>
          <h2 style={{ color: "#ff5555", marginBottom: 16 }}>Runtime Error</h2>
          <pre style={{ color: "#ff8888", fontSize: 13, whiteSpace: "pre-wrap" }}>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
import Layout from "./shared/components/Layout";
import Loading from "./LazyLoad/loading";
import { AuthProvider } from "./shared/components/Auth/AuthContext"; 


const LandingPage = lazy(() => import("./pages/home/landing"));
const Team = lazy(() => import("./pages/home/team"));
const Contact = lazy(() => import("./pages/home/contact"));

const CulturesValuesESG = lazy(() => import("./pages/about-us/cultures-values-esg"));
const Future = lazy(() => import("./pages/about-us/future"));
const Thework = lazy(() => import("./pages/about-us/thework"));

const DiversityYoungMinds = lazy(() => import("./pages/about-us/diversity-young-minds"));
const RecentAwardsRecognition = lazy(() => import("./pages/about-us/recent-awards-recognition"));
const OurPartners = lazy(() => import("./pages/about-us/our-partners"));
const Employees = lazy(() => import("./pages/Employees/Employees"));


const ForgeAI = lazy(() => import("./pages/services/forge-ai"));
const Forgeai_learnmore = lazy(() => import("./pages/services/forgeai_learnmore"));

const PerformAI = lazy(() => import("./pages/services/perform-ai"));
const Performai_learnmore = lazy(() => import("./pages/services/performai_learnmore"));

const Advisory = lazy(() => import("./pages/services/advisory"));
const TechSquads = lazy(() => import("./pages/services/tech-squads"));
const Audio = lazy(() => import("./pages/services/audio"));
const Video = lazy(() => import("./pages/services/video"));
const Robotics = lazy(() => import("./pages/services/robotics"));
const Image = lazy(() => import("./pages/services/image"));
 
const MedTech = lazy(() => import("./pages/Industries/medtech"));
const Automobile = lazy(() => import("./pages/Industries/automobile"));
const Insurance = lazy(() => import("./pages/Industries/insurance"));
const Banking = lazy(() => import("./pages/Industries/banking"));

const XTMXIntelligence = lazy(() => import("./pages/Intelligence/xtmx-intelligence"));
const Events = lazy(() => import("./pages/Intelligence/events"));

const NotFound = lazy(() => import("./pages/notfound"));

const Search = lazy(() => import("./pages/career/search"));
const Innotern = lazy(() => import("./pages/career/innotern"));
const Experienced = lazy(() => import("./pages/career/experienced"));
const Futureofwork = lazy(() => import("./pages/career/Futureofwork"));

const Dashboard = lazy(() => import("./pages/dashboard"));

const PrivacyPolicy = lazy(()=> import("./pages/footerhelper/PrivacyPolicy"))
const TermsOfService = lazy(()=> import("./pages/footerhelper/TermsOfService"))
const Allinsights = lazy(() => import("./pages/case_study/allinsights"));

const Tour = lazy(() => import("./pages/Tour"));
const Pricing = lazy(() => import("./pages/pricing"));

const App: React.FC = () => {
  return (
    <ErrorBoundary>
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          
          <Route
            path="/"
            element={
              <Layout>
                <ErrorBoundary>
                  <Suspense fallback={<Loading />}>
                    <LandingPage />
                  </Suspense>
                </ErrorBoundary>
              </Layout>
            }
          />
          <Route
          path="/case-studies"
          element={
            <Layout>
              <Allinsights />
            </Layout>
          }
        />
          
        
          <Route
            path="/cultures-values-esg"
            element={
              <Layout>
                <CulturesValuesESG />
              </Layout>
            }
          />
          <Route
            path="/thework"
            element={
              <Layout>
                <Thework />
              </Layout>
            }
          />
          <Route
            path="/future"
            element={
              <Layout>
                <Future />
              </Layout>
            }
          />
          <Route
            path="/diversity-young-minds"
            element={
              <Layout>
                <DiversityYoungMinds />
              </Layout>
            }
          />
          <Route
            path="/recent-awards-recognition"
            element={
              <Layout>
                <RecentAwardsRecognition />
              </Layout>
            }
          />
          <Route
            path="/our-partners"
            element={
              <Layout>
                <OurPartners />
              </Layout>
            }
          />

          <Route
            path="/employees"
            element={
              <Layout>
                <Employees />
              </Layout>
            }
          />
         
          <Route
            path="/forge-ai"
            element={
              <Layout>
                <ForgeAI />
              </Layout>
            }
          />
          <Route
            path="/forgeai_learnmore"
            element={
              <Layout>
                <Forgeai_learnmore />
              </Layout>
            }
          />

          <Route
            path="/perform-ai"
            element={
              <Layout>
                <PerformAI />
              </Layout>
            }
          />
          <Route
            path="/performai_learnmore"
            element={
              <Layout>
                <Performai_learnmore />
              </Layout>
            }
          />

          <Route
            path="/advisory"
            element={
              <Layout>
                <Advisory />
              </Layout>
            }
          />
          <Route
            path="/tech-squads"
            element={
              <Layout>
                <TechSquads />
              </Layout>
            }
          />
          <Route
            path="/audio"
            element={
              <Layout>
                <Audio />
              </Layout>
            }
          />
          <Route
            path="/video"
            element={<Video />}
          />
          <Route
            path="/robotics"
            element={<Robotics />}
          />
          <Route
            path="/image"
            element={<Image />}
          />

      
          <Route
            path="/medtech"
            element={
              <Layout>
                <MedTech />
              </Layout>
            }
          />
          <Route
            path="/automobile"
            element={
              <Layout>
                <Automobile />
              </Layout>
            }
          />
          <Route
            path="/insurance"
            element={
              <Layout>
                <Insurance />
              </Layout>
            }
          />
          <Route
            path="/banking"
            element={
              <Layout>
                <Banking />
              </Layout>
            }
          />

        
          <Route
            path="/xtmx-intelligence"
            element={
              <Layout>
                <XTMXIntelligence />
              </Layout>
            }
          />
          <Route
            path="/events"
            element={
              <Layout>
                <Events />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />

        
          <Route path="*" element={<NotFound />} />

         
          <Route
            path="/team"
            element={
              <Layout>
                <Team />
              </Layout>
            }
          />

          <Route
            path="/search"
            element={
              <Layout>
                <Search />
              </Layout>
            }
          />

          <Route
            path="/hiring_Innotern"
            element={
              <Layout>
                <Innotern />
              </Layout>
            }
          />
          <Route
            path="/futureofwork"
            element={
              <Layout>
                <Futureofwork />
              </Layout>
            }
          />

          <Route
            path="/experienced_hired"
            element={
              <Layout>
                <Experienced />
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <Layout>
                <PrivacyPolicy />
              </Layout>
            }
          />
          <Route
            path="/terms-of-service"
            element={
              <Layout>
                <TermsOfService />
              </Layout>
            }
          />

          <Route
            path="/pricing"
            element={
              <Layout>
                <Tour />
              </Layout>
            }
          />

          <Route
            path="/tour"
            element={
              <Layout>
                <Pricing />
              </Layout>
            }
          />

        </Routes>
        
    </Router>
    </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
