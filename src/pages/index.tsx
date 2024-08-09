import AboutMe from "../shared/components/AboutMe";
import Contact from "../shared/components/Contact";
import Introduction from "../shared/components/Introduction";
import RecentWork from "../shared/components/RecentWork";
import TeamWork from "../shared/components/TeamWork";
import Layout from "../shared/layouts";

const Dashboard = () => {
  return (
    <Layout>
      <Introduction />
      <AboutMe />
      <RecentWork />
      <TeamWork />
      <Contact />
    </Layout>
  );
};

export default Dashboard;
