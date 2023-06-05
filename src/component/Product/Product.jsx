import { styled } from "styled-components";

const StyledProduct = styled.div`
    position: relative;
    font-family: 'Open Sans';
    width: 312px;
    height: 478px;
    text-transform: capitalize;
    h6{
        font-size: 16px;
        margin-top: 18px;
        margin-bottom: 16px;
    }
    .imge{
        width: 312px;
        height: 400px;
        img{
            width: 100%;
        }
    }
    .bottomP{
        display: flex;
        justify-content: space-between;
        .cate{
            font-size: 16px;
            color: #000000;
            opacity: 0.5;
            margin-top: 0;
        }
        .price{
            margin-top: 0;
            font-weight: 600;
            font-size: 16px;
            color: #000000;
            opacity: ${props => props.tag === "SALE" ? 0.5 : 1};
        }
    }
    .tags{
        position: absolute;
        width: 52px;
        height: 24px;
        font-size: 12px;
        text-align: center;
        padding: 4px 12px;
        background-color: ${props => props.tagColor};
        color: #FFFFFF;
        top: 5%;
        p{
            margin-top: 0;
        }
    }
    margin-bottom: 24px;
`
const Product = ({image, name, cate, price, tag, tagColor}) => {
    return(
        <StyledProduct tagColor={tagColor}>
            <div className="imge">
                <img src={image} alt="img" />
            </div>
            <div className="name"><h6>{name}</h6></div>
            <div className="bottomP">
                <p className="cate">{cate}</p>
                <p className="price">
                    ${price}
                    </p>
            </div>
            <div className="tags"><p>{tag}</p></div>
        </StyledProduct>
    )
}
export default Product;