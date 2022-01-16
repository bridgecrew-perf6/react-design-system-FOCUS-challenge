import {
  Badge,
  Button,
  Caption1,
  ClapIcon,
  Colors,
  CoverRatioType,
  Divider,
  HeartIcon,
  HeartOutlineIcon,
  LikeIcon,
} from "@class101/ui";
import { useCallback, useMemo } from "react";
import { CardContainer, SaleCouponBadge } from "./styles";

interface Props {
  title?: string;
  creator?: string;
  img?: string;
  like?: number;
  thumsUp?: number;
  coupon?: string;
  imageRatio?: CoverRatioType;
  price?: { originalPrice: number; salePrice: number; installment: number };
  cheer?: { goal: number; score: number; finishDate: string };
  period?: {
    startDate: string;
    finishDate: string;
  };
  heart?: boolean;
}

const ExtraBottoms = ({ like, period, cheer, thumsUp }: Props) => {
  const week = useMemo(() => {
    return ["일", "월", "화", "수", "목", "금", "토"];
  }, []);

  const startDate = useMemo(() => {
    return (
      period && {
        year: Number(`20${period?.startDate.substring(0, 2)}`),
        mounth: Number(period?.startDate.substring(3, 5)),
        date: Number(period?.startDate.substring(6, 8)),
      }
    );
  }, [period]);

  const calculateDday = useCallback(() => {
    if (startDate) {
      const today = new Date();
      const travelDay = new Date(startDate.year, startDate.mounth, startDate.date);
      const gap = today.getTime() - travelDay.getTime();
      return Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;
    }
  }, [startDate]);

  const dDay = useMemo(() => {
    return startDate && calculateDday();
  }, [calculateDday, startDate]);

  const startDay = useMemo(() => {
    return week[new Date(String(`20${period?.startDate}`)).getDay()];
  }, [week, period]);

  const finishDay = useMemo(() => {
    return week[new Date(String(`20${period?.finishDate}`)).getDay()];
  }, [week, period]);
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
          {thumsUp !== 0 && (
            <Badge
              icon={<LikeIcon fillColor={Colors.gray400} />}
              backgroundColor="transparent"
              color={Colors.gray400}
              size="sm"
            >
              {`${thumsUp}%`}
            </Badge>
          )}
        </div>
      )}
      {period && period.finishDate !== "0" && (
        <div className="period">
          <Caption1 color="rgb(253, 48, 73);">{dDay && dDay >= 0 && `D-${dDay}`}</Caption1>
          <Caption1>{`${period?.startDate}(${startDay}) ~ ${period?.finishDate} (${finishDay})`}</Caption1>
        </div>
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
            <Divider color="#f1f1f1" />
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <Caption1 fontWeight={600} color={Colors.red500}>
              {(100 - (price.salePrice / price.originalPrice) * 100).toFixed(0)}%
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
            <Divider color="#f1f1f1" />
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <Caption1 color={Colors.gray600}>응원 마감까지</Caption1>
            <Caption1 color={Colors.black}>
              {cheer &&
                Math.floor(
                  (new Date(cheer.finishDate).getTime() - new Date().getTime()) /
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
  heart,
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
      extraBottom={<ExtraBottoms like={like} period={period} cheer={cheer} thumsUp={thumsUp} />}
      to={"https://github.com/soonki-98/react-design-system-FOCUS-challenge"}
      external
    >
      <Captions period={period} cheer={cheer} price={price} />
      {coupon && <SaleCouponBadge backgroundColor={Colors.red600}>{coupon}</SaleCouponBadge>}
      {heart && (
        <button
          className="heartButton"
          onClick={() =>
            (window.location.href =
              "https://github.com/soonki-98/react-design-system-FOCUS-challenge")
          }
        >
          <HeartOutlineIcon fillColor="white" />
        </button>
      )}
    </CardContainer>
  );
};

export default CardComponent;
