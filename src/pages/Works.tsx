import React from "react";
import Card from "../components/Card";

const Works = () => {
  return (
    <section>
      <div className="flex gap-5 pt-20 justify-center">
        <div className="flex flex-col gap-5">
          <Card title="Dynamic" description="WEB DESIGNING" worksCard>
            <img
              className="rounded-4xl"
              decoding="async"
              src="https://picsum.photos/300/300"
              alt=""
            />
          </Card>
          <Card
            title="Diesel H1"
            description="PHOTOGRAPHY"
            worksCard
            className="flex-1"
          >
            <img
              className="rounded-4xl h-full object-cover"
              src="https://picsum.photos/300/300"
              alt=""
            />
          </Card>
        </div>

        <div>
          <div className="flex gap-1 items-center justify-center mb-4">
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt="Star"
              className="object-contain"
            />
            <p className="text-white uppercase font-semibold text-7xl">
              all projects
            </p>
            <img
              decoding="async"
              src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
              alt="Star"
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <Card title="Seven Studio" description="MOBILE DESIGNING" worksCard>
              <img
                className="rounded-4xl"
                src="https://picsum.photos/300/300"
                alt=""
              />
            </Card>
            <Card title="Raven Studio" description="BRANDING" worksCard>
              <img
                className="rounded-4xl"
                src="https://picsum.photos/300/300"
                alt=""
              />
            </Card>
            <Card title="Submarine" description="MOBILE DESIGNING" worksCard>
              <img
                className="rounded-4xl"
                src="https://picsum.photos/300/300"
                alt=""
              />
            </Card>
            <Card title="Hydra Merc" description="WEB DESIGNING" worksCard>
              <img
                className="rounded-4xl"
                src="https://picsum.photos/300/300"
                alt=""
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
