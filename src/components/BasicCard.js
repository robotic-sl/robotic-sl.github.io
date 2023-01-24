export default function Home(props) {
  return (
    <div style={{ marginTop: '40px' }}>
      <div style={{ textDecoration: 'bold' }}>
        <i>
          {props.title} - {props.date}
        </i>
      </div>

      <div style={{ margin: '10px' }}>{props.content}</div>
    </div>
  );
}
