import { useState } from 'react';
import BasicCard from './BasicCard.js';
import updates from './updates.json';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleMode = () => {
    console.log(isDark);
    setIsDark(!isDark);
  };

  return (
    <div
      style={{
        textAlign: 'left',
        fontFamily: 'Garamond',
        fontSize: '22px',
        padding: '5vh',
        height: '90vh',
        background: isDark ? '#222' : '#EEE',
        color: isDark ? '#EEE' : '#111',
      }}
    >
      <div style={{ marginBottom: '10px', fontSize: '34px' }}>
        <u>Robotic Sign Language Club</u>
      </div>

      <div>
        <span
          onClick={() => toggleMode()}
          style={{ marginRight: '40px', cursor: 'pointer' }}
        >
          <b>{isDark ? 'dark' : 'light'} mode</b>
        </span>

        <span style={{ cursor: 'pointer' }}>
          <b>en/fr</b>
        </span>
      </div>

      <div style={{ marginTop: '30px', marginBottom: '50px' }}>
        We are developing mechanical arms that can translate spoken natural
        languages into sign language.
      </div>

      <div style={{ marginBottom: '50px' }}>
        <b>
          <u>Socials</u>
        </b>
        <ul>
          <li style={{ margin: '10px' }}>
            Instagram:{' '}
            <a
              href="https://instagram.com/rsl.uo"
              style={{ textDecoration: 'none', color: isDark ? 'lightgreen' : 'darkgreen' }}
            >
              <b>instagram.com/rsl.uo</b>
            </a>
          </li>
          <li style={{ margin: '10px' }}>
            Email:{' '}
            <a
              href="mailto:robotic.sign@gmail.com"
              style={{ textDecoration: 'none', color: isDark ? 'lightgreen' : 'darkgreen' }}
            >
              <b>robotic.sign@gmail.com</b>
            </a>
          </li>
        </ul>
      </div>

      <div style={{ marginBottom: '50px' }}>
        <b>
          <u>Our constitution</u>
        </b>{' '}
        coming soon!
      </div>

      <div style={{ marginBottom: '50px' }}>
        <b>
          <u>Updates</u>
        </b>

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
