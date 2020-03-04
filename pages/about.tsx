import Layout from '../components/Layout'
import { NextPage } from 'next'

interface Props { }

const About: NextPage<Props> = props => {
    return (
        <Layout>
            <p>About</p>
        </Layout>
    )
};

export default About