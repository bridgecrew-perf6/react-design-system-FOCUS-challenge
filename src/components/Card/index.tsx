import {
  Badge,
  Button,
  Caption1,
  ClapIcon,
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

const ExtraBottoms = ({ like, period, cheer, thumsUp }: Props) => {
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <>
      {cheer && (
        <div style={{ marginLeft: "-4px", lineHeight: "0" }}>
          <Badge
            icon={<ClapIcon fillColor={Colors.red600} />}
            backgroundColor="transparent"
            color={Colors.red600}
            size="sm"
          >
            {Math.floor((cheer.score / cheer.goal) * 100)}
          </Badge>
          <Badge
            icon={<HeartIcon fillColor={Colors.gray400} />}
            backgroundColor="transparent"
            color={Colors.gray400}
            size="sm"
          >
            {cheer.goal}
          </Badge>
        </div>
      )}
      {like && (
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
      )}
      {period && (
        <Caption1>{`${period?.startDate}(${
          week[new Date(String(`20${period?.startDate}`)).getDay()]
        }) ~ ${period?.finishDate} (${
          week[new Date(String(`20${period?.finishDate}`)).getDay()]
        })`}</Caption1>
      )}
    </>
  );
};

const Captions = ({ price, cheer }: Props) => {
  return (
    <>
      {price && (
        <>
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <Divider color="#F2F4F5" />
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <Caption1 fontWeight={600} color={Colors.red500}>
              {(100 - (price.salePrice / price.originalPrice) * 100).toFixed(0)}
              %
            </Caption1>
            <Caption1 fontWeight={600} color={Colors.black}>
              {price.salePrice.toLocaleString()}원
            </Caption1>
            <Caption1 fontWeight={400} color={Colors.gray600}>
              {price.installment} 개월
            </Caption1>
          </div>
        </>
      )}
      {cheer && (
        <>
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <Divider color="#F2F4F5" />
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <Caption1 color={Colors.gray600}>응원 마감까지</Caption1>
            <Caption1 color={Colors.black}>
              {cheer &&
                Math.floor(
                  (new Date(cheer.finishDate).getTime() -
                    new Date().getTime()) /
                    (1000 * 60 * 60 * 24)
                )}
              일 남음
            </Caption1>
          </div>
          <Button
            to="https://github.com/soonki-98/react-design-system-FOCUS-challenge"
            fill
            color="orangeLight"
          >
            응원하기
          </Button>
        </>
      )}
    </>
  );
};

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
        <ExtraBottoms
          like={like}
          period={period}
          cheer={cheer}
          thumsUp={thumsUp}
        />
      }
      to={"https://github.com/soonki-98/react-design-system-FOCUS-challenge"}
      external
    >
      <Captions period={period} cheer={cheer} price={price} />
      {coupon && (
        <SaleCouponBadge backgroundColor={Colors.red600}>
          {coupon}
        </SaleCouponBadge>
      )}
    </CardContainer>
  );
};

export default CardComponent;
