import { Heading } from "./components/Heading/Heading";
import { Section } from "./components/Section/Section";
import { Container } from "./components/Container/Container";
import { BlogCard } from "./components/BlogCard/BlogCard";
import { Statistics } from "./components/Statistics/Statistics";
import { ForbesList } from "./components/ForbesList/ForbesList";
import { CryptoHistory } from "./components/CryptoHistory/CryptoHistory";

import article from "./data/article.json";
import stats from "./data/stats.json";
import forbes from "./data/forbes.json";
import transactions from "./data/transactions.json";

function App() {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          userName={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />
        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={stats} />
        <Statistics stats={stats} />
        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={forbes} />
        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory items={transactions} />
      </Container>
    </Section>
  );
}

export default App;
