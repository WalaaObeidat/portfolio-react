import React from "react";


class About extends React.Component {
    render() {
        return (
            <>
  div&gt;
  <h3 className="about" id="about">
    About
  </h3>
  <div className="ab">
    <img className="aph"src={require('../images/blog-img-2.jpg')} alt="walaa obeidat" />
    <p className="pa">
      A highly motivated, purpose-driven, trustworthy, quick learner energetic
      and highlyorganized person,with an endless desire to grow and learn.
      <br />
      I always strive to find an opportunity to be an added value to the
      company.
      <br />
      I am looking for a challenging role to utilize my technical, database and
      management skills,
      <br />
      as well as to enhance my knowledge of new and emerging trends in the IT
      sector, always looking to learn and more.
    </p>
    <img className="aph2"src={require('../images/mis.jpeg')}  />
  </div>
</>


        )

    }
}
export default About;