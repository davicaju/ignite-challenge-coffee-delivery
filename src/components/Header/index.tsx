import { Link } from "react-router-dom";
import { HeaderContainer, RightContent } from "../../styles/header";

export function Header() {
  return (
    <HeaderContainer>
      <div className="left-content">
        <a href="/">
          <img src="/assets/logo.svg" alt="Coffee Delivery logo" />
        </a>
      </div>

      <RightContent>
        <p className="city">
          <img src="assets/pinIcon.svg" alt="Pin Icon" /> Fortaleza, CE
        </p>

        <Link to="checkout">
          <div className="shoppingCart">
            <img src="assets/shoppingCart.svg" alt="Shopping Cart Icon" />
          </div>
        </Link>
      </RightContent>
    </HeaderContainer>
  );
}
