import * as React from "react";
import Layout from "../../components/Layout";
import SimplePage from "../../components/SimplePage";
import ContactForm from "../../components/ContactForm";

const ContactPage = () => {
    return (
      <Layout>
        <SimplePage title="Kontakt">
          <ContactForm lang="de"/>
        </SimplePage>
      </Layout>
    );
}

export default ContactPage;
