import {
  Badge,
  Caption1,
  Card,
  Colors,
  CoverRatio,
  Divider,
  Grid,
  HeartIcon,
  LikeIcon,
  Row,
} from "@class101/ui";
import { SaleCouponBadge } from "./styles";

interface Props {
  title: string;
  creator: string;
  img: string;
  like: number;
  thumsUp?: number;
  price: { originalPrice: number; salePrice: number; installment: number };
  coupon?: number;
}

const CardComponent = ({ title, creator, img, like, thumsUp, price, coupon }: Props) => {
  return (
    <Grid>
      <Row>
        <Card
          title={title}
          coverImage={img}
          extraTop={
            <>
              <Caption1 fontWeight={600} color={Colors.gray900}>
                {creator}
              </Caption1>
            </>
          }
          extraBottom={
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
          }
          to={"/"}
          external
        >
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <Divider color="#F2F4F5" />
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <Caption1 fontWeight={600} color={Colors.red500}>
              {(100 - (price.salePrice / price.originalPrice) * 100).toFixed(0)}%
            </Caption1>
            <Caption1 fontWeight={600} color={Colors.black}>
              {price.salePrice.toLocaleString()}원
            </Caption1>
            <Caption1 fontWeight={400} color={Colors.gray600}>
              ({price.installment} 개월)
            </Caption1>
          </div>
          <SaleCouponBadge backgroundColor={Colors.red600}>{coupon}만원 쿠폰</SaleCouponBadge>
        </Card>
      </Row>
    </Grid>
  );
};

export default CardComponent;
