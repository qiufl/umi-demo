import yayJpg from '../assets/yay.jpg';
import PageWrapper from '@/components/PageWrapper';
import { curr } from "@/services/users";

export default function HomePage() {
  return (
    <PageWrapper>
      <div>
        <h2>Yay! Welcome to umi!</h2>
        <p>
          <img src={yayJpg} width="388" />
        </p>
        <p>
          To get started, edit <code>pages/index.tsx</code> and save to reload.
        </p>
      </div>
    </PageWrapper>
  );
}
