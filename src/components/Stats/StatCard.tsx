import Wrapper from "../../StylesWrappers/Stat/statCard";
import { StatCardProps } from "../../model";

const StatCard: React.FC<StatCardProps> = ({
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
