import HomePageImage from "components/HomePageImage";
import Section from '../components/Section';
import Title from "components/Title";
import HomePageText from '../components/HomePageText';
import HomePageButton from '../components/HomePageButton';

export default function Home() {
  return (
    <Section>
      <Title>Phonebook</Title>
      <HomePageImage />
      <HomePageText />
      <HomePageButton />
    </Section>
  );
}
