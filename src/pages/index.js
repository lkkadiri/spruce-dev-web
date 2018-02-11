import React from 'react'
import Link from 'gatsby-link'
import Container from 'react-sprucebot/lib/components/Container/Container';
import {BotText} from 'react-sprucebot'
const IndexPage = () => (
  <div>
    <h1>Hi Sprucebot Devs!</h1>
    <p>Build something great.</p>
    <Container>
					<BotText>
            <Link to="/Styleguide/">API</Link>
          </BotText>
					<BotText>
            <Link to="/Styleguide/">Styleguide</Link>
          </BotText>
    </Container>
  </div>
)

export default IndexPage
