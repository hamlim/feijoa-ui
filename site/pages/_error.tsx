export default function Error() {
  return <pre>Encountered an error!</pre>;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
