import Head from 'next/head'
import marked from 'marked'
import Layout from '../components/Layout'
import Content from '../components/Content'

let content = `
# Partners and friends

### Sponsors
Foreningen Roskilde Festival, Tuborgfondet, Københavns Kommune, Zibra Wireless

### Partners and Friends
Foreningen Nydansker, Trampoline House, Student Refugees, YES! CPH, R.E.D., DFUNK, Røde Kors Asyl, Coding Pirates

### Featured in
CPHFTW, Politiken, MOOT, Opbyg Samfundet

### Supported
- Slack
- GitHub
- Facebook
- Google

`
export default () => (
  <Layout>
    <Head>
      <title>Partners and Friends - HackYourFuture Copenhagen</title>
    </Head>
    <Content>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
    </Content>
  </Layout>
)
