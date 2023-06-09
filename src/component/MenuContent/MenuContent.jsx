import * as React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { styled } from "styled-components";
import Container from "../Container/Container";
const StyledMenuContent = styled.div`
  font-family: "Open Sans";
  h2 {
    text-transform: capitalize;
    font-family: "Roboto";
    font-size: 50px;
    font-weight: 500;
    line-height: 59px;
    text-align: center;
    margin-top: 140px;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav1 {
    display: flex;
    gap: 40px;
  }
  .active {
    font-weight: bold;
  }
  .itemMenu {
    cursor: pointer;
  }
  .itemMenu:hover {
    color: #ff6f61;
  }
  .nav2 {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 16px;
    .btn {
      width: 92px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .btn:hover {
      background-color: #ff6f61;
    }
  }
  /* .Mui-selected{
    color: #000000;
    font-weight: bold;
  } */
`;

const data = [
  {
    cate: "All Products"
  },
  {
    cate: "T-Shirt",
  },
  {
    cate: "Hoodie",
  },
  {
    cate: "Jacket"
  }
]
const MenuContent = ({ title, children, parent }) => {
  const [isActive, setActive] = useState(0)
  const handleClick = (key) => {
    setActive(key);
    console.log(key);
  }
  return (
    <Container>
      <StyledMenuContent title={title}>
        <h2>{title}</h2>
        <div className="menu">
          <div className="nav1">
            {data.map((e, key) => {
              return(
              <span
              onClick={() => handleClick(key)}
              className={`itemMenu ${key === isActive ? "active" : ""}`}>
                {e.cate}
              </span>
              )
            })}
          </div>
          <div className="nav2">
            <Button className="btn" width={"92px"} height={"32px"}>
              {children}
            </Button>
          </div>
        </div>
      </StyledMenuContent>
    </Container>
  );
};
export default MenuContent;
