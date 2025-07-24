import { Container } from "~/components/Container";
import ContantWithTabs from "~/components/ContantWithTabs";

import PromoBlock from "~/components/PromoBlock";
import { PROMO_DESCRIPTION } from "~/lib/conts";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <PromoBlock description={PROMO_DESCRIPTION} />
        <Container>
          <ContantWithTabs />
        </Container>
      </div>
    </div>
  );
}
