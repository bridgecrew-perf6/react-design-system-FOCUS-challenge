import {
  Badge,
  Caption1,
  Colors,
  CoverRatioType,
  Divider,
  HeartIcon,
  LikeIcon,
} from "@class101/ui";
import { CardContainer, SaleCouponBadge } from "./styles";

interface Props {
  title?: string;
  creator?: string;
  img?: string;
  like?: number;
  thumsUp?: number;
  price?: { originalPrice: number; salePrice: number; installment: number };
  coupon?: string;
  imageRatio?: CoverRatioType;
}

const CardComponent = ({
  title,
  creator,
  img,
  like,
  thumsUp,
  price,
  coupon,
  imageRatio,
}: Props) => {
  return (
    <CardContainer
      title={title}
      coverImage={img}
      coverImageRatio={imageRatio && imageRatio}
      extraTop={
        creator && (
          <Caption1 fontWeight={600} color={Colors.gray900}>
            {creator}
          </Caption1>
        )
      }
      extraBottom={
        like && (
          <div style={{ marginLeft: "-4px", lineHeight: "0" }}>
            <Badge
              icon={<HeartIcon fillColor={Colors.gray400} />}
              backgroundColor="transparent"
              color={Colors.gray400}
              size="sm"
            >
              {like}
            </Badge>
            <Badge
              icon={<LikeIcon fillColor={Colors.gray400} />}
              backgroundColor="transparent"
              color={Colors.gray400}
              size="sm"
            >
              {thumsUp}
            </Badge>
          </div>
        )
      }
      to={like ? "/" : ""}
      external
    >
      {price && (
        <>
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <Divider color="#F2F4F5" />
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <Caption1 fontWeight={600} color={Colors.red500}>
              {price && (100 - (price.salePrice / price.originalPrice) * 100).toFixed(0)}%
            </Caption1>
            <Caption1 fontWeight={600} color={Colors.black}>
              {price && price.salePrice.toLocaleString()}원
            </Caption1>
            <Caption1 fontWeight={400} color={Colors.gray600}>
              ({price && price.installment} 개월)
            </Caption1>
          </div>
        </>
      )}
      <SaleCouponBadge backgroundColor={Colors.red600}>{coupon}</SaleCouponBadge>
    </CardContainer>
  );
};

export default CardComponent;
