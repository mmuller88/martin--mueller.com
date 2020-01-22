import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import HompageStyles from "./index.module.css"
import Hero from "../../../static/img/logo_home.png";

const HeroStyle = {
//   width: "1421px",
//   height: "100vh",
  backgroundImage: `url(${Hero})`
};

const HomePageTemplate = ({
  title,
  image,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    {/* <div key={image} className='column is-6' style={{ borderRadius: '5px' }}>
      <section className='section'>
        <p className='has-text-centered'>
          <img alt='' src={image} />
        </p>
        <p>{title}</p>
      </section>
    </div> */}
    <section className='hero is-primary is-bold is-medium' style={HeroStyle}>
        {/* <p className='has-text-centered'>
          <img alt='' src={image} />
        </p> */}
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>

        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
                <Offerings gridItems={offerings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
