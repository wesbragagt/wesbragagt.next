import { NextPage } from 'next';
import ReactMarkdown from 'react-markdown'
import Layout from '../components/Layout'

interface HomeProps {
  markdownFiles: string[],
}

const Home: NextPage<HomeProps> = ({ markdownFiles }) => {
  return (
    <Layout>
      <p>Home</p>
    </Layout>
  )
}

Home.getInitialProps = function () {
  const importAll = (r) => r.keys().map(r).map(file => file.default)
  const markdownFiles = importAll(require.context('./../posts', true, /\.md$/)).reverse()
  return { markdownFiles }
}

export default Home