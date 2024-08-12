import Image from 'next/image';
import './_home.scss';
import Link from 'next/link';

function MainPage() {
  return (
    <main className="MainPage">
      <div className="main_service">
        <div className="main_slide">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            src="/image/mainslide1.svg"
            alt="img"
            priority
          />
        </div>
        <div className="main_items n1">
          <Link href="/freetest">
            <div className="item free_item">
              <div className="free_item_des des">
                <h1>우리 톡방 분석 서비스</h1>
                <p>AI가 우리 톡방 내용을 읽고</p>
                <p>분석결과를 보여줘요!</p>
                <p>무료</p>
              </div>
              <div className="free_items_img"></div>
            </div>
          </Link>
        </div>
        <div className="main_items n2">
          <Link href="/lovetest">
            <div className="item pay_item">
              <div className="pay_item_des des">
                <h1>우리 연애 이대로 괜찮을까?</h1>
                <p>AI가 우리 톡방 내용을 읽고</p>
                <p>분석결과를 보여줘요!</p>
                <p>유료</p>
              </div>
              <div className="free_items_img"></div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default MainPage;
