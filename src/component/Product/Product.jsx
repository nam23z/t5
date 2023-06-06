import { styled } from "styled-components";
import { NumericFormat } from 'react-number-format';
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
            .pri{
                font-size: ${props => props.tag === "SALE" ? "14px" : "16px"};
                color: #000000;
                opacity: ${props => props.tag === "SALE" ? 0.5 : 1 };
                text-decoration: ${props => props.tag === "SALE" ? "line-through" : "none"};
            }
            .sale{
                display: ${props => props.tag === "SALE" ? "inline-block" : "none"};
                color: #FF6F61;
                font-size: 16px;
                opacity: 1;
                padding-left: 12px;
            }
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
const Product = ({image, name, cate, price, tag, sale, tagColor, children, ...rest}) => {
    return(
        <StyledProduct image={image} name={name} cate={cate} price={price} tag={tag} sale={sale} tagColor={tagColor} children={children} {...rest}>
            <div className="imge">
                <img src={image} alt="img" />
            </div>
            <div className="name"><h6>{name}</h6></div>
            <div className="bottomP">
                <p className="cate">{cate}</p>
                <p className="price">
                    <NumericFormat className="pri" value={price} decimalScale={2} fixedDecimalScale prefix={'$'} displayType="text"/>
                    <NumericFormat className="sale" value={sale} decimalScale={2} fixedDecimalScale prefix={'$'} displayType="text"/>
                    </p>
            </div>
            <div className="tags"><p>{tag}</p></div>
        </StyledProduct>
    )
}
export default Product;