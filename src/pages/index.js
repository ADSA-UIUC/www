import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

import practicalTeamImage from './images/practical-team.jpg';
import neuralNetImage from './images/neural_network.jpeg';
import sweImage from './images/software-engineer.jpg';

import Content from '../components/Content';

const IndexPage = () => (
  <Layout>
    <Header />

    <div id="main">
      <header className="major container medium">
        <h2>Inspiring students from any background to reshape  their perspective with data-driven decision making</h2>
      </header>

      <div className="box alt container">
        <Content 
          side="left"
          link="/#"
          icon="fa-signal"
          image={practicalTeamImage}
          title="Practical Application Workshops"
          body={`Add body here`}
        />
        <Content 
          side="right"
          link="/#"
          icon="fa-cogs"
          image={neuralNetImage}
          title="Machine Learning Workshops"
          body={`Add body here`}
        />
        <Content 
          side="left"
          link="/#"
          icon="fa-code"
          image={sweImage}
          title="Supported Team Projects"
          body={`Add body here`}
        />
      </div>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
