import BasicCard from './BasicCard.js';
import updates from './updates.json';

export default function Home() {
  return (
    <div
      style={{
        textAlign: 'left',
        fontFamily: 'Consolas',
        padding: '50px',
      }}
    >
      <div style={{ marginBottom: '30px' }}>
        <u>Robotic Sign Language Club</u>
      </div>

      <div style={{ marginBottom: '50px' }}>
        We are developing mechanical arms that can translate spoken natural
        languages into sign language.
      </div>

      <div style={{ marginBottom: '50px' }}>
        <b>Socials</b>
        <ul>
          <li style={{ margin: '10px' }}>
            Instagram:{' '}
            <a
              href="https://instagram.com/rsl.uo"
              style={{ textDecoration: 'none', color: 'darkgreen' }}
            >
              instagram.com/rsl.uo
            </a>
          </li>
          <li style={{ margin: '10px' }}>
            Email:{' '}
            <a
              href="mailto:robotic.sign@gmail.com"
              style={{ textDecoration: 'none', color: 'darkgreen' }}
            >
              robotic.sign@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div style={{ marginBottom: '50px' }}>
        <b>Updates</b>

        {/* {
            "title": "",
            "date": "",
            "content": ""
        } */}

        {updates.data.map((update) => (
          <BasicCard
            title={update.title}
            date={update.date}
            content={update.content}
          />
        ))}
      </div>
    </div>
  );
}
