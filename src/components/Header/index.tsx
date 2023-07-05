import { HeaderContainer, RightContent } from "../../styles/header";

export function Header() {
  return (
    <HeaderContainer>
      <div className="left-content">
        <img src="/assets/logo.svg" alt="Coffee Delivery logo" />
      </div>

      <RightContent>
        <p className="city">
          <img src="assets/pinIcon.svg" alt="Pin Icon" /> Fortaleza, CE
        </p>
        <p className="shoppingCart">
          <img src="assets/shoppingCart.svg" alt="Shopping Cart Icon" />
        </p>
      </RightContent>
    </HeaderContainer>
  );
}
