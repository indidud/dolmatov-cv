import * as React from "react";
import "./styles/index.scss";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import { IntlProvider } from "react-intl";
import { intl } from "../intl";

const IndexPage = () => {
  const [locale, setLocale] = React.useState("en");
  return (
    <IntlProvider messages={intl[locale]} locale={locale}>
      <Layout>
        <Sidebar />
        <Content locale={locale} handleLanguageChange={setLocale} />
      </Layout>
    </IntlProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Vasiliy Dolmatov</title>;
