import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { services } from "../../utils/Services-data";
import { Service } from "../cards/Service";

export const Services = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>What We Offer</Title>
          <Paragraph>
            Empower your business with intelligent chatbots designed to boost
            sales, improve support, and enhance customer interactions across all
            platforms.
          </Paragraph>
        </div>

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
