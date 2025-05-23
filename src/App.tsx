import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Brands } from "./components/sections/Brands";
import { Services } from "./components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs";
import { Pricing } from "./components/sections/Pricing";

function App() {
  return (
    <Layout title="Nova AI">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      {/* <CTA /> */}
    </Layout>
  );
}

export default App;
