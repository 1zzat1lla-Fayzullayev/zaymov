import Wrapper from "../layout/wrapper";
import FinanceCardContent from "./financeCardContent";

function FinanceCard() {
  return (
    <>
      <Wrapper>
        <div className="mt-[50px] flex flex-wrap items-start justify-center gap-[15px] mx-[20px] xl:mx-0">
          <FinanceCardContent />
        </div>
      </Wrapper>
    </>
  );
}

export default FinanceCard;
