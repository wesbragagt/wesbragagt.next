import ReactMarkdown from 'react-markdown'

export default function Index ({ markdownFiles }) {
  return (
    <div>
      {markdownFiles.map((element, i) => (<ReactMarkdown key={i} source={element} />))}
    </div>
  )
}

Index.getInitialProps = function () {
  const importAll = (r) => r.keys().map(r).map(file => file.default)
  const markdownFiles = importAll(require.context('./../posts', true, /\.md$/)).reverse()
  return { markdownFiles }
}
