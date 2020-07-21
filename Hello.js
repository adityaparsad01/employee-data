
import React, {useState, useEffect} from 'react';
import bootstrap from 'bootstrap/css/bootstrap.css'

// TODO(slightlyoff): factor out common JSON parsing & caching of this file
const DATA_URL = 'https://waitominuteapi.tk/faq ';

function About(props) {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    getFAQs();
  }, []);



  const getFAQs = () => {
    fetch(DATA_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFaq(data.faq);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <div className="About">
        {faq.map((faq, index) => {
          return (
            <div className="card" >
  <div className="card-body">
    <h5 className="card-title">{faq.question}</h5>
    <p className="card-text">{faq.answer}</p>
  </div>
</div>
          );
        })}
      </div>

    </React.Fragment>
  );
}

export default About;
