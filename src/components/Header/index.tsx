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

        <a className="shoppingCart" href="/checkout">
          <img src="assets/shoppingCart.svg" alt="Shopping Cart Icon" />
        </a>
      </RightContent>
    </HeaderContainer>
  );
}
