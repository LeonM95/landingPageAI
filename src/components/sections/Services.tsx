import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { services } from "../../utils/Services-data";
import { Service } from "../cards/Service";

export const Services = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center w-3xl mx-auto space-y-4">
          <Title>Our AI services</Title>
          <Paragraph>
            Unlock the potential of advanced machine learning, natural language
            processing, and predictive analytics. Our services include:
          </Paragraph>
        </div>
        {/* small screen 2 cards - large screens 3 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <Service
              key={key}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
