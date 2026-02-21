function About() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          The Next Generation of Soccer Training
        </h1>
        <p className="text-xl text-gray-700">
          TOCA Football provides a one-of-a-kind, tech-enhanced soccer
          experience for players of all ages and skill levels.
        </p>
      </div>

      {/* Mission Section */}
      <section className="bg-white p-8 rounded-lg shadow mb-8">
        <h2 className="text-3xl font-bold mb-4">
          Changing the Future of Soccer Training
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Serving local communities throughout the United States and Canada, our
          training centers welcome players and families to find their best with
          classes, training sessions, and league play that meet players'
          respective skill-sets.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Our soccer classes for ages 1 to 13 are engaging and educational,
          while individual or group training sessions for ages 7 onwards offer
          progressive levels of training for players looking to challenge
          themselves while also having fun.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From training sessions and group classes to camps, leagues, and more,
          TOCA offers community soccer experiences you won't find anywhere else!
        </p>
      </section>

      {/* Origin Story Section */}
      <section className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4">
          It All Started with a Tennis Ball and a Garage
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          When our founder, Eddie Lewis, was a soccer player at UCLA, he was
          obsessed with getting the most out of his abilities. After learning
          that the UCLA Basketball Team practiced shooting on smaller hoops, he
          realized he could achieve similar benefits by practicing his soccer
          touch with a smaller ball.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          He began taking reps with a tennis ball against garages to perfect his
          technique. This small-is-harder methodology made him better faster, and
          it was his secret weapon to outpacing the competition.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Countless hours and thousands of reps later, he embarked on a career
          spanning from the MLS to the Premier League and two World Cups. At the
          end of his playing days, Eddie realized that he had established a
          unique set of fundamentals that he could pass on to others.
        </p>
        <p className="text-gray-700 leading-relaxed">
          That led to the creation of the one-of-a-kind training experience and a
          soccer brand he wished he had growing up. Today, what started with a
          tennis ball has transformed into a world class soccer experience you
          won't find anywhere else.
        </p>
      </section>
    </div>
  );
}

export default About;