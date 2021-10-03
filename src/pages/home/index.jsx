import Header from 'sections/header';
import Distribution from 'sections/distribution';
import TraitsAndAttributes from 'sections/traits-and-attributes';
import LevelPreview from 'sections/level-preview';
import Welcome from 'sections/welcome';
import Roadmap from 'sections/roadmap';
import Faq from 'sections/faq';
import Team from 'sections/team';
import Footer from 'sections/footer';
// Assets
import topParticles from './images/top-particles.svg';
import heroLines from './images/hero-lines.svg';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <Header className="mb-14" />
      <img
        src={heroLines}
        alt="heroLines"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 max-w-full -z-1"
      />
      <div className="relative">
        <img
          src={topParticles}
          alt="particles"
          className="absolute -bottom-36 left-1/2 transform -translate-x-1/2 -z-1"
        />
        <Distribution className="mb-14" />
        <TraitsAndAttributes className="mb-14" />
      </div>
      <LevelPreview className="mb-14" />
      <Welcome className="mb-14" />
      <Roadmap className="mb-14" />
      <Faq />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
