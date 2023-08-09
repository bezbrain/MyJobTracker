import Wrapper from "../../StylesWrappers/Stat/statCard";

interface Props {
  count: number;
  icon: any;
  jobText: string;
  border: string;
  countColor: string;
  iconColor: string;
}

const StatCard: React.FC<Props> = ({
  count,
  icon,
  jobText,
  border,
  countColor,
  iconColor,
}) => {
  return (
    <Wrapper>
      <section className={`${border}`}>
        <div className="head">
          <p className={`${countColor}`}>{count}</p>
          <p className={`${iconColor}`}>{icon}</p>
        </div>
        <p>{jobText}</p>
      </section>
    </Wrapper>
  );
};

export default StatCard;
