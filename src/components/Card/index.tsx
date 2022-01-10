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
  coupon?: string | undefined;
  imageRatio?: CoverRatioType;
  price?: { originalPrice: number; salePrice: number; installment: number };
  cheer?: { goal: number; score: number; finishDate: string };
  period?: {
    startDate: string;
    finishDate: string;
  };
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
  cheer,
  period,
}: Props) => {
  console.log(period, price);
  return (
    <CardContainer
      title={title}
      coverImage={img}
      coverImageRatio={imageRatio}
      period={period !== undefined}
      extraTop={
        creator && (
          <Caption1 fontWeight={600} color={Colors.gray900}>
            {creator}
          </Caption1>
        )
      }
      extraBottom={
        like ? (
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
        ) : (
          <div>
            {period?.startDate !== "0" && (
              <>
                {/* <Caption1></Caption1> */}
                <Caption1>{`${period?.startDate} ~ ${period?.finishDate}`}</Caption1>
              </>
            )}
          </div>
        )
      }
      to={"https://github.com/soonki-98/react-design-system-FOCUS-challenge"}
      external
    >
      {price && (
        <>
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <Divider color="#F2F4F5" />
          </div>
          {price ? (
            <div style={{ display: "flex", gap: "4px" }}>
              <Caption1 fontWeight={600} color={Colors.red500}>
                {(100 - (price.salePrice / price.originalPrice) * 100).toFixed(
                  0
                )}
                %
              </Caption1>
              <Caption1 fontWeight={600} color={Colors.black}>
                {price.salePrice.toLocaleString()}원
              </Caption1>
              <Caption1 fontWeight={400} color={Colors.gray600}>
                {price.installment} 개월
              </Caption1>
            </div>
          ) : (
            <Caption1></Caption1>
          )}
        </>
      )}
      {coupon && (
        <SaleCouponBadge backgroundColor={Colors.red600}>
          {coupon}
        </SaleCouponBadge>
      )}
    </CardContainer>
  );
};

export default CardComponent;
