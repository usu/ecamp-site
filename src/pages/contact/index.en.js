import * as React from "react";
import Layout from "../../components/Layout";
import SimplePage from "../../components/SimplePage";
import ContactForm from "../../components/ContactForm";

const ContactPage = () => {
    return (
      <Layout>
        <SimplePage title="Contact">
          <ContactForm lang="en" />
        </SimplePage>
      </Layout>
    );
}

export default ContactPage;
