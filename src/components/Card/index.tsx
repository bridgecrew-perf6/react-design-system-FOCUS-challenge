import {
  Badge,
  Caption1,
  Card,
  Colors,
  Divider,
  Grid,
  HeartIcon,
  LikeIcon,
  Row,
  TimerIcon,
} from "@class101/ui";

interface Props {
  provider: string;
  title: string;
  like: { count: number; percent: number };
  price: { percent: number; pay: number; installment: number };
  endTime: number;
}

const CardComponent = ({ provider, title, like, price, endTime }: Props) => {
  return (
    <Grid>
      <Row>
        <Card
          title={title}
          coverImage={
            "https://cdn.class101.net/images/1fe7b071-44ab-4e20-a2d4-29e11b56384c/510x380.jpg"
          }
          extraTop={
            <>
              <Badge backgroundColor="black" color={Colors.gray100} size="sm">
                <span>
                  <TimerIcon fillColor={Colors.gray100} />
                  타임딜 종료까지
                </span>
                <span>{endTime}일</span>
              </Badge>
              <Caption1 fontWeight={600} color={Colors.gray900}>
                {provider}
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
                {like.count}
              </Badge>
              <Badge
                icon={<LikeIcon fillColor={Colors.gray400} />}
                backgroundColor="transparent"
                color={Colors.gray400}
                size="sm"
              >
                {like.percent}
              </Badge>
            </div>
          }
        >
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <Divider color="#F2F4F5" />
          </div>
          <div style={{ display: "flex", gap: "4px" }}>
            <Caption1 fontWeight={600} color={Colors.red500}>
              {price.percent}%
            </Caption1>
            <Caption1 fontWeight={600} color={Colors.black}>
              월 {price.pay.toLocaleString()}
            </Caption1>
            <Caption1 fontWeight={400} color={Colors.gray600}>
              ({price.installment} 개월)
            </Caption1>
          </div>
        </Card>
      </Row>
    </Grid>
  );
};

export default CardComponent;
