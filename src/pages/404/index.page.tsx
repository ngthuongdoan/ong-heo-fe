import { NextPage } from "next"
import Astronaut from "./Astronaut"
import { StyledNotFoundPage } from "./index.styled"

const NotFoundPage: NextPage = () => {
  return (
    <StyledNotFoundPage>
      <Astronaut />
      <div className="content">
        <h1>404</h1>
        <h2>UH OH! You&rsquo;re lost.</h2>
        <p>
          The page you are looking for does not exist. How you got here is a mystery. But you can
          click the button below to go back to the homepage.
        </p>
        <button className="btn green" onClick={() => (window.location.href = "/")}>
          HOME
        </button>
      </div>
    </StyledNotFoundPage>
  )
}

export default NotFoundPage
